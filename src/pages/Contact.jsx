import Page from "./Page.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSEO } from "../lib/useSEO.js";

export default function Contact() {
  useSEO({
    title: "Contact Us | Silo Clean Pro",
    description: "Get in touch for silo cleaning, inspections, sanitation, and maintenance. Call (888) 623-6050 or send a message.",
    canonical: "https://www.silocleanpro.com/contact",
    og: { type: "website", image: "https://www.silocleanpro.com/og-greeneservices.jpg" },
    twitter: { card: "summary_large_image", image: "https://www.silocleanpro.com/og-greeneservices.jpg" },
  });
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({ state: "idle", msg: "" });
  // Turnstile temporarily disabled

  async function onSubmit(e) {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus({ state: "error", msg: "Please provide name, email, and a message." });
      return;
    }
    setStatus({ state: "loading", msg: "Sending..." });
    try {
      const apiBase = import.meta.env?.VITE_API_BASE || "";
      const res = await fetch(`${apiBase}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data?.ok === false) throw new Error(data?.error || "Failed to send");
      setStatus({ state: "success", msg: "Thanks! Your message has been sent." });
      setName(""); setEmail(""); setPhone(""); setMessage("");
      navigate(`/thank-you?form=contact`);
    } catch (err) {
      setStatus({ state: "error", msg: err.message || "Something went wrong. Please try again." });
    }
  }

  return (
    <Page title="Contact Us">
      <div className="grid gap-6 lg:grid-cols-2">
        <form onSubmit={onSubmit} className="rounded-2xl border bg-white p-6 shadow-sm">
          {status.state !== "idle" && (
            <div className={`mb-4 rounded-lg border px-3 py-2 text-sm ${status.state === "success" ? "border-green-200 bg-green-50 text-green-800" : status.state === "error" ? "border-red-200 bg-red-50 text-red-800" : "border-slate-200 bg-slate-50 text-slate-700"}`}>
              {status.msg}
            </div>
          )}
          <div className="grid gap-4">
            <input className="rounded-lg border px-3 py-2" placeholder="Name" name="name" autoComplete="name" value={name} onChange={(e)=>setName(e.target.value)} required />
            <input className="rounded-lg border px-3 py-2" placeholder="Email" type="email" name="email" autoComplete="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
            <input className="rounded-lg border px-3 py-2" placeholder="Phone" name="phone" autoComplete="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} />
            <textarea className="min-h-32 rounded-lg border px-3 py-2" placeholder="How can we help?" name="message" value={message} onChange={(e)=>setMessage(e.target.value)} required />
            <button type="submit" disabled={status.state === "loading"} className="rounded-xl px-4 py-2 text-white bg-green-600 hover:bg-green-700 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600">
              {status.state === "loading" ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h4 className="text-lg font-semibold">Call Us</h4>
          <p className="mt-1 text-slate-600">(888) 623-6050</p>
          <h4 className="mt-6 text-lg font-semibold">Coverage</h4>
          <p className="mt-1 text-slate-600">Nationwide service with emergency response across the USA.</p>
        </div>
      </div>
    </Page>
  );
}
