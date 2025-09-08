import { ShieldCheck, ClipboardCheck, Droplets, HardHat, ChevronDown, Clock } from "lucide-react";
import Section from "../../components/Section.jsx";
import Container from "../../components/Container.jsx";
import WhyChooseUs from "../../components/WhyChooseUs.jsx";
import ServiceChips from "../../components/ServiceChips.jsx";
import QuoteCTA from "../../components/QuoteCTA.jsx";
import Stat from "../../components/Stat.jsx";

export default function Inspection() {
  return (
    <main className="bg-slate-50">
      {/* Hero header */}
      <section className="relative isolate overflow-hidden bg-slate-900">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80" />
        <Container>
          <div className="py-12 lg:py-20 grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-green-400">Services</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Silo Inspection</h1>
              <p className="mt-3 max-w-2xl text-slate-200">
                Along with silo cleaning, we provide professional silo inspection services for a variety of industries. Inspection is vital for continued safety, and our OSHA-approved team provides clear documentation and maintenance recommendations.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  { Icon: ShieldCheck, text: "OSHA-Approved" },
                  { Icon: ClipboardCheck, text: "Documentation" },
                  { Icon: Droplets, text: "Water Intrusion ID" },
                  { Icon: HardHat, text: "Confined-Space Certified" },
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
                src="/silo-inspection.jpg"
                alt="Technicians conducting professional silo inspections"
                className="w-full h-auto rounded-xl object-cover"
                loading="lazy"
              />
            </figure>
          </div>
        </Container>
      </section>

      {/* Services list */}
      <Section
        kicker="What we check"
        title="Our Silo Inspection Services"
        subtitle="Catch structural issues early and keep operations safe and compliant."
      >
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            "Identifying water intrusion sources",
            "Structural integrity assessment",
            "Corrosion / paint integrity inspection",
            "Top of silo safety inspection",
            "Ladder well safety inspection",
            "Documentation with maintenance recommendations",
          ].map((i) => (
            <li key={i} className="rounded-xl border bg-white p-4 text-sm shadow-sm">
              {i}
            </li>
          ))}
        </ul>
      </Section>

      {/* Guidance / education band + secondary image */}
      <Container>
        <section className="mt-4 grid items-start gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Silo Inspections</h3>
            <p className="mt-2 text-slate-700">
              Recommended about every <span className="font-semibold">3 years</span> for concrete silos (varies by use & age).
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { Icon: ClipboardCheck, t: "Clear report with photos" },
                { Icon: Droplets, t: "Water intrusion detection" },
                { Icon: ShieldCheck, t: "OSHA + confined-space" },
                { Icon: HardHat, t: "Entry when required" },
                { Icon: Clock, t: "~½–1 day per silo" },
                { Icon: ClipboardCheck, t: "Actionable maintenance plan" },
              ].map(({ Icon, t }) => (
                <div key={t} className="flex items-center gap-3 rounded-xl border bg-slate-50 p-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-600/10 text-green-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">{t}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex gap-3">
              <a
                href="/quote"
                className="inline-flex items-center rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
              >
                Schedule inspection
              </a>
              <a
                href="tel:8886236050"
                className="inline-flex items-center rounded-xl border px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-white"
              >
                Call 888-623-6050
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/silo_img_3.jpg"
              alt="Inspection team and equipment at a silo site"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </section>
      </Container>
      
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
        subtitle="What to expect from a professional silo inspection."
        className="pt-0"
      >
        <div className="mr-auto space-y-4">
          {[
            {
              q: "How often should silos be inspected?",
              a: "As a guideline, every 3 years for concrete silos—frequency varies by age, use, and materials. We can recommend an interval for your site.",
            },
            {
              q: "Do silos need to be empty?",
              a: "Low or empty is preferred for access. We’ll advise options if product remains, and can perform safe entry when required.",
            },
            {
              q: "What’s included in the inspection?",
              a: "Structural checks, water intrusion identification, corrosion/paint assessment, safety features, and a written report with photos and recommendations.",
            },
            {
              q: "How long does it take?",
              a: "Often a half day to a full day per silo depending on size, condition, and access.",
            },
            {
              q: "Do we receive documentation?",
              a: "Yes. You’ll receive a clear report outlining findings, prioritized maintenance items, and suggested timelines.",
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
              Schedule an inspection
            </a>
          </div>
        </div>
      </Section>

    </main>
  );
}
