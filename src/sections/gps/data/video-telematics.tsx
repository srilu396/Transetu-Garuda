import React from "react";
import { Layers, Camera, Cloud, UserCheck, Zap, ShieldCheck, Activity } from "lucide-react";
import { SolutionData } from "./gpsData";

export const videoTelematics: SolutionData = {
  title: "Video Telematics",
  tagline: "Unify location data with powerful visual context",
  icon: Activity,
  bgColor: "#F3E5F5",
  overview:
    "Go beyond dots on a map with Garuda Video Telematics. This solution seamlessly overlays rich video footage with precise GPS data, speed, and telemetry information. It provides an undeniable record of events, enabling rapid incident resolution, proactive driver coaching, and a comprehensive understanding of your fleet's on-road reality.",
  detailedDescription: {
    what: "Video Telematics is the next evolution of fleet management, merging traditional GPS tracking with high-definition video surveillance and AI analysis. It transforms raw data into actionable visual evidence, giving fleet managers a 'virtual ride-along' capability for every vehicle in their fleet.",
    how: "Our system uses connected multi-camera hardware that continuously records to local storage while streaming low-bandwidth metadata to the cloud. When a critical event (like a collision or harsh brake) is detected by the onboard sensors, the system automatically 'slices' the relevant video segment and uploads it in high-definition for immediate review.",
    who: "This solution is ideal for high-stakes industries including passenger transport, emergency services, high-value logistics, and hazardous material transport where safety and liability are paramount.",
    why: "Traditional telematics can tell you *that* an event happened, but video telematics tells you *why* it happened. This context is the difference between a multi-million dollar lawsuit and a quick exoneration. It also provides the most effective medium for driver behavior modification and training."
  },
  features: [
    {
      title: "Unified Live Dashboard",
      description:
        "View real-time GPS positions on a map alongside synchronized live video streams from multiple camera angles.",
      icon: <Layers className="w-6 h-6 text-primary" />,
    },
    {
      title: "G-Sensor Triggered Uploads",
      description:
        "Automatically capture and upload 20-second video clips (10s before/10s after) of harsh braking, impacts, or sharp turns.",
      icon: <Camera className="w-6 h-6 text-primary" />,
    },
    {
      title: "On-Demand Remote Retrieval",
      description:
        "Search and request specific historical video segments by time, date, or location directly from your web dashboard.",
      icon: <Cloud className="w-6 h-6 text-primary" />,
    },
    {
      title: "AI-Powered Event Analysis",
      description:
        "Advanced algorithms automatically categorize events (e.g., tailgating, lane departure) to prioritize manager review.",
      icon: <UserCheck className="w-6 h-6 text-primary" />,
    },
    {
      title: "Multi-Camera Support",
      description:
        "Connect up to 8 cameras per vehicle, including side-view, rear-view, and cargo-area cameras for total coverage.",
      icon: <Zap className="w-6 h-6 text-primary" />,
    },
    {
      title: "Privacy Masking",
      description:
        "Configurable privacy zones and blurred faces ensure compliance with data protection regulations while maintaining security.",
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    },
  ],
  useCases: [
    {
      title: "Public Transit Security",
      description:
        "Monitor passenger safety, prevent vandalism, and provide evidence for incidents occurring inside or around buses.",
    },
    {
      title: "First Responder Efficiency",
      description: "Review emergency response routes and procedures with complete visual context to improve future performance.",
    },
    {
      title: "Cash-in-Transit Protection",
      description: "Provide continuous visual monitoring of high-value cargo and immediate alerts for any unauthorized door openings.",
    },
    {
      title: "Driver Exoneration",
      description: "Instantly prove your driver was not at fault in accidents involving 'crash-for-cash' scammers or distracted third parties.",
    }
  ],
  benefits: [
    {
      title: "75% Faster Claim Resolution",
      description: "Provide insurers with irrefutable video evidence to settle claims in days rather than months.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Reduced Accident Frequency",
      description: "Proactive coaching based on real video clips leads to a measurable decrease in preventable accidents.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Absolute Accountability",
      description: "Eliminate the 'he-said, she-said' scenarios with a definitive visual record of every fleet operation.",
      icon: <Activity className="w-6 h-6" />,
    },
  ],
  steps: [
    {
      title: "System Design",
      description: "We help you determine the optimal camera placement and hardware configuration for your specific vehicle types."
    },
    {
      title: "Expert Installation",
      description: "Full-system integration including wiring, camera mounting, and network configuration by our expert team."
    },
    {
      title: "Workflow Integration",
      description: "Configure your automated alert rules and integrate video data into your existing safety management workflow."
    }
  ],
  seoMeta: {
    title: "AI Video Telematics & Fleet Monitoring | Garuda",
    description:
      "Advanced video telematics combining GPS data with AI-powered video analysis for total fleet visibility, safety, and liability protection.",
  },
  imageUrl: "/images/products/video-telematics.jpg",
  secondaryImageUrl: "https://images.unsplash.com/photo-1557426423-038a7d427425?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
};
