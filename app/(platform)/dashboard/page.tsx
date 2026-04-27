import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardLive } from "@/components/dashboard/dashboard-live";
import { LogoutButton } from "@/components/dashboard/logout-button";

export default function DashboardPage() {
  return (
    <DashboardShell
      title="Seu cockpit de consistencia"
      description="Cronograma visual, progresso, provas, insights da IA e reorganizacao instantanea."
      actions={<LogoutButton />}
    >
      <DashboardLive />
    </DashboardShell>
  );
}
