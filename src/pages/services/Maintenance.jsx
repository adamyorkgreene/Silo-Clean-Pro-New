import { ShieldCheck, Wrench, ClipboardCheck, Clock, ChevronDown, Check, HardHat } from "lucide-react";
import Section from "../../components/Section.jsx";
import Container from "../../components/Container.jsx";
import Stat from "../../components/Stat.jsx";
import { useSEO } from "../../lib/useSEO.js";

export default function Maintenance() {
  useSEO({
    title: "Silo Maintenance Services | Silo Clean Pro",
    description: "Preventative silo maintenance programs to minimize downtime and extend asset life. Rapid response teams nationwide.",
    canonical: "https://www.silocleanpro.com/services/maintenance",
    og: { type: "website", image: "https://www.silocleanpro.com/og-image.jpg" },
    twitter: { card: "summary_large_image", image: "https://www.silocleanpro.com/og-image.jpg" },
  });
  return (
    <main className="bg-slate-50">
      {/* Hero header */}
      <section className="relative isolate overflow-hidden bg-slate-900">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80" />
        <Container>
          <div className="py-12 lg:py-20 grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-green-400">Services</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Silo Maintenance</h1>
              <p className="mt-3 max-w-2xl text-slate-200">
                For industries that store bulk materials—feed ingredients, grain, powders, plastics—silos are mission-critical. Regular maintenance keeps them safe, efficient, and compliant, and a thorough, professional cleaning is central to that maintenance.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  { Icon: ShieldCheck, text: "OSHA-Approved" },
                  { Icon: Wrench, text: "Preventative Maintenance" },
                  { Icon: ClipboardCheck, text: "Inspection & Safety" },
                  { Icon: Clock, text: "24/7 Nationwide" },
                ].map(({ Icon, text }) => (
                  <span key={text} className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm text-white shadow-sm">
                    <Icon className="h-4 w-4 text-green-400" />
                    {text}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/quote"
                  className="inline-flex items-center rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
                >
                  Request service
                </a>
              </div>
            </div>
            <figure className="relative mx-auto w-full max-w-lg overflow-hidden rounded-2xl border border-white/10">
              <img
                src="/silo-maintenance.png"
                alt="Technicians performing routine silo maintenance and cleaning"
                className="w-full h-auto rounded-xl object-cover"
                loading="lazy"
              />
            </figure>
          </div>
        </Container>
      </section>

      {/* Services list (grouped, readable) */}
      <Section
        kicker="What we do"
        title="Our Maintenance & Cleaning Services"
        subtitle="After inspection, we deploy the right tools and schedule to keep assets safe and flowing."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Methods & Tools</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {[
                "High-volume vacuums & bin whips",
                "Vacuum truck services",
                "Outside cleaning, media blasting & painting",
                "Hydro blasting & dry ice blasting",
                "Soda blasting",
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
                "Hang-up removal",
                "Mold / bad grain removal",
                "Silo cone / rotten corn removal",
                "Silo cleaning for infestation",
                "Silo sanitization",
                "Bulk liquid tank cleaning + corrosion removal",
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
                "Injection molding resin change-over silo cleaning",
                "Grain / Flour / Cement ingredient silos",
                "Soda ash / fly ash silos",
                "Galvanized corrugated silos",
                "KB systems silo cleaning",
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

      {/* Highlights band */}
      <Section
        kicker="At a Glance"
        title="Maintenance Highlights"
        subtitle="Preventative programs, OSHA-approved entry, 24/7 nationwide response."
        className="pt-0"
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { Icon: ShieldCheck, t: "OSHA + confined-space" },
            { Icon: Wrench, t: "Preventative program scheduling" },
            { Icon: ClipboardCheck, t: "Inspection & safety checks" },
            { Icon: Clock, t: "24/7 nationwide response" },
            { Icon: HardHat, t: "Night/weekend windows" },
            { Icon: ShieldCheck, t: "Focus on uptime & safety" },
          ].map(({ Icon, t }) => (
            <div key={t} className="flex items-center gap-3 rounded-xl border bg-slate-50 p-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-600/10 text-green-700">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold text-slate-800">{t}</span>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Proof / badges */}
      <Section kicker="Why us" title="Safety, speed, and reliability">
        <div className="grid gap-6 sm:grid-cols-3">
          <Stat value="24/7" label="Emergency response" />
          <Stat value=">10yrs" label="Nationwide experience" />
          <Stat value="OSHA" label="Approved & confined-space certified" />
        </div>
      </Section>

      {/* FAQs */}
      <Section
        kicker="FAQ"
        title="Common questions"
        subtitle="How preventative maintenance reduces downtime and cost."
        className="pt-0"
      >
        <div className="mr-auto space-y-4">
          {[
            {
              q: "What’s included in a maintenance program?",
              a: "Scheduled inspections, cleaning, and coordination with your team to address issues before they become outages.",
            },
            {
              q: "Can maintenance occur during production?",
              a: "We plan work in windows that minimize impact. Many tasks can be staged during off‑hours or coordinated downtime.",
            },
            {
              q: "How do you prevent future hang‑ups?",
              a: "Regular cleaning, flow verification, and targeted improvements to handling practices based on inspection findings.",
            },
            {
              q: "Do you offer emergency response?",
              a: "Yes—24/7 nationwide response for urgent blockages or safety concerns.",
            },
            {
              q: "Is this available nationwide?",
              a: "Yes. We support clients across the lower 48.",
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

      {/* CTA band */}
      <Section className="pt-0">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border bg-white p-6 shadow-sm sm:flex-row">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Ready to talk through your application?</h3>
            <p className="text-slate-600">Request service or discuss a maintenance program.</p>
          </div>
          <div className="flex gap-3">
            <a
              href="/quote"
              className="inline-flex items-center rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
            >
              Request service
            </a>
            <a
              href="/contact"
              className="inline-flex items-center rounded-xl border px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-white"
            >
              Discuss maintenance program
            </a>
          </div>
        </div>
      </Section>

    </main>
  );
}
