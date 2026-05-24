import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const context = "You are a helpful assistant for CSI Student Chapter, a college tech club with 240+ members, 38 events, 52 projects and 12 hackathon wins. The club hosts hackathons, workshops and tech talks. Core team: Adithiya (President), Tharun (Vice President), Keerthana (Design Lead). Answer in 2-3 sentences max. Be friendly.";
    const result = await model.generateContent(context + " User question: " + message);
    const response = result.response.text();
    return NextResponse.json({ reply: response });
  } catch (error) {
    console.error("Gemini error:", error);
    return NextResponse.json({ reply: "Sorry, I could not connect to the AI. Please try again!" }, { status: 500 });
  }
}
