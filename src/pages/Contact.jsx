import Page from "./Page.jsx";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({ state: "idle", msg: "" });
  const [token, setToken] = useState("");
  const captchaRef = useRef(null);
  const widgetIdRef = useRef(null);

  // Cloudflare Turnstile setup
  useEffect(() => {
    const SITE_KEY = import.meta.env?.VITE_TURNSTILE_SITE_KEY || "0x4AAAAAAB0Cjrd7lfjn7FaO";

    function renderWidget() {
      if (!window.turnstile || !captchaRef.current) return;
      try {
        if (widgetIdRef.current != null) {
          try { window.turnstile.remove(widgetIdRef.current); } catch {}
          widgetIdRef.current = null;
        }
        widgetIdRef.current = window.turnstile.render(captchaRef.current, {
          sitekey: SITE_KEY,
          callback: (t) => setToken(t || ""),
          'expired-callback': () => setToken(""),
          'error-callback': () => setToken(""),
          theme: 'light',
        });
      } catch {}
    }

    if (window.turnstile) {
      renderWidget();
    } else {
      const existing = document.querySelector('script[src*="challenges.cloudflare.com/turnstile"]');
      if (existing) {
        existing.addEventListener('load', renderWidget, { once: true });
      } else {
        const s = document.createElement('script');
        s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
        s.async = true;
        s.defer = true;
        s.addEventListener('load', renderWidget, { once: true });
        document.head.appendChild(s);
      }
    }

    return () => {
      try {
        if (widgetIdRef.current != null && window.turnstile) {
          window.turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        }
      } catch {}
    };
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus({ state: "error", msg: "Please provide name, email, and a message." });
      return;
    }
    if (!token) {
      setStatus({ state: "error", msg: "Please complete the verification." });
      return;
    }
    setStatus({ state: "loading", msg: "Sending..." });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, "cf-turnstile-response": token }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data?.ok === false) throw new Error(data?.error || "Failed to send");
      setStatus({ state: "success", msg: "Thanks! Your message has been sent." });
      setName(""); setEmail(""); setPhone(""); setMessage("");
      setToken("");
      try { if (window.turnstile && widgetIdRef.current != null) window.turnstile.reset(widgetIdRef.current); } catch {}
      navigate(`/thank-you?form=contact`);
    } catch (err) {
      setStatus({ state: "error", msg: err.message || "Something went wrong. Please try again." });
    }
  }

  return (
    <Page title="Contact Us">
      <div className="grid gap-6 lg:grid-cols-2">
        <form onSubmit={onSubmit} className="rounded-2xl border bg-white p-6 shadow-sm">
          {status.state !== "idle" && (
            <div className={`mb-4 rounded-lg border px-3 py-2 text-sm ${status.state === "success" ? "border-green-200 bg-green-50 text-green-800" : status.state === "error" ? "border-red-200 bg-red-50 text-red-800" : "border-slate-200 bg-slate-50 text-slate-700"}`}>
              {status.msg}
            </div>
          )}
          <div className="grid gap-4">
            <input className="rounded-lg border px-3 py-2" placeholder="Name" name="name" autoComplete="name" value={name} onChange={(e)=>setName(e.target.value)} required />
            <input className="rounded-lg border px-3 py-2" placeholder="Email" type="email" name="email" autoComplete="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
            <input className="rounded-lg border px-3 py-2" placeholder="Phone" name="phone" autoComplete="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} />
            <textarea className="min-h-32 rounded-lg border px-3 py-2" placeholder="How can we help?" name="message" value={message} onChange={(e)=>setMessage(e.target.value)} required />
            <div ref={captchaRef}></div>
            <button type="submit" disabled={status.state === "loading" || !token} className="rounded-xl px-4 py-2 text-white bg-green-600 hover:bg-green-700 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600">
              {status.state === "loading" ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h4 className="text-lg font-semibold">Call Us</h4>
          <p className="mt-1 text-slate-600">(888) 623-6050</p>
          <h4 className="mt-6 text-lg font-semibold">Coverage</h4>
          <p className="mt-1 text-slate-600">Nationwide service with emergency response across the USA.</p>
        </div>
      </div>
    </Page>
  );
}
