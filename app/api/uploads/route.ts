import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    status: "processing",
    acceptedTypes: ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/plain"],
    outputs: ["summary", "topics", "flashcards", "questions", "schedule_insertion"]
  });
}

