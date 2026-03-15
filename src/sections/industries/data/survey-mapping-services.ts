import { Map, Clock, Compass, DollarSign } from "lucide-react";
import { IndustryData } from "./industriesData";

export const surveyMappingServices: IndustryData = {
  slug: "survey-mapping-services",
  title: "Survey & Mapping Services",
  description: "Capture high-precision geographic data with photogrammetry and GPS mapping services for land surveys, construction planning, and infrastructure projects.",
  icon: Map,
  features: [
    "Precision mapping",
    "3D modeling",
    "Survey data collection",
    "Geospatial analysis",
  ],
  category: "Mapping",
  detailedDescription: "Access high-precision geographic data with our professional survey and mapping services. Using advanced GPS technology and photogrammetry, we capture detailed spatial information for land surveys, construction planning, and infrastructure projects. Our 3D modeling capabilities provide visual context for project planning and stakeholder presentations. Whether you need topographic surveys, boundary determination, or volume calculations for earthworks, our geospatial solutions deliver the accuracy your projects demand.",
  benefits: [
    "Reduce survey time by 60% with drone mapping",
    "Improve project planning with 3D models",
    "Eliminate costly field rework",
    "Access precise data for engineering design",
  ],
  solutions: [
    "Drone Photogrammetry",
    "GPS Survey Equipment",
    "3D Modeling Services",
    "Geospatial Analysis",
  ],
  imageUrl: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  stats: [
    { label: "Survey Time", value: "-60%", icon: Clock },
    { label: "Data Accuracy", value: "cm-level", icon: Compass },
    { label: "Project Savings", value: "+35%", icon: DollarSign },
  ],
};
