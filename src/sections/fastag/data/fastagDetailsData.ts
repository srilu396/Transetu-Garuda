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
  media?: any;
  videoUrl?: string;
  documents: FASTagDocument[];
}
