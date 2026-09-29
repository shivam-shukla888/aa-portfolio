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

  const triggerRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Focus management: focus input when opened, return focus to trigger when closed
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      triggerRef.current?.focus();
    }
  }, [isOpen]);

  // Handle ESC key and focus trap
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!isOpen) return;

      if (e.key === "Escape") {
        setIsOpen(false);
        return;
      }

      // Simple focus trap
      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
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

  function handleClear() {
    setMessages([]);
    setError(null);
  }

  return (
    <>
      {/* Editorial Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 px-4 py-3 bg-[#FAF9F6] border border-[#111112] hover:bg-[#F4F2EC] active:border-[#D45A2A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D45A2A]"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          aria-label="Open Ask Aamna AI Portfolio Assistant"
        >
          {/* Technical Terminal Prompt Icon */}
          <span className="font-mono text-xs font-bold text-[#D45A2A] select-none" aria-hidden="true">
            &gt;_
          </span>

          <div className="flex flex-col text-left">
            <span className="font-mono text-xs font-semibold tracking-widest uppercase text-[#111112] group-hover:text-[#D45A2A] transition-colors">
              ASK AAMNA
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-[#6E6D68]">
              Portfolio Assistant
            </span>
          </div>

          <span className="w-1.5 h-1.5 bg-[#D45A2A] shrink-0" aria-hidden="true" />
        </button>
      </div>

      {/* Editorial Slide-over / Modal Panel */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-[#111112]/40 backdrop-blur-xs transition-opacity"
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

          {/* Modal Card */}
          <div
            ref={modalRef}
            className="relative z-10 w-full sm:max-w-xl bg-[#FAF9F6] border-t sm:border border-[#111112] max-h-[90vh] sm:max-h-[640px] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-[#F4F2EC] border-b border-[#E6E3DC] flex items-center justify-between">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs font-bold text-[#D45A2A]" aria-hidden="true">
                  &gt;_
                </span>
                <div>
                  <h3
                    id="ask-aamna-title"
                    className="font-mono text-xs font-semibold uppercase tracking-widest text-[#111112]"
                  >
                    ASK AAMNA
                  </h3>
                  <p className="text-[10px] font-mono text-[#6E6D68] uppercase tracking-wider mt-0.5">
                    Verified Portfolio Knowledge Base &bull; Grounded AI
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {messages.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="font-mono text-[11px] uppercase tracking-wider text-[#6E6D68] hover:text-[#D45A2A] px-2 py-1 transition-colors"
                  >
                    Clear
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-[#6E6D68] hover:text-[#111112] border border-transparent hover:border-[#E6E3DC] transition-colors focus:outline-none"
                  aria-label="Close assistant panel"
                >
                  <svg
                    className="w-4 h-4 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Conversation Area */}
            <div
              className="flex-1 p-5 overflow-y-auto space-y-4 min-h-[260px] max-h-[380px] bg-[#FAF9F6]"
              tabIndex={0}
              aria-label="Conversation messages"
            >
              {messages.length === 0 ? (
                <div className="py-2 space-y-5">
                  <div className="p-4 bg-[#F4F2EC] border border-[#E6E3DC]">
                    <div className="font-mono text-[11px] uppercase tracking-widest text-[#D45A2A] font-semibold mb-1">
                      Direct Portfolio Inquiries
                    </div>
                    <p className="font-sans text-xs text-[#111112] leading-relaxed">
                      This assistant provides answers strictly grounded in Syyeda Aamna&apos;s verified public portfolio: machine learning projects, experience at Apollo Hospitals, internship at The Codevamp Technologies, technical skill set, and IIT Kanpur summer training.
                    </p>
                  </div>

                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-[#6E6D68] mb-2.5">
                      Suggested Questions
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {SUGGESTED_QUERIES.map((q) => (
                        <button
                          key={q}
                          type="button"
                          onClick={() => handleSend(q)}
                          className="text-left font-mono text-xs px-3 py-1.5 bg-[#FAF9F6] hover:bg-[#F4F2EC] border border-[#E6E3DC] hover:border-[#111112] text-[#111112] transition-colors"
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
                      className={`max-w-[88%] p-3.5 text-xs leading-relaxed font-sans ${
                        m.role === "user"
                          ? "bg-[#111112] text-[#FAF9F6] border border-[#111112]"
                          : "bg-[#F4F2EC] text-[#111112] border border-[#E6E3DC]"
                      }`}
                    >
                      <div className="font-mono text-[9px] uppercase tracking-wider mb-1 text-[#6E6D68]">
                        {m.role === "user" ? "Visitor" : "Ask Aamna (Verified)"}
                      </div>
                      <div className="whitespace-pre-wrap">{m.content}</div>
                    </div>
                  </div>
                ))
              )}

              {/* Loading Indicator */}
              {isLoading && (
                <div className="flex items-center gap-2 p-3 bg-[#F4F2EC] border border-[#E6E3DC] max-w-[85%] text-xs font-mono text-[#6E6D68]">
                  <span className="w-1.5 h-1.5 bg-[#D45A2A] animate-pulse" aria-hidden="true" />
                  <span>Consulting verified portfolio knowledge base...</span>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="p-3 bg-[#FAF9F6] border border-[#D45A2A] text-xs text-[#D45A2A] font-mono">
                  {error}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
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
                className="flex-1 px-3 py-2 text-xs font-sans bg-[#FAF9F6] border border-[#E6E3DC] focus:border-[#111112] text-[#111112] placeholder:text-[#6E6D68] focus:outline-none"
                aria-label="Ask a question about Syyeda Aamna's portfolio"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-4 py-2 bg-[#111112] disabled:bg-[#E6E3DC] disabled:text-[#6E6D68] text-[#FAF9F6] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#D45A2A] transition-colors disabled:cursor-not-allowed shrink-0"
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
