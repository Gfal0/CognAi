# CognAi

Plataforma SaaS de estudo inteligente com IA, pensada como uma startup pronta para MVP premium.

## Stack proposta

- Next.js 15 + App Router
- TypeScript
- Tailwind CSS
- React Hook Form + Zod
- Prisma + PostgreSQL
- NextAuth/Clerk/Supabase Auth (estrutura pronta)
- Stripe, analytics, uploads e IA com Gemini preparados por contrato

## O que esta entregue na base

- Landing page premium com copy de conversao
- Identidade visual CognAi com logos SVG
- Onboarding em formato wizard
- Dashboard, flashcards, biblioteca IA, simulados e painel admin
- Endpoints iniciais para geracao de cronograma, reorganizacao, uploads e tutor IA
- Schema Prisma com usuarios, planos, sessoes, uploads, quizzes, achievements e analytics
- Middleware de protecao de rotas
- Manifest para experiencia PWA

## Pronto para GitHub e Vercel

O repositorio agora ja esta preparado para:

- push direto para GitHub
- importacao na Vercel
- build com Next.js 15
- deploy com `prisma generate` + `prisma migrate deploy`

Arquivos importantes de deploy:

- `.env.example`
- `vercel.json`
- `prisma/schema.prisma`
- `package.json`

## Variaveis de ambiente

Copie `.env.example` para `.env.local` no desenvolvimento.

```bash
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
APPLE_CLIENT_ID=
APPLE_CLIENT_SECRET=
GEMINI_API_KEY=
SUPABASE_URL=
SUPABASE_ANON_KEY=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
RESEND_API_KEY=
POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=
NEXT_PUBLIC_APP_URL=
```

## Como publicar

1. Suba o repositorio para o GitHub.
2. Importe o projeto na Vercel.
3. Adicione as variaveis de ambiente do `.env.example` no painel da Vercel.
4. Configure um banco Postgres real em Neon ou Supabase e preencha `DATABASE_URL`.
5. Rode o primeiro deploy.

## Comandos uteis

```bash
npm install
npm run dev
npm run build
npm run prisma:generate
npm run prisma:deploy
```

## Observacoes de producao

- `vercel.json` ja aponta o build para `npm run vercel-build`.
- O script `vercel-build` executa `prisma generate`, tenta `prisma migrate deploy` quando `DATABASE_URL` existir, e depois roda `next build`.
- Se voce usar preview deployments com Prisma, o ideal e ter um banco separado para preview e outro para production.
- Auth, Gemini, Stripe, email e analytics estao com a estrutura pronta, mas ainda precisam das credenciais reais para funcionar em producao.

## Proximos passos recomendados

1. Instalar dependencias.
2. Conectar auth real.
3. Integrar Gemini com leitura de PDF.
4. Ligar Prisma ao banco e rodar migracoes.
5. Integrar Stripe, analytics e notificacoes.
