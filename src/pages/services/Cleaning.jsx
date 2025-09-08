import { ShieldCheck, SprayCan, Wind, Bug, Check, ChevronDown } from "lucide-react";
import Section from "../../components/Section.jsx";
import Container from "../../components/Container.jsx";
import WhyChooseUs from "../../components/WhyChooseUs.jsx";
import ServiceChips from "../../components/ServiceChips.jsx";
import QuoteCTA from "../../components/QuoteCTA.jsx";
import Stat from "../../components/Stat.jsx";

export default function Cleaning() {
  return (
    <main className="bg-slate-50">
      {/* Hero header */}
      <section className="relative isolate overflow-hidden bg-slate-900">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80" />
        <Container>
          <div className="py-12 lg:py-20 grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-green-400">Services</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Silo Cleaning</h1>
              <p className="mt-3 max-w-2xl text-slate-200">
                We are a dependable, certified, and highly-trained silo cleaning company serving clients nationwide. After a thorough inspection we use the latest in high-volume grain vacuums, bin whips, and other technologies to restore safety and flow.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/quote"
                  className="inline-flex items-center rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
                >
                  Request service
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
                alt="Technicians performing silo cleaning operations"
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
        title="Our Silo Cleaning Services"
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
                "Injection molding resin change-over silo cleaning",
                "Grain / Flour / Cement ingredient silo cleaning",
                "Soda ash / fly ash silo cleaning",
                "Galvanized corrugated silo cleaning",
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
        subtitle="Quick answers about safety, waste handling, and downtime."
        className="pt-0"
      >
        <div className="mr-auto space-y-4">
          {[
            {
              q: "Is cleaning safe in confined spaces?",
              a: "Yes. Our crews are confined-space certified and follow permit entry, ventilation, gas monitoring, and rescue protocols.",
            },
            {
              q: "How do you handle waste and residue?",
              a: "Dislodged material is vacuumed and contained for disposal per your site’s requirements. No chemical residue is left behind.",
            },
            {
              q: "How much downtime should we plan for?",
              a: "Depends on size and material, but many cleanings complete in a day or two. We offer night/weekend scheduling to minimize impact.",
            },
            {
              q: "Which methods do you use?",
              a: "We match tools to the problem: high‑volume vacs, bin whips, hydro and dry ice blasting, plus targeted sanitation when needed.",
            },
            {
              q: "Do you service food‑grade facilities?",
              a: "Yes. We follow GMP practices and can include sanitation and documentation appropriate for food‑grade operations.",
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
            <p className="text-slate-600">Request service or ask about rentals and training.</p>
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
              Talk to a cleaning specialist
            </a>
          </div>
        </div>
      </Section>

    </main>
  );
}
