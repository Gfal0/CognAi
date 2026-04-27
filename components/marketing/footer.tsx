import Link from "next/link";

import { Logo } from "@/components/shared/logo";

export function Footer() {
  return (
    <footer className="border-t border-white/6">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1fr_0.7fr_0.7fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
            Plataforma SaaS para estudo inteligente com IA, onboarding adaptativo, cronograma dinamico e analise de progresso.
          </p>
        </div>
        <div>
          <p className="font-medium text-white">Produto</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-400">
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/onboarding">Onboarding</Link>
            <Link href="/admin">Admin</Link>
          </div>
        </div>
        <div>
          <p className="font-medium text-white">Legal</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-400">
            <Link href="/">Privacidade</Link>
            <Link href="/">LGPD</Link>
            <Link href="/">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

