import React from "react";

export type HamsterState = "idle" | "thinking" | "answering" | "hover" | "error";

interface HamsterMascotProps {
  state?: HamsterState;
  className?: string;
  size?: number;
  showSpeechBubble?: boolean;
}

/**
 * Original Minimalist Editorial Hamster Character
 * Designed specifically for Syyeda Aamna's AI/ML Portfolio.
 * Warm editorial aesthetic, crisp ink lines (#111112), warm fur tones (#DFA16E, #F7DBC2),
 * and restrained terracotta (#D45A2A) accents.
 * Accessible with aria-hidden="true" by default.
 */
export function HamsterMascot({
  state = "idle",
  className = "",
  size = 72,
  showSpeechBubble = false,
}: HamsterMascotProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full ${
          state === "idle"
            ? "animate-hamster-breathe"
            : state === "thinking"
            ? "animate-hamster-think"
            : state === "answering"
            ? "animate-hamster-type"
            : ""
        }`}
      >
        <defs>
          {/* Subtle warm gradients for clean editorial finish */}
          <linearGradient id="furGradient" x1="50" y1="20" x2="50" y2="85" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5D0A9" />
            <stop offset="1" stopColor="#E29E65" />
          </linearGradient>
          <linearGradient id="bellyGradient" x1="50" y1="45" x2="50" y2="78" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF9F2" />
            <stop offset="1" stopColor="#FBEBD8" />
          </linearGradient>
        </defs>

        {/* Ears */}
        {/* Left Ear */}
        <ellipse cx="32" cy="24" rx="9" ry="11" fill="#E29E65" stroke="#111112" strokeWidth="2.5" />
        <ellipse cx="32" cy="24" rx="5" ry="6.5" fill="#F8B69B" />
        
        {/* Right Ear */}
        <ellipse cx="68" cy="24" rx="9" ry="11" fill="#E29E65" stroke="#111112" strokeWidth="2.5" />
        <ellipse cx="68" cy="24" rx="5" ry="6.5" fill="#F8B69B" />

        {/* Body & Head Outline (Single cute organic pear-shaped rodent body) */}
        <path
          d="M 50 20 C 68 20 78 32 78 48 C 78 60 82 72 78 82 C 74 90 26 90 22 82 C 18 72 22 60 22 48 C 22 32 32 20 50 20 Z"
          fill="url(#furGradient)"
          stroke="#111112"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Cream Belly Patch */}
        <path
          d="M 50 42 C 62 42 66 52 66 66 C 66 76 60 84 50 84 C 40 84 34 76 34 66 C 34 52 38 42 50 42 Z"
          fill="url(#bellyGradient)"
        />

        {/* Tiny Cheek Blushes */}
        <ellipse cx="29" cy="48" rx="4" ry="2.5" fill="#F8B69B" opacity="0.8" />
        <ellipse cx="71" cy="48" rx="4" ry="2.5" fill="#F8B69B" opacity="0.8" />

        {/* Whiskers */}
        <path d="M 23 46 L 12 44 M 23 49 L 10 50 M 23 52 L 12 55" stroke="#111112" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 77 46 L 88 44 M 77 49 L 90 50 M 77 52 L 88 55" stroke="#111112" strokeWidth="1.2" strokeLinecap="round" />

        {/* Eyes with curious shine */}
        {state === "error" ? (
          // Squinting / error eyes > <
          <>
            <path d="M 33 36 L 41 40 M 41 36 L 33 40" stroke="#111112" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 59 40 L 67 36 M 59 36 L 67 40" stroke="#111112" strokeWidth="2.2" strokeLinecap="round" />
          </>
        ) : state === "thinking" ? (
          // Inquisitive upward gaze
          <>
            <circle cx="37" cy="37" r="3.8" fill="#111112" />
            <circle cx="36" cy="35.5" r="1.2" fill="#FAF9F6" />
            <circle cx="63" cy="37" r="3.8" fill="#111112" />
            <circle cx="62" cy="35.5" r="1.2" fill="#FAF9F6" />
          </>
        ) : (
          // Friendly curious gaze with catchlights
          <>
            <circle cx="37" cy="38" r="3.6" fill="#111112" />
            <circle cx="38" cy="37" r="1.2" fill="#FAF9F6" />
            <circle cx="63" cy="38" r="3.6" fill="#111112" />
            <circle cx="64" cy="37" r="1.2" fill="#FAF9F6" />
          </>
        )}

        {/* Tiny Editorial Wireframe Round Spectacles (Intellectual/Scholarly Touch) */}
        <circle cx="37" cy="38" r="7.5" stroke="#111112" strokeWidth="1.2" fill="none" opacity="0.6" />
        <circle cx="63" cy="38" r="7.5" stroke="#111112" strokeWidth="1.2" fill="none" opacity="0.6" />
        <line x1="44.5" y1="38" x2="55.5" y2="38" stroke="#111112" strokeWidth="1.2" opacity="0.6" />

        {/* Nose & Mouth */}
        <polygon points="48,43 52,43 50,45.5" fill="#D45A2A" stroke="#111112" strokeWidth="0.8" />
        <path d="M 50 45.5 L 50 48" stroke="#111112" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 46 48 Q 50 50.5 54 48" stroke="#111112" strokeWidth="1.2" fill="none" strokeLinecap="round" />

        {/* Miniature Laptop Computer */}
        {/* Laptop Screen */}
        <rect
          x="35"
          y="56"
          width="30"
          height="19"
          rx="1"
          fill="#FAF9F6"
          stroke="#111112"
          strokeWidth="1.6"
        />
        {/* Screen Content: Tiny Terminal Prompt / Code Lines */}
        <line x1="39" y1="61" x2="43" y2="61" stroke="#D45A2A" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="45" y1="61" x2="60" y2="61" stroke="#111112" strokeWidth="1" strokeLinecap="round" />
        <line x1="39" y1="65" x2="56" y2="65" stroke="#6E6D68" strokeWidth="1" strokeLinecap="round" />
        <line x1="39" y1="69" x2="52" y2="69" stroke="#6E6D68" strokeWidth="1" strokeLinecap="round" />

        {/* Laptop Base / Keyboard */}
        <polygon
          points="31,78 69,78 67,82 33,82"
          fill="#E6E3DC"
          stroke="#111112"
          strokeWidth="1.6"
        />

        {/* Hamster Paws typing or resting on keyboard */}
        <ellipse cx="36" cy="76" rx="3.5" ry="2.5" fill="#FFF9F2" stroke="#111112" strokeWidth="1.4" />
        <ellipse cx="64" cy="76" rx="3.5" ry="2.5" fill="#FFF9F2" stroke="#111112" strokeWidth="1.4" />
      </svg>

      {/* Subtle speech bubble */}
      {showSpeechBubble && (
        <div className="absolute -top-3 -right-2 bg-[#FAF9F6] border border-[#111112] px-1.5 py-0.5 shadow-xs">
          <div className="flex items-center gap-0.5">
            <span className="w-1 h-1 rounded-full bg-[#D45A2A] animate-pulse" />
            <span className="w-1 h-1 rounded-full bg-[#111112] animate-pulse delay-75" />
            <span className="w-1 h-1 rounded-full bg-[#6E6D68] animate-pulse delay-150" />
          </div>
        </div>
      )}
    </div>
  );
}
