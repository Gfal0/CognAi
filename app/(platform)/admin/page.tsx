import { DashboardShell } from "@/components/dashboard/dashboard-shell";

const rows = [
  { label: "Usuarios ativos", value: "12.482" },
  { label: "MRR estimado", value: "R$ 186.400" },
  { label: "Assinaturas Pro", value: "4.921" },
  { label: "Tickets de suporte", value: "18 abertos" }
];

export default function AdminPage() {
  return (
    <DashboardShell
      title="Painel admin"
      description="Gestao de usuarios, receita, assinaturas, metricas e visao institucional."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {rows.map((row) => (
          <div key={row.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-slate-400">{row.label}</p>
            <p className="mt-4 text-3xl font-semibold">{row.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-6">
        <h2 className="text-xl font-semibold">Tabela institucional</h2>
        <div className="mt-4 overflow-hidden rounded-xl border border-white/8">
          <div className="grid grid-cols-4 gap-px bg-white/8">
            {["Segmento", "Usuarios", "Conversao", "Receita"].map((item) => (
              <div key={item} className="bg-background p-4 text-sm text-slate-400">{item}</div>
            ))}
            {[
              ["Vestibular", "4.012", "7.8%", "R$ 58.900"],
              ["Concurso", "3.124", "9.4%", "R$ 64.200"],
              ["Faculdade", "2.881", "5.9%", "R$ 33.700"]
            ].flatMap((row) => row).map((cell, index) => (
              <div key={index} className="bg-background p-4 text-white">{cell}</div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

