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
  sanityData?: {
    pageTitle?: string;
    overviewText?: string;
    media?: {
      mediaType: "image" | "video" | "youtube";
      image?: { asset: { url: string } };
      youtubeUrl?: string;
      videoUrl?: string;
    };
    documents?: { documentName?: string; description?: string; file?: { asset?: { url?: string } } }[];
  } 
}) {
  const localData = type === "customer" ? buyFASTagData : becomePartnerData;
  
  // Merge Sanity data if present
  const finalData = {
    ...localData,
    title: sanityData?.pageTitle ?? localData.title,
    description: sanityData?.overviewText ?? localData.description,
    media: sanityData?.media as { mediaType: "image" | "video" | "youtube"; image?: { asset: { url: string } }; youtubeUrl?: string; videoUrl?: string } | undefined,
    videoUrl: (sanityData?.media as { youtubeUrl?: string; videoUrl?: string } | undefined)?.youtubeUrl ?? (sanityData?.media as { youtubeUrl?: string; videoUrl?: string } | undefined)?.videoUrl ?? localData.videoUrl,
    documents: sanityData?.documents && sanityData.documents.length > 0
      ? sanityData.documents.map((doc: { documentName?: string; description?: string; file?: { asset?: { url?: string } } }) => ({
          name: doc.documentName ?? "",
          description: doc.description ?? "",
          path: doc.file?.asset?.url ?? "",
        }))
      : localData.documents,
  };

  return <FASTagDetails data={finalData} showNavbarFooter={true} />;
}
