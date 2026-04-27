import { DashboardShell } from "@/components/dashboard/dashboard-shell";

const cards = [
  { front: "O que e funcao afim?", back: "Funcao do tipo f(x) = ax + b.", next: "Hoje" },
  { front: "Qual a 1a lei de Mendel?", back: "Cada caracter e determinado por um par de fatores.", next: "Amanha" },
  { front: "Estrutura ideal da introducao ENEM?", back: "Contexto, tese e repertorio.", next: "Em 3 dias" }
];

export default function FlashcardsPage() {
  return (
    <DashboardShell
      title="Flashcards com repeticao espacada"
      description="Uma camada estilo Anki para revisar o que realmente importa."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {cards.map((card) => (
          <div key={card.front} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-neon">Proxima revisao {card.next}</p>
            <h2 className="mt-4 text-xl font-semibold text-white">{card.front}</h2>
            <p className="mt-4 text-slate-300">{card.back}</p>
            <div className="mt-6 flex gap-3">
              <button className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300">Dificil</button>
              <button className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300">Medio</button>
              <button className="rounded-lg border border-success/30 bg-success/10 px-4 py-2 text-sm text-success">Facil</button>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}

