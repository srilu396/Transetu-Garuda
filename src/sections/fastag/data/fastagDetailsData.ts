import { LucideIcon } from "lucide-react";

export interface FASTagDocument {
  name: string;
  path: string;
  description: string;
}

export interface FASTagDetailsData {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  media?: {
    mediaType: "image" | "video" | "youtube";
    image?: { asset: { url: string; metadata?: { dimensions: { width: number; height: number } } }; alt?: string };
    youtubeUrl?: string;
    videoUrl?: string;
  };
  videoUrl?: string;
  documents: FASTagDocument[];
}
