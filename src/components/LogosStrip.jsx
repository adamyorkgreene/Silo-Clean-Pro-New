import Container from "./Container.jsx";

export default function LogosStrip({ className = "" }) {
  const logos = [
    { src: "/avetta.png", alt: "Avetta", tweak: "scale-95" },
    { src: "/cattlemens.png", alt: "U.S. Cattlemen's Association" },
    { src: "/nts.png", alt: "National Trench Safety" },
    { src: "/isn.png", alt: "ISNetworld Member Contractor" },
    { src: "/sala.png", alt: "DBI SALA" },
  ];

  return (
    <section
      className={
        `py-6 sm:py-8 border-y border-slate-200 bg-white/90 ${className}`
      }
      aria-label="Certifications and associations"
    >
      <Container>
        <div className="flex flex-wrap items-center justify-evenly gap-y-8 sm:gap-y-10 opacity-90">
          {logos.map((l) => (
            <img
              key={l.alt}
              src={l.src}
              alt={l.alt}
              className={`h-9 sm:h-11 object-contain max-w-[110px] sm:max-w-[130px] ${l.tweak || ""}`}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
