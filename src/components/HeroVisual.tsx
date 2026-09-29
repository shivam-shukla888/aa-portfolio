import Image from "next/image";

/**
 * HeroVisual — Art-directed hero composition.
 *
 * ONE unified visual: the AI/3D artwork is the primary frame.
 * Aamna's portrait anchors to the lower-right of that frame,
 * overlapping it so both images read as a single editorial
 * composition rather than two stacked cards.
 *
 * ai.png     — 1672 × 941  (16:9 landscape) — primary
 * aamna.jpeg — 1625 × 1250 (4:3 landscape)  — secondary, small overlay
 *
 * Portrait sizing on desktop: ~38% of the visual column (~210px).
 * Portrait crop: aspect-[4/5] with object-cover + center 10% —
 * shows face + shoulders cleanly from the landscape source.
 */
export function HeroVisual() {
  return (
    /*
     * Outer container — positioning root for the portrait overlay.
     * Bottom padding creates room for the portrait to hang below
     * the AI artwork without clipping.
     */
    <div className="relative w-full pb-12 sm:pb-14 lg:pb-16">

      {/* ── Primary AI / 3D Artwork ─────────────────────────────── */}
      <div className="relative w-full border border-[#E6E3DC]">
        <Image
          src="/ai.png"
          alt="Artificial intelligence, machine learning, and software development technical visualization"
          width={1672}
          height={941}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, (max-width: 1280px) 50vw, 560px"
          className="w-full h-auto object-contain select-none block"
        />
      </div>

      {/* ── Supporting Editorial Portrait ───────────────────────── */}
      {/*
        Absolutely positioned lower-right, overlapping the artwork
        bottom edge — so both images form ONE composed visual.
        Desktop: ~38% of column width. Portrait crop: aspect-[4/5]
        shows face + shoulders. Mobile: right-aligned, 46% wide,
        same overlap intent.
      */}
      <div
        className="
          absolute
          bottom-0
          right-0
          w-[46%]
          sm:w-[38%]
          lg:w-[40%]
          xl:w-[37%]
          border border-[#E6E3DC]
          bg-[#FAF9F6]
          overflow-hidden
        "
      >
        <div className="relative w-full aspect-[4/5]">
          <Image
            src="/aamna.jpeg"
            alt="Syyeda Aamna — Machine Learning & Software Engineer"
            fill
            sizes="
              (max-width: 640px)  46vw,
              (max-width: 768px)  38vw,
              (max-width: 1024px) 32vw,
              (max-width: 1280px) 22vw,
              210px
            "
            className="object-cover select-none"
            style={{ objectPosition: "center 10%" }}
          />
        </div>
      </div>
    </div>
  );
}
