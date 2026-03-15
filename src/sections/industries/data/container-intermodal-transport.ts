import { Container, Globe, Shield, TrendingUp } from "lucide-react";
import { IndustryData } from "./industriesData";

export const containerIntermodalTransport: IndustryData = {
  slug: "container-intermodal-transport",
  title: "Container & Intermodal Transport",
  description: "Track shipping containers across road, rail, and sea with rugged GPS devices that provide visibility throughout the intermodal transportation chain.",
  icon: Container,
  features: [
    "Container location tracking",
    "Intermodal visibility",
    "Tamper detection",
    "Chain of custody",
  ],
  category: "Container Logistics",
  detailedDescription: "Gain complete visibility of container movements across road, rail, and sea with our intermodal tracking solution. Rugged GPS devices withstand the rigors of global shipping while providing precise location updates throughout the journey. Tamper detection alerts you to unauthorized access attempts, protecting valuable cargo. Chain of custody documentation creates an indisputable record of every handoff, reducing disputes and improving security. From port to destination, know exactly where your containers are at all times.",
  benefits: [
    "Reduce container loss with real-time tracking",
    "Prevent cargo theft with tamper alerts",
    "Optimize container utilization across modes",
    "Eliminate demurrage with proactive planning",
  ],
  solutions: [
    "Container GPS Trackers",
    "Intermodal Visibility Platform",
    "Tamper Detection System",
    "Chain of Custody Records",
  ],
  imageUrl: "https://images.unsplash.com/photo-1586528116137-7b1c1f5b9c4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  stats: [
    { label: "Container Visibility", value: "100%", icon: Globe },
    { label: "Theft Prevention", value: "-96%", icon: Shield },
    { label: "Utilization Gain", value: "+28%", icon: TrendingUp },
  ],
};
