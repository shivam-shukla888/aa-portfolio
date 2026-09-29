"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import { HamsterMascot, HamsterState } from "./HamsterMascot";

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
      <p key={`p-${lineIdx}`} className="text-xs leading-relaxed my-1.5 text-[#111112]">
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
  const regex = /(\[.*?\]\(.*?\)|\*\*.*?\*\*|`.*?`|\*.*?\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(str)) !== null) {
    if (match.index > lastIndex) {
      parts.push(str.substring(lastIndex, match.index));
    }

    const token = match[0];

    if (token.startsWith("[") && token.includes("](") && token.endsWith(")")) {
      const linkMatch = token.match(/^\[(.*?)\]\((.*?)\)$/);
      if (linkMatch) {
        const linkText = linkMatch[1];
        const linkUrl = linkMatch[2];
        const isInternal = linkUrl.startsWith("/") || linkUrl.startsWith("#");

        parts.push(
          <a
            key={match.index}
            href={linkUrl}
            target={isInternal ? undefined : "_blank"}
            rel={isInternal ? undefined : "noopener noreferrer"}
            className="text-[#D45A2A] underline underline-offset-2 hover:text-[#111112] font-medium"
          >
            {linkText}
          </a>
        );
      }
    } else if (token.startsWith("**") && token.endsWith("**")) {
      parts.push(
        <strong key={match.index} className="font-semibold text-[#111112]">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith("`") && token.endsWith("`")) {
      parts.push(
        <code
          key={match.index}
          className="font-mono text-[11px] px-1.5 py-0.5 bg-[#FAF9F6] border border-[#E6E3DC] text-[#111112]"
        >
          {token.slice(1, -1)}
        </code>
      );
    } else if (token.startsWith("*") && token.endsWith("*")) {
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

  // Derive hamster state
  const hamsterState: HamsterState = isLoading
    ? "thinking"
    : error
    ? "error"
    : messages.length > 0 && messages[messages.length - 1].role === "assistant"
    ? "answering"
    : "idle";

  // Listen for open events triggered from Header or other buttons
  useEffect(() => {
    function handleOpenEvent() {
      setIsOpen(true);
    }
    window.addEventListener("open-ask-aamna", handleOpenEvent);
    return () => window.removeEventListener("open-ask-aamna", handleOpenEvent);
  }, []);

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
        throw new Error(data.error || "Unable to retrieve response.");
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: data.reply,
        time: getCurrentTime(),
      };
      setMessages([...updatedMessages, assistantMessage]);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to connect to the assistant.";
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
      {/* Floating Bottom-Right Trigger Button with Hamster Mascot Icon */}
      {!isOpen && (
        <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-3 p-1.5 sm:px-4 sm:py-2.5 bg-[#FAF9F6] border border-[#111112] shadow-sm hover:border-[#D45A2A] transition-all group focus-visible:outline-none cursor-pointer"
            aria-expanded={isOpen}
            aria-label="Open Ask Aamna portfolio guide"
          >
            {/* Mascot in circle badge */}
            <div className="w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-[#F4F2EC] border border-[#E6E3DC] flex items-center justify-center overflow-hidden shrink-0">
              <HamsterMascot size={32} state="idle" showSpeechBubble={false} />
            </div>

            <div className="hidden sm:flex flex-col text-left">
              <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-[#111112] tracking-wider uppercase group-hover:text-[#D45A2A] transition-colors">
                <span className="text-[#D45A2A] font-bold">&gt;_</span>
                <span>ASK AAMNA</span>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#6E6D68]">
                Portfolio Guide
              </span>
            </div>

            <span className="hidden sm:inline-block w-1.5 h-1.5 bg-[#D45A2A] shrink-0" aria-hidden="true" />
          </button>
        </div>
      )}

      {/* Editorial Assistant Panel / Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-[#111112]/35 backdrop-blur-xs transition-opacity"
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
            className="relative z-10 w-full sm:max-w-lg bg-[#FAF9F6] border-t sm:border border-[#111112] shadow-xl max-h-[90vh] sm:max-h-[640px] flex flex-col overflow-hidden"
          >
            {/* Header matching reference: >_ ASK AAMNA • Portfolio Guide [hamster indicator] - × */}
            <div className="px-5 py-3.5 bg-[#FAF9F6] border-b border-[#E6E3DC] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold text-[#D45A2A]" aria-hidden="true">
                  &gt;_
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3
                      id="ask-aamna-title"
                      className="font-mono text-xs font-semibold uppercase tracking-widest text-[#111112]"
                    >
                      ASK AAMNA
                    </h3>
                    <span className="text-[#D45A2A] font-mono text-xs">&bull;</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#6E6D68]">
                      Portfolio Guide
                    </span>
                  </div>
                </div>
              </div>

              {/* Window Controls */}
              <div className="flex items-center gap-2">
                {/* Tiny Mascot Avatar in header */}
                <div className="w-6 h-6 rounded-full bg-[#F4F2EC] border border-[#E6E3DC] flex items-center justify-center overflow-hidden">
                  <HamsterMascot size={22} state={hamsterState} />
                </div>

                {messages.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="font-mono text-[10px] uppercase tracking-wider text-[#6E6D68] hover:text-[#D45A2A] px-1.5 py-0.5 transition-colors"
                  >
                    Reset
                  </button>
                )}

                {/* Minimize button */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-[#6E6D68] hover:text-[#111112] focus:outline-none"
                  aria-label="Minimize assistant"
                >
                  <span className="font-mono text-xs block leading-none">&mdash;</span>
                </button>

                {/* Close button */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-[#6E6D68] hover:text-[#111112] focus:outline-none"
                  aria-label="Close assistant"
                >
                  <svg
                    className="w-3.5 h-3.5 stroke-current"
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
              className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 min-h-[280px] max-h-[420px] bg-[#FAF9F6]"
              tabIndex={0}
              aria-label="Conversation messages"
            >
              {messages.length === 0 ? (
                /* Welcome State matching reference mockup */
                <div className="space-y-4 pt-1">
                  <div className="p-4 bg-[#F4F2EC] bg-grid-faint border border-[#E6E3DC] relative overflow-hidden">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h4 className="font-display text-lg text-[#111112] font-semibold leading-snug">
                          Hi! I&apos;m a portfolio guide for Syyeda Aamna.
                        </h4>
                        <p className="mt-1.5 font-sans text-xs text-[#6E6D68] leading-relaxed">
                          I can help you understand her projects, experience, skills and more.
                        </p>
                      </div>

                      {/* Hamster Character Illustration */}
                      <div className="shrink-0 -mt-1 -mr-1">
                        <HamsterMascot size={78} state="idle" showSpeechBubble={true} />
                      </div>
                    </div>
                  </div>

                  {/* Suggested Query Buttons */}
                  <div className="space-y-2">
                    <div className="flex flex-col gap-1.5">
                      {SUGGESTED_QUERIES.map((q) => (
                        <button
                          key={q}
                          type="button"
                          onClick={() => handleSend(q)}
                          className="w-full text-left font-sans text-xs px-3.5 py-2 bg-[#FAF9F6] hover:bg-[#F4F2EC] border border-[#E6E3DC] hover:border-[#111112] text-[#111112] transition-colors rounded-full flex items-center justify-between group"
                        >
                          <span>{q}</span>
                          <span className="font-mono text-xs text-[#6E6D68] group-hover:text-[#D45A2A] group-hover:translate-x-0.5 transition-all">
                            &rarr;
                          </span>
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
                        <span className="flex items-center gap-1.5">
                          {m.role === "assistant" && (
                            <span className="w-1.5 h-1.5 bg-[#D45A2A] rounded-full inline-block" />
                          )}
                          {m.role === "user" ? "Visitor" : "Ask Aamna"}
                        </span>
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
                <div className="flex items-center gap-3 p-3 bg-[#F4F2EC] border border-[#E6E3DC] max-w-[85%] text-xs font-mono text-[#6E6D68]">
                  <HamsterMascot size={28} state="thinking" />
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#D45A2A] animate-pulse" aria-hidden="true" />
                    <span>Thinking through verified project context...</span>
                  </div>
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

            {/* Input Bar matching reference */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-[#FAF9F6] border-t border-[#E6E3DC] flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Aamna..."
                disabled={isLoading}
                maxLength={500}
                className="flex-1 px-3.5 py-2 text-xs font-sans bg-[#FAF9F6] border border-[#E6E3DC] focus:border-[#111112] text-[#111112] placeholder:text-[#6E6D68] focus:outline-none"
                aria-label="Ask a question about Syyeda Aamna's portfolio"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="w-8 h-8 flex items-center justify-center bg-[#D45A2A] disabled:bg-[#E6E3DC] disabled:text-[#6E6D68] text-[#FAF9F6] hover:bg-[#b8471c] transition-colors disabled:cursor-not-allowed shrink-0 focus-visible:outline-none"
                aria-label="Send message"
              >
                <svg
                  className="w-4 h-4 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
