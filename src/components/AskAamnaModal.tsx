"use client";

import { useState, useEffect, useRef } from "react";

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
  "Where can I find her GitHub?",
];

export function AskAamnaModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  async function handleSend(textToSend?: string) {
    const text = (textToSend || input).trim();
    if (!text || isLoading) return;

    setInput("");
    setError(null);

    const userMessage: Message = { role: "user", content: text };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: updatedMessages.slice(-4),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to contact assistant.");
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "Something went wrong while contacting the assistant. Please try again.";
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {/* Floating Trigger with Cute Doreame Charm */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-3 px-4 py-2.5 bg-[#FAF9F6] border-2 border-[#111112] shadow-[4px_4px_0px_#111112] hover:shadow-[2px_2px_0px_#111112] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer focus:outline-none"
          aria-label="Open Ask Aamna AI Portfolio Assistant"
        >
          {/* Cute Doreame-style 4D Magic Pocket & Bell Badge Icon */}
          <div className="relative w-8 h-8 rounded-full bg-[#009FE3] flex items-center justify-center border-2 border-[#111112] shadow-xs overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
            {/* White face/belly curve */}
            <div className="absolute -bottom-1 w-6 h-6 rounded-full bg-[#FAF9F6] border border-[#111112]/20" />
            {/* Red collar band */}
            <div className="absolute top-[18px] w-full h-[2.5px] bg-[#E63946]" />
            {/* Golden bell */}
            <div className="absolute top-[17px] w-2.5 h-2.5 rounded-full bg-[#FFD166] border border-[#111112] flex flex-col items-center justify-center">
              <div className="w-1.5 h-[0.75px] bg-[#111112] -mt-0.5" />
              <div className="w-[1px] h-[1px] rounded-full bg-[#111112] mt-[0.5px]" />
            </div>
            {/* Sparkle whiskers indicator */}
            <span className="sr-only">Doreame Mascot Icon</span>
          </div>

          <div className="flex flex-col text-left">
            <span className="font-mono text-xs font-bold tracking-wider text-[#111112] flex items-center gap-1.5">
              ASK AAMNA
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2A9DF4] animate-pulse" />
            </span>
            <span className="font-mono text-[9px] text-[#6E6D68] tracking-tight">
              AI Portfolio Guide
            </span>
          </div>
        </button>
      </div>

      {/* Slide-over / Modal Panel */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-[#111112]/40 backdrop-blur-xs transition-opacity animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ask-aamna-title"
        >
          {/* Backdrop Click */}
          <div
            className="absolute inset-0"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Panel Card */}
          <div className="relative z-10 w-full sm:max-w-lg bg-[#FAF9F6] border-t-2 sm:border-2 border-[#111112] sm:shadow-[8px_8px_0px_#111112] max-h-[88vh] sm:max-h-[640px] flex flex-col overflow-hidden">
            {/* Header with Cute Doreame Aesthetic & Editorial Rigor */}
            <div className="p-4 bg-[#F4F2EC] border-b border-[#E6E3DC] flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Doreame Mascot Badge */}
                <div className="w-9 h-9 rounded-full bg-[#009FE3] flex items-center justify-center border-2 border-[#111112] relative overflow-hidden shrink-0 shadow-xs">
                  <div className="absolute -bottom-1 w-7 h-7 rounded-full bg-[#FAF9F6] border border-[#111112]/20" />
                  <div className="absolute top-[20px] w-full h-[3px] bg-[#E63946]" />
                  <div className="absolute top-[19px] w-3 h-3 rounded-full bg-[#FFD166] border border-[#111112] flex flex-col items-center justify-center">
                    <div className="w-2 h-[1px] bg-[#111112] -mt-0.5" />
                    <div className="w-[1.5px] h-[1.5px] rounded-full bg-[#111112] mt-[0.5px]" />
                  </div>
                </div>

                <div>
                  <h3
                    id="ask-aamna-title"
                    className="font-mono text-sm font-bold tracking-wider text-[#111112] flex items-center gap-2"
                  >
                    ASK AAMNA
                    <span className="text-[10px] font-normal px-2 py-0.5 bg-[#009FE3]/10 text-[#0088CC] border border-[#009FE3]/30 rounded-xs">
                      Verified AI
                    </span>
                  </h3>
                  <p className="text-[11px] font-sans text-[#6E6D68]">
                    Portfolio assistant powered by Groq &bull; Strict factual grounding
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-[#6E6D68] hover:text-[#111112] hover:bg-[#FAF9F6] border border-transparent hover:border-[#E6E3DC] transition-colors focus:outline-none"
                aria-label="Close Assistant"
              >
                <svg
                  className="w-5 h-5 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Conversation Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 min-h-[260px] max-h-[380px] bg-[#FAF9F6]">
              {messages.length === 0 ? (
                <div className="py-4 space-y-4">
                  {/* Doreame Welcome Greeting */}
                  <div className="p-3.5 bg-[#F4F2EC] border border-[#E6E3DC] rounded-xs text-xs font-sans text-[#111112] leading-relaxed">
                    <div className="flex items-center gap-1.5 text-[#0088CC] font-mono text-[11px] font-semibold mb-1">
                      <span>✨</span>
                      <span>Hello! Welcome to Syyeda Aamna&apos;s Portfolio</span>
                    </div>
                    I can answer questions regarding Syyeda&apos;s verified AI/ML projects, experience at Apollo Hospitals, internship at The Codevamp Technologies, technical skills, and IIT Kanpur summer training.
                  </div>

                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-[#6E6D68] mb-2">
                      Suggested Questions
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {SUGGESTED_QUERIES.map((q) => (
                        <button
                          key={q}
                          type="button"
                          onClick={() => handleSend(q)}
                          className="text-left font-mono text-[11px] px-2.5 py-1.5 bg-[#FAF9F6] hover:bg-[#F4F2EC] border border-[#E6E3DC] hover:border-[#111112] text-[#111112] transition-colors"
                        >
                          {q} &rarr;
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                messages.map((m, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col ${
                      m.role === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`max-w-[88%] p-3 text-xs leading-relaxed font-sans ${
                        m.role === "user"
                          ? "bg-[#111112] text-[#FAF9F6] border border-[#111112]"
                          : "bg-[#F4F2EC] text-[#111112] border border-[#E6E3DC]"
                      }`}
                    >
                      <div className="font-mono text-[9px] uppercase tracking-wider mb-1 text-[#A5A49D]">
                        {m.role === "user" ? "You" : "Ask Aamna"}
                      </div>
                      <div className="whitespace-pre-wrap">{m.content}</div>
                    </div>
                  </div>
                ))
              )}

              {/* Loading Indicator */}
              {isLoading && (
                <div className="flex items-center gap-2 p-3 bg-[#F4F2EC] border border-[#E6E3DC] max-w-[80%] text-xs font-mono text-[#6E6D68]">
                  <span className="w-2 h-2 rounded-full bg-[#009FE3] animate-ping" />
                  <span>Consulting portfolio knowledge base...</span>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 text-xs text-red-700 font-sans">
                  {error}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-[#F4F2EC] border-t border-[#E6E3DC] flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about her skills, experience, or projects..."
                disabled={isLoading}
                maxLength={500}
                className="flex-1 px-3 py-2 text-xs font-sans bg-[#FAF9F6] border border-[#E6E3DC] focus:border-[#111112] text-[#111112] placeholder:text-[#A5A49D] focus:outline-none"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-4 py-2 bg-[#111112] disabled:bg-[#A5A49D] text-[#FAF9F6] font-mono text-xs font-semibold hover:bg-[#D45A2A] transition-colors disabled:cursor-not-allowed shrink-0"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
