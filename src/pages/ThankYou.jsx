import Page from "./Page.jsx";
import { useLocation, NavLink } from "react-router-dom";
import { useEffect } from "react";

export default function ThankYou() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const form = params.get("form") || "contact";

  const title = form === "quote" ? "Thanks - Quote Request Received" : "Thanks - Message Received";
  const desc =
    form === "quote"
      ? "We received your request and will follow up shortly with next steps."
      : "Thanks for reaching out. We'll get back to you as soon as possible.";

  // Ensure thank-you page is not indexed
  useEffect(() => {
    let el = document.head.querySelector('meta[name="robots"]');
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute("name", "robots");
      document.head.appendChild(el);
    }
    const prev = el.getAttribute("content");
    el.setAttribute("content", "noindex, nofollow");
    return () => {
      const current = document.head.querySelector('meta[name="robots"]');
      if (current) {
        if (prev) current.setAttribute("content", prev);
        else current.remove();
      }
    };
  }, []);

  // Fire Google Ads conversion on thank-you page (covers both contact + quote forms)
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", { send_to: "AW-17027793247/XJ4_CKKCxc8bEN-Cvrc_" });
    }
  }, []);

  return (
    <Page title={title}>
      <p className="text-slate-700">{desc}</p>
      <div className="mt-6 flex gap-3">
        <NavLink
          to="/"
          className="inline-flex items-center rounded-xl border px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-white"
        >
          Back to home
        </NavLink>
        <NavLink
          to="/services"
          className="inline-flex items-center rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-green-700"
        >
          Explore services
        </NavLink>
      </div>
    </Page>
  );
}
