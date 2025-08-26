import { NavLink } from "react-router-dom";

export default function QuoteCTA({
  className = "mt-12",
  to = "/quote",
  label = "Request a Quote",
}) {
  return (
    <section className={className}>
      <NavLink
        to={to}
        className="inline-flex items-center rounded-xl bg-green-600 px-5 py-3 font-semibold text-white shadow hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
      >
        {label}
      </NavLink>
    </section>
  );
}
