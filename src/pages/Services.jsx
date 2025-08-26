import { NavLink } from "react-router-dom";
import { ShieldCheck, MapPin, Clock, SprayCan, ClipboardCheck, HardHat } from "lucide-react";
import Page from "./Page.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import ServiceChips from "../components/ServiceChips.jsx";
import QuoteCTA from "../components/QuoteCTA.jsx";

export default function ServicesIndex() {
  return (
    <Page title="Services">
      {/* Intro */}
      <section>
        <p className="text-lg text-slate-600 max-w-3xl">
          We provide silo cleaning, inspection, sanitation, maintenance, and specialized cleaning
          for plastic &amp; injection molding operations. Our technicians are OSHA-approved and
          confined-space certified—serving the lower 48 with 24/7 response.
        </p>
      </section>

      {/* Quick service buckets */}
      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { to: "/services/cleaning", title: "Silo Cleaning", icon: SprayCan, desc: "Hang-ups, bad grain, bin whips, vacs, exterior cleaning & blasting." },
          { to: "/services/inspection", title: "Inspection", icon: ClipboardCheck, desc: "Structural & safety checks, water intrusion, corrosion, reporting." },
          { to: "/services/sanitation", title: "Sanitation", icon: ShieldCheck, desc: "Infestation mitigation, swab testing, full sanitation programs." },
        ].map(({ to, title, icon: Icon, desc }) => (
          <NavLink key={to} to={to} className="group rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <Icon className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-slate-900">{title}</h3>
            </div>
            <p className="mt-2 text-sm text-slate-600">{desc}</p>
            <span className="mt-3 inline-flex text-sm font-semibold text-green-700">Learn more →</span>
          </NavLink>
        ))}
      </section>

      <WhyChooseUs />

      <ServiceChips />

      <QuoteCTA />
      
    </Page>
  );
}
