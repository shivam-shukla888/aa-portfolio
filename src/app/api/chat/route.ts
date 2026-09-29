import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit, processPortfolioChat } from "@/lib/ai/chat";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    // Determine client IP for lightweight rate limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const clientIp = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";

    const { allowed, retryAfter } = checkRateLimit(clientIp);
    if (!allowed) {
      return NextResponse.json(
        {
          error: `Please wait ${retryAfter ?? 20} seconds before asking your next question.`,
        },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body.message !== "string") {
      return NextResponse.json(
        { error: "Invalid request payload. 'message' field is required." },
        { status: 400 }
      );
    }

    const message = body.message.trim();
    if (!message) {
      return NextResponse.json(
        { error: "Please provide a valid question." },
        { status: 400 }
      );
    }

    const history = Array.isArray(body.history) ? body.history : [];

    const reply = await processPortfolioChat(message, history);

    return NextResponse.json({ reply });
  } catch (err: unknown) {
    const errorMsg =
      err instanceof Error && err.message.includes("high request volume")
        ? err.message
        : "The assistant is momentarily unavailable. Please try again shortly.";

    return NextResponse.json(
      { error: errorMsg },
      { status: 503 }
    );
  }
}
