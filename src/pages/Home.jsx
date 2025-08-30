import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Brush, Search, ShieldCheck, Wrench } from "lucide-react";
import Section from "../components/Section.jsx";
import Stat from "../components/Stat.jsx";
import Pill from "../components/Pill.jsx";
import { getSortedPosts } from "../data/blogPosts.js";

/** Background Stream iframe that auto-scales to cover.
 *  Desktop (>=1050px): anchor to TOP (crop bottom more).
 *  Mobile  (<1050px): centered with optional offsetYPercent.
 */
function HeroBackgroundScaledIframe({
  src,
  videoAspect = 16 / 9,    // set to your true video aspect if not 16:9
  className = "",
  overlay = false,          // set true to add a dark overlay for readability
  opacity = 0.4,
  fudgePct = 0.30,          // multiplicative overscale (e.g., 0.30 = +30%)
  offsetYPercent = 10,      // mobile-only: +10 moves video DOWN to show more TOP (crop bottom more)
  desktopBreakpoint = 1050,
}) {
  const wrapRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [useTopAnchor, setUseTopAnchor] = useState(false); // desktop anchor mode

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const updateScale = () => {
      const { width, height } = el.getBoundingClientRect();
      if (!width || !height) return;

      const containerAspect = width / height;
      const base =
        containerAspect > videoAspect
          ? containerAspect / videoAspect   // grow height
          : videoAspect / containerAspect;  // grow width

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

  // Build style depending on anchor mode
  const baseStyle = {
    width: "100%",
    height: "100%",
    transformOrigin: useTopAnchor ? "center top" : "center",
    transform: useTopAnchor
      ? `translate(-50%, 0) scale(${scale})`                 // TOP-anchored on desktop
      : `translate(-50%, -50%) scale(${scale})`,             // centered on mobile
    top: useTopAnchor ? 0 : `calc(50% + ${offsetYPercent}%)`, // top alignment vs centered offset
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
          title="Hero Background Video"
        />
      </div>
      {overlay && <div className="absolute inset-0 bg-black/20" />}
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const latestPosts = getSortedPosts().slice(0, 4);
  return (
    <main className="bg-slate-50">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <HeroBackgroundScaledIframe
          src="https://customer-7l16vj4uw6jxacav.cloudflarestream.com/171277311967d2f514efe08452f6ac06/iframe?muted=true&preload=true&loop=true&autoplay=true&controls=false"
          videoAspect={16 / 9}
          fudgePct={0.30}
          offsetYPercent={10}
          overlay={true}     // add dimming overlay here instead of iframe opacity
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid items-center gap-8 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Professional Silo Cleaning & Inspection
            </h1>
            <p className="mt-4 text-lg text-slate-800">
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
          <div className="w-2/3 m-auto text-center">
            {/* Map + Badge */}
            <figure className="relative">
              <img
                src="/maps/lower48.svg"
                alt="Nationwide coverage across the lower 48 United States"
                className="w-full object-contain"
              />

              {/* Dots positioned roughly over West, Midwest, East */}
              <span className="absolute top-[49%] left-[72%] h-3 w-3 rounded-full bg-[#337ec3] shadow-md animate-pulse" />
              <span className="absolute top-[26%] left-[25%] h-3 w-3 rounded-full bg-[#337ec3] shadow-md animate-pulse [animation-delay:.4s]" />
              <span className="absolute top-[39%] left-[47%] h-3 w-3 rounded-full bg-[#337ec3] shadow-md animate-pulse [animation-delay:.8s]" />
              <span className="absolute top-[53%] left-[35%] h-3 w-3 rounded-full bg-[#337ec3] shadow-md animate-pulse [animation-delay:1.2s]" />


              <figcaption className="absolute -right-8 bottom-16 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-slate-800 shadow ring-1 ring-white/60 flex items-center gap-2 transition transform hover:translate-y-[-1px] hover:shadow-md"> <ShieldCheck className="h-4 w-4 text-green-600" /> Trusted Across the U.S. </figcaption>
            </figure>

            {/* Grounding line below the map */}
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
        subtitle="From deep cleaning and sanitation to inspections and maintenance, we cover every stage of silo care."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              t: "Cleaning",
              d: "Bin whips, high-volume vacs, hang-up & mold removal.",
              icon: Brush
            },
            {
              t: "Inspection",
              d: "Structural, safety, water intrusion, and corrosion checks.",
              icon: Search
            },
            {
              t: "Sanitation",
              d: "Advanced sanitation to reduce contamination and pests.",
              icon: ShieldCheck
            },
            {
              t: "Maintenance",
              d: "Preventative programs that minimize downtime.",
              icon: Wrench
            }
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

      {/* Blog preview */}
      <Section
        kicker="Blog"
        title="Latest from our team"
        subtitle="Recent safety tips, sanitation best practices, and field insights."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {latestPosts.map((p) => (
            <article
              key={p.slug}
              className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                <NavLink to={`/blog/${p.slug}`} className="hover:underline">{p.title}</NavLink>
              </h3>
              <p className="mt-2 text-sm text-slate-600 [&>span.mx-2]:hidden [&>time]:before:content-['·'] [&>time]:before:mx-2">
                <span className="font-medium text-slate-700">{p.author}</span>
                <span className="mx-2">•</span>
                <time dateTime={p.date}>{new Date(p.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" })}</time>
              </p>
              <div className="mt-4">
                <NavLink to={`/blog/${p.slug}`} className="text-sm font-semibold text-green-700 hover:underline">Read post</NavLink>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <NavLink
            to="/blog"
            className="inline-flex items-center rounded-xl border px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-white"
          >
            See more posts
          </NavLink>
        </div>
      </Section>
    </main>
  );
}
