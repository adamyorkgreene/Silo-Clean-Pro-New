import { ShieldCheck, TestTube, Sparkles, Bug, Droplets } from "lucide-react";
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
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            "Comprehensive sanitation programs for grain and feed",
            "Targeted contamination removal and mitigation",
            "Infestation response and prevention",
            "Sanitizing applications tailored to stored materials",
            "Regular maintenance and inspection integration",
            "Swab testing available upon request",
          ].map((i) => (
            <li key={i} className="rounded-xl border bg-white p-4 text-sm shadow-sm">
              {i}
            </li>
          ))}
        </ul>
      </Section>

      {/* The Value of a Clean Silo + supporting image */}
      <Container>
        <section className="mt-4 grid items-start gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">The Value of a Clean Silo</h3>
            <p className="mt-2 text-slate-600">
              A clean silo protects stored materials from contaminants, pests, and spoilage. With a professionally sanitized silo, your grain is safer for storage, use, sale, and feed. Because sanitation requires specialized equipment and techniques, partnering with an experienced team like Silo Clean Pro is essential.
            </p>
            <p className="mt-2 text-slate-600">
              We combine advanced methods with rigorous safety practices to keep your operation compliant and efficient—so you can focus on throughput, not downtime.
            </p>
            <div className="mt-4">
              <a
                href="tel:8886236050"
                className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white shadow hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
              >
                <Droplets className="h-5 w-5 text-white/90" />
                Talk to a Sanitation Specialist
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
        </section>
      </Container>

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
            "Documented procedures and safety compliance",
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
              Talk to a sanitation specialist
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
