import { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  Clock,
  HardHat,
  MapPin,
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
  return (
    <main className="bg-slate-50">
      {/* FULL-BLEED HERO – identical structure to Home */}
      <section className="relative isolate overflow-hidden">
        <HeroBackgroundScaledIframe
          src="https://customer-7l16vj4uw6jxacav.cloudflarestream.com/89a07de3c231bb8948a29e76369aac3c/iframe?muted=true&preload=true&loop=true&autoplay=true&controls=false"
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
        title="Applicable industries"
        subtitle="Versatile across food & beverage, plastics, cement, transportation, power, remediation, foundry, and packaging."
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mx-auto">
          {[
            { Icon: Newspaper, label: "Printing" },
            { Icon: Layers, label: "Textiles" },
            { Icon: Utensils, label: "Food & Beverage" },
            { Icon: Plane, label: "Transportation" },
            { Icon: Plug, label: "Power" },
            { Icon: Flame, label: "Remediation" },
            { Icon: Factory, label: "Foundry" },
            { Icon: Package, label: "Packaging" },
          ].map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center justify-center p-2">
              <Icon className="h-12 w-12 sm:h-14 sm:w-14 text-slate-800" />
              <span className="mt-2 text-sm font-medium text-slate-800 text-center">{label}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Industrial Applications accordion */}
      <Section
        kicker="Industrial Applications"
        title="Where dry ice blasting fits"
        subtitle="Open each to see comparisons and benefits."
        className="pt-0"
      >
        <div className="mr-auto space-y-3">
          {[
            { icon: Paintbrush, title: "Rust removal", comparison: "Unlike sandblasting, there’s minimal cleanup.", benefits: "Non‑abrasive • No secondary waste", desc: "Freeze‑lift action releases corrosion without harming base material." },
            { icon: Eraser, title: "Adhesive & paint removal", comparison: "More precise than scraping or chemicals.", benefits: "No harsh chemicals • Minimal residue", desc: "Breaks the bond between coatings and substrate for clean release." },
            { icon: Flame, title: "Fire remediation", comparison: "Faster and cleaner than sanding/chemicals.", benefits: "No secondary waste • Odor reduction", desc: "Removes soot and smoke staining while preserving surfaces." },
            { icon: SprayCan, title: "Mold cleaning & remediation", comparison: "More thorough than scrubbing/chemicals.", benefits: "Chemical‑free • Helps reduce regrowth", desc: "Cold temperature assists spore deactivation while removing contamination." },
            { icon: Wrench, title: "Equipment & machinery", comparison: "Less teardown; faster turnarounds.", benefits: "No water/abrasives • Safe for electrical", desc: "Removes grease and process buildup without full disassembly in many cases." },
            { icon: Landmark, title: "Historical restoration", comparison: "Gentler than pressure washing/chemicals.", benefits: "Non‑abrasive • Chemical‑free", desc: "Cleans grime and pollutants while preserving detail." },
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
                <div><span className="font-semibold">How it works:</span> {desc}</div>
                <div><span className="font-semibold">Comparison:</span> {comparison}</div>
                <div><span className="font-semibold">Benefits:</span> {benefits}</div>
              </div>
            </details>
          ))}
        </div>
      </Section>
    </main>
  );
}
