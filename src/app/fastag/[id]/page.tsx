import React from "react";
import { Metadata } from "next";
import FASTagDetailsClient from "@/sections/fastag/FASTagDetailsClient";
import { notFound, redirect } from "next/navigation";
import { pageMetadata, SITE_BRAND } from "@/lib/seo";
import { fetchSanityQuery } from "@/actions/sanity";
import { FASTAG_DETAILS_QUERY } from "@/lib/queries";

export const revalidate = 0; // Ensure fresh data from Sanity

interface Props {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const type = params.id;

  if (type === "buy" || type === "customer") {
    return pageMetadata({
      title: `Buy FASTag for Your Vehicle — ${SITE_BRAND}`,
      description:
        "Buy FASTag for cars, trucks, and fleets through Garuda OM (GarudaOM). Vehicle FASTag issuance, recharge support, and integrated GPS fleet tools for India.",
      path: type === "customer" ? "/fastag/customer" : "/fastag/buy",
      keywords: ["FASTag buy", "Garuda OM FASTag", "GarudaOM", "NHAI FASTag"],
    });
  }
  if (type === "partner") {
    return pageMetadata({
      title: `Become a FASTag Partner — ${SITE_BRAND}`,
      description:
        "Partner with Garuda OM (GarudaOM) for FASTag distribution and fleet solutions. Grow your business with GPS tracking and toll-tag programs across India.",
      path: "/fastag/partner",
      keywords: [
        "FASTag partner",
        "Garuda OM partner",
        "GarudaOM",
        "FASTag agent",
      ],
    });
  }
  return { title: "FASTag" };
}
export default async function FastagDetailsPage({ params }: Props) {
  const { id: type } = params;

  if (type === "customer") {
    redirect("/fastag/buy");
  }

  if (type !== "buy" && type !== "partner") {
    notFound();
  }

  // Fetch Sanity data with error resilience
  let fastTagSection = null;
  try {
    fastTagSection = await fetchSanityQuery(FASTAG_DETAILS_QUERY);
    console.log(
      "[FastagDetailsPage] Server-side Fast Tag Data:",
      fastTagSection,
    );
  } catch (error) {
    console.error("[FastagDetailsPage] Error fetching Sanity data:", error);
  }

  // Robustly find the correct card based on identifier with fallback to null
  const identifierMap = {
    buy: "buyFastTag",
    partner: "businessPartner",
  };

  const cardData =
    (Array.isArray(fastTagSection?.cards) ? fastTagSection.cards : []).find(
      (card: { identifier: string }) =>
        card?.identifier === identifierMap[type as keyof typeof identifierMap],
    ) || null;

  return (
    <FASTagDetailsClient
      type={type as "buy" | "partner"}
      sanityData={cardData}
    />
  );
}

export function generateStaticParams() {
  return [{ id: "buy" }, { id: "partner" }];
}
