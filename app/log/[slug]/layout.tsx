import type { Metadata } from "next";
import { captainsLog } from "../../../data/portfolio";
import { personName, siteUrl } from "../../../lib/site";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = captainsLog.find((entry) => entry.slug === slug);
  if (!post) return {};

  const title = `${post.title} — ${personName}`;
  const url = `${siteUrl}/log/${slug}`;

  return {
    title: { absolute: title },
    description: post.excerpt,
    alternates: { canonical: `/log/${slug}` },
    openGraph: {
      title,
      description: post.excerpt,
      url,
      type: "article",
    },
  };
}

export default function LogLayout({ children }: LayoutProps) {
  return children;
}
