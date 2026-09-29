"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import { HamsterMascot, HamsterState } from "./HamsterMascot";
import { PageBackground } from "./PageBackground";

interface Message {
  role: "user" | "assistant";
  content: string;
  time?: string;
}

const SUGGESTED_QUERIES = [
  "Walk me through her projects",
  "Explain the fraud detection project",
  "How does the RAG chatbot work?",
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
            aria-label="Open Aamna AI portfolio guide"
          >
            {/* Mascot in circle badge */}
            <div className="w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-[#F4F2EC] border border-[#E6E3DC] flex items-center justify-center overflow-hidden shrink-0">
              <HamsterMascot size={32} state="idle" showSpeechBubble={false} />
            </div>

            <div className="hidden sm:flex flex-col text-left">
              <div className="font-sans text-xs font-semibold text-[#111112] tracking-wide group-hover:text-[#D45A2A] transition-colors">
                Aamna AI
              </div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#6E6D68]">
                Portfolio Guide
              </span>
            </div>
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
            className="relative z-10 w-full sm:max-w-lg bg-[#FAF9F6] border-t sm:border border-[#111112] sm:rounded-2xl shadow-2xl max-h-[92vh] sm:max-h-[660px] flex flex-col overflow-hidden"
          >
            <PageBackground variant="ask-aamna" />

            {/* Header: Aamna AI — Portfolio Guide */}
            <div className="px-5 py-3.5 bg-[#FAF9F6]/90 backdrop-blur-xs border-b border-[#E6E3DC] flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2">
                <h3 id="ask-aamna-title" className="font-sans text-sm font-semibold text-[#111112]">
                  Aamna AI <span className="font-normal text-xs text-[#6E6D68]">&mdash; Portfolio Guide</span>
                </h3>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2.5">
                {messages.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="font-mono text-[10px] uppercase tracking-wider text-[#6E6D68] hover:text-[#D45A2A] px-1.5 py-0.5 transition-colors"
                  >
                    Reset
                  </button>
                )}

                {/* Close button */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-5 h-5 flex items-center justify-center text-[#6E6D68] hover:text-[#111112] focus:outline-none"
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
              className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 min-h-[280px] max-h-[420px] bg-[#FAF9F6]/80 relative z-10"
              tabIndex={0}
              aria-label="Conversation messages"
            >
              {messages.length === 0 ? (
                /* Welcome State matching Panel 07 */
                <div className="space-y-4 pt-2">
                  <div className="py-2 px-1 relative flex items-center gap-4">
                    {/* Left Mascot with laptop & speech bubble */}
                    <div className="shrink-0">
                      <HamsterMascot size={105} state={hamsterState} showSpeechBubble={true} />
                    </div>

                    {/* Right Greeting & description */}
                    <div className="flex-1">
                      <h4 className="font-sans text-lg font-bold text-[#111112] leading-snug flex items-center gap-1.5">
                        <span>Hi! I&apos;m Aamna AI</span>
                        <span aria-hidden="true">👋</span>
                      </h4>
                      <p className="mt-1.5 font-sans text-xs text-[#6E6D68] leading-relaxed">
                        Your guide to Syyeda Aamna&apos;s projects, experience, skills and more.
                      </p>
                    </div>
                  </div>

                  {/* 4 Suggested Query Pills matching Panel 07 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {SUGGESTED_QUERIES.map((q) => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => handleSend(q)}
                        className="text-center font-sans text-xs px-4 py-2.5 bg-[#FAF9F6] hover:bg-[#F4F2EC] border border-[#D45A2A]/50 hover:border-[#D45A2A] text-[#111112] transition-colors rounded-full"
                      >
                        <span className="line-clamp-1">{q}</span>
                      </button>
                    ))}
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
                          {m.role === "user" ? "Visitor" : "Aamna AI"}
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
                    <span>Searching portfolio context...</span>
                  </div>
                </div>
              )}

              {/* Error Alert */}
              {error && (
                <div className="p-3 bg-[#FAF9F6] border border-[#D45A2A] text-xs text-[#D45A2A] font-mono">
                  {error}
                </div>
              )}

              {/* Disclaimer */}
              <div className="pt-2 text-[10px] font-mono text-[#6E6D68] border-t border-[#E6E3DC]/60">
                <span className="text-[#D45A2A] font-bold">Note:</span> AI portfolio guide grounded strictly on portfolio data. For official inquiries, please contact Syyeda Aamna directly.
              </div>

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar matching reference */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-4 bg-[#FAF9F6] border-t border-[#E6E3DC] flex items-center gap-3"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Message Aamna AI..."
                disabled={isLoading}
                maxLength={500}
                className="flex-1 px-4 py-2.5 text-xs font-sans bg-white border border-[#E6E3DC] rounded-lg focus:border-[#111112] text-[#111112] placeholder:text-[#6E6D68] focus:outline-none shadow-2xs"
                aria-label="Message Aamna AI about Syyeda Aamna's portfolio"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="w-10 h-10 flex items-center justify-center bg-[#D45A2A] rounded-lg disabled:bg-[#E6E3DC] disabled:text-[#6E6D68] text-white hover:bg-[#b8471c] transition-colors disabled:cursor-not-allowed shrink-0 focus-visible:outline-none shadow-2xs"
                aria-label="Send message"
              >
                <svg
                  className="w-4 h-4 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
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
