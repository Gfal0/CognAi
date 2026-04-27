import { pricing, testimonials } from "@/lib/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

export function SocialProof() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Confianca"
            title="Uma plataforma feita para parecer produto de verdade desde o primeiro clique"
            description="Copy de conversao, prova social, pricing claro e uma visao premium para usuarios individuais e instituicoes."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-3xl font-semibold text-white">+32k</p>
              <p className="mt-2 text-sm text-slate-400">cronogramas gerados</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-3xl font-semibold text-white">4.9/5</p>
              <p className="mt-2 text-sm text-slate-400">satisfacao media</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-3xl font-semibold text-white">73%</p>
              <p className="mt-2 text-sm text-slate-400">ganho de consistencia</p>
            </div>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-base leading-7 text-slate-200">"{testimonial.quote}"</p>
              <div className="mt-6">
                <p className="font-medium text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
          <div id="precos" className="rounded-xl border border-brand-500/30 bg-brand-500/8 p-6 md:col-span-2">
            <div className="grid gap-5 lg:grid-cols-3">
              {pricing.map((plan) => (
                <div key={plan.name} className="rounded-xl border border-white/10 bg-background/80 p-5">
                  <p className="text-sm text-neon">{plan.name}</p>
                  <p className="mt-3 text-3xl font-semibold text-white">{plan.price}</p>
                  <p className="mt-2 text-sm text-slate-300">{plan.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {plan.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button>Comecar gratis</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

