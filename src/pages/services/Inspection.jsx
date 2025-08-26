import { ShieldCheck, ClipboardCheck, Droplets, HardHat } from "lucide-react";
import Page from "../Page.jsx";
import WhyChooseUs from "../../components/WhyChooseUs.jsx";
import ServiceChips from "../../components/ServiceChips.jsx";
import QuoteCTA from "../../components/QuoteCTA.jsx";

export default function Inspection() {
  return (
    <Page title="Silo Inspection">
      {/* Lead intro + hero image */}
      <section className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Professional Silo Inspection You Can Trust
          </h2>
          <p className="mt-4 text-slate-600">
            Along with silo cleaning, we provide professional silo inspection services for a variety
            of industries. Inspection is a vital part of continued safety, and our OSHA-approved team
            will provide clear documentation and recommendations for maintenance.
          </p>

          {/* quick badges */}
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { Icon: ShieldCheck, text: "OSHA-Approved Process" },
              { Icon: ClipboardCheck, text: "Documentation & Recommendations" },
              { Icon: Droplets, text: "Water Intrusion Identification" },
              { Icon: HardHat, text: "Confined-Space Certified" },
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
            src="/silo-inspection.jpg"
            alt="Technicians conducting professional silo inspections"
            className="w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* Services list */}
      <section className="mt-12">
        <h3 className="text-xl font-semibold text-slate-900">Our Silo Inspection Services</h3>
        <p className="mt-2 text-slate-600">
          We provide silo inspections for clients nationwide—catch structural issues early and keep
          your operation safe and compliant.
        </p>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
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
      </section>

      {/* Guidance / education band + secondary image */}
      <section className="mt-12 grid items-start gap-8 md:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Silo Inspections</h3>
          <p className="mt-2 text-slate-600">
            Getting a silo inspection can feel overwhelming—especially if it’s been years. As a
            general guideline, we recommend concrete storage silos be inspected every three years.
            Actual frequency depends on usage, materials, age, and site conditions. If you’re unsure
            how often to inspect, our team can advise the right interval for your operation.
          </p>
          <p className="mt-2 text-slate-600">
            All team members are highly-trained and confined-space certified. We’ll work with you to
            select the appropriate inspection scope—and when needed, our technicians will physically
            enter and inspect your silo.
          </p>

          {/* Inline CTA */}
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

      {/* Reusable sections */}
      <WhyChooseUs />

      <ServiceChips />

      <QuoteCTA />
    </Page>
  );
}
