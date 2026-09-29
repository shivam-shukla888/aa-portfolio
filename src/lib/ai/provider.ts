export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface GroqProviderConfig {
  apiKey?: string;
  model?: string;
}

const DEFAULT_MODEL = "qwen/qwen3.8-27b";
const GROQ_ENDPOINT = "https://api.groq.com/openai/v1/chat/completions";

export async function callGroqChat(
  messages: ChatMessage[],
  config?: GroqProviderConfig
): Promise<string> {
  const apiKey = config?.apiKey || process.env.GROQ_API_KEY;
  const model = config?.model || process.env.GROQ_MODEL || DEFAULT_MODEL;

  if (!apiKey) {
    throw new Error("GROQ_API_KEY is not configured on the server.");
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000); // 12s timeout

  try {
    const res = await fetch(GROQ_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages,
        temperature: 0.2,
        max_tokens: 600,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      if (res.status === 429) {
        throw new Error("Rate limit exceeded from provider. Please wait a moment.");
      }
      throw new Error(`Provider returned error status ${res.status}`);
    }

    const data = await res.json();
    const reply = data?.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      throw new Error("Empty response returned by AI provider.");
    }

    return reply;
  } catch (err: unknown) {
    clearTimeout(timeoutId);
    if (err instanceof Error) {
      if (err.name === "AbortError") {
        throw new Error("The request timed out. Please try again.");
      }
      throw err;
    }
    throw new Error("An unexpected error occurred.");
  }
}
