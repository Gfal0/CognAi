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
  examDates: z.array(
    z.object({
      title: z.string().min(2),
      date: z.string().min(4)
    })
  ),
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
    .slice()
    .sort((a, b) => b.difficulty - a.difficulty)
    .slice(0, 3)
    .map((subject) => subject.name);

  const weekdays = ["Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sabado"];
  const availableStart = parsed.data.wakeTime || "07:00";

  const weeklyPlan = weekdays.map((day, index) => {
    const first = topSubjects[index % Math.max(topSubjects.length, 1)] ?? "Matematica";
    const second = topSubjects[(index + 1) % Math.max(topSubjects.length, 1)] ?? "Redacao";

    return {
      day,
      blocks: [
        {
          subject: first,
          start: availableStart,
          end: shiftTime(availableStart, 90),
          technique: "Pomodoro + Active Recall",
          objective: `Avancar em ${first} com conteudo novo e exercicios.`
        },
        {
          subject: second,
          start: shiftTime(availableStart, 120),
          end: shiftTime(availableStart, 180),
          technique: "Revisao espacada",
          objective: `Revisar ${second} e registrar erros recorrentes.`
        }
      ]
    };
  });

  return {
    summary: `Plano inicial gerado para ${parsed.data.goal} com foco em ${topSubjects.join(", ")} e distribuicao realista ao longo da semana.`,
    weeklyPlan,
    insights: [
      `Os blocos mais exigentes foram posicionados a partir de ${parsed.data.wakeTime}.`,
      parsed.data.examDates.length
        ? `Sua proxima data importante e ${parsed.data.examDates[0]?.title} em ${parsed.data.examDates[0]?.date}.`
        : "Nenhuma data importante foi informada ainda.",
      "As materias com maior dificuldade aparecem com mais frequencia na semana."
    ],
    recommendations: [
      "Use revisao curta 24h depois de cada topico novo.",
      "Reserve um bloco de correcao de erros antes do simulado da semana.",
      "Se um dia falhar, redistribua primeiro os blocos de maior dificuldade."
    ]
  };
}

function shiftTime(time: string, minutesToAdd: number) {
  const [hours, minutes] = time.split(":").map(Number);
  const total = hours * 60 + minutes + minutesToAdd;
  const nextHours = Math.floor(total / 60) % 24;
  const nextMinutes = total % 60;
  return `${String(nextHours).padStart(2, "0")}:${String(nextMinutes).padStart(2, "0")}`;
}
