import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { InsightsPanel } from "@/components/dashboard/insights-panel";
import { MetricsGrid } from "@/components/dashboard/metrics-grid";
import { PlannerBoard } from "@/components/dashboard/planner-board";

export default function DashboardPage() {
  return (
    <DashboardShell
      title="Seu cockpit de consistencia"
      description="Cronograma visual, progresso, provas, insights da IA e reorganizacao instantanea."
    >
      <div className="space-y-6">
        <MetricsGrid />
        <PlannerBoard />
        <InsightsPanel />
      </div>
    </DashboardShell>
  );
}

