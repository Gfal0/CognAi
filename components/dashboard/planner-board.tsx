import { Calendar1, RefreshCcw } from "lucide-react";

import { weeklyPlan } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";

export function PlannerBoard() {
  return (
    <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-slate-400">Cronograma semanal</p>
            <h2 className="mt-1 text-xl font-semibold">Sua semana adaptativa</h2>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" size="sm">
              <Calendar1 className="h-4 w-4" />
              Exportar
            </Button>
            <Button size="sm">
              <RefreshCcw className="h-4 w-4" />
              Reorganizar cronograma
            </Button>
          </div>
        </div>
        <div className="mt-6 overflow-hidden rounded-xl border border-white/8">
          <div className="grid grid-cols-4 gap-px bg-white/8">
            <div className="bg-background p-4 text-sm text-slate-400">Dia</div>
            <div className="bg-background p-4 text-sm text-slate-400">Materia</div>
            <div className="bg-background p-4 text-sm text-slate-400">Topico</div>
            <div className="bg-background p-4 text-sm text-slate-400">Horario</div>
            {weeklyPlan.map((item) => (
              <div key={`${item.day}-${item.subject}`} className="contents">
                <div className="bg-background p-4 text-white">{item.day}</div>
                <div className="bg-background p-4 text-slate-200">{item.subject}</div>
                <div className="bg-background p-4 text-slate-300">{item.topic}</div>
                <div className="bg-background p-4 text-neon">{item.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
        <p className="text-sm text-slate-400">Calendario mensal</p>
        <h2 className="mt-1 text-xl font-semibold">Visao geral de maio</h2>
        <div className="mt-6 grid grid-cols-7 gap-2 text-center text-sm">
          {["S", "T", "Q", "Q", "S", "S", "D"].map((day) => (
            <div key={day} className="py-2 text-slate-500">{day}</div>
          ))}
          {Array.from({ length: 35 }, (_, index) => {
            const highlighted = [7, 12, 18, 26].includes(index);
            return (
              <div
                key={index}
                className={`flex aspect-square items-center justify-center rounded-lg border ${
                  highlighted ? "border-brand-500/40 bg-brand-500/15 text-white" : "border-white/8 text-slate-400"
                }`}
              >
                {(index + 1) % 31 || 31}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
