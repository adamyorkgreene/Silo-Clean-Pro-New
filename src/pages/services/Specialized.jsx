import Page from "../Page.jsx";
import { ShieldCheck, Package, Wrench, Sparkles } from "lucide-react";
import WhyChooseUs from "../../components/WhyChooseUs.jsx";
import ServiceChips from "../../components/ServiceChips.jsx";
import QuoteCTA from "../../components/QuoteCTA.jsx";

export default function Specialized() {
  return (
    <Page title="Specialized Silo Cleaning">
      {/* Intro + image */}
      <section className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Plastic &amp; Injection Molding – Silo Cleaning
          </h2>
          <p className="mt-4 text-slate-600">
            When it comes to silo cleaning, plastic and injection molding companies have specific
            needs. Our highly-trained team ensures your silos remain clean, safe, and efficient—
            preventing contamination and keeping production flowing.
          </p>

          {/* quick badges */}
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { Icon: ShieldCheck, text: "OSHA-Approved" },
              { Icon: Package, text: "Plastic & Resin Expertise" },
              { Icon: Wrench, text: "Surface Preparation" },
              { Icon: Sparkles, text: "Sanitizing Applications" },
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

        {/* image */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/silo_img_4.jpg"
            alt="Technicians cleaning plastic and injection molding silos"
            className="w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* Services list */}
      <section className="mt-12">
        <h3 className="text-xl font-semibold text-slate-900">Our Specialized Cleaning Services</h3>
        <p className="mt-2 text-slate-600">
          Tailored solutions for plastics and injection molding facilities, including resin
          changeovers and sanitization protocols.
        </p>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
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
      </section>

      {/* Reusable sections */}
      <WhyChooseUs />

      <ServiceChips />

      <QuoteCTA />
    </Page>
  );
}
