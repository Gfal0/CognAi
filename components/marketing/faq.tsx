import { faqItems } from "@/lib/site";
import { SectionHeading } from "@/components/shared/section-heading";

export function Faq() {
  return (
    <section id="faq" className="border-t border-white/6">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="FAQ"
          title="Perguntas comuns antes de virar rotina"
          description="A CognAi foi pensada para ser simples de entrar e dificil de abandonar."
        />
        <div className="mt-12 grid gap-4">
          {faqItems.map((item) => (
            <div key={item.question} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-semibold text-white">{item.question}</h3>
              <p className="mt-3 leading-7 text-slate-300">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

