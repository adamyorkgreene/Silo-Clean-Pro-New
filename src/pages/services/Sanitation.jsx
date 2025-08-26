import Page from "../Page.jsx";
import { ShieldCheck, TestTube, Sparkles, Bug, Droplets } from "lucide-react";
import WhyChooseUs from "../../components/WhyChooseUs.jsx";
import ServiceChips from "../../components/ServiceChips.jsx";
import QuoteCTA from "../../components/QuoteCTA.jsx";

export default function Sanitation() {
  return (
    <Page title="Silo Sanitation">
      {/* Lead intro + hero image */}
      <section className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Silo Sanitation
          </h2>
          <p className="mt-4 text-slate-600">
            Your silo can harbor bacteria, germs, and other contaminants that threaten product
            quality and worker safety. Our OSHA-approved teams deliver advanced sanitation programs
            nationwide—backed by years of experience, specialized equipment, and strict safety protocols.
          </p>

          {/* quick badges */}
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { Icon: ShieldCheck, text: "OSHA-Approved Process" },
              { Icon: TestTube, text: "Swab Testing Available" },
              { Icon: Sparkles, text: "Advanced Techniques" },
              { Icon: Bug, text: "Infestation Mitigation" },
            ].map(({ Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-sm text-slate-700 shadow-sm"
              >
                <Icon className="h-4 w-4 text-green-600" />
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* hero image */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/silo-sanitation.jpg"
            alt="Technicians performing silo sanitation procedures"
            className="w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* Advanced Silo Sanitation Services */}
      <section className="mt-12">
        <h3 className="text-xl font-semibold text-slate-900">
          Advanced Silo Sanitation Services
        </h3>
        <p className="mt-2 text-slate-600">
          We specialize in comprehensive sanitation for grain silos and related storage systems.
          Our highly-trained professionals clean and sanitize to the highest standards of health and safety.
        </p>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
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
      </section>

      {/* The Value of a Clean Silo + supporting image */}
      <section className="mt-12 grid items-start gap-8 md:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">The Value of a Clean Silo</h3>
          <p className="mt-2 text-slate-600">
            A clean silo protects stored materials from contaminants, pests, and spoilage. With a
            professionally sanitized silo, your grain is safer for storage, use, sale, and feed.
            Because sanitation requires specialized equipment and techniques, partnering with an
            experienced team like Silo Clean Pro is essential.
          </p>
          <p className="mt-2 text-slate-600">
            We combine advanced methods with rigorous safety practices to keep your operation
            compliant and efficient—so you can focus on throughput, not downtime.
          </p>

          {/* inline call */}
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

      {/* How We Sanitize */}
      <section className="mt-12">
        <h3 className="text-xl font-semibold text-slate-900">How We Sanitize Your Silo</h3>
        <p className="mt-2 text-slate-600">
          We use advanced equipment and proven methods to deliver safe, effective sanitation:
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
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
      </section>

      {/* Reusable sections */}
      <WhyChooseUs />
      <ServiceChips />
      <QuoteCTA />
    </Page>
  );
}
