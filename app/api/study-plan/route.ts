import { NextResponse } from "next/server";

import { generateFallbackPlan, studyPlanPrompt } from "@/lib/ai";

export async function POST(request: Request) {
  const body = await request.json();

  const fallback = await generateFallbackPlan(body);

  return NextResponse.json({
    provider: process.env.GEMINI_API_KEY ? "gemini-ready" : "fallback",
    prompt: studyPlanPrompt,
    data: fallback
  });
}

