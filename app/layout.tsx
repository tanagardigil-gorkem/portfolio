import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  authors: [{ name: personName, url: linkedInUrl }],
  creator: personName,
  keywords: [personName, personNameAscii, jobTitle, "submarine officer"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description:
      "Former submarine officer. Resilient backend systems, cloud, and mission-critical operations.",
    url: siteUrl,
    siteName: personName,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description:
      "Former submarine officer. Resilient backend systems, cloud, and mission-critical operations.",
  },
};

const personJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: personName,
  alternateName: personNameAscii,
  jobTitle,
  description: siteDescription,
  url: siteUrl,
  email: `mailto:${email}`,
  sameAs: [linkedInUrl, githubUrl],
}).replace(/</g, "\\u003c");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script type="application/ld+json">{personJsonLd}</script>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
