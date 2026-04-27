import { steps } from "@/lib/site";
import { SectionHeading } from "@/components/shared/section-heading";

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Como funciona"
        title="Uma rotina guiada por IA, sem perder o pe no real"
        description="A CognAi cruza disponibilidade, objetivos e dificuldade para transformar intencao em execucao."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-500/15 text-lg font-semibold text-brand-100">
              0{index + 1}
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
            <p className="mt-3 leading-7 text-slate-300">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

