import { ShieldCheck, Phone, Clock, HardHat, MapPin } from "lucide-react";
import Page from "./Page.jsx";

export default function About() {
  return (
    <Page title="About Us">
      {/* Intro */}
      <section className="relative">
        <div className="max-w-3xl">
          <p className="text-lg text-slate-600">
            GreeneServices provides nationwide silo cleaning and inspection with OSHA-approved,
            licensed & insured technicians. Our confined-space teams handle emergency response,
            heavy hang-ups, sanitation, and full-scale maintenance programs across the lower 48.
          </p>
        </div>

        {/* Quick trust row */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-xl border bg-white p-4 shadow-sm">
            <ShieldCheck className="h-5 w-5 text-green-600" />
            <span className="text-sm font-semibold text-slate-800">OSHA-approved process</span>
          </div>
          <div className="flex items-center gap-3 rounded-xl border bg-white p-4 shadow-sm">
            <MapPin className="h-5 w-5 text-green-600" />
            <span className="text-sm font-semibold text-slate-800">Nationwide service</span>
          </div>
          <div className="flex items-center gap-3 rounded-xl border bg-white p-4 shadow-sm">
            <Clock className="h-5 w-5 text-green-600" />
            <span className="text-sm font-semibold text-slate-800">24/7 emergency response</span>
          </div>
        </div>
      </section>

      {/* Side-by-side image + copy (Option A) */}
      <section className="mt-12 grid items-center gap-8 md:grid-cols-2">
        {/* Text column */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Experience You Can Trust
          </h2>
          <p className="mt-4 text-slate-600">
            Our crews have decades of combined experience handling confined-space silo
            cleaning across industries. From mold remediation and bad grain removal to
            full-scale media blasting, GreeneServices delivers safe, efficient solutions
            nationwide.
          </p>
        </div>

        {/* Image column */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/silo_img_1.png"
            alt="GreeneServices silo cleaning team at work"
            className="w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* Services overview */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Core Silo Cleaning & Inspection Services
        </h2>
        <p className="mt-2 text-slate-600">
          From dry cleaning and media blasting to infestations, sanitation, and cone/rotten grain
          removal—our crews handle every stage of silo health and safety.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* Column 1 */}
          <ul className="space-y-3 rounded-2xl border bg-white p-6 shadow-sm">
            {[
              "Nationwide service",
              "Emergency response available throughout the USA",
              "Davit arm entry with OSHA-approved process",
              "Confined space trained and certified",
              "Hang-up + mold removal",
              "Vacuum truck services",
              "Outside of silo cleaning",
              "Hydro, Soda, and Dry Ice blasting",
              "Dry cleaning of silos",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-green-600" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          {/* Column 2 */}
          <ul className="space-y-3 rounded-2xl border bg-white p-6 shadow-sm">
            {[
              "Injection molding resin change-over silo cleaning",
              "Cement ingredient, Grain, Flour silo cleaning",
              "Bad grain removal",
              "Soda ash / fly ash silo cleaning",
              "Cleaning of any materials in a silo",
              "Silo cone / rotten corn removal",
              "KB systems silo cleaning",
              "Bulk liquid tank cleaning + corrosion removal",
              "Silo cleaning for infestation & silo sanitization",
              "Galvanized corrugated silo cleaning",
              "Baghouse cleaning / filter replacement",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-green-600" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Safety registration callout */}
      <section className="mt-12">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <HardHat className="mt-1 h-6 w-6 text-green-600" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Safety First</h3>
              <p className="mt-1 text-slate-600">
                Proudly registered with <span className="font-semibold">Browz</span> as a company
                offering exceptional safety services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional services */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Additional Services We Offer
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Plastic & Injection Molding Silo Cleaning",
            "Media Blasting",
            "Sanitizing Applications",
            "Surface Preparation",
          ].map((chip) => (
            <span
              key={chip}
              className="rounded-full border bg-white px-3 py-1 text-sm text-slate-700 shadow-sm"
            >
              {chip}
            </span>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="mt-12">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border bg-white p-6 shadow-sm sm:flex-row">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Questions or need rapid response?
            </h3>
            <p className="text-slate-600">Talk to a silo specialist now.</p>
          </div>
          <a
            href="tel:8886236050"
            className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white shadow hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
          >
            <Phone className="h-5 w-5" />
            888-623-6050
          </a>
        </div>
      </section>
    </Page>
  );
}
