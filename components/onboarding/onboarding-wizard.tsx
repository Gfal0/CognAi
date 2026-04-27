"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, BrainCircuit, CalendarRange, Clock3, Sparkles, UserRound } from "lucide-react";

import { onboardingSchema } from "@/lib/ai";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

type FormValues = import("zod").infer<typeof onboardingSchema>;

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
  examDates: ["2026-11-09", "2026-11-16"],
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
  const [submitted, setSubmitted] = useState<FormValues | null>(null);
  const form = useForm<FormValues>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: defaults
  });

  const progress = useMemo(() => ((step + 1) / stages.length) * 100, [step]);
  const canContinue = step < stages.length - 1;

  return (
    <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr]">
      <aside className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <p className="text-sm uppercase tracking-[0.18em] text-neon">Onboarding inteligente</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Monte seu plano em minutos</h1>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          Responda como voce realmente vive. A CognAi usa isso para desenhar uma rotina possivel, adaptativa e eficiente.
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
        <form
          className="space-y-6"
          onSubmit={form.handleSubmit((values) => {
            setSubmitted(values);
          })}
        >
          {step === 0 && (
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Nome" value={form.watch("name")} onChange={(value) => form.setValue("name", value)} />
              <Field
                label="Faixa etaria"
                value={form.watch("ageRange")}
                onChange={(value) => form.setValue("ageRange", value)}
              />
            </div>
          )}

          {step === 1 && (
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Hora que acorda" value={form.watch("wakeTime")} onChange={(value) => form.setValue("wakeTime", value)} />
              <Field label="Hora que dorme" value={form.watch("sleepTime")} onChange={(value) => form.setValue("sleepTime", value)} />
              <Field
                className="md:col-span-2"
                label="Compromissos"
                value={form.watch("commitments").join(", ")}
                onChange={(value) => form.setValue("commitments", value.split(",").map((item) => item.trim()))}
              />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              {form.watch("subjects").map((subject, index) => (
                <div key={`${subject.name}-${index}`} className="grid gap-4 rounded-xl border border-white/8 bg-white/[0.03] p-4 md:grid-cols-3">
                  <Field
                    label="Materia"
                    value={subject.name}
                    onChange={(value) => form.setValue(`subjects.${index}.name`, value)}
                  />
                  <Field
                    label="Nivel"
                    value={subject.level}
                    onChange={(value) => form.setValue(`subjects.${index}.level`, value)}
                  />
                  <Field
                    label="Dificuldade (1-5)"
                    value={String(subject.difficulty)}
                    onChange={(value) => form.setValue(`subjects.${index}.difficulty`, Number(value))}
                  />
                </div>
              ))}
              <Field label="Objetivo principal" value={form.watch("goal")} onChange={(value) => form.setValue("goal", value)} />
            </div>
          )}

          {step === 3 && (
            <Field
              label="Datas importantes"
              value={form.watch("examDates").join(", ")}
              onChange={(value) => form.setValue("examDates", value.split(",").map((item) => item.trim()))}
            />
          )}

          {step === 4 && (
            <Field
              label="Preferencias de estudo"
              value={form.watch("studyPreferences").join(", ")}
              onChange={(value) => form.setValue("studyPreferences", value.split(",").map((item) => item.trim()))}
            />
          )}

          <div className="flex flex-col gap-3 border-t border-white/8 pt-6 sm:flex-row sm:justify-between">
            <Button type="button" variant="ghost" disabled={step === 0} onClick={() => setStep((current) => current - 1)}>
              Voltar
            </Button>
            {canContinue ? (
              <Button type="button" onClick={() => setStep((current) => current + 1)}>
                Continuar
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button type="submit">
                Gerar plano com IA
                <Sparkles className="h-4 w-4" />
              </Button>
            )}
          </div>
        </form>

        {submitted && (
          <div className="mt-8 rounded-xl border border-success/20 bg-success/10 p-5">
            <p className="font-medium text-white">Tudo certo, {submitted.name || "estudante"}.</p>
            <p className="mt-2 text-sm leading-7 text-slate-200">
              Estrutura pronta para enviar os dados ao endpoint `/api/study-plan` e gerar o cronograma personalizado.
            </p>
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
  className
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <label className={`grid gap-2 ${className ?? ""}`}>
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 rounded-lg border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition focus:border-brand-500"
      />
    </label>
  );
}

