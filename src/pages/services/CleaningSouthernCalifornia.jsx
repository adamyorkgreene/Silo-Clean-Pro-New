import { ShieldCheck, SprayCan, Wind, Bug, Check, ChevronDown, ClipboardCheck, HardHat, Clock, Phone } from "lucide-react";
import Section from "../../components/Section.jsx";
import Container from "../../components/Container.jsx";
import Stat from "../../components/Stat.jsx";
import { useSEO } from "../../lib/useSEO.js";

export default function CleaningSouthernCalifornia() {
  useSEO({
    title: "Southern California Silo Cleaning | Silo Clean Pro",
    description: "Silo cleaning across Los Angeles, Orange County, and the Inland Empire. West Coast service since 2004.",
    canonical: "https://www.silocleanpro.com/southern-california-silo-services",
    og: { type: "website", image: "https://www.silocleanpro.com/og-greeneservices.jpg" },
    twitter: { card: "summary_large_image", image: "https://www.silocleanpro.com/og-greeneservices.jpg" },
  });
  return (
    <main className="bg-slate-50">
      {/* Hero header */}
      <section className="relative isolate overflow-hidden bg-slate-900">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80" />
        <Container>
          <div className="py-12 lg:py-20 grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-green-400">Southern California • Los Angeles & Orange County</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Southern California Silo Cleaning</h1>
              <p className="mt-3 max-w-2xl text-slate-200">
                We are a dependable, certified, and highly-trained silo cleaning company serving clients nationwide. Servicing the West Coast since 2004, we deploy high-volume vacuums, bin whips, targeted blasting, and sanitation to restore safety and flow.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="tel:+16574394401"
                  className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
                >
                  <Phone className="h-4 w-4" /> Call (657) 439-4401
                </a>
                <a
                  href="/quote"
                  className="inline-flex items-center rounded-xl border px-5 py-3 text-sm font-semibold text-white/90 bg-white/10 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2"
                >
                  Request a SoCal quote
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  { Icon: ShieldCheck, text: "OSHA-Approved" },
                  { Icon: Wind, text: "High-Volume Vacs" },
                  { Icon: SprayCan, text: "Media Blasting" },
                  { Icon: Bug, text: "Sanitation & Infestation" },
                ].map(({ Icon, text }) => (
                  <span key={text} className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm text-white shadow-sm">
                    <Icon className="h-4 w-4 text-green-400" />
                    {text}
                  </span>
                ))}
              </div>
            </div>
            <figure className="relative mx-auto w-full max-w-lg overflow-hidden rounded-2xl border border-white/10">
              <img
                src="/silo_img_2.jpg"
                alt="Southern California silo cleaning technicians at work"
                className="w-full h-auto rounded-xl object-cover"
                loading="lazy"
              />
            </figure>
          </div>
        </Container>
      </section>

      {/* Services list (grouped, readable) */}
      <Section
        kicker="What we do in Southern California"
        title="Southern California Silo Cleaning Services"
        subtitle="Comprehensive cleaning for grain, flour, cement ingredients, plastics and more."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Methods & Tools</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {[
                "Hang-up removal",
                "High-volume vacuums & bin whips",
                "Vacuum truck services",
                "Outside cleaning, media blasting & painting",
                "Hydro blasting & dry ice blasting",
                "Soda blasting",
                "Dry cleaning of silos",
                "Baghouse cleaning / filter replacement",
              ].map((text) => (
                <li key={text} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Common Issues</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {[
                "Mold & bad grain removal",
                "Silo cone / rotten corn removal",
                "Silo cleaning for infestation",
                "Silo sanitization",
                "Bulk liquid tank cleaning + corrosion removal",
                "Swab testing (if needed)",
              ].map((text) => (
                <li key={text} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Materials & Systems</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {[
                "Grain silo cleaning",
                "Flour silo cleaning",
                "Cement ingredient silo cleaning",
                "Soda ash / fly ash silo cleaning",
                "Injection molding resin changeover",
                "KB Systems silo cleaning",
                "Galvanized corrugated silo cleaning",
                "Cleaning of any materials in a silo",
              ].map((text) => (
                <li key={text} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* SoCal CTA */}
      <Section className="pt-0">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border bg-white p-6 shadow-sm sm:flex-row">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Request a Southern California quote</h3>
            <p className="text-slate-600">Call us at (657) 439-4401 — Los Angeles, Orange County, and beyond.</p>
          </div>
          <div className="flex gap-3">
            <a
              href="tel:+16574394401"
              className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
            >
              <Phone className="h-4 w-4" /> Call (657) 439-4401
            </a>
            <a
              href="/quote"
              className="inline-flex items-center rounded-xl border px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-white"
            >
              Request service
            </a>
          </div>
        </div>
      </Section>

      {/* Process snapshot */}
      <Section kicker="How we work" title="Safe, efficient confined-space cleaning" subtitle="Built for food, feed, plastics, and cement facilities in Southern California." className="pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { Icon: ClipboardCheck, t: "Pre-job inspection" },
                { Icon: HardHat, t: "OSHA + confined-space" },
                { Icon: Wind, t: "High-volume vacs / bin whips" },
                { Icon: SprayCan, t: "Hydro / dry ice blasting" },
                { Icon: Bug, t: "Sanitizing applications (as needed)" },
                { Icon: Clock, t: "Weekend & off-hours available" },
              ].map(({ Icon, t }) => (
                <div key={t} className="flex items-center gap-3 rounded-xl border bg-slate-50 p-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-600/10 text-green-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">{t}</span>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <h4 className="text-sm font-semibold text-slate-900">Typical timeline</h4>
              <ul className="mt-2 space-y-2 text-sm text-slate-700">
                {[
                  "Arrival + safety briefing",
                  "Confined-space prep & air monitoring",
                  "Material removal with vacs/bin whips",
                  "Targeted blasting or sanitation (if needed)",
                  "Final sweep + verification",
                ].map((step) => (
                  <li key={step} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-green-600" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/silo_img_2.jpg"
              alt="Silo cleaning operations in Southern California"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      {/* Proof / badges */}
      <Section kicker="Why us" title="SoCal-ready: safety, speed, reliability">
        <div className="grid gap-6 sm:grid-cols-3">
          <Stat value="24/7" label="Emergency response" />
          <Stat value=">10yrs" label="Nationwide experience" />
          <Stat value="OSHA" label="Approved & confined-space certified" />
        </div>
      </Section>

      {/* FAQs */}
      <Section
        kicker="FAQ"
        title="Southern California silo cleaning questions"
        subtitle="Quick answers about safety, waste handling, and downtime."
        className="pt-0"
      >
        <div className="mr-auto space-y-4">
          {[
            {
              q: "Do you service Los Angeles and Orange County?",
              a: "Yes. We service SoCal facilities across Los Angeles, Orange County, the Inland Empire, and beyond, with rapid mobilization for emergencies.",
            },
            {
              q: "Is cleaning safe in confined spaces?",
              a: "Yes. Our crews are confined-space certified and follow permit entry, ventilation, gas monitoring, and rescue protocols.",
            },
            {
              q: "How do you handle waste and residue?",
              a: "Dislodged material is vacuumed and contained for disposal per your site requirements. No chemical residue is left behind.",
            },
            {
              q: "Which methods do you use?",
              a: "We match tools to the problem: high-volume vacs, bin whips, hydro and dry ice blasting, plus targeted sanitation when needed.",
            },
            {
              q: "Do you service food-grade facilities?",
              a: "Yes. We follow GMP practices and can include sanitation and documentation appropriate for food-grade operations.",
            },
          ].map(({ q, a }) => (
            <details key={q} className="group p-5 rounded-2xl border bg-white open:bg-slate-50 shadow-sm">
              <summary className="flex items-center justify-between gap-3 cursor-pointer select-none">
                <span className="text-base font-semibold text-slate-900">{q}</span>
                <ChevronDown className="h-5 w-5 text-slate-500 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-2 text-base text-slate-700">{a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="pt-0">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border bg-white p-6 shadow-sm sm:flex-row">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Serving Southern California</h3>
            <p className="text-slate-600">Call now or request a quote to schedule cleaning.</p>
          </div>
          <div className="flex gap-3">
            <a
              href="tel:+16574394401"
              className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
            >
              <Phone className="h-4 w-4" /> Call (657) 439-4401
            </a>
            <a
              href="/quote"
              className="inline-flex items-center rounded-xl border px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-white"
            >
              Request service
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
