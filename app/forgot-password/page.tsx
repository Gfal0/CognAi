import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <Logo />
        <h1 className="mt-8 text-3xl font-semibold text-white">Recuperar senha</h1>
        <p className="mt-3 text-slate-400">Estrutura pronta para email de recuperacao via Resend ou SendGrid.</p>
        <div className="mt-8 grid gap-4">
          <input className="h-12 rounded-lg border border-white/10 bg-white/[0.04] px-4 text-white" placeholder="Seu email" />
          <Button>Enviar link</Button>
        </div>
      </div>
    </div>
  );
}

