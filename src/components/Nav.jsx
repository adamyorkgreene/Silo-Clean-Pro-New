import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "./Container.jsx";
 
const linkClass = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-medium ${
    isActive ? "text-slate-900 bg-slate-100" : "text-slate-600 hover:text-slate-900"
  }`;
 
export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // desktop dropdown state
  const [servicesMobileOpen, setServicesMobileOpen] = useState(false);
  const servicesRef = useRef(null);
  const closeTimer = useRef(null);
 
  // Close desktop dropdown on outside click
  useEffect(() => {
    const onClick = (e) => {
      if (!servicesRef.current) return;
      if (servicesRef.current.contains(e.target)) return;
      setServicesOpen(false);
    };
    document.addEventListener("pointerdown", onClick);
    return () => document.removeEventListener("pointerdown", onClick);
  }, []);
 
  const openWithCancelDelay = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeWithDelay = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 160); // small grace period
  };
 
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src="/SiloCleanProLogo.svg" alt="Silo Clean Pro" className="h-11 w-auto" />
        </NavLink>
 
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
 
          {/* Services dropdown (desktop) */}
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={openWithCancelDelay}
            onMouseLeave={closeWithDelay}
          >
            {/* trigger */}
            <NavLink to="/services" className={linkClass} onFocus={openWithCancelDelay}>
              Services
            </NavLink>
 
            {/* submenu */}
            <div
              className={[
                "absolute right-0 top-full pt-2", // pt-2 creates a hover buffer area; no gap flicker
                "transition",
                servicesOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none",
              ].join(" ")}
            >
              <div className="w-64 rounded-xl border bg-white p-2 shadow-lg focus-within:opacity-100">
                <NavLink
                  to="/services/cleaning"
                  className="block rounded-md px-3 py-2 text-sm hover:bg-slate-50"
                  onClick={() => setServicesOpen(false)}
                >
                  Silo Cleaning
                </NavLink>
                <NavLink
                  to="/services/inspection"
                  className="block rounded-md px-3 py-2 text-sm hover:bg-slate-50"
                  onClick={() => setServicesOpen(false)}
                >
                  Silo Inspection
                </NavLink>
                <NavLink
                  to="/services/sanitation"
                  className="block rounded-md px-3 py-2 text-sm hover:bg-slate-50"
                  onClick={() => setServicesOpen(false)}
                >
                  Silo Sanitation
                </NavLink>
                <NavLink
                  to="/services/maintenance"
                  className="block rounded-md px-3 py-2 text-sm hover:bg-slate-50"
                  onClick={() => setServicesOpen(false)}
                >
                  Silo Maintenance
                </NavLink>
                <NavLink
                  to="/services/specialized"
                  className="block rounded-md px-3 py-2 text-sm hover:bg-slate-50"
                  onClick={() => setServicesOpen(false)}
                >
                  Specialized Cleaning
                </NavLink>
              </div>
            </div>
          </div>
 
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>
 
        {/* Right CTAs */}
        <div className="flex items-center gap-2">
          <NavLink
            to="/quote"
            className="hidden sm:inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600"
          >
            Request a Quote
          </NavLink>
          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-lg border px-3 py-2 text-sm"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            Menu
          </button>
        </div>
      </Container>
 
      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={[
          "md:hidden overflow-hidden border-t bg-white",
          "transition-[max-height] duration-300 ease-out",
          mobileOpen ? "max-h-[26rem]" : "max-h-0",
        ].join(" ")}
      >
        <Container className="py-3">
          <div className="flex flex-col gap-1">
            <NavLink
              to="/about"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              onClick={() => setMobileOpen(false)}
            >
              About
            </NavLink>
 
            {/* Services disclosure on mobile */}
            <button
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              onClick={() => setServicesMobileOpen((v) => !v)}
              aria-expanded={servicesMobileOpen}
            >
              <span>Services</span>
              <span className={`transition-transform ${servicesMobileOpen ? "rotate-180" : ""}`}>
                ▾
              </span>
            </button>
            <div
              className={[
                "ml-2 overflow-hidden transition-[max-height] duration-300 ease-out",
                servicesMobileOpen ? "max-h-96" : "max-h-0",
              ].join(" ")}
            >
              <div className="mt-1 flex flex-col">
                <NavLink
                  to="/services/cleaning"
                  className="rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  onClick={() => {
                    setMobileOpen(false);
                    setServicesMobileOpen(false);
                  }}
                >
                  Silo Cleaning
                </NavLink>
                <NavLink
                  to="/services/inspection"
                  className="rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  onClick={() => {
                    setMobileOpen(false);
                    setServicesMobileOpen(false);
                  }}
                >
                  Silo Inspection
                </NavLink>
                <NavLink
                  to="/services/sanitation"
                  className="rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  onClick={() => {
                    setMobileOpen(false);
                    setServicesMobileOpen(false);
                  }}
                >
                  Silo Sanitation
                </NavLink>
                <NavLink
                  to="/services/maintenance"
                  className="rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  onClick={() => {
                    setMobileOpen(false);
                    setServicesMobileOpen(false);
                  }}
                >
                  Silo Maintenance
                </NavLink>
                <NavLink
                  to="/services/specialized"
                  className="rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  onClick={() => {
                    setMobileOpen(false);
                    setServicesMobileOpen(false);
                  }}
                >
                  Specialized Cleaning
                </NavLink>
              </div>
            </div>
 
            <NavLink
              to="/contact"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </NavLink>
 
            <NavLink
              to="/quote"
              className="mt-1 inline-flex items-center justify-center rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
              onClick={() => setMobileOpen(false)}
            >
              Request a Quote
            </NavLink>
          </div>
        </Container>
      </div>
    </header>
  );
}