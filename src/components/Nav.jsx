import { NavLink } from "react-router-dom";
import Container from "./Container.jsx";

const linkClass = ({ isActive }) =>
    `rounded-md px-3 py-2 text-sm font-medium ${
        isActive ? "text-slate-900 bg-slate-100" : "text-slate-600 hover:text-slate-900"
    }`;

export default function Nav() {
    return (
        <header className="bg-white sticky top-0 z-50 shadow-sm">
            <Container className="flex h-16 items-center justify-between">
                <NavLink to="/" className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-green-600" aria-hidden />
                    <span className="text-lg font-bold tracking-tight">Silo Clean Pro</span>
                </NavLink>
                <nav className="hidden md:flex items-center gap-1">
                    <NavLink to="/about" className={linkClass}>
                        About
                    </NavLink>
                    <div className="group relative">
                        <NavLink to="/services" className={linkClass}>
                            Services
                        </NavLink>
                        <div className="invisible group-hover:visible absolute right-0 mt-2 w-64 rounded-xl border bg-white p-2 shadow-lg">
                            <NavLink
                                to="/services/cleaning"
                                className="block rounded-md px-3 py-2 text-sm hover:bg-slate-50"
                            >
                                Silo Cleaning
                            </NavLink>
                            <NavLink
                                to="/services/inspection"
                                className="block rounded-md px-3 py-2 text-sm hover:bg-slate-50"
                            >
                                Silo Inspection
                            </NavLink>
                            <NavLink
                                to="/services/sanitation"
                                className="block rounded-md px-3 py-2 text-sm hover:bg-slate-50"
                            >
                                Silo Sanitation
                            </NavLink>
                            <NavLink
                                to="/services/maintenance"
                                className="block rounded-md px-3 py-2 text-sm hover:bg-slate-50"
                            >
                                Silo Maintenance
                            </NavLink>
                            <NavLink
                                to="/services/specialized"
                                className="block rounded-md px-3 py-2 text-sm hover:bg-slate-50"
                            >
                                Specialized Cleaning
                            </NavLink>
                        </div>
                    </div>
                    <NavLink to="/contact" className={linkClass}>
                        Contact
                    </NavLink>
                </nav>
                <div className="flex items-center gap-2">
                    <NavLink
                        to="/quote"
                        className="hidden sm:inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600"
                    >
                        Request a Quote
                    </NavLink>
                    <button className="md:hidden rounded-lg border px-3 py-2 text-sm">
                        Menu
                    </button>
                </div>
            </Container>
        </header>
    );
}