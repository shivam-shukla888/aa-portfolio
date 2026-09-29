import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full py-24 sm:py-36 min-h-[60vh] flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold border-b border-[#D45A2A] pb-1 mb-6">
          Error 404 &bull; Page Not Found
        </div>

        <h1 className="font-display text-5xl sm:text-7xl font-semibold tracking-tight text-[#111112]">
          Page Not Located
        </h1>

        <p className="mt-6 font-sans text-base sm:text-lg text-[#4A4944] max-w-lg mx-auto leading-relaxed">
          The requested document or page does not exist within this portfolio. Please return to the homepage or explore selected projects.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-[#111112] text-[#FAF9F6] font-mono text-xs uppercase tracking-wider hover:bg-[#D45A2A] transition-colors focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
          >
            Return to Homepage
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 border border-[#111112] text-[#111112] font-mono text-xs uppercase tracking-wider hover:bg-[#F4F2EC] transition-colors focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
          >
            View Projects Index
          </Link>
        </div>
      </div>
    </div>
  );
}
