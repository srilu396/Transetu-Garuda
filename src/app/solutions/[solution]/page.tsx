import { notFound } from "next/navigation";
import { Metadata } from "next";
import { solutions } from "@/sections/gps/data/gpsData";
import GPSTrackingDetails from "@/sections/gps/GPSTrackingDetails";
import { pageMetadata, SITE_BRAND } from "@/lib/seo";

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

  const description = `${solution.seoMeta.description} Offered by ${SITE_BRAND} (GarudaOM) in India.`;

  return pageMetadata({
    title: solution.seoMeta.title,
    description,
    path: `/solutions/${slug}`,
    keywords: [solution.title, "Garuda OM", "GarudaOM"],
  });
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
