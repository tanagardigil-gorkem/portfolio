import { redirect } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export default async function LegacyLogRedirect({ params }: Props) {
  const { slug } = await params;
  redirect(`/writing/${slug}`);
}
