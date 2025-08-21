export default function Pill({ children }) {
    return (
        <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-slate-700">
            {children}
        </span>
    );
}