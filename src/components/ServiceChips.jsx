export default function ServiceChips({
  className = "mt-10",
  title = "Additional Services We Offer",
  chips = [
    "Plastic & Injection Molding Silo Cleaning",
    "Media Blasting",
    "Sanitizing Applications",
    "Surface Preparation",
  ],
}) {
  return (
    <section className={className}>
      <h3 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {chips.map((chip) => (
          <span key={chip} className="rounded-full border bg-white px-3 py-1 text-sm text-slate-700 shadow-sm">
            {chip}
          </span>
        ))}
      </div>
    </section>
  );
}
