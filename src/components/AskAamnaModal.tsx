"use client";

import { useState, useEffect, useRef, ReactNode } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
  time?: string;
}

const SUGGESTED_QUERIES = [
  "Walk me through her projects",
  "Explain the fraud detection project",
  "How does the RAG chatbot work?",
  "What technologies does she use?",
  "Give me an interview question",
];

/**
 * Lightweight, zero-dependency Markdown parser converting raw text
 * into clean editorial React components (bold, links, lists, code, paragraphs).
 */
function FormattedMessage({ text }: { text: string }) {
  // Split into structural blocks (paragraphs, bullet lists)
  const lines = text.split("\n");
  const elements: ReactNode[] = [];
  let currentListItems: ReactNode[] = [];

  function flushList() {
    if (currentListItems.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="my-2 space-y-1.5 pl-1">
          {currentListItems}
        </ul>
      );
      currentListItems = [];
    }
  }

  lines.forEach((line, lineIdx) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushList();
      return;
    }

    // Check for list item (•, -, *, or numbered like 1.)
    const listMatch = trimmed.match(/^([•\-\*]|\d+\.)\s+(.+)$/);
    if (listMatch) {
      const itemContent = listMatch[2];
      currentListItems.push(
        <li key={`li-${lineIdx}`} className="flex items-start gap-2 text-xs leading-relaxed">
          <span className="font-mono text-xs text-[#D45A2A] mt-0.5 shrink-0" aria-hidden="true">&bull;</span>
          <span className="flex-1">{parseInlineFormatting(itemContent)}</span>
        </li>
      );
      return;
    }

    flushList();

    // Check for quote/callout (e.g., > text)
    if (trimmed.startsWith("> ")) {
      elements.push(
        <blockquote
          key={`quote-${lineIdx}`}
          className="my-2 border-l-2 border-[#D45A2A] pl-3 italic text-xs text-[#111112] bg-[#FAF9F6] py-1"
        >
          {parseInlineFormatting(trimmed.slice(2))}
        </blockquote>
      );
      return;
    }

    // Regular paragraph line
    elements.push(
      <p key={`p-${lineIdx}`} className="text-xs leading-relaxed my-1.5">
        {parseInlineFormatting(trimmed)}
      </p>
    );
  });

  flushList();

  return <div className="space-y-1">{elements}</div>;
}

/**
 * Parses inline formatting: [link](url), **bold**, `code`, *italic*
 */
function parseInlineFormatting(str: string): ReactNode[] {
  const parts: ReactNode[] = [];
  // Tokenize regex matching [link](url), **bold**, `code`, *italic*
  const regex = /(\[.*?\]\(.*?\)|\*\*.*?\*\*|`.*?`|\*.*?\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(str)) !== null) {
    if (match.index > lastIndex) {
      parts.push(str.substring(lastIndex, match.index));
    }

    const token = match[0];

    if (token.startsWith("[") && token.includes("](") && token.endsWith(")")) {
      // Markdown link: [text](url)
      const linkMatch = token.match(/^\[(.*?)\]\((.*?)\)$/);
      if (linkMatch) {
        const [, label, url] = linkMatch;
        parts.push(
          <a
            key={match.index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 text-[#D45A2A] hover:text-[#111112] font-medium"
          >
            {label}
          </a>
        );
      } else {
        parts.push(token);
      }
    } else if (token.startsWith("**") && token.endsWith("**")) {
      // Bold text: **text**
      parts.push(
        <strong key={match.index} className="font-semibold text-[#111112]">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith("`") && token.endsWith("`")) {
      // Inline code: `code`
      parts.push(
        <code
          key={match.index}
          className="font-mono text-[11px] bg-[#FAF9F6] border border-[#E6E3DC] px-1 py-0.5 text-[#111112]"
        >
          {token.slice(1, -1)}
        </code>
      );
    } else if (token.startsWith("*") && token.endsWith("*")) {
      // Italic text: *text*
      parts.push(
        <em key={match.index} className="italic">
          {token.slice(1, -1)}
        </em>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < str.length) {
    parts.push(str.substring(lastIndex));
  }

  return parts;
}

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

  // Focus management
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 120);
    } else {
      triggerRef.current?.focus();
    }
  }, [isOpen]);

  // Handle ESC and Tab focus trapping
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!isOpen) return;

      if (e.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

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

  function getCurrentTime(): string {
    const d = new Date();
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  async function handleSend(textToSend?: string) {
    const text = (textToSend || input).trim();
    if (!text || isLoading) return;

    setInput("");
    setError(null);

    const userMessage: Message = {
      role: "user",
      content: text,
      time: getCurrentTime(),
    };
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
        {
          role: "assistant",
          content: data.reply,
          time: getCurrentTime(),
        },
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
      {/* Floating Trigger: Understated, Confident Editorial Badge */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 px-4 py-2.5 bg-[#FAF9F6] border border-[#111112] hover:bg-[#F4F2EC] active:border-[#D45A2A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D45A2A] shadow-xs"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          aria-label="Open Ask Aamna Portfolio Assistant"
        >
          <span className="font-mono text-xs font-bold text-[#D45A2A] select-none" aria-hidden="true">
            &gt;_
          </span>

          <div className="flex flex-col text-left">
            <span className="font-mono text-xs font-semibold tracking-wider uppercase text-[#111112] group-hover:text-[#D45A2A] transition-colors">
              ASK AAMNA
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-[#6E6D68]">
              Portfolio Guide
            </span>
          </div>

          <span className="w-1.5 h-1.5 bg-[#D45A2A] shrink-0" aria-hidden="true" />
        </button>
      </div>

      {/* Editorial Assistant Panel */}
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

          {/* Modal Container */}
          <div
            ref={modalRef}
            className="relative z-10 w-full sm:max-w-xl bg-[#FAF9F6] border-t sm:border border-[#111112] max-h-[88vh] sm:max-h-[640px] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-[#F4F2EC] border-b border-[#E6E3DC] flex items-center justify-between">
              <div className="flex items-baseline gap-2.5">
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
                    Portfolio Intelligence &bull; Technical Interview Guide
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
                  aria-label="Close assistant"
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

            {/* Conversation Stream */}
            <div
              className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 min-h-[260px] max-h-[400px] bg-[#FAF9F6]"
              tabIndex={0}
              aria-label="Conversation messages"
            >
              {messages.length === 0 ? (
                <div className="py-2 space-y-4">
                  <div className="p-4 bg-[#F4F2EC] border border-[#E6E3DC]">
                    <div className="font-mono text-[11px] uppercase tracking-widest text-[#D45A2A] font-semibold mb-1">
                      Direct Portfolio Inquiries
                    </div>
                    <p className="font-sans text-xs text-[#111112] leading-relaxed">
                      Ask directly about Syyeda Aamna&apos;s machine learning projects, engineering roles, technology decisions, or request project-grounded interview questions.
                    </p>
                  </div>

                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-[#6E6D68] mb-2.5">
                      Suggested Inquiries
                    </span>
                    <div className="flex flex-wrap gap-1.5">
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
                      className={`max-w-[92%] p-3.5 leading-relaxed ${
                        m.role === "user"
                          ? "bg-[#111112] text-[#FAF9F6] border border-[#111112]"
                          : "bg-[#F4F2EC] text-[#111112] border border-[#E6E3DC]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-wider mb-1.5 text-[#6E6D68]">
                        <span>{m.role === "user" ? "Visitor" : "Ask Aamna"}</span>
                        {m.time && <span>{m.time}</span>}
                      </div>

                      {m.role === "user" ? (
                        <p className="text-xs font-sans leading-relaxed whitespace-pre-wrap">{m.content}</p>
                      ) : (
                        <FormattedMessage text={m.content} />
                      )}
                    </div>
                  </div>
                ))
              )}

              {/* Loading Indicator */}
              {isLoading && (
                <div className="flex items-center gap-2.5 p-3 bg-[#F4F2EC] border border-[#E6E3DC] max-w-[85%] text-xs font-mono text-[#6E6D68]">
                  <span className="w-1.5 h-1.5 bg-[#D45A2A] animate-pulse" aria-hidden="true" />
                  <span>Thinking through verified project context...</span>
                </div>
              )}

              {/* Error Alert */}
              {error && (
                <div className="p-3 bg-[#FAF9F6] border border-[#D45A2A] text-xs text-[#D45A2A] font-mono">
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
                placeholder="Ask about projects, technical decisions, or interview topics..."
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
