import { NavLink } from "react-router-dom";
import { ShieldCheck, SprayCan, Wind, Bug, Hammer } from "lucide-react";
import Page from "../Page.jsx";
import WhyChooseUs from "../../components/WhyChooseUs.jsx";
import ServiceChips from "../../components/ServiceChips.jsx";
import QuoteCTA from "../../components/QuoteCTA.jsx";

export default function Cleaning() {
  return (
    <Page title="Silo Cleaning">
      {/* Lead intro + hero image */}
      <section className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Professional Silo Cleaning Services You Can Trust
          </h2>
          <p className="mt-4 text-slate-600">
            We are a dependable, certified, and highly-trained silo cleaning company serving clients nationwide.
            After a thorough inspection we use the latest in high-volume grain vacuums, bin whips, and other
            technologies to restore safety and flow.
          </p>

          {/* quick badges */}
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { Icon: ShieldCheck, text: "OSHA-Approved" },
              { Icon: Wind, text: "High-Volume Vacs" },
              { Icon: SprayCan, text: "Media Blasting" },
              { Icon: Bug, text: "Sanitation & Infestation" },
            ].map(({ Icon, text }) => (
              <span key={text} className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-sm text-slate-700 shadow-sm">
                <Icon className="h-4 w-4 text-green-600" />
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* image */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/silo_img_2.jpg"
            alt="Technicians performing silo cleaning operations"
            className="w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* Services list (cards) */}
      <section className="mt-12">
        <h3 className="text-xl font-semibold text-slate-900">Our Silo Cleaning Services</h3>
        <p className="mt-2 text-slate-600">
          Comprehensive cleaning for grain, flour, cement ingredients, plastics and more.
        </p>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            "Hang-up removal",
            "Mold & bad grain removal",
            "Vacuum truck services",
            "High-volume vacuums & bin whips",
            "Outside cleaning, media blasting & painting",
            "Hydro blasting & dry ice blasting",
            "Soda blasting",
            "Dry cleaning of silos",
            "Injection molding resin change-over silo cleaning",
            "Grain / Flour / Cement ingredient silo cleaning",
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

      <WhyChooseUs />

      <ServiceChips />

      <QuoteCTA />

    </Page>
  );
}
