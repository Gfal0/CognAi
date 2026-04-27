import type { ReactNode } from "react";

import { Sidebar } from "@/components/dashboard/sidebar";

export function DashboardShell({
  title,
  description,
  actions,
  children
}: {
  title: string;
  description: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-white xl:flex">
      <Sidebar />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="mb-8 flex flex-col gap-3 border-b border-white/8 pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-neon">CognAi Workspace</p>
              <h1 className="mt-2 text-3xl font-semibold">{title}</h1>
              <p className="mt-2 text-slate-400">{description}</p>
            </div>
            {actions ? <div>{actions}</div> : null}
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}
