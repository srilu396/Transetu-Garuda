import { notFound } from "next/navigation";
import { Metadata } from "next";
import { solutions } from "@/sections/gps/data/gpsData";
import GPSTrackingDetails from "@/sections/gps/GPSTrackingDetails";

export async function generateMetadata({
  params,
}: {
  params: { solution: string };
}): Promise<Metadata> {
  const { solution: slug } = params;
  const solution = solutions[slug];

  if (!solution) {
    return {
      title: "Solution Not Found",
    };
  }

  return {
    title: solution.seoMeta.title,
    description: solution.seoMeta.description,
  };
}

export default function SolutionPage({
  params,
}: {
  params: { solution: string };
}) {
  const { solution: slug } = params;
  const solution = solutions[slug];

  if (!solution) {
    notFound();
  }

  return <GPSTrackingDetails data={solution} icon={solution.icon as string} />;
}

export function generateStaticParams() {
  return Object.keys(solutions).map((slug) => ({
    solution: slug,
  }));
}
