import dotenv from 'dotenv';
import express from 'express';
import { createTransport } from 'nodemailer';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

// Load .env from project root
dotenv.config();

const app = express();
const port = Number(process.env.PORT || 5000);

// CORS (allow local dev and production domain via ALLOW_ORIGIN, or * by default)
const allowOrigin = process.env.ALLOW_ORIGIN || '*';
app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin || allowOrigin === '*' || origin.includes(allowOrigin)) return cb(null, true);
      return cb(null, false);
    },
  })
);

// Body parsing for JSON and form-encoded submissions
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

/* ---------- Cloudflare Turnstile ---------- */
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET;
async function verifyTurnstile(req) {
  try {
    if (!TURNSTILE_SECRET) return { ok: false, code: 'missing_secret' };
    const body = req.body || {};
    const token = body['cf-turnstile-response'] || body['cf_turnstile_response'] || body.turnstileToken || body.token;
    if (!token) return { ok: false, code: 'missing_token' };
    const postData = new URLSearchParams({
      secret: TURNSTILE_SECRET,
      response: token,
      remoteip: req.ip || '',
    }).toString();
    const data = await new Promise((resolve, reject) => {
      const url = new URL('https://challenges.cloudflare.com/turnstile/v0/siteverify');
      const options = {
        method: 'POST',
        hostname: url.hostname,
        path: url.pathname + url.search,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(postData),
        },
      };
      const r = https.request(options, (res) => {
        let raw = '';
        res.setEncoding('utf8');
        res.on('data', (chunk) => (raw += chunk));
        res.on('end', () => {
          try {
            resolve(JSON.parse(raw));
          } catch {
            resolve({});
          }
        });
      });
      r.on('error', reject);
      r.write(postData);
      r.end();
    });
    if (data && data.success) return { ok: true };
    return { ok: false, code: 'verification_failed', details: data };
  } catch (err) {
    return { ok: false, code: 'verification_error', error: String((err && err.message) || err) };
  }
}

/* ---------- SMTP transporter (env-driven) ---------- */
const smtpHost = process.env.SMTP_HOST || 'smtp.dreamhost.com';
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER;
const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASS;
const smtpSecure = smtpPort === 465;
const transporter = createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpSecure,
  pool: true,
  maxConnections: 1,
  auth: smtpUser && smtpPass ? { user: smtpUser, pass: smtpPass } : undefined,
  // Avoid failures due to provider TLS quirks in shared hosting
  tls: { rejectUnauthorized: false },
});

const SITE_NAME = process.env.SITE_NAME || 'Silo Clean Pro';
const FROM_EMAIL = process.env.FROM_EMAIL || smtpUser || 'no-reply@silocleanpro.com';
const TO_EMAILS = (process.env.MAIL_TO || 'adam@greeneservices.us,adamyork16@gmail.com,stacey@greeneservices.us')
  .split(',')
  .map((x) => x.trim())
  .filter(Boolean);

function sanitize(val) {
  if (val == null) return '';
  return String(val).replace(/[\r\n]+/g, ' ').trim();
}
function isEmail(str) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(str || '').trim());
}
async function sendEmail({ subject, replyTo, text }) {
  const mailOptions = {
    from: FROM_EMAIL,
    to: TO_EMAILS,
    subject,
    text,
    replyTo: isEmail(replyTo) ? replyTo : undefined,
  };
  // Re-verify if provider closed idle connection
  await transporter.verify().catch(() => {});
  return transporter.sendMail(mailOptions);
}

/* ---------- POST /api/contact ---------- */
app.post('/api/contact', async (req, res) => {
  const turnstile = await verifyTurnstile(req);
  if (!turnstile.ok) {
    return res.status(400).json({ ok: false, error: 'Turnstile verification failed.', code: turnstile.code });
  }
  const body = req.body || {};
  const name = sanitize(body.name || body.fullName);
  const email = sanitize(body.email);
  const phone = sanitize(body.phone || body.phoneNumber);
  const message = sanitize(body.message || body.details || body.comment);
  if (!name || !isEmail(email) || !message) {
    return res.status(400).json({ ok: false, error: 'Missing required fields (name, email, message).' });
  }
  const text = [
    `${SITE_NAME} - Contact Form Submission`,
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    '',
    'Message:',
    message,
  ]
    .filter(Boolean)
    .join('\n');
  try {
    const info = await sendEmail({ subject: `Contact: ${name}`, replyTo: email, text });
    return res.status(200).json({ ok: true, id: info.messageId });
  } catch (err) {
    console.error('Contact email failed:', err);
    return res.status(500).json({ ok: false, error: 'Failed to send message.' });
  }
});

/* ---------- POST /api/quote ---------- */
app.post('/api/quote', async (req, res) => {
  const turnstile = await verifyTurnstile(req);
  if (!turnstile.ok) {
    return res.status(400).json({ ok: false, error: 'Turnstile verification failed.', code: turnstile.code });
  }
  const body = req.body || {};
  const name = sanitize(body.name || body.fullName);
  const company = sanitize(body.company || body.companyName);
  const email = sanitize(body.email);
  const phone = sanitize(body.phone || body.phoneNumber);
  const serviceType = sanitize(body.serviceType || body.service || body.inquiryType);
  const details = sanitize(body.details || body.message || body.projectDetails);
  if (!name || !isEmail(email) || !details) {
    return res.status(400).json({ ok: false, error: 'Missing required fields (name, email, details).' });
  }
  const text = [
    `${SITE_NAME} - Quote Request`,
    `Name: ${name}`,
    company ? `Company: ${company}` : null,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    serviceType ? `Service Type: ${serviceType}` : null,
    '',
    'Project Details:',
    details,
  ]
    .filter(Boolean)
    .join('\n');
  try {
    const info = await sendEmail({ subject: `Quote: ${name}${company ? ' @ ' + company : ''}`, replyTo: email, text });
    return res.status(200).json({ ok: true, id: info.messageId });
  } catch (err) {
    console.error('Quote email failed:', err);
    return res.status(500).json({ ok: false, error: 'Failed to send message.' });
  }
});

/* ---------- health endpoints ---------- */
app.get('/health', (_, res) => res.sendStatus(200));
app.get('/health/email', async (_, res) => {
  try {
    await transporter.verify();
    res.sendStatus(200);
  } catch (err) {
    console.error('SMTP verify failed:', err);
    res.sendStatus(500);
  }
});

/* ---------- static site serving (production) ---------- */
try {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const distDir = path.resolve(__dirname, '../dist');

  // Serve concrete blog HTML first so it isn't swallowed by SPA fallback
  app.use('/blog', express.static(path.join(distDir, 'blog'), { index: false, extensions: ['html'] }));
  app.get('/blog/:slug', (req, res) => {
    res.sendFile(path.join(distDir, 'blog', `${req.params.slug}.html`));
  });

  // Serve other static assets from dist
  app.use(express.static(distDir, { index: false }));

  // SPA fallback for remaining routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(distDir, 'index.html'));
  });
} catch (e) {
  console.warn('Static site serving not initialized (likely dev env):', e?.message || e);
}

/* ---------- process guards ---------- */
process.on('unhandledRejection', (err) => console.error('Unhandled rejection:', err));
process.on('uncaughtException', (err) => console.error('Uncaught exception:', err));

app.listen(port, () => console.log(`Server running on port ${port}`));

