import { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  Clock,
  HardHat,
  MapPin,
  Droplets,
  Newspaper,
  Layers,
  Utensils,
  Plane,
  Plug,
  Flame,
  Factory,
  Package,
  Paintbrush,
  Eraser,
  SprayCan,
  Wrench,
  Landmark,
  ChevronDown,
} from "lucide-react";
import Section from "../components/Section.jsx";
import { useSEO } from "../lib/useSEO.js";

/** EXACT same scaler as Home */
function HeroBackgroundScaledIframe({
  src,
  videoAspect = 16 / 9,
  className = "",
  overlay = true,
  fudgePct = 0.30,
  offsetYPercent = 10,
  desktopBreakpoint = 1050,
}) {
  const wrapRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [useTopAnchor, setUseTopAnchor] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const updateScale = () => {
      const { width, height } = el.getBoundingClientRect();
      if (!width || !height) return;
      const containerAspect = width / height;
      const base =
        containerAspect > videoAspect
          ? containerAspect / videoAspect
          : videoAspect / containerAspect;
      setScale(base * (1 + fudgePct));
    };

    const updateAnchor = () => {
      const vw = window.innerWidth || document.documentElement.clientWidth;
      setUseTopAnchor(vw >= desktopBreakpoint);
    };

    const ro = new ResizeObserver(updateScale);
    ro.observe(el);
    updateScale();
    updateAnchor();
    window.addEventListener("resize", updateAnchor);
    window.addEventListener("orientationchange", updateAnchor);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateAnchor);
      window.removeEventListener("orientationchange", updateAnchor);
    };
  }, [videoAspect, fudgePct, desktopBreakpoint]);

  const baseStyle = {
    width: "100%",
    height: "100%",
    transformOrigin: useTopAnchor ? "center top" : "center",
    transform: useTopAnchor
      ? `translate(-50%, 0) scale(${scale})`
      : `translate(-50%, -50%) scale(${scale})`,
    top: useTopAnchor ? 0 : `calc(50% + ${offsetYPercent}%)`,
    left: "50%",
    position: "absolute",
  };

  return (
    <div ref={wrapRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      <div style={baseStyle}>
        <iframe
          src={src}
          className="w-full h-full pointer-events-none border-0 opacity-40"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen
          title="About Background Video"
        />
      </div>
      {overlay && <div className="absolute inset-0 bg-black/20" />}
    </div>
  );
}

export default function About() {
  useSEO({
    title: "About Us | Silo Clean Pro",
    description: "Silo Clean Pro is a division of GreeneServices, delivering nationwide silo cleaning, inspections, sanitation, and maintenance since 2004.",
    canonical: "https://www.silocleanpro.com/about",
    og: { type: "website", image: "https://www.silocleanpro.com/og-greeneservices.jpg" },
    twitter: { card: "summary_large_image", image: "https://www.silocleanpro.com/og-greeneservices.jpg" },
  });
  return (
    <main className="bg-slate-50">
      {/* FULL-BLEED HERO – identical structure to Home */}
      <section className="relative isolate overflow-hidden">
        <HeroBackgroundScaledIframe
          src="https://customer-7l16vj4uw6jxacav.cloudflarestream.com/534c18fc5600f090d870ea9ca1bbaa57/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-7l16vj4uw6jxacav.cloudflarestream.com%2F534c18fc5600f090d870ea9ca1bbaa57%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
          videoAspect={16 / 9}
          fudgePct={0.30}
          offsetYPercent={10}
          overlay={true}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid items-center gap-8 py-16 lg:grid-cols-2 lg:py-24">
          {/* Left: text + trust === same pattern */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              About Silo Clean Pro
            </h1>
            <p className="mt-4 text-lg text-slate-800">
              Silo Clean Pro provides nationwide silo cleaning and inspection with OSHA-approved, licensed & insured technicians. We are a division of Greene Services, Inc., delivering emergency response, heavy hang-ups, sanitation, and maintenance programs across the lower 48.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-xl border bg-white p-4 shadow-sm">
                <ShieldCheck className="h-5 w-5 text-green-600" />
                <span className="text-sm font-semibold text-slate-800">OSHA-approved</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border bg-white p-4 shadow-sm">
                <MapPin className="h-5 w-5 text-green-600" />
                <span className="text-sm font-semibold text-slate-800">Nationwide</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border bg-white p-4 shadow-sm">
                <Clock className="h-5 w-5 text-green-600" />
                <span className="text-sm font-semibold text-slate-800">24/7 Response</span>
              </div>
            </div>
          </div>

          {/* Right: brand card */}
          <div className="w-2/3 justify-self-center h-full flex flex-col items-center justify-evenly">
            <img
              src="/greene-services-black.png"
              alt="Greene Services, Inc."
              className="max-h-28 h-auto w-auto object-contain mx-auto"
              loading="lazy"
            />
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-wider mb-4 text-slate-800">
                Explore our other divisions
              </p>
              <a
                href="https://GreeneServices.us"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
              >
                Visit GreeneServices.us
                <svg
                  viewBox="0 0 20 20"
                  className="ml-1 h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M11 3h6v6h-2V6.41l-7.3 7.3-1.4-1.42 7.3-7.29H11V3zM5 5h3V3H5a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-3h-2v3H5V5z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What we do (brief) */}
      <Section
        kicker="What we do"
        title="Restore flow. Recover capacity. Reduce risk."
        subtitle="Non-entry methods first; full PRCS entry only when required. Fast mobilization and liner‑safe tooling across the lower 48."
      >
        <div className="grid items-start gap-8 md:grid-cols-2">
          <ul className="space-y-2 text-sm text-slate-700">
            {[
              "Blockage and build‑up removal (bridging, rat‑holing, doming)",
              "Silo/bin/hopper cleanouts for food, cement, chemicals, plastics",
              "Vacuum recovery and material handling",
              "Preventive maintenance programs",
              "Emergency flow‑loss response (24/7 windows)",
            ].map((t) => (
              <li key={t} className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-600" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <figure className="overflow-hidden rounded-2xl shadow-sm border">
            <img
              src="/silo_img_1.png"
              alt="Silo Clean Pro crew at work"
              className="w-full object-cover"
              loading="lazy"
            />
          </figure>
        </div>
      </Section>

      {/* Applicable Industries icons */}
      <Section
        kicker="Industries"
        title="Industries we serve"
        subtitle="Focused on bulk storage: grain, food, plastics, cement, chemicals, energy, and more."
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mx-auto">
          {[
            { Icon: Factory, label: "Grain handling" },
            { Icon: Package, label: "Feed mills" },
            { Icon: Utensils, label: "Food & beverage" },
            { Icon: Layers, label: "Plastics & resins" },
            { Icon: Landmark, label: "Cement & aggregates" },
            { Icon: Plug, label: "Energy & biomass" },
            { Icon: Flame, label: "Chemicals & fertilizers" },
            { Icon: Newspaper, label: "Pet food & nutrition" },
          ].map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center justify-center p-2">
              <Icon className="h-12 w-12 sm:h-14 sm:w-14 text-slate-800" />
              <span className="mt-2 text-sm font-medium text-slate-800 text-center">{label}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Typical problems we solve (accordion) */}
      <Section
        kicker="Problems we solve"
        title="Common flow and capacity issues"
        subtitle="Expand each to see how we address it safely and efficiently."
        className="pt-0"
      >
        <div className="mr-auto space-y-3">
          {[
            { icon: Layers, title: "Bridging / arching", comparison: "Blocks discharge and stalls flow.", benefits: "Restores flow • Recovers capacity", desc: "Bin‑whip/air methods break crusts from roof manways; entry only if required." },
            { icon: Package, title: "Rat‑holing", comparison: "Flow restricted to a narrow channel.", benefits: "Reclaims volume • Reduces spoilage", desc: "Remote agitation and vacuum removal reclaim sidewall build‑up." },
            { icon: Droplets, title: "Hydrated or heat‑set product", comparison: "Material locks to walls (cement/lime/resins).", benefits: "Safer removal • Liner‑safe techniques", desc: "Approved methods (incl. Cardox where permitted) fracture deposits with control." },
            { icon: Flame, title: "Combustible dust accumulation", comparison: "Elevates deflagration risk and contamination.", benefits: "Supports DHA • Safer housekeeping", desc: "Targeted cleaning and vacuum capture reduce accumulations around bin tops and galleries." },
            { icon: Package, title: "Foreign object intrusions", comparison: "Tools/liners left inside impede flow.", benefits: "Safe extraction • Minimal downtime", desc: "Planned retrieval under PRCS controls as needed." },
            { icon: Wrench, title: "Mechanical failure aftermath", comparison: "Stuck gates or damaged aeration pads.", benefits: "Return to service faster", desc: "Cleanout + coordination with your maintenance team during repair." },
          ].map(({ icon: Icon, title, comparison, benefits, desc }) => (
            <details
              key={title}
              className="group p-4 rounded-xl border-[3px] bg-white shadow-sm transition open:bg-slate-50 hover:-translate-y-0.5 hover:shadow-md hover:border-slate-300 focus-within:ring-2 focus-within:ring-green-600"
            >
              <summary className="flex items-center justify-between gap-3 cursor-pointer select-none outline-none rounded-lg -mx-1 px-1 focus-visible:ring-2 focus-visible:ring-green-600">
                <span className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-green-600 transition-colors group-hover:text-green-700" />
                  <span className="text-sm font-semibold text-slate-900">{title}</span>
                </span>
                <ChevronDown className="h-4 w-4 text-slate-500 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-3 space-y-2 text-sm text-slate-700">
                <div><span className="font-semibold">Issue:</span> {comparison}</div>
                <div><span className="font-semibold">Approach:</span> {desc}</div>
                <div><span className="font-semibold">Outcome:</span> {benefits}</div>
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* Methods & tooling */}
      <Section
        kicker="Methods & tooling"
        title="Non‑entry first, PRCS when required"
        subtitle="We match the method to the product, vessel, and hazard profile."
        className="pt-0"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <ul className="space-y-2 text-sm text-slate-700">
            {[
              "Roof‑deployed bin whips and rotary heads",
              "Remote vacuuming from top/side access ports",
              "Air‑lancing for debridging (with dust/LEL controls)",
              "Cardox CO₂ tubes where engineered and permitted",
            ].map((t) => (
              <li key={t} className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-600" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-2 text-sm text-slate-700">
            {[
              "Tripod/davit & retrieval with continuous gas monitoring",
              "Full LOTO and forced ventilation when entering",
              "ATEX/anti‑static vacuums and tools for dust contexts",
              "Liner‑safe, low‑impact techniques for coated vessels",
            ].map((t) => (
              <li key={t} className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-600" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Safety & compliance */}
      <Section
        kicker="Safety"
        title="Permit‑required confined space done right"
        subtitle="OSHA 1910.146 + 1910.147 aligned, with NFPA 61/652 awareness for combustible dust."
        className="pt-0"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <ul className="space-y-2 text-sm text-slate-700">
            {[
              "Site‑specific JHA/JSA and rescue coordination",
              "Atmospheric testing logs and continuous monitoring",
              "LOTO of mechanical, pneumatic, and electrical sources",
            ].map((t) => (
              <li key={t} className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-600" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-2 text-sm text-slate-700">
            {[
              "Ventilation, intrinsically safe lighting, and comms",
              "Housekeeping around bin tops and galleries",
              "Final sweep & verification before return to service",
            ].map((t) => (
              <li key={t} className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-600" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </main>
  );
}
