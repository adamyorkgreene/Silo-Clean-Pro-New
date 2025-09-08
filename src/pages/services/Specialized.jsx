import { ShieldCheck, Package, Wrench, Sparkles, ChevronDown } from "lucide-react";
import Section from "../../components/Section.jsx";
import Container from "../../components/Container.jsx";
import WhyChooseUs from "../../components/WhyChooseUs.jsx";
import ServiceChips from "../../components/ServiceChips.jsx";
import QuoteCTA from "../../components/QuoteCTA.jsx";
import Stat from "../../components/Stat.jsx";

export default function Specialized() {
  return (
    <main className="bg-slate-50">
      {/* Hero header */}
      <section className="relative isolate overflow-hidden bg-slate-900">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80" />
        <Container>
          <div className="py-12 lg:py-20 grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-green-400">Services</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Specialized Silo Cleaning</h1>
              <p className="mt-3 max-w-2xl text-slate-200">
                Plastic and injection molding operations have specific requirements. Our highly-trained team keeps silos clean, safe, and efficient—preventing contamination and maintaining flow.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  { Icon: ShieldCheck, text: "OSHA-Approved" },
                  { Icon: Package, text: "Plastic & Resin Expertise" },
                  { Icon: Wrench, text: "Surface Preparation" },
                  { Icon: Sparkles, text: "Sanitizing Applications" },
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
                src="/silo_img_4.jpg"
                alt="Technicians cleaning plastic and injection molding silos"
                className="w-full h-auto rounded-xl object-cover"
                loading="lazy"
              />
            </figure>
          </div>
        </Container>
      </section>

      {/* Services list */}
      <Section
        kicker="What we do"
        title="Our Specialized Cleaning Services"
        subtitle="Tailored solutions for plastics and injection molding facilities, including resin changeovers and sanitization protocols."
      >
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            "Plastic & Injection Molding Silo Cleaning",
            "Resin change-over silo cleaning",
            "Surface preparation for equipment & silos",
            "Sanitizing applications to prevent contamination",
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
        subtitle="Plastic/resin changeovers, contamination control, and scheduling."
        className="pt-0"
      >
        <div className="mr-auto space-y-4">
          {[
            {
              q: "Can you support resin changeovers?",
              a: "Yes. We provide rapid changeover cleaning to reduce cross‑contamination and get lines back up quickly.",
            },
            {
              q: "How do you prevent contamination?",
              a: "Targeted vacuuming, clean sweeps, and sanitation steps as needed. Residues are contained and removed from site.",
            },
            {
              q: "Are methods safe for polymer silos and equipment?",
              a: "We select non‑abrasive or low‑impact approaches and tune pressure/media to protect sensitive components.",
            },
            {
              q: "Do you address static/ESD risks?",
              a: "Yes—grounding and bonding practices are used where required and documented in our safety plan.",
            },
            {
              q: "How do you schedule around production?",
              a: "We coordinate nights/weekends and planned downtime to minimize business impact.",
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
              Discuss specialized solutions
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
