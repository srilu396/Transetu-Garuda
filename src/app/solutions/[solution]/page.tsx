import { notFound } from "next/navigation";
import { Metadata } from "next";
import { gpsSolutions } from "../../../sections/gps/data/gpsData";
import { fastagSolutions } from "../../../sections/fastag/data/fastagData";
import GPSTrackingDetails from "../../../sections/gps/GPSTrackingDetails";

const solutions = { ...gpsSolutions, ...fastagSolutions };


export async function generateMetadata(
  { params }: { params: Promise<{ solution: string }> },
): Promise<Metadata> {
  const { solution: solutionSlug } = await params;
  const solution = solutions[solutionSlug];

  if (!solution || !solution.seoMeta) {
    return {
      title: "Solution Not Found | Garuda OM",
      description: "The requested solution could not be found.",
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
  const { solution: solutionSlug } = await params;
  const solution = solutions[solutionSlug];

  if (!solution) {
    notFound();
  }

  return <GPSTrackingDetails data={solution} />;
}

export function generateStaticParams() {
  return Object.keys(solutions).map((solution) => ({
    solution,
  }));
}
