import { NavLink } from "react-router-dom";
import Container from "./Container.jsx";

export default function Footer() {
    return (
        <footer className="border-t bg-white">
            <Container className="grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                    <div className="mb-3 flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-green-600" />
                        <span className="text-lg font-bold">Silo Clean Pro</span>
                    </div>
                    <p className="text-sm text-slate-600">
                        A division of GreeneServices, Inc.
                    </p>
                </div>
                <div>
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-700">
                        Services
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                        <li>
                            <NavLink to="/services/cleaning" className="hover:underline">
                                Silo Cleaning
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/services/inspection" className="hover:underline">
                                Silo Inspection
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/services/sanitation" className="hover:underline">
                                Silo Sanitation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/services/maintenance" className="hover:underline">
                                Silo Maintenance
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/services/specialized" className="hover:underline">
                                Specialized Cleaning
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-700">
                        Contact
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                        <li>
                            <a className="hover:underline" href="tel:18886236050">
                                (888) 623-6050
                            </a>
                        </li>
                        <li>
                            <NavLink className="hover:underline" to="/contact">
                                Email Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="hover:underline" to="/quote">
                                Request a Quote
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-700">
                        Coverage
                    </h4>
                    <p className="text-sm text-slate-600">
                        Nationwide service with emergency response throughout the USA.
                    </p>
                </div>
            </Container>
            <div className="border-t py-6 text-center text-xs text-slate-500">
                © {new Date().getFullYear()} Silo Clean Pro · OSHA-Approved · Licensed & Insured
            </div>
        </footer>
    );
}