export default function Stat({ value, label }) {
    return (
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-3xl font-bold text-slate-900">{value}</div>
            <div className="mt-1 text-sm text-slate-600">{label}</div>
        </div>
    );
}