import { features } from "@/lib/site";
import { SectionHeading } from "@/components/shared/section-heading";

export function Features() {
  return (
    <section id="recursos" className="border-y border-white/6 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Recursos"
          title="Tudo o que um estudante ambicioso precisa para manter constancia"
          description="Planejamento, execucao, revisao e motivacao reunidos numa experiencia moderna de produto."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="rounded-xl border border-white/10 bg-background/70 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-500/10 text-brand-100">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

