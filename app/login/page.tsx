import Link from "next/link";

import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <Logo />
        <h1 className="mt-8 text-3xl font-semibold text-white">Entrar na CognAi</h1>
        <p className="mt-3 text-slate-400">Email, Google e Apple prontos para integrar com NextAuth, Clerk ou Supabase Auth.</p>
        <div className="mt-8 grid gap-4">
          <input className="h-12 rounded-lg border border-white/10 bg-white/[0.04] px-4 text-white" placeholder="Seu email" />
          <input className="h-12 rounded-lg border border-white/10 bg-white/[0.04] px-4 text-white" placeholder="Sua senha" type="password" />
          <Button>Entrar</Button>
          <Button variant="secondary">Continuar com Google</Button>
          <Button variant="secondary">Continuar com Apple</Button>
        </div>
        <div className="mt-6 flex items-center justify-between text-sm text-slate-400">
          <Link href="/forgot-password">Esqueci a senha</Link>
          <Link href="/signup">Criar conta</Link>
        </div>
      </div>
    </div>
  );
}

