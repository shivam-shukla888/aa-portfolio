import React from "react";

export type PageBackgroundVariant =
  | "home"
  | "about"
  | "projects"
  | "project-detail"
  | "experience"
  | "contact"
  | "ask-aamna"
  | "privacy"
  | "terms";

interface PageBackgroundProps {
  variant: PageBackgroundVariant;
  className?: string;
  projectNumber?: string;
}

/**
 * Editorial Technical Page Background Component
 *
 * Implements the bespoke editorial engineering visual language specified in `image.png`:
 * - Warm paper / ivory canvas (#FAF9F6)
 * - Ultra-fine hairline construction grids & coordinates (#E6E3DC)
 * - Sparse terracotta technical accent markers (#D45A2A)
 * - Restrained geometric schematics (drafting arcs, wireframe envelopes, document locks)
 * - 100% accessible: aria-hidden="true", pointer-events-none, never interferes with text/selection.
 * - Responsive: Full diagrammatic linework on desktop; simplified & non-intrusive on mobile.
 */
export function PageBackground({
  variant,
  className = "",
  projectNumber = "01",
}: PageBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none -z-10 ${className}`}
    >
      {/* Universal Faint Dot Grid */}
      <div className="absolute inset-0 bg-grid-faint opacity-70" />

      {/* 01. HOME BACKGROUND */}
      {variant === "home" && (
        <div className="absolute inset-0">
          {/* Subtle Vertical & Horizontal Guide Lines */}
          <svg
            className="absolute top-0 right-0 w-full h-full max-w-7xl left-1/2 -translate-x-1/2"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Right Guide Rail Line */}
            <line
              x1="76%"
              y1="40"
              x2="76%"
              y2="92%"
              stroke="#E6E3DC"
              strokeWidth="1"
              strokeDasharray="2 4"
              className="hidden lg:block"
            />
            {/* Horizontal Guide Axis */}
            <line
              x1="62%"
              y1="340"
              x2="95%"
              y2="340"
              stroke="#E6E3DC"
              strokeWidth="1"
              className="hidden lg:block"
            />
            {/* Terracotta Intersection Square Accent */}
            <rect
              x="calc(76% - 3px)"
              y="337"
              width="6"
              height="6"
              fill="#D45A2A"
              className="hidden lg:block"
            />
            <rect
              x="calc(76% - 2px)"
              y="110"
              width="4"
              height="4"
              fill="#E6E3DC"
              className="hidden lg:block"
            />
            <rect
              x="calc(76% - 2px)"
              y="580"
              width="4"
              height="4"
              fill="#E6E3DC"
              className="hidden lg:block"
            />
            {/* Curved Sketched Arrow to Hero Note */}
            <path
              d="M 690,260 C 705,290 695,315 675,325"
              fill="none"
              stroke="#D45A2A"
              strokeWidth="1.2"
              strokeDasharray="2 3"
              className="hidden xl:block"
            />
          </svg>

          {/* Right-Side Technical Process Step Rail */}
          <div className="hidden xl:flex flex-col gap-2.5 absolute top-[360px] right-[calc(50%-580px)] font-mono text-[10px] text-[#6E6D68] tracking-widest uppercase">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D45A2A]" />
              <span>01 / IDEA</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 bg-[#6E6D68]" />
              <span>02 / EXPERIMENT</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 bg-[#6E6D68]" />
              <span>03 / BUILD</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 bg-[#6E6D68]" />
              <span>04 / ITERATE</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 bg-[#6E6D68]" />
              <span>05 / DEPLOY</span>
            </div>
          </div>
        </div>
      )}

      {/* 02. ABOUT BACKGROUND */}
      {variant === "about" && (
        <div className="absolute inset-0">
          <svg
            className="absolute top-0 right-0 w-full h-full max-w-6xl left-1/2 -translate-x-1/2"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Architectural Coordinate Rectangle */}
            <rect
              x="62%"
              y="120"
              width="240"
              height="320"
              fill="none"
              stroke="#E6E3DC"
              strokeWidth="1"
              strokeDasharray="3 3"
              className="hidden lg:block"
            />
            {/* Coordinate Crosshairs */}
            <line
              x1="58%"
              y1="260"
              x2="90%"
              y2="260"
              stroke="#E6E3DC"
              strokeWidth="1"
              className="hidden lg:block"
            />
            <line
              x1="74%"
              y1="90"
              x2="74%"
              y2="470"
              stroke="#E6E3DC"
              strokeWidth="1"
              className="hidden lg:block"
            />
            {/* Terracotta Node Accent */}
            <rect
              x="calc(74% - 4px)"
              y="256"
              width="8"
              height="8"
              fill="#D45A2A"
              className="hidden lg:block"
            />
            {/* Secondary Accent */}
            <rect
              x="calc(62% - 2px)"
              y="118"
              width="5"
              height="5"
              fill="#D45A2A"
              className="hidden lg:block"
            />
            {/* Curved Annotation Arrow */}
            <path
              d="M 780,180 Q 770,210 755,225"
              fill="none"
              stroke="#D45A2A"
              strokeWidth="1.2"
              className="hidden xl:block"
            />
          </svg>

          {/* Right Editorial Note & Technical Rail */}
          <div className="hidden xl:flex flex-col gap-4 absolute top-[140px] right-[calc(50%-520px)]">
            <div className="max-w-[150px] text-right">
              <span className="font-display italic text-xs text-[#111112] block leading-tight">
                Continuous learning. better solutions.
              </span>
            </div>
            <div className="pt-24 flex flex-col gap-2 font-mono text-[10px] text-[#6E6D68] tracking-widest uppercase">
              <div>&bull; 01 / LEARN</div>
              <div>&bull; 02 / BUILD</div>
              <div>&bull; 03 / SHARE</div>
              <div>&bull; 04 / GROW</div>
            </div>
          </div>

          {/* Left Metadata Connector (Subtle Bottom Tag Stack) */}
          <div className="hidden md:flex flex-col gap-1.5 absolute bottom-16 left-[calc(50%-520px)] font-mono text-[10px] text-[#6E6D68] tracking-widest uppercase border-l-2 border-[#E6E3DC] pl-3">
            <span>AI/ML</span>
            <span>DATA SCIENCE</span>
            <span>SOFTWARE</span>
          </div>
        </div>
      )}

      {/* 03. PROJECTS BACKGROUND */}
      {variant === "projects" && (
        <div className="absolute inset-0">
          <svg
            className="absolute top-0 right-0 w-full h-full max-w-7xl left-1/2 -translate-x-1/2"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Large Compass / Radar Drafting Arc */}
            <circle
              cx="78%"
              cy="280"
              r="170"
              fill="none"
              stroke="#E6E3DC"
              strokeWidth="1"
              strokeDasharray="4 6"
              className="hidden lg:block"
            />
            <circle
              cx="78%"
              cy="280"
              r="90"
              fill="none"
              stroke="#E6E3DC"
              strokeWidth="1"
              className="hidden lg:block"
            />
            {/* Coordinate Lines */}
            <line
              x1="60%"
              y1="280"
              x2="96%"
              y2="280"
              stroke="#E6E3DC"
              strokeWidth="1"
              className="hidden lg:block"
            />
            <line
              x1="78%"
              y1="100"
              x2="78%"
              y2="460"
              stroke="#E6E3DC"
              strokeWidth="1"
              className="hidden lg:block"
            />
            {/* Terracotta Node Markers */}
            <rect
              x="calc(78% - 3px)"
              y="277"
              width="6"
              height="6"
              fill="#D45A2A"
              className="hidden lg:block"
            />
            <rect
              x="calc(78% + 87px)"
              y="278"
              width="4"
              height="4"
              fill="#D45A2A"
              className="hidden lg:block"
            />
          </svg>

          {/* Right Technical Project Index Rail */}
          <div className="hidden xl:flex flex-col gap-2 absolute top-[160px] right-[calc(50%-580px)] font-mono text-[10px] text-[#6E6D68] tracking-widest uppercase">
            <div>01 / FRAUD DETECTION</div>
            <div>02 / RAG VOICE CHATBOT</div>
            <div>03 / NETFLIX ANALYSIS</div>
          </div>

          {/* Bottom Philosophy Rail */}
          <div className="hidden md:block absolute bottom-8 left-[calc(50%-580px)] font-mono text-[10px] text-[#6E6D68] tracking-widest uppercase">
            IDEAS &mdash; CODE &mdash; DATA &mdash; IMPACT
          </div>
        </div>
      )}

      {/* 04. PROJECT DETAIL BACKGROUND */}
      {variant === "project-detail" && (
        <div className="absolute inset-0">
          <svg
            className="absolute top-0 right-0 w-full h-full max-w-6xl left-1/2 -translate-x-1/2"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Code Window Wireframe Schematic */}
            <g className="hidden lg:block">
              {/* Window Frame */}
              <rect
                x="68%"
                y="110"
                width="210"
                height="150"
                fill="#F4F2EC"
                stroke="#E6E3DC"
                strokeWidth="1"
              />
              {/* Header Bar */}
              <line
                x1="68%"
                y1="130"
                x2="calc(68% + 210px)"
                y2="130"
                stroke="#E6E3DC"
                strokeWidth="1"
              />
              {/* Window Dots */}
              <circle cx="calc(68% + 12px)" cy="120" r="2.5" fill="#E6E3DC" />
              <circle cx="calc(68% + 22px)" cy="120" r="2.5" fill="#E6E3DC" />
              <circle cx="calc(68% + 32px)" cy="120" r="2.5" fill="#E6E3DC" />

              {/* Wireframe Bar Chart */}
              <rect
                x="76%"
                y="280"
                width="150"
                height="100"
                fill="#F4F2EC"
                stroke="#E6E3DC"
                strokeWidth="1"
              />
              {/* Vertical Bars */}
              <rect x="calc(76% + 15px)" y="335" width="10" height="35" fill="#E6E3DC" />
              <rect x="calc(76% + 35px)" y="315" width="10" height="55" fill="#E6E3DC" />
              <rect x="calc(76% + 55px)" y="300" width="10" height="70" fill="#D45A2A" />
              <rect x="calc(76% + 75px)" y="325" width="10" height="45" fill="#E6E3DC" />
              <rect x="calc(76% + 95px)" y="295" width="10" height="75" fill="#D45A2A" />
              <rect x="calc(76% + 115px)" y="340" width="10" height="30" fill="#E6E3DC" />
            </g>

            {/* Terracotta Node Accent */}
            <rect
              x="calc(68% - 4px)"
              y="276"
              width="8"
              height="8"
              fill="#D45A2A"
              className="hidden lg:block"
            />
          </svg>

          {/* Left Step Navigation Index */}
          <div className="hidden xl:flex flex-col gap-1.5 absolute top-[280px] left-[calc(50%-580px)] font-mono text-[9px] text-[#6E6D68] tracking-widest uppercase">
            <div className="text-[#D45A2A] font-semibold mb-1">PROJECT {projectNumber}</div>
            <div>01 / OVERVIEW</div>
            <div>02 / CONTEXT</div>
            <div>03 / DATA</div>
            <div>04 / IMPLEMENTATION</div>
            <div>05 / TECHNOLOGIES</div>
            <div>06 / HIGHLIGHTS</div>
            <div>07 / SOURCE</div>
          </div>
        </div>
      )}

      {/* 05. EXPERIENCE BACKGROUND */}
      {variant === "experience" && (
        <div className="absolute inset-0">
          <svg
            className="absolute top-0 right-0 w-full h-full max-w-6xl left-1/2 -translate-x-1/2"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Vertical Timeline Construction Line */}
            <line
              x1="70%"
              y1="80"
              x2="70%"
              y2="88%"
              stroke="#E6E3DC"
              strokeWidth="1.5"
              className="hidden lg:block"
            />

            {/* Three Terracotta Timeline Node Markers */}
            <circle cx="70%" cy="160" r="5" fill="#D45A2A" className="hidden lg:block" />
            <circle cx="70%" cy="320" r="5" fill="#D45A2A" className="hidden lg:block" />
            <circle cx="70%" cy="480" r="5" fill="#D45A2A" className="hidden lg:block" />

            {/* Horizontal Projection Lines */}
            <line
              x1="58%"
              y1="160"
              x2="78%"
              y2="160"
              stroke="#E6E3DC"
              strokeWidth="1"
              strokeDasharray="2 3"
              className="hidden lg:block"
            />
            <line
              x1="58%"
              y1="320"
              x2="78%"
              y2="320"
              stroke="#E6E3DC"
              strokeWidth="1"
              strokeDasharray="2 3"
              className="hidden lg:block"
            />
            <line
              x1="58%"
              y1="480"
              x2="78%"
              y2="480"
              stroke="#E6E3DC"
              strokeWidth="1"
              strokeDasharray="2 3"
              className="hidden lg:block"
            />
            {/* Small Terracotta Accent */}
            <rect
              x="calc(60% - 3px)"
              y="560"
              width="6"
              height="6"
              fill="#D45A2A"
              className="hidden lg:block"
            />
          </svg>

          {/* Right Rail Timeline Steps */}
          <div className="hidden xl:flex flex-col gap-3 absolute top-[280px] right-[calc(50%-520px)] font-mono text-[10px] text-[#6E6D68] tracking-widest uppercase">
            <div>01 / LEARN</div>
            <div>02 / WORK</div>
            <div>03 / COLLABORATE</div>
            <div>04 / GROW</div>
          </div>

          {/* Bottom Left Pillars */}
          <div className="hidden md:flex flex-col gap-1.5 absolute bottom-12 left-[calc(50%-520px)] font-mono text-[10px] text-[#6E6D68] tracking-widest uppercase border-l-2 border-[#E6E3DC] pl-3">
            <span>PEOPLE</span>
            <span>PROJECTS</span>
            <span>PRACTICE</span>
            <span>PROGRESS</span>
          </div>
        </div>
      )}

      {/* 06. CONTACT BACKGROUND */}
      {variant === "contact" && (
        <div className="absolute inset-0">
          <svg
            className="absolute top-0 right-0 w-full h-full max-w-6xl left-1/2 -translate-x-1/2"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Minimal Postal Mail / Envelope Schematic */}
            <g className="hidden lg:block">
              {/* Envelope Body */}
              <rect
                x="70%"
                y="220"
                width="240"
                height="150"
                fill="#FAF9F6"
                stroke="#E6E3DC"
                strokeWidth="1"
              />
              {/* Envelope Flap Fold Lines */}
              <path
                d="M calc(70%) 220 L calc(70% + 120px) 300 L calc(70% + 240px) 220"
                fill="none"
                stroke="#E6E3DC"
                strokeWidth="1"
              />
              <line
                x1="calc(70%)"
                y1="370"
                x2="calc(70% + 95px)"
                y2="285"
                stroke="#E6E3DC"
                strokeWidth="1"
                strokeDasharray="2 3"
              />
              <line
                x1="calc(70% + 240px)"
                y1="370"
                x2="calc(70% + 145px)"
                y2="285"
                stroke="#E6E3DC"
                strokeWidth="1"
                strokeDasharray="2 3"
              />
              {/* Terracotta Postal Seal Marker */}
              <rect
                x="calc(70% + 180px)"
                y="300"
                width="10"
                height="10"
                fill="#D45A2A"
              />

              {/* Curved Postal Stamp Arc */}
              <circle
                cx="calc(70% + 120px)"
                cy="220"
                r="160"
                fill="none"
                stroke="#E6E3DC"
                strokeWidth="0.8"
                strokeDasharray="3 4"
              />
              {/* Curved Annotation Arrow */}
              <path
                d="M 800,150 Q 785,185 765,200"
                fill="none"
                stroke="#D45A2A"
                strokeWidth="1.2"
                className="hidden xl:block"
              />
            </g>
          </svg>

          {/* Top Right Editorial Annotation */}
          <div className="hidden xl:block absolute top-[110px] right-[calc(50%-520px)] max-w-[170px] text-right">
            <span className="font-display italic text-xs text-[#111112] block leading-tight">
              Always open to meaningful conversations.
            </span>
          </div>

          {/* Bottom Left Values Rail */}
          <div className="hidden md:flex flex-col gap-1.5 absolute bottom-12 left-[calc(50%-520px)] font-mono text-[10px] text-[#6E6D68] tracking-widest uppercase border-l-2 border-[#E6E3DC] pl-3">
            <span>IDEAS</span>
            <span>COLLABORATION</span>
            <span>OPPORTUNITIES</span>
            <span>CONVERSATIONS</span>
          </div>
        </div>
      )}

      {/* 07. ASK AAMNA BACKGROUND */}
      {variant === "ask-aamna" && (
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* Engineering Notebook Crosshairs in corners */}
            <g stroke="#E6E3DC" strokeWidth="1">
              <line x1="20" y1="12" x2="20" y2="28" />
              <line x1="12" y1="20" x2="28" y2="20" />
              <line x1="calc(100% - 20px)" y1="12" x2="calc(100% - 20px)" y2="28" />
              <line x1="calc(100% - 28px)" y1="20" x2="calc(100% - 12px)" y2="20" />
            </g>
            {/* Subtle Terracotta Registration Dot */}
            <rect x="24" y="320" width="4" height="4" fill="#D45A2A" opacity="0.6" />
          </svg>
        </div>
      )}

      {/* 08. PRIVACY POLICY BACKGROUND */}
      {variant === "privacy" && (
        <div className="absolute inset-0">
          <svg
            className="absolute top-0 right-0 w-full h-full max-w-5xl left-1/2 -translate-x-1/2"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Technical Security Document Outline with Padlock */}
            <g className="hidden lg:block">
              {/* Document Sheet */}
              <rect
                x="68%"
                y="140"
                width="180"
                height="240"
                fill="#FAF9F6"
                stroke="#E6E3DC"
                strokeWidth="1"
              />
              {/* Folded Top-Right Corner */}
              <polygon
                points="calc(68% + 150px),140 calc(68% + 180px),170 calc(68% + 150px),170"
                fill="#F4F2EC"
                stroke="#E6E3DC"
                strokeWidth="1"
              />
              {/* Document Ruled Line */}
              <line
                x1="calc(68% + 20px)"
                y1="190"
                x2="calc(68% + 120px)"
                y2="190"
                stroke="#E6E3DC"
                strokeWidth="1"
              />
              {/* Padlock Icon Schematic */}
              <rect
                x="calc(68% + 75px)"
                y="275"
                width="30"
                height="24"
                rx="2"
                fill="#FAF9F6"
                stroke="#111112"
                strokeWidth="1.5"
              />
              <path
                d="M calc(68% + 82px) 275 V 267 C calc(68% + 82px) 261, calc(68% + 98px) 261, calc(68% + 98px) 267 V 275"
                fill="none"
                stroke="#111112"
                strokeWidth="1.5"
              />
              <circle cx="calc(68% + 90px)" cy="285" r="2" fill="#D45A2A" />
              <line
                x1="calc(68% + 90px)"
                y1="287"
                x2="calc(68% + 90px)"
                y2="292"
                stroke="#D45A2A"
                strokeWidth="1.5"
              />
              {/* Terracotta Node Accent */}
              <rect
                x="calc(68% - 20px)"
                y="360"
                width="8"
                height="8"
                fill="#D45A2A"
              />
            </g>
          </svg>

          {/* Bottom Left Trust Metadata */}
          <div className="hidden md:flex flex-col gap-1.5 absolute bottom-12 left-[calc(50%-480px)] font-mono text-[10px] text-[#6E6D68] tracking-widest uppercase border-l-2 border-[#E6E3DC] pl-3">
            <span>TRANSPARENCY</span>
            <span>PRIVACY</span>
            <span>USER TRUST</span>
            <span>RESPONSIBLE USE</span>
          </div>
        </div>
      )}

      {/* 09. TERMS OF SERVICE BACKGROUND */}
      {variant === "terms" && (
        <div className="absolute inset-0">
          <svg
            className="absolute top-0 right-0 w-full h-full max-w-5xl left-1/2 -translate-x-1/2"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Legal Document Sheet with Ruled Lines */}
            <g className="hidden lg:block">
              {/* Document Sheet */}
              <rect
                x="68%"
                y="140"
                width="180"
                height="240"
                fill="#FAF9F6"
                stroke="#E6E3DC"
                strokeWidth="1"
              />
              {/* Top Notch / Header Bar */}
              <line
                x1="calc(68% + 20px)"
                y1="175"
                x2="calc(68% + 60px)"
                y2="175"
                stroke="#D45A2A"
                strokeWidth="1.5"
              />
              {/* Document Ruled Lines */}
              <line
                x1="calc(68% + 20px)"
                y1="205"
                x2="calc(68% + 150px)"
                y2="205"
                stroke="#E6E3DC"
                strokeWidth="1"
              />
              <line
                x1="calc(68% + 20px)"
                y1="230"
                x2="calc(68% + 140px)"
                y2="230"
                stroke="#E6E3DC"
                strokeWidth="1"
              />
              <line
                x1="calc(68% + 20px)"
                y1="255"
                x2="calc(68% + 150px)"
                y2="255"
                stroke="#E6E3DC"
                strokeWidth="1"
              />
              <line
                x1="calc(68% + 20px)"
                y1="280"
                x2="calc(68% + 120px)"
                y2="280"
                stroke="#E6E3DC"
                strokeWidth="1"
              />
              <line
                x1="calc(68% + 20px)"
                y1="305"
                x2="calc(68% + 145px)"
                y2="305"
                stroke="#E6E3DC"
                strokeWidth="1"
              />
              {/* Terracotta Node Accent */}
              <rect
                x="calc(68% - 30px)"
                y="340"
                width="7"
                height="7"
                fill="#D45A2A"
              />
            </g>
          </svg>

          {/* Bottom Left Fairness Metadata */}
          <div className="hidden md:flex flex-col gap-1.5 absolute bottom-12 left-[calc(50%-480px)] font-mono text-[10px] text-[#6E6D68] tracking-widest uppercase border-l-2 border-[#E6E3DC] pl-3">
            <span>CLARITY</span>
            <span>FAIR USE</span>
            <span>RESPONSIBLE ACCESS</span>
            <span>OPEN INFORMATION</span>
          </div>
        </div>
      )}
    </div>
  );
}
