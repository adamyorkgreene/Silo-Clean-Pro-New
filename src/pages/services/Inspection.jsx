import { ShieldCheck, ClipboardCheck, Droplets, HardHat } from "lucide-react";
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
            <p className="mt-2 text-slate-600">
              Getting a silo inspection can feel overwhelming—especially if it’s been years. As a general guideline, we recommend concrete storage silos be inspected every three years. Actual frequency depends on usage, materials, age, and site conditions. If you’re unsure how often to inspect, our team can advise the right interval for your operation.
            </p>
            <p className="mt-2 text-slate-600">
              All team members are highly-trained and confined-space certified. We’ll work with you to select the appropriate inspection scope—and when needed, our technicians will physically enter and inspect your silo.
            </p>
            <div className="mt-4">
              <a
                href="tel:8886236050"
                className="inline-flex items-center rounded-xl bg-green-600 px-5 py-3 font-semibold text-white shadow hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
              >
                Contact Us to Learn More
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
