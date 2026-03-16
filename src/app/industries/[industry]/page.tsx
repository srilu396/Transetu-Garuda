"use client";
import React from "react";
import { useParams } from "next/navigation";
import { industries } from "@/sections/industries/data/industriesData";
import Link from "next/link";
import IndustryDetails from "@/sections/industries/IndustryDetails";

export default function IndustryDetailPage() {
  const { industry: slug } = useParams();
  
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Industry Not Found</h1>
          <Link href="/" className="text-primary hover:underline">
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  return <IndustryDetails industry={industry} />;
}
