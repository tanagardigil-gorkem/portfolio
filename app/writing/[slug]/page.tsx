import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LabPageFrame from "../../../components/console/LabPageFrame";
import PostBody from "../../../components/writing/PostBody";
import { captainsLog } from "../../../data/portfolio";
import { personName, siteUrl } from "../../../lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return captainsLog.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = captainsLog.find((p) => p.slug === slug);
  if (!post) return { title: "Writing" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function WritingPostPage({ params }: Props) {
  const { slug } = await params;
  const post = captainsLog.find((p) => p.slug === slug);
  if (!post) notFound();

  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Person", name: personName, url: siteUrl },
    description: post.excerpt,
    url: `${siteUrl}/writing/${post.slug}`,
    keywords: post.tags.join(", "),
  }).replace(/</g, "\\u003c");

  return (
    <LabPageFrame>
      <script type="application/ld+json">{jsonLd}</script>
      <article className="mx-auto max-w-3xl px-5 pb-24 pt-28 sm:px-8">
        <Link
          href="/writing"
          className="font-mono text-xs font-medium underline decoration-2 underline-offset-4"
        >
          ← Writing
        </Link>
        <p className="mt-6 font-mono text-[11px] tracking-wider text-[color:var(--ink-soft)] uppercase">
          {post.tags.join(" · ")}
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 font-mono text-xs text-[color:var(--ink-soft)]">
          {post.date} · {post.readTime}
        </p>
        <p className="mt-6 text-lg text-[color:var(--ink-soft)]">{post.excerpt}</p>
        <PostBody content={post.content} />
      </article>
    </LabPageFrame>
  );
}
