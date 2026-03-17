import React from "react";
import { industries } from "@/sections/industries/data/industriesData";
import IndustryDetails from "@/sections/industries/IndustryDetails";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { industry: string };
}): Promise<Metadata> {
  const { industry: slug } = params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    return {
      title: "Industry Not Found | Garuda",
    };
  }

  return {
    title: `${industry.title} | Garuda Industries`,
    description: industry.description,
  };
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
