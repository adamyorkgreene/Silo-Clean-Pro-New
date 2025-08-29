import { NavLink } from "react-router-dom";
import { FileText, Phone } from "lucide-react";

export default function QuoteCTA({
  className = "mt-12"
}) {
  return (
    <>
      <section className={className}>
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border bg-white p-6 shadow-sm sm:flex-row">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Ready to get started?
            </h3>
            <p className="text-slate-600">
              Request a custom quote and talk with our team today.
            </p>
          </div>
          <NavLink
            to="/quote"
            className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white shadow hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
          >
            <FileText className="h-5 w-5" />
            Get a Quote
          </NavLink>
        </div>
      </section>
      
      <section className={className}>
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
    </>
  );
}
