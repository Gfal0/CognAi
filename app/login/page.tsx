import { AuthForm } from "@/components/auth/auth-form";
import { Logo } from "@/components/shared/logo";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <Logo />
        <h1 className="mt-8 text-3xl font-semibold text-white">Entrar na CognAi</h1>
        <p className="mt-3 text-slate-400">Entre com email e senha para acessar seu dashboard e seus planos.</p>
        <AuthForm mode="login" />
      </div>
    </div>
  );
}
