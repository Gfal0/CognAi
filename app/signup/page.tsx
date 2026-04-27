import { AuthForm } from "@/components/auth/auth-form";
import { Logo } from "@/components/shared/logo";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <Logo />
        <h1 className="mt-8 text-3xl font-semibold text-white">Criar conta</h1>
        <p className="mt-3 text-slate-400">
          Cadastro com email e senha. Se o Resend estiver configurado, a pessoa recebe um email confirmando o cadastro.
        </p>
        <AuthForm mode="signup" />
      </div>
    </div>
  );
}
