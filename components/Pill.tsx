export default function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line/10 bg-card/60 px-3 py-1.5 text-sm text-fg/90">
      {children}
    </span>
  );
}
