import { DashboardShell } from "@/components/dashboard/dashboard-shell";

const uploads = [
  { title: "Apostila de Biologia.pdf", status: "Processado", action: "Resumo + 24 questoes + 12 flashcards" },
  { title: "Constitucional.docx", status: "Em analise", action: "Topicos e plano de leitura" },
  { title: "Lista de Quimica.txt", status: "Processado", action: "Resumo + insercao no cronograma" }
];

export default function LibraryPage() {
  return (
    <DashboardShell
      title="Biblioteca IA"
      description="Uploads de PDF, DOCX e TXT com resumo, topicos, questoes e insercao automatica no plano."
    >
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-xl border border-dashed border-brand-500/40 bg-brand-500/6 p-6">
          <p className="text-sm uppercase tracking-[0.18em] text-neon">Upload</p>
          <h2 className="mt-3 text-2xl font-semibold">Arraste sua apostila</h2>
          <p className="mt-3 text-slate-300">Aceita PDF, DOCX e TXT. A IA resume, separa topicos e cria material de revisao.</p>
          <button className="mt-6 rounded-lg bg-brand-500 px-5 py-3 font-medium text-white">Selecionar arquivo</button>
        </div>
        <div className="space-y-4">
          {uploads.map((upload) => (
            <div key={upload.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{upload.title}</h3>
                <span className="rounded-full bg-white/8 px-3 py-1 text-xs text-slate-300">{upload.status}</span>
              </div>
              <p className="mt-3 text-sm text-slate-300">{upload.action}</p>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}

