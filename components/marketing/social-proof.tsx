import Link from "next/link";

import { pricing } from "@/lib/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

export function SocialProof() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Lancamento"
            title="Sem numero inflado, sem depoimento inventado"
            description="A CognAi ainda esta entrando no ar. Aqui a interface mostra com honestidade o que ja esta operacional e o que depende das suas credenciais de producao."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-lg font-semibold text-white">Cadastro funcional</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Criacao de conta, login por email e sessao segura por cookie.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-lg font-semibold text-white">Plano visivel na hora</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                O onboarding agora devolve um cronograma renderizado ao finalizar.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-lg font-semibold text-white">Email de boas-vindas</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Envio automatico quando o Resend estiver configurado no ambiente.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm uppercase tracking-[0.18em] text-neon">Estado atual</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
              <li>- Nao mostramos quantidade de usuarios nem metricas que ainda nao existem.</li>
              <li>- A experiencia inicial foi ajustada para um produto em fase de lancamento.</li>
              <li>- A base esta pronta para receber banco, email, IA e pagamentos reais.</li>
            </ul>
          </div>
          <div id="precos" className="rounded-xl border border-brand-500/30 bg-brand-500/8 p-6">
            <div className="grid gap-5 lg:grid-cols-3">
              {pricing.map((plan) => (
                <div key={plan.name} className="rounded-xl border border-white/10 bg-background/80 p-5">
                  <p className="text-sm text-neon">{plan.name}</p>
                  <p className="mt-3 text-3xl font-semibold text-white">{plan.price}</p>
                  <p className="mt-2 text-sm text-slate-300">{plan.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {plan.features.map((feature) => (
                      <li key={feature}>- {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button asChild>
                <Link href="/signup">Comecar gratis</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
