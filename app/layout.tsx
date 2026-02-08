import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { I18nProvider } from "../lib/i18n/context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gorkem Tanagardigil | Portfolio",
  description: "Senior Software Engineer and former Navy officer specializing in resilient backend systems, cloud, and mission-critical operations.",
  openGraph: {
    title: "Gorkem Tanagardigil | Portfolio",
    description: "Mission-critical software engineer with naval roots. Backend, cloud, and stability focused.",
    url: "https://www.gorkemtanagardigil.com",
    siteName: "Gorkem Tanagardigil",
    type: "website",
  },
};

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
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
