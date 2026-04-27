import Link from "next/link";
import {
  Bot,
  BrainCircuit,
  ChartColumnIncreasing,
  FileText,
  LayoutDashboard,
  ShieldCheck,
  Swords
} from "lucide-react";

import { Logo } from "@/components/shared/logo";

const items = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/library", label: "Biblioteca IA", icon: FileText },
  { href: "/flashcards", label: "Flashcards", icon: BrainCircuit },
  { href: "/simulados", label: "Simulados", icon: Swords },
  { href: "/dashboard#insights", label: "Insights", icon: ChartColumnIncreasing },
  { href: "/admin", label: "Admin", icon: ShieldCheck }
];

export function Sidebar() {
  return (
    <aside className="hidden min-h-screen border-r border-white/6 bg-[#040B15] xl:block">
      <div className="sticky top-0 flex h-screen w-72 flex-col px-6 py-8">
        <Logo />
        <div className="mt-10 rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-sm text-slate-400">Tutor IA</p>
          <div className="mt-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/15 text-brand-100">
              <Bot className="h-4 w-4" />
            </div>
            <div>
              <p className="font-medium text-white">Cora</p>
              <p className="text-sm text-slate-400">Disponivel agora</p>
            </div>
          </div>
        </div>
        <nav className="mt-8 grid gap-2">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/[0.04] hover:text-white"
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

