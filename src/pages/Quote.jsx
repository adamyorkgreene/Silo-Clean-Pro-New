import Page from "./Page.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSEO } from "../lib/useSEO.js";

export default function Quote() {
  const navigate = useNavigate();
  useSEO({
    title: "Request a Quote | Silo Clean Pro",
    description: "Request a quote for silo cleaning, inspection, sanitation, or maintenance. Fast response from OSHA-approved teams.",
    canonical: "https://www.silocleanpro.com/quote",
    og: { type: "website", image: "https://www.silocleanpro.com/og-image.jpg" },
    twitter: { card: "summary_large_image", image: "https://www.silocleanpro.com/og-image.jpg" },
  });
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  async function onSubmit(e) {
    e.preventDefault();
    if (!name || !email || !details) {
      setStatus({ state: "error", msg: "Please provide name, email, and project details." });
      return;
    }
    setStatus({ state: "loading", msg: "Sending..." });
    try {
      const apiBase = import.meta.env?.VITE_API_BASE || "";
      const res = await fetch(`${apiBase}/api/quote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, phone, serviceType, details }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data?.ok === false) throw new Error(data?.error || "Failed to send");
      setStatus({ state: "success", msg: "Thanks! We received your request and will respond shortly." });
      setName(""); setCompany(""); setEmail(""); setPhone(""); setServiceType(""); setDetails("");
      navigate(`/thank-you?form=quote`);
    } catch (err) {
      setStatus({ state: "error", msg: err.message || "Something went wrong. Please try again." });
    }
  }

  return (
    <Page title="Request a Quote">
      <form onSubmit={onSubmit} className="rounded-2xl border bg-white p-6 shadow-sm">
        {status.state !== "idle" && (
          <div className={`mb-4 rounded-lg border px-3 py-2 text-sm ${status.state === "success" ? "border-green-200 bg-green-50 text-green-800" : status.state === "error" ? "border-red-200 bg-red-50 text-red-800" : "border-slate-200 bg-slate-50 text-slate-700"}`}>
            {status.msg}
          </div>
        )}
        <div className="grid gap-4 sm:grid-cols-2">
          <input className="rounded-lg border px-3 py-2" placeholder="Name" name="name" autoComplete="name" value={name} onChange={(e)=>setName(e.target.value)} required />
          <input className="rounded-lg border px-3 py-2" placeholder="Company" name="company" autoComplete="organization" value={company} onChange={(e)=>setCompany(e.target.value)} />
          <input className="rounded-lg border px-3 py-2" placeholder="Email" type="email" name="email" autoComplete="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
          <input className="rounded-lg border px-3 py-2" placeholder="Phone" name="phone" autoComplete="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} />
          <select className="rounded-lg border px-3 py-2 sm:col-span-2" name="serviceType" value={serviceType} onChange={(e)=>setServiceType(e.target.value)}>
            <option value="">Service Type</option>
            <option>Silo Cleaning</option>
            <option>Silo Inspection</option>
            <option>Silo Sanitation</option>
            <option>Silo Maintenance</option>
            <option>Specialized / Other</option>
          </select>
          <textarea className="min-h-32 rounded-lg border px-3 py-2 sm:col-span-2" placeholder="Project details (location, material, timeline)" name="details" value={details} onChange={(e)=>setDetails(e.target.value)} required />
        </div>
        <button type="submit" disabled={status.state === "loading"} className="mt-4 rounded-xl px-4 py-2 text-white bg-green-600 hover:bg-green-700 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600">
          {status.state === "loading" ? "Sending..." : "Submit"}
        </button>
      </form>
    </Page>
  );
}
