import React from "react";

export type PageBackgroundVariant =
  | "home"
  | "about"
  | "projects"
  | "project-detail"
  | "experience"
  | "contact"
  | "ask-aamna";

interface PageBackgroundProps {
  variant?: PageBackgroundVariant;
  className?: string;
  projectNumber?: string;
}

/**
 * Editorial Page Background Component
 *
 * Provides a quiet, subtle paper texture with faint drafting lines.
 * Free of decorative slogans, fake code windows, arrows, and technical clutter.
 */
export function PageBackground({
  className = "",
}: PageBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}
    >
      {/* Universal Faint Dot Grid */}
      <div className="absolute inset-0 bg-grid-faint opacity-50" />

      {/* Subtle, restrained hairline borders that frame the canvas quietly */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        viewBox="0 0 1440 768"
        preserveAspectRatio="xMaxYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Fine drafting arc on the right edge */}
        <circle
          cx="1160"
          cy="384"
          r="340"
          fill="none"
          stroke="#DFDCD5"
          strokeWidth="0.8"
        />
        {/* Subtle horizontal alignment guide */}
        <line
          x1="860"
          y1="384"
          x2="1400"
          y2="384"
          stroke="#E6E3DC"
          strokeWidth="0.6"
          strokeDasharray="4 6"
        />
      </svg>
    </div>
  );
}
