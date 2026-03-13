import { notFound } from "next/navigation";
import { Metadata } from "next";
import { solutions } from "@/content/solutions";
import GPSDetailWrapper from "@/components/GPS/GPSDetailWrapper";

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }, // Fix for Next.js 15 route params
): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions[slug];

  if (!solution) {
    return {
      title: "Solution Not Found | Garuda",
    };
  }

  return {
    title: solution.seoMeta.title,
    description: solution.seoMeta.description,
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>; // Fix for Next.js 15 route params
}) {
  const { slug } = await params;
  const solution = solutions[slug];

  if (!solution) {
    notFound();
  }

  return <GPSDetailWrapper data={solution} />;
}

export function generateStaticParams() {
  return Object.keys(solutions).map((slug) => ({
    slug,
  }));
}
