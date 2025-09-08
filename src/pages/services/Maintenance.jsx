import { ShieldCheck, Wrench, ClipboardCheck, Clock } from "lucide-react";
import Section from "../../components/Section.jsx";
import Container from "../../components/Container.jsx";
import WhyChooseUs from "../../components/WhyChooseUs.jsx";
import ServiceChips from "../../components/ServiceChips.jsx";
import QuoteCTA from "../../components/QuoteCTA.jsx";

export default function Maintenance() {
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
                  { Icon: ClipboardCheck, text: "Inspection & Docs" },
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

      {/* Services list */}
      <Section
        kicker="What we do"
        title="Our Silo Cleaning Services"
        subtitle="After inspection, we deploy high-volume vacuums, bin whips, blasting, and sanitation technologies to restore safety and flow."
      >
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            "Hang-up removal",
            "Mold removal",
            "Bad grain removal",
            "Vacuum truck services",
            "Outside cleaning, media blasting & painting",
            "Hydro blasting & dry ice blasting",
            "Soda blasting",
            "Dry cleaning of silos",
            "Injection molding resin change over silo cleaning",
            "Grain silo cleaning",
            "Cement ingredient silo cleaning",
            "Flour silo cleaning",
            "Soda ash / fly ash silo cleaning",
            "Cleaning of any materials in a silo",
            "Silo cone / rotten corn removal",
            "KB systems silo cleaning",
            "Bulk liquid tank cleaning + corrosion removal",
            "Swab testing (if needed)",
            "Silo cleaning for infestation",
            "Silo sanitization",
            "Galvanized corrugated silo cleaning",
            "Baghouse cleaning / filter replacement",
          ].map((i) => (
            <li key={i} className="rounded-xl border bg-white p-4 text-sm shadow-sm">
              {i}
            </li>
          ))}
        </ul>
      </Section>

      <Container>
        <WhyChooseUs />
        <ServiceChips />
        <QuoteCTA />
      </Container>
    </main>
  );
}
