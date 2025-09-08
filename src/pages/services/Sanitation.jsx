import { ShieldCheck, TestTube, Sparkles, Bug, Droplets, ChevronDown, HardHat, Clock, Check } from "lucide-react";
import Section from "../../components/Section.jsx";
import Container from "../../components/Container.jsx";
import WhyChooseUs from "../../components/WhyChooseUs.jsx";
import ServiceChips from "../../components/ServiceChips.jsx";
import QuoteCTA from "../../components/QuoteCTA.jsx";
import Stat from "../../components/Stat.jsx";

export default function Sanitation() {
  return (
    <main className="bg-slate-50">
      {/* Hero header */}
      <section className="relative isolate overflow-hidden bg-slate-900">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80" />
        <Container>
          <div className="py-12 lg:py-20 grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-green-400">Services</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Silo Sanitation</h1>
              <p className="mt-3 max-w-2xl text-slate-200">
                Your silo can harbor bacteria, germs, and other contaminants that threaten product quality and worker safety. Our OSHA-approved teams deliver advanced sanitation programs nationwide—backed by specialized equipment and strict safety protocols.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  { Icon: ShieldCheck, text: "OSHA-Approved" },
                  { Icon: TestTube, text: "Swab Testing" },
                  { Icon: Sparkles, text: "Advanced Methods" },
                  { Icon: Bug, text: "Infestation Mitigation" },
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
                src="/silo-sanitation.jpg"
                alt="Technicians performing silo sanitation procedures"
                className="w-full h-auto rounded-xl object-cover"
                loading="lazy"
              />
            </figure>
          </div>
        </Container>
      </section>

      {/* Advanced Silo Sanitation Services */}
      <Section
        kicker="What we do"
        title="Advanced Silo Sanitation Services"
        subtitle="Comprehensive sanitation for grain silos and related storage systems."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Methods & Controls</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {[
                "Targeted sanitation after cleaning",
                "Food-safe options where required",
                "Swab testing available",
                "Confined-space safe procedures",
              ].map((text) => (
                <li key={text} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Contamination & Response</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {[
                "Infestation mitigation",
                "Mold / bad product removal",
                "Odor and residue reduction",
              ].map((text) => (
                <li key={text} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Integration & Options</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {[
                "Tailored to stored materials",
                "Integrates with maintenance programs",
                "Night/weekend scheduling available",
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

      {/* Highlights band + secondary image */}
      <Section
        kicker="At a Glance"
        title="Sanitation Highlights"
        subtitle="GMP-friendly methods, OSHA-approved entry, optional swab testing, fast return to service."
        className="pt-0"
      >
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { Icon: ShieldCheck, t: "OSHA + confined-space" },
                { Icon: TestTube, t: "Swab testing (optional)" },
                { Icon: Sparkles, t: "Food-safe options available" },
                { Icon: Bug, t: "Infestation mitigation" },
                { Icon: Clock, t: "Fast turnarounds" },
                { Icon: HardHat, t: "Night/weekend scheduling" },
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
                Request sanitation service
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
              src="/silo-chemicals.jpg"
              alt="Sanitation chemicals and equipment used for silo cleaning"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      {/* How We Sanitize */}
      <Section
        kicker="How it works"
        title="How We Sanitize Your Silo"
        subtitle="We use advanced equipment and proven methods to deliver safe, effective sanitation."
      >
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            "Deep cleaning and sanitation after inspection",
            "Integration with ongoing maintenance programs",
            "Cutting-edge equipment and confined-space protocols",
            "Site-specific safety planning and compliance",
          ].map((i) => (
            <li key={i} className="rounded-xl border bg-white p-4 text-sm shadow-sm">
              {i}
            </li>
          ))}
        </ul>
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
        subtitle="Sanitation methods, food safety, and turnaround times."
        className="pt-0"
      >
        <div className="mr-auto space-y-4">
          {[
            {
              q: "What sanitizers or chemicals do you use?",
              a: "We use approved products appropriate for your application and provide SDS on request. Food‑contact safe options are available.",
            },
            {
              q: "Is it food‑safe?",
              a: "Yes—when required we follow GMP practices and can include post‑cleaning sanitation and optional swab testing.",
            },
            {
              q: "How soon can we resume use?",
              a: "After ventilation/cure times are met. Many jobs return to service the same day or next day depending on conditions.",
            },
            {
              q: "Can you address infestation?",
              a: "Yes. We remove contaminated material and sanitize affected areas, and can coordinate with pest control when needed.",
            },
            // Removed documentation emphasis per updated messaging
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
            <p className="text-slate-600">Request service or talk to a sanitation specialist.</p>
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
              Talk to a sanitation specialist
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
