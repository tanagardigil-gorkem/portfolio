"use client";

import React, { useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Tag, Share2 } from "lucide-react";
import { captainsLog } from "../../../data/portfolio";
import Logo from "../../../components/ui/Logo";
import { useTranslation } from "../../../lib/i18n/context";

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeLines: string[] = [];
  let codeLang = "";
  let inTable = false;
  let tableRows: string[][] = [];

  const renderInline = (text: string): React.ReactNode => {
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let key = 0;

    while (remaining.length > 0) {
      // Bold + italic
      const boldItalicMatch = remaining.match(/\*\*\*(.*?)\*\*\*/);
      const boldMatch = remaining.match(/\*\*(.*?)\*\*/);
      const italicMatch = remaining.match(/\*(.*?)\*/);
      const codeMatch = remaining.match(/`([^`]+)`/);

      const matches = [
        boldItalicMatch ? { match: boldItalicMatch, type: "bolditalic" } : null,
        boldMatch ? { match: boldMatch, type: "bold" } : null,
        italicMatch ? { match: italicMatch, type: "italic" } : null,
        codeMatch ? { match: codeMatch, type: "code" } : null,
      ]
        .filter(Boolean)
        .sort((a, b) => a!.match!.index! - b!.match!.index!);

      if (matches.length === 0) {
        parts.push(remaining);
        break;
      }

      const first = matches[0]!;
      const idx = first.match!.index!;

      if (idx > 0) {
        parts.push(remaining.slice(0, idx));
      }

      if (first.type === "bolditalic") {
        parts.push(
          <strong key={key++} className="font-bold italic text-cyan-300">
            {first.match![1]}
          </strong>
        );
      } else if (first.type === "bold") {
        parts.push(
          <strong key={key++} className="font-bold text-cyan-300">
            {first.match![1]}
          </strong>
        );
      } else if (first.type === "italic") {
        parts.push(
          <em key={key++} className="italic text-cyan-200/80">
            {first.match![1]}
          </em>
        );
      } else if (first.type === "code") {
        parts.push(
          <code
            key={key++}
            className="px-1.5 py-0.5 bg-cyan-950/60 border border-cyan-900/40 rounded text-cyan-300 text-[0.85em] font-mono"
          >
            {first.match![1]}
          </code>
        );
      }

      remaining = remaining.slice(idx + first.match![0].length);
    }

    return parts;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code blocks
    if (line.startsWith("```")) {
      if (inCodeBlock) {
        elements.push(
          <div key={`code-${i}`} className="my-6 rounded-xl overflow-hidden border border-cyan-900/40">
            {codeLang && (
              <div className="bg-[#0a0e1a] px-4 py-2 text-[10px] font-mono text-cyan-500/50 uppercase tracking-wider border-b border-cyan-900/30">
                {codeLang}
              </div>
            )}
            <pre className="bg-[#060a14] p-3 sm:p-4 overflow-x-auto">
              <code className="text-xs sm:text-sm font-mono text-cyan-200/80 leading-relaxed">
                {codeLines.join("\n")}
              </code>
            </pre>
          </div>
        );
        codeLines = [];
        codeLang = "";
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
        codeLang = line.slice(3).trim();
      }
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      continue;
    }

    // Tables
    if (line.includes("|") && line.trim().startsWith("|")) {
      const cells = line
        .split("|")
        .slice(1, -1)
        .map((c) => c.trim());

      if (cells.every((c) => /^[-:]+$/.test(c))) {
        continue;
      }

      if (!inTable) {
        inTable = true;
        tableRows = [];
      }
      tableRows.push(cells);

      const nextLine = lines[i + 1];
      const isLastTableRow =
        !nextLine || !nextLine.includes("|") || !nextLine.trim().startsWith("|");

      if (isLastTableRow) {
        elements.push(
          <div key={`table-${i}`} className="my-6 overflow-x-auto rounded-xl border border-cyan-900/40">
            <table className="w-full text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#0a0e1a] border-b border-cyan-900/30">
                  {tableRows[0].map((cell, ci) => (
                    <th
                      key={ci}
                      className="px-3 sm:px-4 py-2 sm:py-3 text-left font-mono text-cyan-300 text-[10px] sm:text-xs uppercase tracking-wider whitespace-nowrap"
                    >
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.slice(1).map((row, ri) => (
                  <tr
                    key={ri}
                    className="border-b border-cyan-900/20 last:border-0 bg-[#060a14]/60"
                  >
                    {row.map((cell, ci) => (
                      <td key={ci} className="px-3 sm:px-4 py-2 sm:py-3 text-slate-300/80 whitespace-nowrap">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        inTable = false;
        tableRows = [];
      }
      continue;
    }

    // Empty lines
    if (line.trim() === "") {
      elements.push(<div key={`br-${i}`} className="h-4" />);
      continue;
    }

    // Headings
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={`h2-${i}`}
          className="text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-cyan-900/20"
        >
          {renderInline(line.slice(3))}
        </h2>
      );
      continue;
    }

    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={`h3-${i}`} className="text-xl font-bold text-white mt-8 mb-3">
          {renderInline(line.slice(4))}
        </h3>
      );
      continue;
    }

    // Ordered list
    const olMatch = line.match(/^(\d+)\.\s\*\*(.*?)\*\*\s*—\s*(.*)/);
    if (olMatch) {
      elements.push(
        <div key={`ol-${i}`} className="flex gap-3 my-2 ml-2">
          <span className="text-cyan-500 font-mono font-bold text-sm mt-0.5">{olMatch[1]}.</span>
          <div className="text-slate-300/80 leading-relaxed">
            <strong className="text-cyan-300">{olMatch[2]}</strong> — {olMatch[3]}
          </div>
        </div>
      );
      continue;
    }

    // Unordered list
    if (line.startsWith("- ")) {
      elements.push(
        <div key={`li-${i}`} className="flex gap-3 my-1.5 ml-2">
          <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2.5 shrink-0 shadow-[0_0_5px_cyan]" />
          <span className="text-slate-300/80 leading-relaxed">{renderInline(line.slice(2))}</span>
        </div>
      );
      continue;
    }

    // Paragraphs
    elements.push(
      <p key={`p-${i}`} className="text-slate-200/80 leading-relaxed my-2">
        {renderInline(line)}
      </p>
    );
  }

  return elements;
}

export default function BlogPostPage() {
  const { t } = useTranslation();
  const params = useParams();
  const slug = params.slug as string;

  const post = captainsLog.find((p) => p.slug === slug);

  const renderedContent = useMemo(() => {
    if (!post) return null;
    return renderMarkdown(post.content);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#000a14] via-[#001020] to-[#000810] text-slate-200 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl font-bold font-mono text-cyan-400/50 mb-4">404</div>
          <p className="text-cyan-200/60 mb-6">{t.blog.notFound}</p>
          <a
            href="/"
            className="bg-cyan-600 text-white font-bold px-6 py-3 rounded-full hover:bg-cyan-500 transition-colors"
          >
            {t.blog.returnToBase}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000a14] via-[#001020] to-[#000810] text-slate-200 font-sans relative">
      <svg
        className="fixed inset-0 w-full h-full opacity-[0.015] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="gridBlog" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-cyan-400"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gridBlog)" />
      </svg>

      <header className="relative z-10 border-b border-cyan-900/30 bg-[#0a1529]/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <Logo size={28} showText />
          </Link>
          <Link
            href="/#captains-log"
            className="flex items-center gap-1.5 text-xs font-mono text-cyan-300/70 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft size={14} />
            {t.blog.allLogs}
          </Link>
        </div>
      </header>

      <main className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-cyan-500/70 mb-4">
              <span className="flex items-center gap-1">
                <Calendar size={12} aria-hidden="true" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="w-1 h-1 rounded-full bg-cyan-500/40" />
              <span className="flex items-center gap-1">
                <Clock size={12} aria-hidden="true" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-lg text-cyan-200/60 leading-relaxed mb-6">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-950/60 border border-cyan-500/20 rounded-full text-xs font-mono text-cyan-300/70 uppercase tracking-wider"
                >
                  <Tag size={10} aria-hidden="true" />
                  {tag}
                </span>
              ))}
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
          </div>

          <div className="prose-custom">{renderedContent}</div>

          <div className="mt-16 pt-8 border-t border-cyan-900/20">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/#captains-log"
                className="flex items-center gap-2 text-sm font-mono text-cyan-400/70 hover:text-cyan-400 transition-colors"
              >
                <ArrowLeft size={14} />
                {t.blog.backToLog}
              </Link>
              <button
                type="button"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: post.title,
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                  }
                }}
                className="flex items-center gap-2 text-sm font-mono text-cyan-400/70 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                <Share2 size={14} />
                {t.blog.shareLog}
              </button>
            </div>
          </div>
        </motion.article>
      </main>

      <footer className="relative z-10 border-t border-cyan-900/30 bg-[#060e1a]/90 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 text-center">
          <div className="text-xs text-slate-500 font-mono">
            &copy; {new Date().getFullYear()} Görkem Tanağardıgil. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
