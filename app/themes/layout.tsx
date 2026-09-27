import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Color themes",
  robots: { index: false, follow: false },
};

export default function ThemesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
