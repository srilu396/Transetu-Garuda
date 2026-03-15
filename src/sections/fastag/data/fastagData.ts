import { Car, Briefcase, ShieldCheck, TrendingUp, Search, Layers, Zap } from "lucide-react";

export interface SolutionData {
  title: string;
  tagline: string;
  overview: string;
  features: {
    title: string;
    description: string;
    icon: any;
  }[];
  benefits: {
    title: string;
    description: string;
    icon: any;
  }[];
  useCases: {
    title: string;
    description: string;
  }[];
  imageUrl?: string;
}

export const fastagSolutions: Record<string, SolutionData> = {
  "fastag": {
    title: "FASTag Solutions",
    tagline: "Seamless Toll Payments & Management",
    overview: "Comprehensive FASTag services for individual vehicle owners and business partners, enabling automated toll payments and efficient fleet management.",
    features: [
      { title: "Quick Issuance", description: "Get your FASTag activated and delivered quickly.", icon: Zap },
      { title: "Live Tracking", description: "Monitor all toll transactions in real-time.", icon: Search },
    ],
    benefits: [
      { title: "No Cash Hassles", description: "Automatic deductions at all toll plazas.", icon: ShieldCheck },
      { title: "Fleet Reports", description: "Detailed monthly analytics for business fleets.", icon: Layers },
    ],
    useCases: [
      { title: "Personal Use", description: "Hassle-free highway travel for cars and SUVs." },
      { title: "Commercial Fleets", description: "Unified toll management for trucks and buses." },
    ],
  },
};
