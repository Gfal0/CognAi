import { leaderboard, exams, insights } from "@/lib/mock-data";
import { Progress } from "@/components/ui/progress";

export function InsightsPanel() {
  return (
    <section id="insights" className="grid gap-6 xl:grid-cols-[0.75fr_0.75fr_0.5fr]">
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
        <p className="text-sm text-slate-400">Insights da IA</p>
        <div className="mt-4 space-y-4">
          {insights.map((insight) => (
            <div key={insight} className="rounded-lg border border-white/8 bg-white/[0.03] p-4 text-slate-200">
              {insight}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
        <p className="text-sm text-slate-400">Proximas provas</p>
        <div className="mt-4 space-y-4">
          {exams.map((exam) => (
            <div key={exam.title} className="rounded-lg border border-white/8 bg-white/[0.03] p-4">
              <div className="flex items-center justify-between">
                <p className="font-medium text-white">{exam.title}</p>
                <span className="text-sm text-neon">{exam.date}</span>
              </div>
              <p className="mt-2 text-sm text-slate-400">{exam.tag}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
        <p className="text-sm text-slate-400">Ranking entre amigos</p>
        <div className="mt-4 space-y-4">
          {leaderboard.map((entry, index) => (
            <div key={entry.name}>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-300">
                  {index + 1}. {entry.name}
                </span>
                <span className="text-white">{entry.xp} XP</span>
              </div>
              <Progress value={(entry.xp / 2000) * 100} className="mt-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

