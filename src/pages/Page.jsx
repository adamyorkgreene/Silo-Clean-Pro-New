import Section from "../components/Section.jsx";

export default function Page({ title, children }) {
    return (
        <main className="min-h-[50vh] bg-slate-50">
            <Section title={title}>
                <div className="prose max-w-none prose-slate">
                    {children}
                </div>
            </Section>
        </main>
    );
}