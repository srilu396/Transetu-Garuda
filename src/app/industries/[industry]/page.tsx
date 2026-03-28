import React from "react";
import { industries } from "@/sections/industries/data/industriesData";
import IndustryDetails from "@/sections/industries/IndustryDetails";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMetadata, SITE_BRAND } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: { industry: string };
}): Promise<Metadata> {
  const { industry: slug } = params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    return {
      title: "Industry Not Found",
    };
  }

  const description = `${industry.description} ${SITE_BRAND} (GarudaOM) GPS & telematics for Indian fleets.`;

  return pageMetadata({
    title: industry.title,
    description,
    path: `/industries/${slug}`,
    keywords: [industry.title, industry.category, "Garuda OM", "GarudaOM"],
  });
}

export default function IndustryDetailPage({
  params,
}: {
  params: { industry: string };
}) {
  const { industry: slug } = params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  return <IndustryDetails industry={industry} />;
}
