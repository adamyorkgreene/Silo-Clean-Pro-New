import { NavLink, useNavigate } from "react-router-dom";
import Section from "../components/Section.jsx";
import Stat from "../components/Stat.jsx";
import Pill from "../components/Pill.jsx";

export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.10),transparent_60%)]" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid items-center gap-8 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Professional Silo Cleaning & Inspection
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Nationwide service, emergency response, and OSHA-approved confined-space technicians.
              Keep your silos safe, compliant, and running efficiently.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/quote")}
                className="inline-flex items-center rounded-xl px-5 py-3 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600"
              >
                Request a Quote
              </button>
              <NavLink
                to="/services"
                className="inline-flex items-center rounded-xl border px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-white"
              >
                View Services
              </NavLink>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>OSHA-Approved</Pill>
              <Pill>Licensed & Insured</Pill>
              <Pill>Confined Space Certified</Pill>
              <Pill>Nationwide</Pill>
            </div>
          </div>
          <div className="aspect-video w-full overflow-hidden rounded-2xl border bg-white shadow flex items-center justify-center text-slate-400">
            Hero Image / Video
          </div>
        </div>
      </section>

      {/* Services overview */}
      <Section
        kicker="Services"
        title="Comprehensive silo solutions"
        subtitle="From deep cleaning and sanitation to inspections and maintenance, we cover every stage of silo care."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Silo Cleaning", d: "Bin whips, high-volume vacs, hang-up & mold removal." },
            { t: "Inspection", d: "Structural, safety, water intrusion, and corrosion checks." },
            { t: "Sanitation", d: "Advanced sanitation to reduce contamination and pests." },
            { t: "Maintenance", d: "Preventative programs that minimize downtime." },
          ].map((c) => (
            <div
              key={c.t}
              className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="h-10 w-10 rounded-lg bg-green-600/10" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{c.t}</h3>
              <p className="mt-1 text-sm text-slate-600">{c.d}</p>
              <NavLink
                to={`/services/${c.t.toLowerCase()}`}
                className="mt-4 inline-flex text-sm font-semibold text-green-700"
              >
                Learn more →
              </NavLink>
            </div>
          ))}
        </div>
      </Section>

      {/* Proof / badges */}
      <Section kicker="Why us" title="Safety, speed, and reliability">
        <div className="grid gap-6 sm:grid-cols-3">
          <Stat value="24/7" label="Emergency response" />
          <Stat value=">10yrs" label="Nationwide experience" />
          <Stat value="OSHA" label="Approved & confined-space certified" />
        </div>
      </Section>
    </main>
  );
}
