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
 * Faithfully reconstructs the exact vector blueprints from the reference specification (image.png):
 * - Canvas: Warm ivory (#FAF9F6) with subtle dot grid (#E6E3DC)
 * - Fine engineering crosshairs and compass drafting arcs (#DFDCD5)
 * - Solid terracotta square accents & circular node markers (#D45A2A)
 * - True blueprint diagrams:
 *     01 Home: Compass arc, coordinate crosshairs, sketched arrow, 5-step rail
 *     02 About: Architectural grid column, drafting crosshairs, plumb line, 4-step rail
 *     03 Projects: Compass drafting circle, floating technical index card, coordinate squares
 *     04 Project Detail: Wireframe code window, overlapping histogram bar chart, step slider
 *     05 Experience: Strong vertical timeline axis, 3 terracotta nodes, horizontal projection lines, rail
 *     06 Contact: Blueprint origami envelope with terracotta seal, postal stamp arc, sketched annotation
 *     07 Ask Aamna: Notebook frame crosshairs and dot mesh
 *     08 Privacy: Document sheet with ruled lines, security padlock with keyhole, trust plumb line
 *     09 Terms: Legal document sheet with header bracket, compass arc, paper grid blocks
 *
 * 100% vector SVG, aria-hidden="true", pointer-events-none, perfectly responsive.
 */
export function PageBackground({
  variant,
  className = "",
}: PageBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}
    >
      {/* Universal Faint Dot Grid */}
      <div className="absolute inset-0 bg-grid-faint opacity-60" />

      {/* 01. HOME BACKGROUND */}
      {variant === "home" && (
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 768"
          preserveAspectRatio="xMaxYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="dense-dots" width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.8" fill="#DFDCD5" />
            </pattern>
          </defs>

          {/* Dot mesh block on top right */}
          <rect
            x="960"
            y="140"
            width="260"
            height="200"
            fill="url(#dense-dots)"
            stroke="#E6E3DC"
            strokeWidth="0.75"
            strokeDasharray="2 3"
            opacity="0.85"
            className="hidden sm:block"
          />

          {/* Large Compass Drafting Arc */}
          <circle
            cx="1040"
            cy="390"
            r="310"
            fill="none"
            stroke="#DFDCD5"
            strokeWidth="1.2"
          />
          <circle
            cx="1040"
            cy="390"
            r="310"
            fill="none"
            stroke="#E6E3DC"
            strokeWidth="0.8"
            strokeDasharray="4 6"
          />

          {/* Coordinate Axes */}
          <line x1="760" y1="390" x2="1380" y2="390" stroke="#DFDCD5" strokeWidth="1" />
          <line x1="1040" y1="80" x2="1040" y2="680" stroke="#DFDCD5" strokeWidth="1" />

          {/* Terracotta Node Markers */}
          <circle cx="1040" cy="140" r="4.5" fill="#D45A2A" />
          <circle cx="1320" cy="245" r="4" fill="#D45A2A" />
          <circle cx="1040" cy="580" r="4" fill="#D45A2A" />
          <circle cx="1040" cy="670" r="3.5" fill="#D45A2A" />
          <rect x="1180" y="386" width="8" height="8" fill="#D45A2A" />

          {/* Sketched Annotation & Curved Arrow */}
          <g className="hidden sm:block">
            <text
              x="1060"
              y="290"
              fontFamily="var(--font-newsreader), Newsreader, serif"
              fontStyle="italic"
              fontSize="21"
              fill="#111112"
              letterSpacing="-0.01em"
            >
              <tspan x="1060" dy="0">Turning</tspan>
              <tspan x="1060" dy="24">ideas into</tspan>
              <tspan x="1060" dy="24">useful solutions.</tspan>
            </text>
            <path
              d="M 1035 365 Q 1025 425 1075 440"
              fill="none"
              stroke="#D45A2A"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <polygon points="1075,435 1085,441 1073,447" fill="#D45A2A" />
          </g>

          {/* Process Step Rail (Lower Right) */}
          <g
            fontFamily="var(--font-jetbrains-mono), monospace"
            fontSize="12"
            fill="#6E6D68"
            letterSpacing="0.08em"
            className="hidden md:block"
          >
            <circle cx="1140" cy="490" r="2.5" fill="#D45A2A" />
            <text x="1155" y="494">01 / IDEA</text>
            <circle cx="1140" cy="518" r="2.5" fill="#D45A2A" />
            <text x="1155" y="522">02 / EXPERIMENT</text>
            <circle cx="1140" cy="546" r="2.5" fill="#D45A2A" />
            <text x="1155" y="550">03 / BUILD</text>
            <circle cx="1140" cy="574" r="2.5" fill="#D45A2A" />
            <text x="1155" y="578">04 / ITERATE</text>
            <circle cx="1140" cy="602" r="2.5" fill="#D45A2A" />
            <text x="1155" y="606">05 / DEPLOY</text>
          </g>

          {/* Lower-Left Crosshair & Diamond */}
          <line x1="120" y1="710" x2="200" y2="710" stroke="#DFDCD5" strokeWidth="1" />
          <line x1="160" y1="670" x2="160" y2="750" stroke="#DFDCD5" strokeWidth="1" />
          <circle cx="160" cy="710" r="3.5" fill="#D45A2A" />
          <rect
            x="210"
            y="670"
            width="8"
            height="8"
            fill="#D45A2A"
            transform="rotate(45 214 674)"
          />
        </svg>
      )}

      {/* 02. ABOUT BACKGROUND */}
      {variant === "about" && (
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 768"
          preserveAspectRatio="xMaxYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="column-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <line x1="0" y1="24" x2="24" y2="24" stroke="#E6E3DC" strokeWidth="0.8" />
              <line x1="24" y1="0" x2="24" y2="24" stroke="#E6E3DC" strokeWidth="0.8" />
            </pattern>
          </defs>

          {/* Architectural Grid Column */}
          <rect
            x="760"
            y="340"
            width="220"
            height="428"
            fill="#F4F2EC"
            stroke="#DFDCD5"
            strokeWidth="1"
            className="hidden sm:block"
          />
          <rect
            x="760"
            y="340"
            width="220"
            height="428"
            fill="url(#column-grid)"
            className="hidden sm:block"
          />

          {/* Big Terracotta Square on Column */}
          <rect x="780" y="580" width="18" height="18" fill="#D45A2A" />

          {/* Horizontal & Vertical Drafting Lines */}
          <line x1="320" y1="180" x2="940" y2="180" stroke="#DFDCD5" strokeWidth="1" />
          <line x1="680" y1="210" x2="1160" y2="210" stroke="#DFDCD5" strokeWidth="1" />
          <line x1="720" y1="140" x2="720" y2="380" stroke="#DFDCD5" strokeWidth="1" />
          <line x1="940" y1="140" x2="940" y2="768" stroke="#DFDCD5" strokeWidth="1" />

          {/* Terracotta Node Markers */}
          <rect x="932" y="202" width="16" height="16" fill="#D45A2A" />
          <circle cx="720" cy="230" r="5" fill="#D45A2A" />
          <circle cx="940" cy="480" r="4" fill="#D45A2A" />
          <rect x="934" y="720" width="12" height="12" fill="#D45A2A" />

          {/* Sketched Annotation & Arrow */}
          <g className="hidden sm:block">
            <text
              x="1060"
              y="260"
              fontFamily="var(--font-newsreader), Newsreader, serif"
              fontStyle="italic"
              fontSize="21"
              fill="#111112"
              letterSpacing="-0.01em"
            >
              <tspan x="1060" dy="0">Continuous</tspan>
              <tspan x="1060" dy="24">learning.</tspan>
              <tspan x="1060" dy="24">better solutions.</tspan>
            </text>
            <path
              d="M 1140 350 Q 1145 420 1115 435"
              fill="none"
              stroke="#D45A2A"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <polygon points="1115,430 1107,436 1116,442" fill="#D45A2A" />
          </g>

          {/* Right Technical Rail */}
          <g className="hidden md:block">
            <line x1="1030" y1="490" x2="1030" y2="620" stroke="#DFDCD5" strokeWidth="1" />
            <g
              fontFamily="var(--font-jetbrains-mono), monospace"
              fontSize="12"
              fill="#6E6D68"
              letterSpacing="0.08em"
            >
              <circle cx="1030" cy="500" r="3" fill="#D45A2A" />
              <text x="1045" y="504">01 / LEARN</text>
              <circle cx="1030" cy="530" r="3" fill="#D45A2A" />
              <text x="1045" y="534">02 / BUILD</text>
              <circle cx="1030" cy="560" r="3" fill="#D45A2A" />
              <text x="1045" y="564">03 / SHARE</text>
              <circle cx="1030" cy="590" r="3" fill="#D45A2A" />
              <text x="1045" y="594">04 / GROW</text>
            </g>
          </g>

          {/* Bottom Plumb Line Marker */}
          <g className="hidden sm:block">
            <line x1="560" y1="580" x2="560" y2="670" stroke="#DFDCD5" strokeWidth="1" />
            <line x1="510" y1="580" x2="610" y2="580" stroke="#DFDCD5" strokeWidth="1" />
            <circle cx="560" cy="620" r="5" fill="#D45A2A" />
            <circle cx="560" cy="670" r="3" fill="#DFDCD5" />
          </g>
        </svg>
      )}

      {/* 03. PROJECTS BACKGROUND */}
      {variant === "projects" && (
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 768"
          preserveAspectRatio="xMaxYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Compass Drafting Arc at Bottom Right */}
          <path
            d="M 700 768 A 400 400 0 0 1 1500 768"
            fill="none"
            stroke="#DFDCD5"
            strokeWidth="1.2"
          />
          <circle
            cx="1100"
            cy="768"
            r="400"
            fill="none"
            stroke="#E6E3DC"
            strokeWidth="0.8"
            strokeDasharray="4 6"
          />

          {/* Coordinate Axes */}
          <line x1="1100" y1="160" x2="1100" y2="768" stroke="#DFDCD5" strokeWidth="1" />
          <line x1="700" y1="768" x2="1440" y2="768" stroke="#DFDCD5" strokeWidth="1" />

          {/* Nested Rectangular Drafting Lines */}
          <rect
            x="780"
            y="240"
            width="280"
            height="300"
            fill="none"
            stroke="#DFDCD5"
            strokeWidth="1"
            strokeDasharray="3 3"
            className="hidden sm:block"
          />

          {/* Technical Floating Index Card */}
          <g className="hidden sm:block">
            <rect
              x="980"
              y="320"
              width="340"
              height="180"
              fill="#FAF9F6"
              stroke="#DFDCD5"
              strokeWidth="1"
            />
            <g
              fontFamily="var(--font-jetbrains-mono), monospace"
              fontSize="13"
              fill="#111112"
              letterSpacing="0.08em"
            >
              <text x="1015" y="375">01 / FRAUD DETECTION</text>
              <text x="1015" y="420">02 / RAG VOICE CHATBOT</text>
              <text x="1015" y="465">03 / NETFLIX ANALYSIS</text>
            </g>
          </g>

          {/* Terracotta Squares & Dots */}
          <rect x="1320" y="700" width="20" height="20" fill="#D45A2A" />
          <rect x="620" y="240" width="14" height="14" fill="#D45A2A" />
          <rect x="720" y="680" width="12" height="12" fill="#D45A2A" />
          <circle cx="1005" cy="180" r="5" fill="#D45A2A" />
          <circle cx="915" cy="360" r="5" fill="#D45A2A" />
          <circle cx="1100" cy="540" r="4" fill="#D45A2A" />
        </svg>
      )}

      {/* 04. PROJECT DETAIL BACKGROUND */}
      {variant === "project-detail" && (
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 768"
          preserveAspectRatio="xMaxYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Wireframe Code Window 1 */}
          <g className="hidden sm:block">
            <rect
              x="960"
              y="320"
              width="360"
              height="260"
              fill="#FAF9F6"
              stroke="#DFDCD5"
              strokeWidth="1.2"
              rx="4"
            />
            <line x1="960" y1="360" x2="1320" y2="360" stroke="#DFDCD5" strokeWidth="1" />
            <circle cx="985" cy="342" r="3.5" fill="#DFDCD5" />
            <circle cx="1000" cy="342" r="3.5" fill="#DFDCD5" />
            <circle cx="1015" cy="342" r="3.5" fill="#DFDCD5" />

            <g fontFamily="var(--font-jetbrains-mono), monospace" fontSize="14" fill="#6E6D68">
              <text x="990" y="405">&#123;</text>
              <text x="1020" y="445">{"// real implementation"}</text>
              <text x="1020" y="485">{"// from repository"}</text>
              <text x="990" y="525">&#125;</text>
            </g>
          </g>

          {/* Wireframe Mini Bar Chart Card 2 */}
          <g className="hidden sm:block">
            <rect
              x="1120"
              y="520"
              width="280"
              height="200"
              fill="#FAF9F6"
              stroke="#DFDCD5"
              strokeWidth="1.2"
              rx="4"
            />
            <line x1="1120" y1="550" x2="1400" y2="550" stroke="#DFDCD5" strokeWidth="0.8" />
            {/* Vertical bars with terracotta highlights */}
            <rect x="1155" y="620" width="16" height="80" fill="#D45A2A" />
            <rect x="1190" y="650" width="16" height="50" fill="#DFDCD5" />
            <rect x="1225" y="635" width="16" height="65" fill="#D45A2A" />
            <rect x="1260" y="610" width="16" height="90" fill="#DFDCD5" />
            <rect x="1295" y="585" width="16" height="115" fill="#D45A2A" />
            <rect x="1330" y="600" width="16" height="100" fill="#DFDCD5" />
          </g>

          {/* Terracotta Squares & Coordinates */}
          <rect x="1380" y="240" width="22" height="22" fill="#D45A2A" />
          <rect x="880" y="700" width="18" height="18" fill="#D45A2A" />
          <line x1="680" y1="620" x2="680" y2="740" stroke="#DFDCD5" strokeWidth="1" />
          <circle cx="680" cy="650" r="6" fill="#D45A2A" />
        </svg>
      )}

      {/* 05. EXPERIENCE BACKGROUND */}
      {variant === "experience" && (
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 768"
          preserveAspectRatio="xMaxYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Prominent Vertical Timeline Axis */}
          <line x1="880" y1="200" x2="880" y2="760" stroke="#DFDCD5" strokeWidth="2" />

          {/* 3 Solid Terracotta Circular Nodes with Concentric Rings */}
          <circle cx="880" cy="270" r="12" fill="#D45A2A" stroke="#FAF9F6" strokeWidth="3" />
          <circle cx="880" cy="450" r="12" fill="#D45A2A" stroke="#FAF9F6" strokeWidth="3" />
          <circle cx="880" cy="620" r="12" fill="#D45A2A" stroke="#FAF9F6" strokeWidth="3" />

          {/* Horizontal Projection Lines */}
          <line
            x1="740"
            y1="270"
            x2="1120"
            y2="270"
            stroke="#DFDCD5"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <line
            x1="740"
            y1="450"
            x2="1120"
            y2="450"
            stroke="#DFDCD5"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <line
            x1="740"
            y1="620"
            x2="1120"
            y2="620"
            stroke="#DFDCD5"
            strokeWidth="1"
            strokeDasharray="3 3"
          />

          {/* Right Architectural Drafting Coordinate Lines (clean, no fake text) */}
          <g className="hidden sm:block">
            <line x1="1050" y1="500" x2="1330" y2="500" stroke="#DFDCD5" strokeWidth="0.8" />
            <line x1="1050" y1="560" x2="1280" y2="560" stroke="#DFDCD5" strokeWidth="0.8" strokeDasharray="4 4" />
            <line x1="1050" y1="620" x2="1240" y2="620" stroke="#DFDCD5" strokeWidth="0.8" strokeDasharray="4 4" />
            <line x1="1050" y1="680" x2="1330" y2="680" stroke="#DFDCD5" strokeWidth="0.8" />
            <line x1="1050" y1="500" x2="1050" y2="680" stroke="#DFDCD5" strokeWidth="0.8" />
            <line x1="1330" y1="500" x2="1330" y2="680" stroke="#DFDCD5" strokeWidth="0.8" />
            <rect x="1046" y="496" width="8" height="8" fill="#D45A2A" />
            <rect x="1326" y="676" width="8" height="8" fill="#D45A2A" />
          </g>

          {/* Terracotta Squares */}
          <rect x="475" y="705" width="16" height="16" fill="#D45A2A" />
          <circle cx="880" cy="735" r="5" fill="#DFDCD5" />
        </svg>
      )}

      {/* 06. CONTACT BACKGROUND */}
      {variant === "contact" && (
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 768"
          preserveAspectRatio="xMaxYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Compass / Postal Stamp Arc */}
          <path
            d="M 780 720 A 440 440 0 0 1 1350 330"
            fill="none"
            stroke="#DFDCD5"
            strokeWidth="1.2"
            strokeDasharray="5 5"
          />

          {/* Right Side Blueprint Envelope Schematic */}
          <g className="hidden sm:block">
            <rect
              x="850"
              y="470"
              width="360"
              height="240"
              fill="#FAF9F6"
              stroke="#DFDCD5"
              strokeWidth="1.2"
            />
            {/* Flap Folds */}
            <path
              d="M 850 470 L 1030 610 L 1210 470"
              fill="none"
              stroke="#DFDCD5"
              strokeWidth="1.2"
            />
            <line
              x1="850"
              y1="710"
              x2="1030"
              y2="560"
              stroke="#DFDCD5"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            <line
              x1="1210"
              y1="710"
              x2="1030"
              y2="560"
              stroke="#DFDCD5"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            {/* Terracotta Postal Seal */}
            <rect x="1140" y="550" width="24" height="24" fill="#D45A2A" />
          </g>

          {/* Sketched Annotation & Curved Arrow */}
          <g className="hidden sm:block">
            <text
              x="1100"
              y="270"
              fontFamily="var(--font-newsreader), Newsreader, serif"
              fontStyle="italic"
              fontSize="21"
              fill="#111112"
              letterSpacing="-0.01em"
            >
              <tspan x="1100" dy="0">Always open</tspan>
              <tspan x="1100" dy="24">to meaningful</tspan>
              <tspan x="1100" dy="24">conversations.</tspan>
            </text>
            <path
              d="M 1120 375 Q 1115 440 1075 455"
              fill="none"
              stroke="#D45A2A"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <polygon points="1075,450 1067,457 1076,463" fill="#D45A2A" />
          </g>

          {/* Top Horizontal Drafting Line with 3 Orange Nodes */}
          <line x1="680" y1="230" x2="1280" y2="230" stroke="#DFDCD5" strokeWidth="1" />
          <circle cx="680" cy="230" r="4.5" fill="#D45A2A" />
          <circle cx="900" cy="230" r="4.5" fill="#D45A2A" />
          <circle cx="1020" cy="230" r="4.5" fill="#D45A2A" />

          {/* Bottom-left Crosshairs */}
          <line x1="390" y1="670" x2="680" y2="670" stroke="#DFDCD5" strokeWidth="1" />
          <line x1="450" y1="590" x2="450" y2="730" stroke="#DFDCD5" strokeWidth="1" />
          <circle cx="450" cy="670" r="5" fill="#D45A2A" />
          <circle cx="630" cy="670" r="5" fill="#D45A2A" />
        </svg>
      )}

      {/* 07. ASK AAMNA BACKGROUND */}
      {variant === "ask-aamna" && (
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1152 768"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="modal-dense-dots" width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.8" fill="#DFDCD5" />
            </pattern>
          </defs>

          {/* Dot mesh block on left */}
          <rect
            x="60"
            y="180"
            width="160"
            height="220"
            fill="url(#modal-dense-dots)"
            stroke="#E6E3DC"
            strokeWidth="0.75"
            strokeDasharray="2 3"
            opacity="0.6"
          />
          <circle cx="115" cy="405" r="5" fill="#D45A2A" />

          {/* Corner Crosshairs */}
          <g stroke="#DFDCD5" strokeWidth="1">
            <line x1="40" y1="25" x2="40" y2="45" />
            <line x1="30" y1="35" x2="50" y2="35" />
            <line x1="1112" y1="25" x2="1112" y2="45" />
            <line x1="1102" y1="35" x2="1122" y2="35" />
          </g>
          <circle cx="1112" cy="450" r="4.5" fill="#D45A2A" />
        </svg>
      )}

      {/* 08. PRIVACY POLICY BACKGROUND */}
      {variant === "privacy" && (
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 768"
          preserveAspectRatio="xMaxYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Grid Block at Bottom */}
          <rect
            x="720"
            y="520"
            width="620"
            height="220"
            fill="#F4F2EC"
            stroke="#DFDCD5"
            strokeWidth="1"
            className="hidden sm:block"
          />

          {/* Document Sheet */}
          <g className="hidden sm:block">
            <rect
              x="980"
              y="240"
              width="340"
              height="460"
              fill="#FAF9F6"
              stroke="#DFDCD5"
              strokeWidth="1.2"
              rx="2"
            />
            {/* Ruled Lines */}
            <line x1="1020" y1="310" x2="1240" y2="310" stroke="#DFDCD5" strokeWidth="1" />
            <line x1="1020" y1="360" x2="1260" y2="360" stroke="#DFDCD5" strokeWidth="1" />
            <line x1="1020" y1="410" x2="1220" y2="410" stroke="#DFDCD5" strokeWidth="1" />
            <line x1="1020" y1="460" x2="1190" y2="460" stroke="#DFDCD5" strokeWidth="1" />
            <line x1="1020" y1="510" x2="1230" y2="510" stroke="#DFDCD5" strokeWidth="1" />
            <line x1="1020" y1="560" x2="1200" y2="560" stroke="#DFDCD5" strokeWidth="1" />
            <line x1="1020" y1="610" x2="1170" y2="610" stroke="#DFDCD5" strokeWidth="1" />

            {/* Security Padlock Icon with Keyhole */}
            <rect
              x="1200"
              y="420"
              width="80"
              height="68"
              rx="6"
              fill="#FAF9F6"
              stroke="#111112"
              strokeWidth="2.5"
            />
            <path
              d="M 1216 420 V 400 C 1216 380, 1264 380, 1264 400 V 420"
              fill="none"
              stroke="#111112"
              strokeWidth="2.5"
            />
            <circle cx="1240" cy="445" r="5" fill="#111112" />
            <polygon points="1238,448 1242,448 1245,465 1235,465" fill="#111112" />
          </g>

          {/* Terracotta Squares */}
          <rect x="850" y="540" width="24" height="24" fill="#D45A2A" />
          <rect x="810" y="670" width="16" height="16" fill="#D45A2A" />
          <rect x="1300" y="630" width="14" height="14" fill="#D45A2A" />

          {/* Plumb Line next to bottom-left tags */}
          <g className="hidden sm:block">
            <line x1="560" y1="580" x2="560" y2="690" stroke="#DFDCD5" strokeWidth="1" />
            <circle cx="560" cy="620" r="4.5" fill="#D45A2A" />
            <circle cx="560" cy="670" r="5.5" fill="#D45A2A" />
          </g>
        </svg>
      )}

      {/* 09. TERMS OF SERVICE BACKGROUND */}
      {variant === "terms" && (
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 768"
          preserveAspectRatio="xMaxYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Compass Drafting Arc Surrounding Sheet */}
          <path
            d="M 1150 200 A 340 340 0 0 1 1480 600"
            fill="none"
            stroke="#DFDCD5"
            strokeWidth="1.2"
          />

          {/* Tinted Paper Grid Block Behind Sheet */}
          <rect
            x="780"
            y="440"
            width="300"
            height="300"
            fill="#F4F2EC"
            stroke="#DFDCD5"
            strokeWidth="0.8"
            className="hidden sm:block"
          />

          {/* Legal Document Sheet */}
          <g className="hidden sm:block">
            <rect
              x="1050"
              y="240"
              width="320"
              height="460"
              fill="#FAF9F6"
              stroke="#DFDCD5"
              strokeWidth="1.2"
              rx="2"
            />
            {/* Header Bracket */}
            <path
              d="M 1110 330 H 1220"
              stroke="#111112"
              strokeWidth="2"
              fill="none"
            />
            <line x1="1110" y1="324" x2="1110" y2="336" stroke="#111112" strokeWidth="2" />
            <line x1="1220" y1="324" x2="1220" y2="336" stroke="#111112" strokeWidth="2" />

            {/* Ruled Lines */}
            <line x1="1090" y1="380" x2="1280" y2="380" stroke="#DFDCD5" strokeWidth="1.2" />
            <line x1="1090" y1="430" x2="1300" y2="430" stroke="#DFDCD5" strokeWidth="1.2" />
            <line x1="1090" y1="480" x2="1270" y2="480" stroke="#DFDCD5" strokeWidth="1.2" />
            <line x1="1090" y1="530" x2="1200" y2="530" stroke="#DFDCD5" strokeWidth="1.2" />
          </g>

          {/* Terracotta Squares */}
          <rect x="900" y="440" width="16" height="16" fill="#D45A2A" />
          <rect x="720" y="620" width="16" height="16" fill="#D45A2A" />
          <rect x="1170" y="660" width="16" height="16" fill="#D45A2A" />
        </svg>
      )}
    </div>
  );
}
