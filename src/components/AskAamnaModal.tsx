"use client";

import { useEffect, useRef, useState } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_QUERIES = [
  "Who is Syyeda Aamna?",
  "What has she built?",
  "Tell me about her experience.",
  "What technologies does she use?",
  "Show me her AI/ML projects.",
];

export function AskAamnaModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const id = window.setTimeout(() => inputRef.current?.focus(), 100);
    return () => window.clearTimeout(id);
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  async function handleSend(textToSend?: string) {
    const text = (textToSend ?? input).trim();
    if (!text || isLoading) return;

    setInput("");
    setError(null);

    const userMessage: Message = { role: "user", content: text };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: updatedMessages.slice(-4),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setMessages((current) => [
        ...current,
        { role: "assistant", content: data.reply },
      ]);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while contacting the assistant. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="fixed bottom-5 right-5 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group inline-flex min-h-11 items-center gap-3 border border-[#111112] bg-[#FAF9F6] px-4 py-2.5 shadow-[3px_3px_0_#111112] transition-transform hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
          aria-label="Open Ask Aamna portfolio assistant"
        >
          <span
            aria-hidden="true"
            className="relative flex h-7 w-7 items-center justify-center border border-[#111112] bg-[#D45A2A] text-[11px] font-mono font-semibold text-[#FAF9F6]"
          >
            A
          </span>
          <span className="text-left">
            <span className="block font-mono text-[11px] font-semibold tracking-[0.16em] text-[#111112]">
              ASK AAMNA
            </span>
            <span className="mt-0.5 block font-mono text-[9px] uppercase tracking-[0.12em] text-[#6E6D68]">
              Portfolio assistant
            </span>
          </span>
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-[#111112]/35 p-0 sm:items-center sm:p-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ask-aamna-title"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Close assistant"
            onClick={() => setIsOpen(false)}
          />

          <section className="relative flex max-h-[88vh] w-full max-w-xl flex-col border border-[#111112] bg-[#FAF9F6] shadow-[8px_8px_0_#111112]">
            <header className="flex items-center justify-between border-b border-[#E6E3DC] bg-[#F4F2EC] px-5 py-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#D45A2A]">
                  Portfolio assistant
                </p>
                <h2 id="ask-aamna-title" className="mt-1 font-display text-2xl font-semibold text-[#111112]">
                  Ask Aamna
                </h2>
                <p className="mt-1 text-xs leading-relaxed text-[#6E6D68]">
                  Answers are grounded in the verified portfolio content.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center border border-[#E6E3DC] text-[#111112] transition-colors hover:border-[#111112]"
                aria-label="Close assistant"
              >
                <span aria-hidden="true" className="text-xl leading-none">×</span>
              </button>
            </header>

            <div className="min-h-[280px] flex-1 space-y-4 overflow-y-auto p-5">
              {messages.length === 0 ? (
                <>
                  <div className="border-l-2 border-[#D45A2A] pl-4">
                    <p className="text-sm leading-6 text-[#111112]">
                      Ask about projects, experience, education, skills, or public contact details.
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#6E6D68]">
                      Try one
                    </p>
                    <div className="grid gap-2">
                      {SUGGESTED_QUERIES.map((query) => (
                        <button
                          key={query}
                          type="button"
                          onClick={() => handleSend(query)}
                          className="border border-[#E6E3DC] px-3 py-2.5 text-left text-xs text-[#111112] transition-colors hover:border-[#111112] hover:bg-[#F4F2EC]"
                        >
                          {query}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                messages.map((message, index) => (
                  <div
                    key={index}
                    className={message.role === "user" ? "ml-8" : "mr-8"}
                  >
                    <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.16em] text-[#6E6D68]">
                      {message.role === "user" ? "You" : "Ask Aamna"}
                    </p>
                    <div
                      className={
                        message.role === "user"
                          ? "border border-[#111112] bg-[#111112] px-3.5 py-3 text-sm leading-6 text-[#FAF9F6]"
                          : "border border-[#E6E3DC] bg-[#F4F2EC] px-3.5 py-3 text-sm leading-6 text-[#111112]"
                      }
                    >
                      {message.content}
                    </div>
                  </div>
                ))
              )}

              {isLoading && (
                <div className="mr-8 border border-[#E6E3DC] bg-[#F4F2EC] px-3.5 py-3 font-mono text-xs text-[#6E6D68]">
                  Thinking from verified portfolio data…
                </div>
              )}

              {error && (
                <div className="border border-[#D9B8AD] bg-[#F7ECE8] px-3.5 py-3 text-xs leading-5 text-[#7B3320]">
                  {error}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <form
              className="border-t border-[#E6E3DC] bg-[#F4F2EC] p-4"
              onSubmit={(event) => {
                event.preventDefault();
                void handleSend();
              }}
            >
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  maxLength={500}
                  disabled={isLoading}
                  placeholder="Ask about her work…"
                  className="min-h-11 flex-1 border border-[#E6E3DC] bg-[#FAF9F6] px-3 text-sm text-[#111112] outline-none placeholder:text-[#9B9991] focus:border-[#111112]"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="min-h-11 border border-[#111112] bg-[#111112] px-4 font-mono text-[10px] uppercase tracking-[0.14em] text-[#FAF9F6] transition-colors hover:bg-[#D45A2A] disabled:cursor-not-allowed disabled:border-[#C8C5BD] disabled:bg-[#C8C5BD]"
                >
                  Send
                </button>
              </div>
            </form>
          </section>
        </div>
      )}
    </>
  );
}
