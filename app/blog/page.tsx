const posts = [
  {
    title: "Como montar um cronograma que sobrevive a semana real",
    excerpt: "Uma abordagem pratica para estudar com constancia sem depender de motivacao perfeita."
  },
  {
    title: "Revisao espacada: por que voce esquece menos quando para de revisar no chute",
    excerpt: "Como usar repeticao inteligente para fixar materias longas."
  },
  {
    title: "Tutor IA nos estudos: quando acelera e quando atrapalha",
    excerpt: "Criticos, exemplos e um uso maduro da IA para aprender melhor."
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.18em] text-neon">Blog CognAi</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white">Conteudo indexavel para SEO e educacao</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
          Estrutura editorial para atracao organica com temas de rotina, desempenho, vestibular, faculdade e concurso.
        </p>
        <div className="mt-12 grid gap-6">
          {posts.map((post) => (
            <article key={post.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-8">
              <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
              <p className="mt-3 text-slate-300">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

