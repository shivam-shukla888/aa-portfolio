import type { Metadata } from "next";
import { Newsreader, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AskAamnaModal } from "@/components/AskAamnaModal";
import { profile } from "@/data/profile";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://syyeda-aamna.dev"),
  title: {
    default: "Syyeda Aamna — AI/ML & Software Professional",
    template: "%s | Syyeda Aamna",
  },
  description:
    "Portfolio of Syyeda Aamna, an AI/ML-focused software professional. Experienced in machine learning classification, exploratory data analysis, generative AI workflows, Python, C#, and .NET.",
  keywords: [
    "Syyeda Aamna",
    "AI/ML",
    "Machine Learning",
    "Python",
    "Data Science",
    "Generative AI",
    "LLMs",
    "Scikit-Learn",
    "C#",
    ".NET",
  ],
  authors: [{ name: "Syyeda Aamna", url: "https://github.com/Syyeda-Aamna" }],
  creator: "Syyeda Aamna",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://syyeda-aamna.dev",
    title: "Syyeda Aamna — AI/ML & Software Professional",
    description:
      "Verified personal portfolio of Syyeda Aamna. Machine learning classification, exploratory data analysis, generative AI workflows, and software development.",
    siteName: "Syyeda Aamna Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syyeda Aamna — AI/ML & Software Professional",
    description:
      "Verified personal portfolio of Syyeda Aamna. Machine learning classification, exploratory data analysis, generative AI workflows, and software development.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: profile.name,
        jobTitle: "AI/ML Developer & Software Professional",
        email: profile.email,
        telephone: profile.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bareilly",
          addressRegion: "Uttar Pradesh",
          addressCountry: "India",
        },
        alumniOf: [
          {
            "@type": "CollegeOrUniversity",
            name: "SRMS Engineering College",
          },
        ],
        worksFor: {
          "@type": "Organization",
          name: "Indraprastha Apollo Hospitals",
        },
        sameAs: [profile.linkedin, profile.github],
      },
      {
        "@type": "WebSite",
        name: "Syyeda Aamna Portfolio",
        url: "https://syyeda-aamna.dev",
        description: profile.positioningStatement,
        author: {
          "@type": "Person",
          name: profile.name,
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAF9F6] text-[#111112]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <AskAamnaModal />
      </body>
    </html>
  );
}
