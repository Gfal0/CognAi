import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { reason = "Nao consegui estudar hoje", missedDate } = await request.json();

  return NextResponse.json({
    status: "ok",
    message: "Cronograma recalculado com janelas livres, prioridades e revisoes preservadas.",
    reason,
    missedDate,
    actions: [
      "Redistribuir blocos pesados para os proximos 3 dias.",
      "Antecipar uma revisao curta hoje a noite.",
      "Proteger o simulado do fim de semana."
    ]
  });
}

