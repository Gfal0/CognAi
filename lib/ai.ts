import { z } from "zod";

export const onboardingSchema = z.object({
  name: z.string().min(2),
  ageRange: z.string(),
  wakeTime: z.string(),
  sleepTime: z.string(),
  commitments: z.array(z.string()),
  subjects: z.array(
    z.object({
      name: z.string(),
      level: z.string(),
      difficulty: z.number().min(1).max(5)
    })
  ),
  goal: z.string(),
  examDates: z.array(z.string()),
  studyPreferences: z.array(z.string())
});

export const studyPlanPrompt = `
Voce e especialista em produtividade, neuroaprendizagem e organizacao academica.
Crie um cronograma de estudo semanal realista e eficiente baseado na rotina do usuario,
prioridades, dificuldades, datas de prova e energia mental. Inclua materias prioritarias,
revisoes espacadas, pausas, Pomodoro, Active Recall, exercicios e simulados.
Responda em JSON com:
{
  "summary": string,
  "weeklyPlan": Array<{ day: string; blocks: Array<{ subject: string; start: string; end: string; technique: string; objective: string }> }>,
  "insights": string[],
  "recommendations": string[]
}
`;

export async function generateFallbackPlan(payload: unknown) {
  const parsed = onboardingSchema.safeParse(payload);

  if (!parsed.success) {
    return {
      summary: "Nao foi possivel montar o plano com os dados atuais.",
      weeklyPlan: [],
      insights: ["Revise os campos obrigatorios do onboarding."],
      recommendations: ["Confirme rotina, materias e objetivo principal."]
    };
  }

  const topSubjects = parsed.data.subjects
    .sort((a, b) => b.difficulty - a.difficulty)
    .slice(0, 3)
    .map((subject) => subject.name);

  return {
    summary: `Plano inicial gerado para ${parsed.data.goal} com foco em ${topSubjects.join(", ")}.`,
    weeklyPlan: [
      {
        day: "Segunda",
        blocks: [
          {
            subject: topSubjects[0] ?? "Matematica",
            start: "07:00",
            end: "08:30",
            technique: "Pomodoro + Active Recall",
            objective: "Aprender conteudo novo e registrar erros."
          }
        ]
      }
    ],
    insights: [
      "Concentre os blocos mais pesados nas primeiras horas do dia.",
      "Inclua uma revisao curta 24h apos cada topico novo."
    ],
    recommendations: [
      "Use simulados aos sabados para medir velocidade e aderencia.",
      "Reforce revisoes leves nos dias de menor energia mental."
    ]
  };
}

