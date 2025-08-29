import Page from "../Page.jsx";
import { ShieldCheck, Wrench, ClipboardCheck, Clock } from "lucide-react";
import WhyChooseUs from "../../components/WhyChooseUs.jsx";
import ServiceChips from "../../components/ServiceChips.jsx";
import QuoteCTA from "../../components/QuoteCTA.jsx";

export default function Maintenance() {
  return (
    <Page title="Silo Maintenance">
      {/* Lead intro + hero image */}
      <section className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Why Silo Cleaning Is a Vital Part of Silo Maintenance
          </h2>

          <p className="mt-4 text-slate-600">
            For industries that store bulk materials—feed ingredients, grain, powders, plastics—silos
            are mission-critical. Regular maintenance keeps them safe, efficient, and compliant, and a
            thorough, professional cleaning is central to that maintenance. GreeneServices provides
            OSHA-approved silo cleaning and inspection programs to keep your assets in top condition.
          </p>

          {/* quick badges */}
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { Icon: ShieldCheck, text: "OSHA-Approved Process" },
              { Icon: Wrench, text: "Preventative Maintenance" },
              { Icon: ClipboardCheck, text: "Inspection & Documentation" },
              { Icon: Clock, text: "24/7 Nationwide Response" },
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

          {/* Expanded "What This Means for You" */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              What This Means for You
            </h3>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-600" />
                Reduced downtime by preventing costly flow blockages and unscheduled shutdowns
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-600" />
                Extended equipment life through removal of corrosive or abrasive buildup
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-600" />
                Compliance confidence with OSHA and local safety requirements via documented inspections
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-600" />
                Optimized storage capacity by eliminating residue and reclaiming usable volume
              </li>
            </ul>
          </div>
        </div>

        {/* hero image */}
        <div className="overflow-hidden rounded-2xl shadow-lg max-w-[75%] mx-auto">
          <img
            src="/silo-maintenance.png"
            alt="Technicians performing routine silo maintenance and cleaning"
            className="w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* Services list */}
      <section className="mt-12">
        <h3 className="text-xl font-semibold text-slate-900">Our Silo Cleaning Services</h3>
        <p className="mt-2 text-slate-600">
          After inspection, we deploy high-volume vacuums, bin whips, blasting, and sanitation
          technologies to restore safety and flow.
        </p>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
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
      </section>

      {/* Reusable sections */}
      <WhyChooseUs />
      <ServiceChips />
      <QuoteCTA />
    </Page>
  );
}
