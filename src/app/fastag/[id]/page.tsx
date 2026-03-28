import React from "react";
import { Metadata } from "next";
import FASTagDetailsClient from "@/sections/fastag/FASTagDetailsClient";
import { notFound } from "next/navigation";
import { pageMetadata, SITE_BRAND } from "@/lib/seo";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const type = params.id;
  if (type === "customer") {
    return pageMetadata({
      title: `Buy FASTag for Your Vehicle — ${SITE_BRAND}`,
      description:
        "Buy FASTag for cars, trucks, and fleets through Garuda OM (GarudaOM). Vehicle FASTag issuance, recharge support, and integrated GPS fleet tools for India.",
      path: "/fastag/customer",
      keywords: ["FASTag buy", "Garuda OM FASTag", "GarudaOM", "NHAI FASTag"],
    });
  }
  if (type === "partner") {
    return pageMetadata({
      title: `Become a FASTag Partner — ${SITE_BRAND}`,
      description:
        "Partner with Garuda OM (GarudaOM) for FASTag distribution and fleet solutions. Grow your business with GPS tracking and toll-tag programs across India.",
      path: "/fastag/partner",
      keywords: ["FASTag partner", "Garuda OM partner", "GarudaOM", "FASTag agent"],
    });
  }
  return { title: "FASTag" };
}

export default function FastagDetailsPage({ params }: Props) {
  const type = params.id;
  
  if (type !== "customer" && type !== "partner") {
    notFound();
  }

  return <FASTagDetailsClient type={type as "customer" | "partner"} />;
}

export function generateStaticParams() {
  return [
    { id: "customer" },
    { id: "partner" },
  ];
}
