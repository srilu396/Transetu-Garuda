import React from "react";
import { Metadata } from "next";
import FASTagDetailsClient from "@/sections/fastag/FASTagDetailsClient";
import { notFound, redirect } from "next/navigation";
import { pageMetadata, SITE_BRAND } from "@/lib/seo";
import { draftMode } from "next/headers";
import { getClient } from "@/lib/sanity";
import { FAST_TAG_DETAIL_QUERY } from "@/lib/queries";

export const revalidate = 0; // Ensure fresh data from Sanity

interface Props {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { isEnabled: preview } = draftMode();
  const isPreviewIntent = searchParams?.preview === "true" || !!searchParams?._sanity_edit_target;
  const sanityClient = getClient(preview, isPreviewIntent);
  
  const data = await sanityClient.fetch(FAST_TAG_DETAIL_QUERY, { 
    slug: params.slug
  }, {
    perspective: (preview && isPreviewIntent) ? "previewDrafts" : "published",
    next: { revalidate: (preview && isPreviewIntent) ? 0 : 3600 }
  });

  if (!data) {
    return { title: `FASTag — ${SITE_BRAND}` };
  }

  return pageMetadata({
    title: `${data.title} — ${SITE_BRAND}`,
    description: data.overview || "FASTag services through Garuda OM.",
    path: `/fastag/${data.slug}`,
    keywords: ["FASTag", "Garuda OM", "GarudaOM"],
  });
}

export default async function FastagDetailsPage({ params, searchParams }: Props) {
  const { slug } = params;

  // Handle legacy redirects
  if (slug === "customer") {
    redirect("/fastag/buy");
  }

  // Fetch data with strict isolation: Only use preview client if in draft mode AND explicit intent
  const { isEnabled: previewModeActive } = draftMode();
  
  // Check for preview intent from query params or iframe headers
  const isPreviewIntent = searchParams?.preview === "true" || !!searchParams?._sanity_edit_target;
  
  const sanityClient = getClient(previewModeActive, isPreviewIntent);
  const data = await sanityClient.fetch(FAST_TAG_DETAIL_QUERY, { 
    slug: slug
  }, {
    perspective: (previewModeActive && isPreviewIntent) ? "previewDrafts" : "published",
    next: { revalidate: (previewModeActive && isPreviewIntent) ? 0 : 3600 }
  });

  if (!data && slug !== "buy" && slug !== "partner") {
    notFound();
  }

  interface FastTagDocument {
    documentName: string;
    shortDescription: string;
    fileUrl: string;
  }

  // Robust data mapping with null-checks to prevent TypeErrors
  const sanityDataMapped = data ? {
    identifier: data?.slug || slug,
    pageTitle: data?.title || "",
    description: data?.overview || "",
    youtubeUrl: data?.youtubeUrl || "",
    documents: (data?.documents && Array.isArray(data.documents)) 
      ? data.documents.map((doc: FastTagDocument) => ({
          documentName: doc?.documentName || "",
          description: doc?.shortDescription || "",
          fileUrl: doc?.fileUrl || ""
        })) 
      : []
  } : undefined;

  // Determine fallback type for client component logic
  // "buy" -> uses buyFASTagData, "partner" -> uses becomePartnerData
  const isPartner = slug.toLowerCase().includes("partner");
  const type = isPartner ? "partner" : "buy";

  return (
    <FASTagDetailsClient
      type={type as "buy" | "partner"}
      sanityData={sanityDataMapped}
    />
  );
}

export async function generateStaticParams() {
  const sanityClient = getClient(false);
  const slugs = await sanityClient.fetch(`*[_type == "fastTagDetail"] { "slug": slug.current }`);
  return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
}