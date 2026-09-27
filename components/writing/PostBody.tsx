import { Fragment, type ReactNode } from "react";
import { PostFigure } from "./PostFigures";

function renderInline(text: string) {
  const parts: ReactNode[] = [];
  let remaining = text;
  let key = 0;
  while (remaining.length > 0) {
    const bold = remaining.match(/\*\*(.*?)\*\*/);
    const code = remaining.match(/`([^`]+)`/);
    const candidates = [
      bold ? { m: bold, type: "bold" as const } : null,
      code ? { m: code, type: "code" as const } : null,
    ]
      .filter(Boolean)
      .sort((a, b) => a!.m.index! - b!.m.index!);
    if (candidates.length === 0) {
      parts.push(remaining);
      break;
    }
    const first = candidates[0]!;
    const idx = first.m.index!;
    if (idx > 0) parts.push(remaining.slice(0, idx));
    if (first.type === "bold") {
      parts.push(
        <strong key={key++} className="font-semibold text-[var(--foreground)]">
          {first.m[1]}
        </strong>,
      );
    } else {
      parts.push(
        <code
          key={key++}
          className="bg-[var(--accent)] px-1 font-mono text-sm text-[var(--accent-ink)]"
        >
          {first.m[1]}
        </code>,
      );
    }
    remaining = remaining.slice(idx + first.m[0].length);
  }
  return parts;
}

function isListBlock(block: string) {
  const lines = block.split("\n");
  return lines.every((l) => /^[-*] |\d+\. /.test(l.trim()) || l.trim() === "");
}

export default function PostBody({ content }: { content: string }) {
  const blocks = content.split("\n\n");

  return (
    <div className="writing-body">
      {blocks.map((block, i) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        const fig = trimmed.match(/^\[\[fig:([\w-]+)\]\]$/);
        if (fig) {
          return <PostFigure key={i} id={fig[1]} />;
        }

        if (trimmed.startsWith("### ")) {
          return (
            <h3
              key={i}
              className="mt-8 font-[family-name:var(--font-display)] text-xl font-extrabold tracking-tight"
            >
              {trimmed.replace(/^### /, "")}
            </h3>
          );
        }

        if (trimmed.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="mt-10 font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight"
            >
              {trimmed.replace(/^## /, "")}
            </h2>
          );
        }

        if (trimmed.startsWith("```")) {
          const lines = trimmed.split("\n");
          const lang = lines[0].replace("```", "").trim();
          const code = lines
            .slice(1, lines[lines.length - 1] === "```" ? -1 : undefined)
            .join("\n")
            .replace(/```$/, "");
          return (
            <pre
              key={i}
              className="lab-invert mt-4 overflow-x-auto border-2 border-[var(--foreground)] p-4 font-mono text-[13px] leading-relaxed text-[var(--accent)]"
            >
              {lang ? (
                <span className="mb-2 block font-mono text-[10px] tracking-wider text-[var(--accent)]/60 uppercase">
                  {lang}
                </span>
              ) : null}
              {code}
            </pre>
          );
        }

        if (isListBlock(trimmed)) {
          const items = trimmed.split("\n").filter((l) => l.trim());
          const ordered = /^\d+\. /.test(items[0]);
          const ListTag = ordered ? "ol" : "ul";
          return (
            <ListTag
              key={i}
              className={`mt-4 space-y-2 pl-5 text-[color:var(--ink-soft)] ${
                ordered ? "list-decimal" : "list-disc"
              }`}
            >
              {items.map((item, j) => (
                <li key={j} className="leading-relaxed pl-1">
                  {renderInline(item.replace(/^[-*] |\d+\. /, ""))}
                </li>
              ))}
            </ListTag>
          );
        }

        return (
          <p key={i} className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">
            {trimmed.split("\n").map((line, j) => (
              <Fragment key={j}>
                {j > 0 ? <br /> : null}
                {renderInline(line)}
              </Fragment>
            ))}
          </p>
        );
      })}
    </div>
  );
}
