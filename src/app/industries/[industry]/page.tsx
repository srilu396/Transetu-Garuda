import React from "react";
import { industries as staticIndustries } from "@/sections/industries/data/industriesData";
import IndustryDetails from "@/sections/industries/IndustryDetails";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMetadata, SITE_BRAND } from "@/lib/seo";
import { fetchSanityQuery } from "@/actions/sanity";
import { INDUSTRIAL_DETAIL_QUERY, INDUSTRIAL_CARDS_QUERY } from "@/lib/queries";

export const revalidate = 0; // Ensure instant updates on page reload

export async function generateStaticParams() {
  // Fetch only published slugs for static generation
  const industries = await fetchSanityQuery(INDUSTRIAL_CARDS_QUERY);
  return industries.map((ind: { slug: string }) => ({
    industry: ind.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { industry: string };
}): Promise<Metadata> {
  const { industry: slug } = params;
  
  // Try Sanity first
  const industry = await fetchSanityQuery(INDUSTRIAL_DETAIL_QUERY, { slug });
  
  // Fallback to static
  const staticIndustry = staticIndustries.find((i) => i.slug === slug);
  const data = industry || staticIndustry;

  if (!data) {
    return {
      title: "Industry Not Found",
    };
  }

  const description = `${data.description} ${SITE_BRAND} (GarudaOM) GPS & telematics for Indian fleets.`;

  return pageMetadata({
    title: data.title,
    description,
    path: `/industries/${slug}`,
    keywords: [data.title, data.badge || data.category, "Garuda OM", "GarudaOM"],
  });
}

export default async function IndustryDetailPage({
  params,
}: {
  params: { industry: string };
}) {
  const { industry: slug } = params;

  // Try Sanity first (fetchSanityQuery handles draftMode automatically)
  const industry = await fetchSanityQuery(INDUSTRIAL_DETAIL_QUERY, { slug });
  
  // Fallback to static
  const staticIndustry = staticIndustries.find((i) => i.slug === slug);
  
  const data = industry || staticIndustry;

  if (!data) {
    notFound();
  }

  return <IndustryDetails industry={data} />;
}
