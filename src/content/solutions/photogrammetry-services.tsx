import React from "react";
import { Camera, Layers, BarChart3, MapPin, Clock, Activity, ShieldCheck } from "lucide-react";
import { SolutionData } from "../solutions";

export const photogrammetryServices: SolutionData = {
  title: "Photogrammetry Services",
  tagline: "High-precision 3D mapping and topographical surveying",
  bgColor: "#E0F7FA",
  overview:
    "Transform aerial imagery and spatial data into highly accurate 3D models and maps. Our Photogrammetry Services combine advanced drone technology, precise GPS ground control points, and sophisticated processing software to deliver survey-grade topographical data for construction, mining, and urban planning projects.",
  features: [
    {
      title: "Drone Imagery Capture",
      description:
        "High-resolution aerial photography covering large areas efficiently.",
      icon: <Camera className="w-6 h-6 text-primary" />,
    },
    {
      title: "3D Modeling",
      description:
        "Create detailed 3D meshes, point clouds, and orthomosaics.",
      icon: <Layers className="w-6 h-6 text-primary" />,
    },
    {
      title: "Volumetric Analysis",
      description:
        "Accurately measure stockpile volumes for inventory management.",
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
    },
    {
      title: "Topographical Mapping",
      description:
        "Generate precise contour maps and digital elevation models (DEMs).",
      icon: <MapPin className="w-6 h-6 text-primary" />,
    },
  ],
  useCases: [
    {
      title: "Construction & Engineering",
      description: "Track site progress and calculate earthwork volumes.",
    },
    {
      title: "Mining Operations",
      description: "Manage stockpiles and map quarry expansions safely.",
    },
    {
      title: "Agriculture & Forestry",
      description: "Monitor crop health and map large land areas.",
    },
  ],
  benefits: [
    {
      title: "Cost & Time Efficiency",
      description:
        "Survey large areas much faster than traditional ground methods.",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Enhanced Accuracy",
      description:
        "Survey-grade precision for critical engineering decisions.",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "Improved Safety",
      description:
        "Survey dangerous or hard-to-reach areas without putting personnel at risk.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
  ],
  seoMeta: {
    title: "Drone Photogrammetry & 3D Mapping Services | Garuda",
    description:
      "High-precision aerial surveying and photogrammetry services for accurate topographical data and 3D modeling.",
  },
};
