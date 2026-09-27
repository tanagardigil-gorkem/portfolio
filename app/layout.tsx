import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { I18nProvider } from "../lib/i18n/context";
import {
  email,
  githubUrl,
  jobTitle,
  linkedInUrl,
  personName,
  personNameAscii,
  siteDescription,
  siteTitle,
  siteUrl,
} from "../lib/site";
import "./globals.css";

const display = Archivo({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800", "900"],
});

const sans = IBM_Plex_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
});
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Görkem Tanağardıgil — AI Systems Engineer",
    template: "%s · Görkem Tanağardıgil",
  },
  description:
    "Görkem Tanağardıgil builds RAG knowledge bases and specialized LangGraph agents for support, chat, and domain workflows.",
  authors: [{ name: personName, url: linkedInUrl }],
  creator: personName,
  keywords: [
    personName,
    personNameAscii,
    "AI Systems Engineer",
    "RAG",
    "LangGraph",
    "domain agents",
    "support agents",
    "Spring Boot",
    "Kubernetes",
    jobTitle,
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Görkem Tanağardıgil — AI Systems Engineer",
    description:
      "Agentic pipelines, RAG, and production systems. Plan → tool → observe → adapt.",
    url: siteUrl,
    siteName: personName,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Görkem Tanağardıgil — AI Systems Engineer",
    description:
      "Agentic pipelines, RAG, and production systems. Plan → tool → observe → adapt.",
  },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: personName,
      description: siteDescription,
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: personName,
      alternateName: personNameAscii,
      jobTitle: "AI Systems Engineer",
      description:
        "AI systems engineer building RAG knowledge bases and LangGraph agents for support, chat, and domain workflows.",
      url: siteUrl,
      email: `mailto:${email}`,
      sameAs: [linkedInUrl, githubUrl],
      knowsAbout: [
        "RAG",
        "LangGraph",
        "Domain agents",
        "Support agents",
        "Knowledge bases",
        "Spring Boot",
        "Kubernetes",
      ],
    },
  ],
}).replace(/</g, "\\u003c");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} antialiased`}
      >
        <script type="application/ld+json">{jsonLd}</script>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
