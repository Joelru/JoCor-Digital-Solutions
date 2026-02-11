export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-block bg-emerald-100 text-[hsl(var(--accent))] px-4 py-1.5 rounded-full text-sm ${className}`}
    >
      {children}
    </span>
  );
}
