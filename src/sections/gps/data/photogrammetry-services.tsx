import React from "react";
import {
  Camera,
  Layers,
  BarChart3,
  MapPin,
  Clock,
  Activity,
  ShieldCheck,
} from "lucide-react";
import { SolutionData } from "./gpsData";

export const photogrammetryServices: SolutionData = {
  title: "Photogrammetry Services",
  tagline: "High-precision 3D mapping and topographical surveying",
  icon: Camera,
  bgColor: "#E0F7FA",
  overview:
    "Transform aerial imagery and spatial data into highly accurate 3D models and maps. Our Photogrammetry Services combine advanced drone technology, precise GPS ground control points, and sophisticated processing software to deliver survey-grade topographical data for construction, mining, and urban planning projects.",
  detailedDescription: {
    what: "Our Photogrammetry Service is a high-tech surveying solution that uses overlapping aerial photographs to create precise 2D maps and 3D models. By combining high-resolution drone imagery with survey-grade GPS Ground Control Points (GCPs), we provide a level of detail and accuracy that traditional ground-based surveying cannot match in terms of speed and scale.",
    how: "We deploy professional-grade UAVs (drones) equipped with calibrated cameras to fly pre-programmed flight paths. These drones capture thousands of high-resolution images with precise GPS metadata. Back at our processing center, we use advanced 'Structure from Motion' (SfM) algorithms to stitch these images into orthomosaics, 3D point clouds, and Digital Elevation Models (DEMs).",
    who: "This service is essential for civil engineers, mining site managers, urban planners, large-scale farmers, and environmental researchers who require frequent, accurate, and cost-effective spatial data for their projects.",
    why: "Traditional surveying is slow, expensive, and can be dangerous in rugged terrain. Our photogrammetry services can cover hundreds of acres in a single day, providing survey-grade accuracy (down to 1-3cm) at a fraction of the cost. It also provides a visual record of site progress that is much easier to interpret than a list of coordinates.",
  },
  features: [
    {
      title: "High-Resolution Orthomosaics",
      description:
        "Large-scale, distortion-free maps created from thousands of stitched aerial photos with sub-centimeter pixel resolution.",
      icon: <Camera className="w-6 h-6 text-primary" />,
    },
    {
      title: "3D Point Clouds & Meshing",
      description:
        "Generate dense 3D point clouds and textured meshes for detailed visualization and measurement of structures and terrain.",
      icon: <Layers className="w-6 h-6 text-primary" />,
    },
    {
      title: "Automated Volumetric Analysis",
      description:
        "Calculate the precise volume of stockpiles, pits, and embankments within minutes for accurate inventory and cost management.",
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
    },
    {
      title: "Digital Elevation Models (DEM)",
      description:
        "Create highly accurate topographical maps showing terrain elevation, slopes, and drainage patterns for engineering design.",
      icon: <MapPin className="w-6 h-6 text-primary" />,
    },
    {
      title: "Ground Control Point (GCP) Integration",
      description:
        "Use RTK-enabled drones and physical ground markers to ensure absolute global accuracy within 2-3 centimeters.",
      icon: <Clock className="w-6 h-6 text-primary" />,
    },
    {
      title: "Multi-Temporal Progress Tracking",
      description:
        "Overlay surveys from different dates to visualize site changes over time and verify project milestones.",
      icon: <Activity className="w-6 h-6 text-primary" />,
    },
  ],
  useCases: [
    {
      title: "Construction Site Monitoring",
      description:
        "Track earthwork progress, verify as-built structures against CAD designs, and improve stakeholder communication with weekly 3D updates.",
    },
    {
      title: "Mining Stockpile Management",
      description:
        "Safely measure coal, ore, or aggregate volumes from the air, eliminating the need for surveyors to climb dangerous stockpiles.",
    },
    {
      title: "Urban Planning & Infrastructure",
      description:
        "Create detailed 3D base maps for city planning, roadway design, and utility corridor management with high visual fidelity.",
    },
    {
      title: "Precision Agriculture Mapping",
      description:
        "Identify crop health issues, map drainage problems, and optimize fertilizer application using multispectral aerial data.",
    },
  ],
  benefits: [
    {
      title: "80% Reduction in Survey Time",
      description:
        "Cover vast areas in hours that would take traditional ground crews weeks to complete.",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Survey-Grade Precision",
      description:
        "Achieve the high-level accuracy required for critical engineering and construction decisions.",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "Zero-Risk Data Collection",
      description:
        "Survey hazardous environments like cliffs, pits, or busy construction zones safely from the air.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
  ],
  steps: [
    {
      title: "Flight Planning",
      description:
        "We define the project boundaries and flight parameters to ensure optimal image overlap and resolution.",
    },
    {
      title: "Data Acquisition",
      description:
        "Our certified pilots conduct the drone mission while simultaneously collecting GPS ground control data.",
    },
    {
      title: "Cloud Processing",
      description:
        "Images are processed using high-performance servers to generate your final 2D maps and 3D models.",
    },
  ],
  seoMeta: {
    title: "High-Precision Drone Photogrammetry & 3D Mapping | Garuda",
    description:
      "Professional aerial surveying and photogrammetry services for accurate topographical data, volumetric analysis, and 3D modeling.",
  },
  imageUrl: "/images/products/photogrammetry.jpg"
};
