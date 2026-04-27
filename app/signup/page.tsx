import Link from "next/link";

import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <Logo />
        <h1 className="mt-8 text-3xl font-semibold text-white">Criar conta</h1>
        <p className="mt-3 text-slate-400">Fluxo base para cadastro, verificacao de email e criacao de sessao segura.</p>
        <div className="mt-8 grid gap-4">
          <input className="h-12 rounded-lg border border-white/10 bg-white/[0.04] px-4 text-white" placeholder="Nome completo" />
          <input className="h-12 rounded-lg border border-white/10 bg-white/[0.04] px-4 text-white" placeholder="Seu email" />
          <input className="h-12 rounded-lg border border-white/10 bg-white/[0.04] px-4 text-white" placeholder="Criar senha" type="password" />
          <Button>Criar minha conta</Button>
        </div>
        <p className="mt-6 text-sm text-slate-400">
          Ja tem conta? <Link href="/login" className="text-white">Entrar</Link>
        </p>
      </div>
    </div>
  );
}

