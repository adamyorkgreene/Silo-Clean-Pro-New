import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Clock, HardHat, MapPin } from "lucide-react";
import Page from "./Page.jsx";
import QuoteCTA from "../components/QuoteCTA.jsx";
import ServiceChips from "../components/ServiceChips.jsx";

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
      {/* FULL-BLEED HERO — identical structure to Home */}
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
              About Greene Services, Inc.
            </h1>
            <p className="mt-4 text-lg text-slate-800">
              GreeneServices provides nationwide silo cleaning and inspection with OSHA-approved,
              licensed & insured technicians. Our confined-space teams handle emergency response,
              heavy hang-ups, sanitation, and full-scale maintenance programs across the lower 48.
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

      {/* INTERIOR SECTIONS — keep your existing About content inside a padded Page */}
      <Page title={null} noChildMargin={true}>
        {/* Side-by-side image + copy */}
        <section className="grid items-center gap-10 md:grid-cols-2">
          {/* Copy column */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Experience You Can Trust
            </h2>

            <p className="mt-4 text-slate-600">
              Our confined-space teams handle the toughest silo conditions—from heavy hang-ups
              and bad grain to mold remediation and corrosion. We pair OSHA-approved
              entry procedures with modern equipment to get your system safe, compliant,
              and back online quickly.
            </p>

            {/* Quick capability bullets (concise, not fluff) */}
            <ul className="mt-4 space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-600" />
                Confined-space certified technicians (licensed & insured)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-600" />
                Bin whips & high-volume vacuum systems for deep cleaning
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-600" />
                Hydro, soda, and dry-ice blasting for stubborn buildup
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-600" />
                Documentation with recommendations after every job
              </li>
            </ul>

            {/* Compact stats row */}
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-xl font-bold text-green-700">24/7</div>
                <p className="text-[11px] text-slate-600">Emergency</p>
              </div>
              <div>
                <div className="text-xl font-bold text-green-700">&gt;10 yrs</div>
                <p className="text-[11px] text-slate-600">Nationwide</p>
              </div>
              <div>
                <div className="text-xl font-bold text-green-700">Lower 48</div>
                <p className="text-[11px] text-slate-600">Coverage</p>
              </div>
            </div>
          </div>

          {/* Image column */}
          <div className="overflow-hidden rounded-2xl shadow-lg w-[70%] mx-auto">
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
        <ServiceChips />

        {/* CTA band */}
        <QuoteCTA />

      </Page>
    </main>
  );
}
