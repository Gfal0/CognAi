import { Flame, GraduationCap, Trophy, Zap } from "lucide-react";

const metrics = [
  { label: "Horas estudadas", value: "24.5h", icon: GraduationCap, detail: "+3.2h vs semana anterior" },
  { label: "Streak", value: "18 dias", icon: Flame, detail: "Maior sequencia: 24 dias" },
  { label: "XP", value: "1.820", icon: Zap, detail: "Nivel 12 - Focus Architect" },
  { label: "Conquistas", value: "14", icon: Trophy, detail: "3 desbloqueadas este mes" }
];

export function MetricsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <div key={metric.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-400">{metric.label}</p>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-100">
                <Icon className="h-4 w-4" />
              </div>
            </div>
            <p className="mt-4 text-3xl font-semibold">{metric.value}</p>
            <p className="mt-2 text-sm text-slate-400">{metric.detail}</p>
          </div>
        );
      })}
    </div>
  );
}

