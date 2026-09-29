import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full py-24 sm:py-36">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold border-b border-[#D45A2A] pb-1 mb-6">
          Index Error &bull; 404
        </div>

        <h1 className="font-display text-5xl sm:text-7xl font-semibold tracking-tight text-[#111112]">
          Page Not Located
        </h1>

        <p className="mt-6 font-sans text-base sm:text-lg text-[#6E6D68] max-w-lg mx-auto leading-relaxed">
          The requested document or route does not exist within this portfolio. Please return to the homepage or examine selected projects.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-[#111112] text-[#FAF9F6] font-mono text-xs uppercase tracking-wider hover:bg-[#D45A2A] transition-colors"
          >
            Return to Homepage
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 border border-[#111112] text-[#111112] font-mono text-xs uppercase tracking-wider hover:bg-[#F4F2EC] transition-colors"
          >
            View Projects Index
          </Link>
        </div>
      </div>
    </div>
  );
}
