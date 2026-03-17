import { IndustryData } from "./industriesData";

export const surveyMappingServices: IndustryData = {
  slug: "survey-mapping-services",
  title: "Survey & Mapping",
  description: "Create high-precision maps and 3D models for land surveying, construction, and environmental monitoring using advanced drone and GPS technology.",
  icon: "Map",
  features: [
    "High-precision mapping",
    "3D model generation",
    "Drone survey technology",
    "Environmental monitoring",
  ],
  category: "Services",
  detailedDescription: "Leverage our advanced survey and mapping services to create highly accurate digital twins of your project sites. Our drone-based LiDAR and photogrammetry solutions capture detailed topographic data, enabling precise measurements and 3D model generation. This technology is ideal for land surveying, construction progress monitoring, and environmental assessments. Ensure your projects are built on a foundation of accurate data with our comprehensive survey and mapping capabilities.",
  benefits: [
    "Achieve centimeter-level accuracy",
    "Reduce survey time by up to 80%",
    "Improve project planning with 3D models",
    "Monitor environmental impact with precision",
  ],
  solutions: [
    "Drone LiDAR Surveying",
    "Photogrammetry Mapping",
    "3D Site Modeling",
    "Environmental Assessment Tools",
  ],
  imageUrl: "https://images.unsplash.com/photo-1526778548025-13a634d13045?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  stats: [
    { label: "Survey Accuracy", value: "<2cm", icon: "Target" },
    { label: "Time Savings", value: "-80%", icon: "Clock" },
    { label: "Data Richness", value: "3D Models", icon: "Layers" },
  ],
};
