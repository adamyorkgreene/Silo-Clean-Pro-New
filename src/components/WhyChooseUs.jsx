import { MapPin, Clock, ShieldCheck, HardHat, ClipboardCheck } from "lucide-react";

export default function WhyChooseUs({
  className = "mt-12",
  title = "Why Choose Us?",
  items = [
    { icon: MapPin, text: "Nationwide Service" },
    { icon: Clock, text: "Emergency Response" },
    { icon: ShieldCheck, text: "OSHA-Approved" },
    { icon: HardHat, text: "Confined Space Certified Techs" },
    { icon: ShieldCheck, text: "Licensed & Insured" },
    { icon: ClipboardCheck, text: "Dependable Service & Support" },
  ],
}) {
  return (
    <section className={className}>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-3 rounded-xl border bg-white p-4 shadow-sm">
            <Icon className="h-5 w-5 text-green-600" />
            <span className="text-sm font-semibold text-slate-800">{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
