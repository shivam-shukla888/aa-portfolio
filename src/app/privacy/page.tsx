import type { Metadata } from "next";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy information for visitors to Syyeda Aamna's portfolio.",
};

export default function PrivacyPage() {
  return (
    <div className="w-full py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#111112] pb-8 mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-[#D45A2A] mb-2 font-semibold">
            Legal Transparency
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-[#111112]">
            Privacy Policy
          </h1>
          <p className="mt-2 font-mono text-xs text-[#6E6D68]">
            Last updated: September 2026
          </p>
        </div>

        <div className="space-y-10 font-sans text-sm sm:text-base text-[#111112] leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-[#111112] mb-3">
              1. Overview
            </h2>
            <p className="text-[#6E6D68]">
              This portfolio is a personal, static-first website representing the professional work of Syyeda Aamna. We respect visitor privacy and do not run marketing trackers, commercial behavioral profiling, or advertising networks.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-[#111112] mb-3">
              2. Static Architecture &amp; Hosting
            </h2>
            <p className="text-[#6E6D68]">
              Standard web hosting infrastructure automatically processes standard HTTP request logs (such as IP addresses, user agent headers, and request timestamps) to deliver content securely and guard against denial-of-service attempts.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-[#111112] mb-3">
              3. AI Assistant (&ldquo;ASK AAMNA&rdquo;) &amp; Groq Processing
            </h2>
            <p className="text-[#6E6D68]">
              The portfolio includes an optional AI assistant (&ldquo;ASK AAMNA&rdquo;) that answers queries about Syyeda Aamna&apos;s verified background. When you submit a question:
            </p>
            <ul className="mt-3 space-y-2 text-[#6E6D68] list-disc list-inside">
              <li>
                Your submitted query is transmitted from your browser to our server-side API route.
              </li>
              <li>
                The server securely forwards your query along with verified portfolio reference text to Groq API.
              </li>
              <li>
                Groq processes the text to generate the assistant&apos;s response in accordance with Groq&apos;s standard developer API terms and privacy policies.
              </li>
              <li>
                We do not store your chat conversations in any persistent database, CRM, or marketing system. All chat interactions on our server are ephemeral and processed in-memory.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-[#111112] mb-3">
              4. External Links &amp; Direct Communication
            </h2>
            <p className="text-[#6E6D68]">
              Links to external websites (such as GitHub, LinkedIn, or external documentation) operate under the privacy policies of their respective operators. Initiating contact via mailto links or phone calls is entirely voluntary and handled by your own chosen communication client.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-[#111112] mb-3">
              5. Contact Regarding Privacy
            </h2>
            <p className="text-[#6E6D68]">
              For any privacy inquiries regarding this portfolio, you may reach out directly via email to{" "}
              <a
                href={`mailto:${profile.email}`}
                className="text-[#111112] underline hover:text-[#D45A2A]"
              >
                {profile.email}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
