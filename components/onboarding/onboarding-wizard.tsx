"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, BrainCircuit, CalendarRange, Clock3, Loader2, Plus, Sparkles, Trash2, UserRound } from "lucide-react";

import { onboardingSchema } from "@/lib/ai";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

type FormValues = import("zod").infer<typeof onboardingSchema>;

type StudyPlanResponse = {
  data: {
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
};

const defaults: FormValues = {
  name: "",
  ageRange: "17-24",
  wakeTime: "06:30",
  sleepTime: "23:00",
  commitments: ["Escola 07:00 - 12:30", "Academia 18:00 - 19:00"],
  subjects: [
    { name: "Matematica", level: "Intermediario", difficulty: 5 },
    { name: "Biologia", level: "Basico", difficulty: 4 },
    { name: "Redacao", level: "Intermediario", difficulty: 3 }
  ],
  goal: "ENEM",
  examDates: [
    { title: "ENEM - 1o dia", date: "2026-11-09" },
    { title: "ENEM - 2o dia", date: "2026-11-16" }
  ],
  studyPreferences: ["Pomodoro", "Revisao espacada", "Fins de semana"]
};

const stages = [
  { icon: UserRound, label: "Perfil" },
  { icon: Clock3, label: "Rotina" },
  { icon: BrainCircuit, label: "Estudo" },
  { icon: CalendarRange, label: "Datas" },
  { icon: Sparkles, label: "Preferencias" }
];

export function OnboardingWizard() {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<StudyPlanResponse["data"] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const form = useForm<FormValues>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: defaults
  });

  const progress = useMemo(() => ((step + 1) / stages.length) * 100, [step]);
  const canContinue = step < stages.length - 1;
  const subjects = form.watch("subjects");
  const commitments = form.watch("commitments");
  const examDates = form.watch("examDates");
  const preferences = form.watch("studyPreferences");

  async function submit(values: FormValues) {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/study-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });

      const data = (await response.json()) as StudyPlanResponse;

      if (!response.ok) {
        throw new Error("Nao foi possivel gerar o plano agora.");
      }

      setResult(data.data);
      localStorage.setItem("cognai-latest-plan", JSON.stringify(data.data));
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Erro ao gerar plano.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr]">
      <aside className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <p className="text-sm uppercase tracking-[0.18em] text-neon">Onboarding inteligente</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Monte seu plano em minutos</h1>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          A ideia aqui e simples: descrever sua rotina real para a CognAi montar um plano que faca sentido na sua semana.
        </p>
        <Progress value={progress} className="mt-8" />
        <div className="mt-8 grid gap-3">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const active = index === step;
            return (
              <div
                key={stage.label}
                className={`flex items-center gap-3 rounded-lg border px-4 py-3 ${
                  active ? "border-brand-500/40 bg-brand-500/10 text-white" : "border-white/8 bg-white/[0.02] text-slate-400"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{stage.label}</span>
              </div>
            );
          })}
        </div>
      </aside>

      <div className="rounded-2xl border border-white/10 bg-background/90 p-6 lg:p-8">
        <form className="space-y-6" onSubmit={form.handleSubmit(submit)}>
          {step === 0 && (
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Nome" value={form.watch("name")} onChange={(value) => form.setValue("name", value)} />
              <Field
                label="Faixa etaria"
                value={form.watch("ageRange")}
                onChange={(value) => form.setValue("ageRange", value)}
                placeholder="Ex.: 17-24"
              />
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Field
                  label="Hora que acorda"
                  value={form.watch("wakeTime")}
                  onChange={(value) => form.setValue("wakeTime", value)}
                  placeholder="06:30"
                />
                <Field
                  label="Hora que dorme"
                  value={form.watch("sleepTime")}
                  onChange={(value) => form.setValue("sleepTime", value)}
                  placeholder="23:00"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-200">Compromissos fixos</p>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => form.setValue("commitments", [...commitments, ""])}
                  >
                    <Plus className="h-4 w-4" />
                    Adicionar
                  </Button>
                </div>
                {commitments.map((commitment, index) => (
                  <div key={`${commitment}-${index}`} className="flex gap-3">
                    <Field
                      className="flex-1"
                      label={`Compromisso ${index + 1}`}
                      value={commitment}
                      onChange={(value) =>
                        form.setValue(
                          "commitments",
                          commitments.map((item, itemIndex) => (itemIndex === index ? value : item))
                        )
                      }
                      placeholder="Ex.: Trabalho 13:00 - 18:00"
                    />
                    {commitments.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="mt-7"
                        onClick={() =>
                          form.setValue(
                            "commitments",
                            commitments.filter((_, itemIndex) => itemIndex !== index)
                          )
                        }
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-200">Materias e nivel atual</p>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    form.setValue("subjects", [...subjects, { name: "", level: "Basico", difficulty: 3 }])
                  }
                >
                  <Plus className="h-4 w-4" />
                  Adicionar materia
                </Button>
              </div>
              {subjects.map((subject, index) => (
                <div
                  key={`${subject.name}-${index}`}
                  className="grid gap-4 rounded-xl border border-white/8 bg-white/[0.03] p-4 xl:grid-cols-[1.2fr_1fr_0.8fr_auto]"
                >
                  <Field
                    label="Materia"
                    value={subject.name}
                    onChange={(value) => form.setValue(`subjects.${index}.name`, value)}
                  />
                  <Field
                    label="Nivel"
                    value={subject.level}
                    onChange={(value) => form.setValue(`subjects.${index}.level`, value)}
                    placeholder="Basico, Intermediario..."
                  />
                  <Field
                    label="Dificuldade (1-5)"
                    value={String(subject.difficulty)}
                    onChange={(value) =>
                      form.setValue(`subjects.${index}.difficulty`, Math.max(1, Math.min(5, Number(value) || 1)))
                    }
                  />
                  {subjects.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="mt-7"
                      onClick={() =>
                        form.setValue(
                          "subjects",
                          subjects.filter((_, itemIndex) => itemIndex !== index)
                        )
                      }
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Field
                label="Objetivo principal"
                value={form.watch("goal")}
                onChange={(value) => form.setValue("goal", value)}
                placeholder="ENEM, vestibular, concurso, faculdade..."
              />
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-slate-200">Datas importantes</p>
                <p className="mt-1 text-sm text-slate-400">
                  Aqui entram provas, vestibulares, concursos ou entregas importantes. Cada linha tem nome + data.
                </p>
              </div>
              {examDates.map((exam, index) => (
                <div key={`${exam.title}-${index}`} className="grid gap-4 rounded-xl border border-white/8 bg-white/[0.03] p-4 md:grid-cols-[1fr_220px_auto]">
                  <Field
                    label="Nome da data"
                    value={exam.title}
                    onChange={(value) => form.setValue(`examDates.${index}.title`, value)}
                    placeholder="Ex.: ENEM 1o dia"
                  />
                  <Field
                    label="Data"
                    value={exam.date}
                    onChange={(value) => form.setValue(`examDates.${index}.date`, value)}
                    placeholder="2026-11-09"
                  />
                  {examDates.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="mt-7"
                      onClick={() =>
                        form.setValue(
                          "examDates",
                          examDates.filter((_, itemIndex) => itemIndex !== index)
                        )
                      }
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="secondary"
                onClick={() => form.setValue("examDates", [...examDates, { title: "", date: "" }])}
              >
                <Plus className="h-4 w-4" />
                Adicionar data importante
              </Button>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-200">Preferencias de estudo</p>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => form.setValue("studyPreferences", [...preferences, ""])}
                >
                  <Plus className="h-4 w-4" />
                  Adicionar
                </Button>
              </div>
              {preferences.map((preference, index) => (
                <div key={`${preference}-${index}`} className="flex gap-3">
                  <Field
                    className="flex-1"
                    label={`Preferencia ${index + 1}`}
                    value={preference}
                    onChange={(value) =>
                      form.setValue(
                        "studyPreferences",
                        preferences.map((item, itemIndex) => (itemIndex === index ? value : item))
                      )
                    }
                    placeholder="Ex.: Pomodoro"
                  />
                  {preferences.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="mt-7"
                      onClick={() =>
                        form.setValue(
                          "studyPreferences",
                          preferences.filter((_, itemIndex) => itemIndex !== index)
                        )
                      }
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          )}

          {error && <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-200">{error}</div>}

          <div className="flex flex-col gap-3 border-t border-white/8 pt-6 sm:flex-row sm:justify-between">
            <Button type="button" variant="ghost" disabled={step === 0 || loading} onClick={() => setStep((current) => current - 1)}>
              Voltar
            </Button>
            {canContinue ? (
              <Button type="button" disabled={loading} onClick={() => setStep((current) => current + 1)}>
                Continuar
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button type="submit" disabled={loading}>
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                Gerar plano
              </Button>
            )}
          </div>
        </form>

        {result && (
          <div className="mt-8 space-y-6 rounded-2xl border border-success/20 bg-success/10 p-6">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-success">Plano gerado</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{result.summary}</h2>
            </div>

            <div className="grid gap-4 xl:grid-cols-2">
              {result.weeklyPlan.map((day) => (
                <div key={day.day} className="rounded-xl border border-white/10 bg-background/80 p-5">
                  <p className="text-lg font-semibold text-white">{day.day}</p>
                  <div className="mt-4 space-y-3">
                    {day.blocks.map((block) => (
                      <div key={`${day.day}-${block.subject}-${block.start}`} className="rounded-lg border border-white/8 bg-white/[0.03] p-4">
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

            <div className="grid gap-4 xl:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-background/80 p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-neon">Insights</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                  {result.insights.map((insight) => (
                    <li key={insight}>- {insight}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-background/80 p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-neon">Recomendacoes</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                  {result.recommendations.map((recommendation) => (
                    <li key={recommendation}>- {recommendation}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  className,
  placeholder
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
}) {
  return (
    <label className={`grid gap-2 ${className ?? ""}`}>
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <input
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 min-w-0 rounded-lg border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition focus:border-brand-500"
      />
    </label>
  );
}
