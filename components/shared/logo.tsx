import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-brand-500 via-accent-500 to-neon text-sm font-semibold text-white shadow-glow">
        C
      </span>
      {!compact && (
        <span className="flex flex-col">
          <span className="text-lg font-semibold tracking-tight text-white">CognAi</span>
          <span className="text-xs text-slate-400">Smart study OS</span>
        </span>
      )}
    </Link>
  );
}

