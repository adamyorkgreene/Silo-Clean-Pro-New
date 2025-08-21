import Page from "./Page.jsx";

export default function Contact() {
    return (
        <Page title="Contact Us">
            <div className="grid gap-6 lg:grid-cols-2">
                <form className="rounded-2xl border bg-white p-6 shadow-sm">
                    <div className="grid gap-4">
                        <input
                            className="rounded-lg border px-3 py-2"
                            placeholder="Name"
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
                        <textarea
                            className="min-h-32 rounded-lg border px-3 py-2"
                            placeholder="How can we help?"
                        />
                        <button
                            type="button"
                            className="rounded-xl px-4 py-2 text-white bg-green-600 hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600"
                        >
                            Send
                        </button>
                    </div>
                </form>
                <div className="rounded-2xl border bg-white p-6 shadow-sm">
                    <h4 className="text-lg font-semibold">Call Us</h4>
                    <p className="mt-1 text-slate-600">(888) 623-6050</p>
                    <h4 className="mt-6 text-lg font-semibold">Coverage</h4>
                    <p className="mt-1 text-slate-600">
                        Nationwide service with emergency response across the USA.
                    </p>
                </div>
            </div>
        </Page>
    );
}