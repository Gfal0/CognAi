import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="overflow-hidden rounded-2xl border border-brand-500/30 bg-gradient-to-br from-brand-500/14 via-accent-500/10 to-transparent p-10">
        <p className="text-sm uppercase tracking-[0.18em] text-neon">Pronto para comecar</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white">
          Seu proximo nivel de estudo pode comecar hoje com um plano que pensa junto com voce.
        </h2>
        <p className="mt-4 max-w-2xl text-slate-300">
          Organize sua semana, acompanhe o progresso e transforme disciplina em aprovacao com a CognAi.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <Link href="/onboarding">
              Criar meu plano gratis
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

