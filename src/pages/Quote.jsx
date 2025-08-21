import Page from "./Page.jsx";

export default function Quote() {
    return (
        <Page title="Request a Quote">
            <form className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="grid gap-4 sm:grid-cols-2">
                    <input
                        className="rounded-lg border px-3 py-2"
                        placeholder="Name"
                    />
                    <input
                        className="rounded-lg border px-3 py-2"
                        placeholder="Company"
                    />
                    <input
                        className="rounded-lg border px-3 py-2"
                        placeholder="Email"
                        type="email"
                    />
                    <input
                        className="rounded-lg border px-3 py-2"
                        placeholder="Phone"
                    />
                    <select className="rounded-lg border px-3 py-2 sm:col-span-2">
                        <option>Service Type</option>
                        <option>Silo Cleaning</option>
                        <option>Silo Inspection</option>
                        <option>Silo Sanitation</option>
                        <option>Silo Maintenance</option>
                        <option>Specialized / Other</option>
                    </select>
                    <textarea
                        className="min-h-32 rounded-lg border px-3 py-2 sm:col-span-2"
                        placeholder="Project details (location, material, timeline)"
                    />
                </div>
                <button
                    type="button"
                    className="mt-4 rounded-xl px-4 py-2 text-white bg-green-600 hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600"
                >
                    Submit
                </button>
            </form>
        </Page>
    );
}