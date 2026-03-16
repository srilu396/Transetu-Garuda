import { notFound } from "next/navigation";
import { Metadata } from "next";
import { solutions } from "@/sections/gps/data/gpsData";
import GPSTrackingDetails from "@/sections/gps/GPSTrackingDetails";

export async function generateMetadata(
  { params }: { params: Promise<{ solution: string }> }, // Fix for Next.js 15 route params
): Promise<Metadata> {
  const { solution: slug } = await params;
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
  params: Promise<{ solution: string }>; // Fix for Next.js 15 route params
}) {
  const { solution: slug } = await params;
  const solution = solutions[slug];

  if (!solution) {
    notFound();
  }

  return <GPSTrackingDetails data={solution} />;
}

export function generateStaticParams() {
  return Object.keys(solutions).map((slug) => ({
    solution: slug,
  }));
}
