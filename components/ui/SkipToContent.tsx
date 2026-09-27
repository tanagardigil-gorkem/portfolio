"use client";

import React from "react";
import { useTranslation } from "../../lib/i18n/context";

export default function SkipToContent() {
  const { t } = useTranslation();

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:font-semibold focus:text-[var(--accent-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]"
    >
      {t.skip}
    </a>
  );
}
