import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { message } = await request.json();

  return NextResponse.json({
    reply: `Recebi sua pergunta: "${message}". Aqui entra a chamada do tutor Gemini para explicar conteudo, revisar e gerar questoes.`,
    suggestions: ["Gerar 5 questoes", "Explicar como se eu tivesse 15 anos", "Resumir em flashcards"]
  });
}

