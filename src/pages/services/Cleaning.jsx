import Page from "../Page.jsx";

export default function Cleaning() {
    return (
        <Page title="Silo Cleaning">
            <ul className="grid gap-2 sm:grid-cols-2">
                {[
                    "Hang-up removal",
                    "Mold & bad grain removal",
                    "High-volume vacuums & bin whips",
                    "Outside cleaning, media blasting & painting",
                    "Hydro, soda & dry ice blasting",
                    "Silo cone / rotten corn removal",
                ].map((i) => (
                    <li key={i} className="rounded-lg border bg-white p-3 text-sm">
                        {i}
                    </li>
                ))}
            </ul>
        </Page>
    );
}