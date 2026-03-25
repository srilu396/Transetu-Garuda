import React from "react";
import { Metadata } from "next";
import FASTagDetailsClient from "@/sections/fastag/FASTagDetailsClient";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const type = params.id;
  if (type === "customer") {
    return {
      title: "Buy FASTag Details | Garuda OM",
      description: "Detailed information about purchasing a FASTag for your vehicle.",
    };
  } else if (type === "partner") {
    return {
      title: "Become a FASTag Partner | Garuda OM",
      description: "Detailed information about partnering with Garuda OM for FASTag services.",
    };
  }
  return {
    title: "FASTag Details | Garuda OM",
  };
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
