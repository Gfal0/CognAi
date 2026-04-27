import { DashboardShell } from "@/components/dashboard/dashboard-shell";

const quizzes = [
  { subject: "Matematica", questions: 20, level: "ENEM", duration: "35 min" },
  { subject: "Historia", questions: 15, level: "Vestibular", duration: "20 min" },
  { subject: "Constitucional", questions: 25, level: "Concurso", duration: "40 min" }
];

export default function SimuladosPage() {
  return (
    <DashboardShell
      title="Questoes e simulados"
      description="Treinos gerados por IA por materia, nivel, data e historico de dificuldade."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {quizzes.map((quiz) => (
          <div key={quiz.subject} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-neon">{quiz.level}</p>
            <h2 className="mt-3 text-2xl font-semibold">{quiz.subject}</h2>
            <div className="mt-6 grid gap-3 text-sm text-slate-300">
              <p>{quiz.questions} questoes</p>
              <p>{quiz.duration}</p>
            </div>
            <button className="mt-6 rounded-lg bg-white/8 px-4 py-3 text-sm font-medium text-white">Gerar treino</button>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}

