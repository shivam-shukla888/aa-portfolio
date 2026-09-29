import type { Metadata } from "next";
import { Newsreader, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AskAamnaModal } from "@/components/AskAamnaModal";
import { profile } from "@/data/profile";
import { SITE_URL } from "@/lib/site";

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
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "./",
  },
  title: {
    default: "Syyeda Aamna — Entry-Level AI/ML Engineer",
    template: "%s | Syyeda Aamna",
  },
  description:
    "Portfolio of Syyeda Aamna, entry-level AI/ML Engineer. Applied machine learning classification, Retrieval-Augmented Generation (RAG) pipelines, exploratory data analysis, and software engineering with Python, FastAPI, and .NET.",
  keywords: [
    "Syyeda Aamna",
    "AI/ML Engineer",
    "Machine Learning",
    "Python",
    "Data Science",
    "Retrieval-Augmented Generation",
    "LangChain",
    "FAISS",
    "Scikit-Learn",
    "FastAPI",
    ".NET",
  ],
  authors: [{ name: "Syyeda Aamna", url: "https://github.com/Syyeda-Aamna" }],
  creator: "Syyeda Aamna",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Syyeda Aamna — Entry-Level AI/ML Engineer",
    description:
      "Personal portfolio of Syyeda Aamna. Machine learning classification, Retrieval-Augmented Generation (RAG) pipelines, exploratory data analysis, and software engineering with Python.",
    siteName: "Syyeda Aamna Portfolio",
    images: [
      {
        url: "/projects/fraud-dashboard.png",
        width: 1200,
        height: 630,
        alt: "Syyeda Aamna — Entry-Level AI/ML Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syyeda Aamna — Entry-Level AI/ML Engineer",
    description:
      "Personal portfolio of Syyeda Aamna. Machine learning classification, Retrieval-Augmented Generation (RAG) pipelines, exploratory data analysis, and software engineering with Python.",
    images: ["/projects/fraud-dashboard.png"],
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
        jobTitle: "Entry-Level AI/ML Engineer",
        email: profile.email,
        telephone: profile.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "New Delhi",
          addressRegion: "Delhi",
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
        url: SITE_URL,
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
      data-scroll-behavior="smooth"
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
