"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const metrics = [
  { label: "Planos ativos", value: "12.4k" },
  { label: "Aderencia media", value: "86%" },
  { label: "Horas poupadas", value: "9.1h/sem" }
];

export function Hero() {
  return (
    <section className="bg-hero-grid">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
            <Sparkles className="h-4 w-4 text-neon" />
            Estudo inteligente com IA adaptativa
          </div>
          <h1 className="mt-8 max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-6xl">
            Estude com inteligencia. Evolua com IA.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A CognAi cria um plano de estudo personalizado com base na sua rotina, objetivos e dificuldades.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/onboarding">
                Criar meu plano gratis
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/dashboard">Ver dashboard</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <p className="text-2xl font-semibold text-white">{metric.value}</p>
                <p className="mt-1 text-sm text-slate-400">{metric.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 inline-flex items-center gap-2 text-sm text-slate-300">
            <BadgeCheck className="h-4 w-4 text-success" />
            Google Calendar, PDFs, gamificacao e tutor IA no mesmo lugar.
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-10 rounded-[28px] bg-gradient-to-tr from-brand-500/20 via-accent-500/12 to-neon/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#06101E] shadow-glow">
            <Image
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
              alt="Aluno usando plataforma de estudo"
              width={1200}
              height={900}
              className="h-[540px] w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 grid gap-4 p-6">
              <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-xl border border-white/10 bg-background/80 p-5 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-300">Plano semanal</p>
                    <span className="rounded-full bg-success/15 px-3 py-1 text-xs text-success">Em dia</span>
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      ["Matematica", "Funcoes + lista de exercicios", "07:00 - 08:30"],
                      ["Biologia", "Mapa mental + revisao 24h", "18:30 - 19:40"],
                      ["Redacao", "Modelo ENEM + repertorio", "20:00 - 21:00"]
                    ].map((item) => (
                      <div key={item[0]} className="rounded-lg border border-white/8 bg-white/[0.03] p-4">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-white">{item[0]}</p>
                          <span className="text-xs text-neon">{item[2]}</span>
                        </div>
                        <p className="mt-1 text-sm text-slate-400">{item[1]}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-xl border border-white/10 bg-background/80 p-5 backdrop-blur">
                    <p className="text-sm text-slate-300">Insight da IA</p>
                    <p className="mt-3 text-lg font-medium text-white">
                      Sua melhor janela cognitiva e das 6h30 as 8h30. Vamos proteger esse horario.
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-background/80 p-5 backdrop-blur">
                    <p className="text-sm text-slate-300">Disciplina</p>
                    <p className="mt-3 text-4xl font-semibold text-white">92</p>
                    <p className="mt-1 text-sm text-slate-400">Nivel Focus Architect</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

