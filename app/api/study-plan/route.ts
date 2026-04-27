import { NextResponse } from "next/server";

import { generateFallbackPlan, studyPlanPrompt } from "@/lib/ai";

export async function POST(request: Request) {
  const body = await request.json();

  const fallback = await generateFallbackPlan(body);

  return NextResponse.json({
    provider: "heuristic-planner",
    prompt: studyPlanPrompt,
    data: fallback
  });
}
