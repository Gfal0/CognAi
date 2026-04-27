"use client";

import { useEffect, useState } from "react";

type StudyPlanData = {
  summary: string;
  weeklyPlan: Array<{
    day: string;
    blocks: Array<{
      subject: string;
      start: string;
      end: string;
      technique: string;
      objective: string;
    }>;
  }>;
  insights: string[];
  recommendations: string[];
};

type SessionUser = {
  name: string;
  email: string;
};

export function DashboardLive() {
  const [plan, setPlan] = useState<StudyPlanData | null>(null);
  const [user, setUser] = useState<SessionUser | null>(null);

  useEffect(() => {
    const rawPlan = localStorage.getItem("cognai-latest-plan");
    if (rawPlan) {
      setPlan(JSON.parse(rawPlan) as StudyPlanData);
    }

    fetch("/api/auth/me")
      .then((response) => (response.ok ? response.json() : { user: null }))
      .then((data: { user: SessionUser | null }) => setUser(data.user))
      .catch(() => setUser(null));
  }, []);

  if (!plan) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <p className="text-sm uppercase tracking-[0.18em] text-neon">Sem plano ainda</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">
          {user?.name ? `${user.name}, seu dashboard esta pronto.` : "Seu dashboard esta pronto."}
        </h2>
        <p className="mt-4 max-w-2xl text-slate-300">
          Falta gerar o primeiro cronograma no onboarding para preencher esta area com blocos, insights e prioridades reais.
        </p>
        <a
          href="/onboarding"
          className="mt-6 inline-flex rounded-lg bg-brand-500 px-5 py-3 text-sm font-medium text-white"
        >
          Gerar meu primeiro plano
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <p className="text-sm uppercase tracking-[0.18em] text-neon">Resumo</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">{plan.summary}</h2>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {plan.weeklyPlan.map((day) => (
          <div key={day.day} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xl font-semibold text-white">{day.day}</h3>
            <div className="mt-4 space-y-3">
              {day.blocks.map((block) => (
                <div key={`${day.day}-${block.subject}-${block.start}`} className="rounded-xl border border-white/8 bg-background/80 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-medium text-white">{block.subject}</p>
                    <span className="text-sm text-neon">
                      {block.start} - {block.end}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{block.objective}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500">{block.technique}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm uppercase tracking-[0.18em] text-neon">Insights</p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
            {plan.insights.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm uppercase tracking-[0.18em] text-neon">Recomendacoes</p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
            {plan.recommendations.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

