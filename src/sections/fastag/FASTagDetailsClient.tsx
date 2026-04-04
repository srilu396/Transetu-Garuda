"use client";

import React from "react";
import FASTagDetails from "./FASTagDetails";
import { buyFASTagData } from "./data/buyFASTagData";
import { becomePartnerData } from "./data/becomePartnerData";

export default function FASTagDetailsClient({ 
  type, 
  sanityData 
}: { 
  type: "buy" | "partner", 
  sanityData?: {
    identifier?: string;
    title?: string;
    pageTitle?: string;
    description?: string;
    youtubeUrl?: string;
    documents?: { documentName?: string; description?: string; fileUrl?: string }[];
  } 
}) {
  // Map 'buy' to 'customer' for local data backward compatibility if needed
  const localKey = type === "buy" ? "customer" : "partner";
  const localData = localKey === "customer" ? buyFASTagData : becomePartnerData;
  
  // Merge Sanity data if present with robust safety checks
  const finalData = {
    ...localData,
    id: type,
    title: sanityData?.pageTitle ?? localData?.title ?? "",
    description: sanityData?.description ?? localData?.description ?? "",
    videoUrl: sanityData?.youtubeUrl ?? localData?.videoUrl ?? "",
    
    // If youtubeUrl is provided by Sanity, set mediaType to youtube
    media: sanityData?.youtubeUrl 
      ? { mediaType: "youtube" as const, youtubeUrl: sanityData.youtubeUrl }
      : (localData?.media ?? { mediaType: "image" as const }),
      
    // Safely map documents if sanityData exists and contains valid documents
    documents: (sanityData?.documents && Array.isArray(sanityData.documents) && sanityData.documents.length > 0)
      ? sanityData.documents.map((doc) => ({
          name: doc?.documentName ?? "",
          description: doc?.description ?? "",
          path: doc?.fileUrl ?? "",
        }))
      : (localData?.documents ?? []),
  };

  return <FASTagDetails data={finalData} showNavbarFooter={true} />;
}
