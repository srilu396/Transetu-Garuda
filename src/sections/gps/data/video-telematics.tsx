import React from "react";
import { Layers, Camera, Cloud, UserCheck, Zap, ShieldCheck, Activity } from "lucide-react";
import { SolutionData } from "./gpsData";

export const videoTelematics: SolutionData = {
  title: "Video Telematics",
  tagline: "Unify location data with powerful visual context",
  bgColor: "#F3E5F5",
  overview:
    "Go beyond dots on a map with Garuda Video Telematics. This solution seamlessly overlays rich video footage with precise GPS data, speed, and telemetry information. It provides an undeniable record of events, enabling rapid incident resolution, proactive driver coaching, and a comprehensive understanding of your fleet's on-road reality.",
  features: [
    {
      title: "Integrated Dashboard",
      description:
        "View GPS location on a map simultaneously with live or recorded video.",
      icon: <Layers className="w-6 h-6 text-primary" />,
    },
    {
      title: "Event-Triggered Recording",
      description:
        "Automatically capture video when harsh braking, acceleration, or impacts occur.",
      icon: <Camera className="w-6 h-6 text-primary" />,
    },
    {
      title: "Remote Video Retrieval",
      description:
        "Request specific moments of historical video footage directly from the cloud.",
      icon: <Cloud className="w-6 h-6 text-primary" />,
    },
    {
      title: "Driver Coaching Tools",
      description:
        "Use annotated video clips to train drivers on safety best practices.",
      icon: <UserCheck className="w-6 h-6 text-primary" />,
    },
  ],
  useCases: [
    {
      title: "Passenger Transport",
      description:
        "Ensure the safety and security of passengers during transit.",
    },
    {
      title: "Emergency Services",
      description:
        "Review response routes and incident handling with complete context.",
    },
    {
      title: "High-Value Cargo",
      description: "Provide visual proof of secure transport and delivery.",
    },
  ],
  benefits: [
    {
      title: "Rapid Claim Resolution",
      description: "Clear video evidence expedites insurance claims.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Improved Driver Retention",
      description:
        "Protect drivers from unjust blame and foster a culture of safety.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Comprehensive Visibility",
      description: "Know exactly what happened, when, and where.",
      icon: <Activity className="w-6 h-6" />,
    },
  ],
  seoMeta: {
    title: "Video Telematics & Fleet Monitoring | Garuda",
    description:
      "Combine GPS data with live and recorded video for total fleet visibility and safety management.",
  },
};
