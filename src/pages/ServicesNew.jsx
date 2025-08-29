import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Phone, Clock, HardHat, MapPin, ClipboardCheck, SprayCan } from "lucide-react";
import { NavLink } from "react-router-dom";
import Page from "./Page.jsx";
import Stat from "./../components/Stat.jsx";
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
                    title="Services Background Video"
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
                            Services
                        </h1>
                        <p className="mt-4 text-lg text-slate-800">
                            We provide silo cleaning, inspection, sanitation, maintenance, and specialized cleaning
                            for plastic &amp; injection molding operations. Our technicians are OSHA-approved and
                            confined-space certified—serving the lower 48 with 24/7 response.
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

                            <figcaption className="absolute -right-8 bottom-16 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-slate-800 shadow ring-1 ring-white/60 flex items-center gap-2 transition transform hover:translate-y-[-1px] hover:shadow-md">
                                <ShieldCheck className="h-4 w-4 text-green-600" /> Trusted Across the U.S.
                            </figcaption>
                        </figure>

                        {/* Grounding line below the map */}
                        <p className="mt-4 text-sm font-medium text-slate-800">
                            Serving all of the lower 48 with reliability you can count on
                        </p>
                    </div>
                </div>
            </section>

            {/* INTERIOR SECTIONS — keep your existing About content inside a padded Page */}
            <Page title={null} noChildMargin={true}>

                {/* Proof / badges */}
                <Section kicker="Why us" title="Safety, speed, and reliability">
                <div className="grid gap-6 sm:grid-cols-3">
                    <Stat value="24/7" label="Emergency response" />
                    <Stat value=">10yrs" label="Nationwide experience" />
                    <Stat value="OSHA" label="Approved & confined-space certified" />
                </div>
                </Section>

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
        </main>
    );
}
