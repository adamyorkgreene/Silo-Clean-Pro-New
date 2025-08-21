import Container from "./Container.jsx";

export default function Section({ kicker, title, subtitle, children, className = "" }) {
    return (
        <section className={`py-16 sm:py-20 ${className}`}>
            <Container>
                {kicker && (
                    <p className="text-xs font-semibold uppercase tracking-wider text-green-700">
                        {kicker}
                    </p>
                )}
                {title && (
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        {title}
                    </h2>
                )}
                {subtitle && (
                    <p className="mt-3 max-w-3xl text-base text-slate-600">
                        {subtitle}
                    </p>
                )}
                <div className="mt-8">{children}</div>
            </Container>
        </section>
    );
}