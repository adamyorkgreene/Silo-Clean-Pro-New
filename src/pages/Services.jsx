import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Brush, Search, ShieldCheck, Wrench } from "lucide-react";
import Section from "../components/Section.jsx";
import { useSEO } from "../lib/useSEO.js";
import Stat from "../components/Stat.jsx";

/** Background Stream iframe that auto-scales to cover.
 *  Desktop (>=1050px): anchor to TOP (crop bottom more).
 *  Mobile  (<1050px): centered with optional offsetYPercent.
 */
function HeroBackgroundScaledIframe({
  src,
  videoAspect = 16 / 9,
  className = "",
  overlay = true,
  opacity = 0.4,
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
      ? `translate(-50%, -15%) scale(${scale})`
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
          className="w-full h-full pointer-events-none border-0"
          style={{ opacity }}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen
          title="Services Background Video"
        />
      </div>
      {overlay && <div className="absolute inset-0 bg-black/20" />}
    </div>
  );
}

export default function ServicesIndex() {
  useSEO({
    title: "Silo Services: Cleaning, Inspection, Sanitation, Maintenance | Silo Clean Pro",
    description: "Full-service silo cleaning, inspection, sanitation, and maintenance. Rapid mobilization and OSHA-approved confined-space technicians.",
    canonical: "https://www.silocleanpro.com/services",
    og: { type: "website", image: "https://www.silocleanpro.com/og-greeneservices.jpg" },
    twitter: { card: "summary_large_image", image: "https://www.silocleanpro.com/og-greeneservices.jpg" },
  });
  return (
    <main className="bg-slate-50">
      {/* HERO (same pattern as Home/About) */}
      <section className="relative isolate overflow-hidden">
        <HeroBackgroundScaledIframe
          src="https://customer-7l16vj4uw6jxacav.cloudflarestream.com/ef99151817ac90f0a387d5dab5dd2426/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-7l16vj4uw6jxacav.cloudflarestream.com%2Fef99151817ac90f0a387d5dab5dd2426%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
          videoAspect={16 / 9}
          fudgePct={0.30}
          offsetYPercent={10}
          overlay={true}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid items-center gap-8 py-16 lg:grid-cols-2 lg:py-24">
          {/* Left: headline, intro, CTAs */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Services
            </h1>
            <p className="mt-4 text-lg text-slate-800 max-w-2xl">
              Silo cleaning, inspection, sanitation, and maintenance—delivered nationwide by
              OSHA-approved, confined-space certified teams. Get rapid response and proven results.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <NavLink
                to="/services/cleaning"
                className="inline-flex items-center rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
              >
                Explore Cleaning
              </NavLink>
              <NavLink
                to="/services/inspection"
                className="inline-flex items-center rounded-xl border px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-white"
              >
                Inspection
              </NavLink>
              <NavLink
                to="/services/sanitation"
                className="inline-flex items-center rounded-xl border px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-white"
              >
                Sanitation
              </NavLink>
              <NavLink
                to="/services/maintenance"
                className="inline-flex items-center rounded-xl border px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-white"
              >
                Maintenance
              </NavLink>
            </div>
          </div>

          {/* Right: keep the same hero image block as Home */}
          <div className="w-2/3 m-auto text-center">
            <figure className="relative">
              <img
                src="/maps/lower48.svg"
                alt="Nationwide coverage across the lower 48 United States"
                className="w-full object-contain"
              />
              <span className="absolute top-[49%] left-[72%] h-3 w-3 rounded-full bg-[#337ec3] shadow-md animate-pulse" />
              <span className="absolute top-[26%] left-[25%] h-3 w-3 rounded-full bg-[#337ec3] shadow-md animate-pulse [animation-delay:.4s]" />
              <span className="absolute top-[39%] left-[47%] h-3 w-3 rounded-full bg-[#337ec3] shadow-md animate-pulse [animation-delay:.8s]" />
              <span className="absolute top-[53%] left-[35%] h-3 w-3 rounded-full bg-[#337ec3] shadow-md animate-pulse [animation-delay:1.2s]" />
              <figcaption className="absolute -right-8 bottom-16 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-slate-800 shadow ring-1 ring-white/60 flex items-center gap-2 transition transform hover:translate-y-[-1px] hover:shadow-md">
                <ShieldCheck className="h-4 w-4 text-green-600" />
                Trusted Across the U.S.
              </figcaption>
            </figure>
            <p className="mt-4 text-sm font-medium text-slate-800">
              Serving all of the lower 48 with reliability you can count on
            </p>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <Section
        kicker="Services"
        title="Comprehensive silo solutions"
        subtitle="Cleaning, inspection, sanitation, and maintenance — tailored to your product, vessel, and schedule."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              t: "Cleaning",
              d: "Bin whips, high‑CFM vacs, hang‑up & mold removal.",
              icon: Brush,
              to: "/services/cleaning",
            },
            {
              t: "Inspection",
              d: "Structural & safety checks, water intrusion ID.",
              icon: Search,
              to: "/services/inspection",
            },
            {
              t: "Sanitation",
              d: "Food‑safe options, infestation mitigation, swab testing.",
              icon: ShieldCheck,
              to: "/services/sanitation",
            },
            {
              t: "Maintenance",
              d: "Preventative programs that minimize downtime.",
              icon: Wrench,
              to: "/services/maintenance",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600/10 text-green-700">
                <c.icon size={20} strokeWidth={2} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{c.t}</h3>
              <p className="mt-1 text-sm text-slate-600">{c.d}</p>
              <NavLink
                to={c.to}
                className="mt-4 inline-flex text-sm font-semibold text-green-700"
              >
                Learn more →
              </NavLink>
            </div>
          ))}
        </div>
      </Section>

      {/* Proof / badges */}
      <Section kicker="Why us" title="Safety, speed, and reliability" className="pt-0">
        <div className="grid gap-6 sm:grid-cols-3">
          <Stat value="24/7" label="Emergency response" />
          <Stat value=">10yrs" label="Nationwide experience" />
          <Stat value="OSHA" label="Approved & confined-space certified" />
        </div>
      </Section>

      {/* CTA band */}
      <Section className="pt-0">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border bg-white p-6 shadow-sm sm:flex-row">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Ready to talk through your application?</h3>
            <p className="text-slate-600">Request service or schedule a consultation.</p>
          </div>
          <div className="flex gap-3">
            <NavLink
              to="/quote"
              className="inline-flex items-center rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
            >
              Request service
            </NavLink>
            <NavLink
              to="/contact"
              className="inline-flex items-center rounded-xl border px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-white"
            >
              Schedule a consultation
            </NavLink>
          </div>
        </div>
      </Section>
    </main>
  );
}
