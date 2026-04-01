"use client";

import React from "react";
import FASTagDetails from "./FASTagDetails";
import { buyFASTagData } from "./data/buyFASTagData";
import { becomePartnerData } from "./data/becomePartnerData";

export default function FASTagDetailsClient({ 
  type, 
  sanityData 
}: { 
  type: "customer" | "partner", 
  sanityData?: any 
}) {
  const localData = type === "customer" ? buyFASTagData : becomePartnerData;
  
  // Merge Sanity data if present
  const finalData = {
    ...localData,
    title: sanityData?.pageTitle ?? localData.title,
    description: sanityData?.overviewText ?? localData.description,
    media: sanityData?.media,
    videoUrl: sanityData?.media?.youtubeUrl ?? sanityData?.media?.videoUrl ?? localData.videoUrl,
    documents: sanityData?.documents && sanityData.documents.length > 0
      ? sanityData.documents.map((doc: any) => ({
          name: doc.documentName ?? "",
          description: doc.description ?? "",
          path: doc.file?.asset?.url ?? "",
        }))
      : localData.documents,
  };

  return <FASTagDetails data={finalData} showNavbarFooter={true} />;
}
