"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

type AuthFormProps = {
  mode: "login" | "signup";
};

export function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const isSignup = mode === "signup";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`/api/auth/${isSignup ? "signup" : "login"}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(isSignup ? { name, email, password } : { email, password })
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Nao foi possivel continuar.");
      }

      router.push("/dashboard");
      router.refresh();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Erro inesperado.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
      {isSignup && (
        <input
          className="h-12 rounded-lg border border-white/10 bg-white/[0.04] px-4 text-white"
          placeholder="Nome completo"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      )}
      <input
        className="h-12 rounded-lg border border-white/10 bg-white/[0.04] px-4 text-white"
        placeholder="Seu email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        className="h-12 rounded-lg border border-white/10 bg-white/[0.04] px-4 text-white"
        placeholder={isSignup ? "Criar senha" : "Sua senha"}
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      {error && <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-200">{error}</div>}
      <Button type="submit" disabled={loading}>
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {isSignup ? "Criar minha conta" : "Entrar"}
      </Button>
      {isSignup ? (
        <p className="text-sm text-slate-400">
          Ja tem conta?{" "}
          <Link href="/login" className="text-white">
            Entrar
          </Link>
        </p>
      ) : (
        <div className="flex items-center justify-between text-sm text-slate-400">
          <Link href="/forgot-password">Esqueci a senha</Link>
          <Link href="/signup">Criar conta</Link>
        </div>
      )}
    </form>
  );
}

