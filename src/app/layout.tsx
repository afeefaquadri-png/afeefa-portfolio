import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Instrument_Serif } from "next/font/google";
import { links } from "@/data/content";
import "./globals.css";
import { siteUrl } from "./site";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: "Afeefa Albeena Sheikh",
  description:
    "Chemical engineer by training, AI developer by practice. AI Developer at Euron Systems, building RAG, multi-agent systems and AI products.",
  openGraph: {
    title: "Afeefa Albeena Sheikh",
    description: "Chemical engineer by training. AI developer by practice.",
    type: "website",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
};

// Tells search engines who this page is about.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Afeefa Albeena Sheikh",
  url: siteUrl,
  jobTitle: "AI Developer",
  worksFor: { "@type": "Organization", name: "Euron Systems" },
  alumniOf: "B.Tech, Chemical Engineering",
  knowsAbout: ["Retrieval-augmented generation", "Multi-agent systems", "Machine learning", "React Native", "Next.js", "FastAPI"],
  sameAs: [links.linkedin, links.github],
};

// Runs before paint so a saved theme never flashes the wrong colours.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>
      </head>
      <body
        className={`${plexSans.variable} ${plexMono.variable} ${serif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
