import Container from "./Container.jsx";

export default function TopBar() {
    return (
        <div className="bg-slate-900 text-slate-200 text-sm">
            <Container className="flex items-center justify-between py-2">
                <p className="font-medium">
                    Nationwide | OSHA-Approved | Confined Space Certified
                </p>
                <a
                    href="tel:18886236050"
                    className="inline-flex items-center gap-2 font-semibold hover:opacity-90"
                >
                    <span>Call</span>
                    <span className="hidden sm:inline">(888) 623-6050</span>
                </a>
            </Container>
        </div>
    );
}