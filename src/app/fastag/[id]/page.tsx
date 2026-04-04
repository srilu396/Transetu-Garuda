import React from "react";
import { Metadata } from "next";
import FASTagDetailsClient from "@/sections/fastag/FASTagDetailsClient";
import { notFound, redirect } from "next/navigation";
import { pageMetadata, SITE_BRAND } from "@/lib/seo";

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

  // Use local data only (Sanity schema removed per request)
  return (
    <FASTagDetailsClient
      type={type as "buy" | "partner"}
      sanityData={undefined}
    />
  );
}

export function generateStaticParams() {
  return [{ id: "buy" }, { id: "partner" }];
}
