import Image from "next/image";

/**
 * HeroVisual Component
 *
 * Editorial composition for the homepage hero section.
 * Combines the primary 3D technical artwork (ai.png) and
 * the natural editorial portrait (aamna.jpeg).
 *
 * Visual hierarchy:
 * 1. Syyeda Aamna name (in Left Column)
 * 2. Hero introduction (in Left Column)
 * 3. AI/3D technical artwork (Primary — full column width)
 * 4. Aamna portrait (Supporting personal identity — editorial, left-offset)
 *
 * Portrait dimensions: 1625 × 1250 (4:3 landscape close-up headshot)
 * Crop strategy: object-cover, face anchored to top-center so face is
 * never clipped even when the container is shorter than the natural ratio.
 */
export function HeroVisual() {
  return (
    <div className="w-full flex flex-col gap-4 sm:gap-5">
      {/* ── Primary 3D / AI Technical Visual ─────────────────────── */}
      <div className="relative w-full border border-[#E6E3DC] bg-[#FAF9F6] p-1.5 sm:p-2">
        <Image
          src="/ai.png"
          alt="Artificial Intelligence, Machine Learning, and Software Development Technical Visualization"
          width={1672}
          height={941}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, (max-width: 1280px) 50vw, 640px"
          className="w-full h-auto object-contain select-none"
        />
      </div>

      {/* ── Supporting Editorial Portrait ─────────────────────────── */}
      {/*
        The portrait is a 4:3 landscape close-up headshot (1625×1250).
        We show it as a wide panel that feels editorial — not a tiny
        avatar card. On desktop it aligns to the left of the visual
        column so it reads as a deliberate layout element, not a
        floating badge. On mobile it spans the full available width.
      */}
      <div className="flex lg:justify-start justify-center">
        <div
          className="
            relative
            w-full
            sm:w-[85%]
            lg:w-[72%]
            xl:w-[68%]
            border border-[#E6E3DC]
            bg-[#F4F2EC]
            overflow-hidden
          "
          /*
           * The natural 4:3 portrait already shows the face without
           * cropping; we keep h-auto (no forced-ratio crop) so the
           * entire photograph is visible.
           */
        >
          <Image
            src="/aamna.jpeg"
            alt="Syyeda Aamna — Machine Learning & Software Engineer"
            width={1625}
            height={1250}
            priority
            sizes="
              (max-width: 640px)  100vw,
              (max-width: 768px)  85vw,
              (max-width: 1024px) 68vw,
              (max-width: 1280px) 40vw,
              380px
            "
            className="w-full h-auto object-cover select-none block"
            style={{ objectPosition: "center top" }}
          />
        </div>
      </div>
    </div>
  );
}
