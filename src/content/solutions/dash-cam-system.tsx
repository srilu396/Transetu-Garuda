import React from "react";
import { Camera, Activity, Cloud, Shield, ShieldCheck, UserCheck, Zap } from "lucide-react";
import { SolutionData } from "../solutions";

export const dashCamSystem: SolutionData = {
  title: "Dash Cam System",
  tagline: "Real-time vehicle video monitoring for enhanced safety",
  bgColor: "#E3D7DD",
  overview:
    "The Garuda Dash Cam System acts as an unbiased witness to everything that happens in and around your vehicles. Utilizing dual-camera technology, it records the road ahead while simultaneously monitoring the cabin. Integrated with our GPS tracking platform, it provides live video streaming, AI-powered driver safety alerts, and secure cloud storage for critical incident footage.",
  features: [
    {
      title: "Dual-Facing Cameras",
      description:
        "Record both the road and the driver's cabin to get a complete picture of any incident.",
      icon: <Camera className="w-6 h-6 text-primary" />,
    },
    {
      title: "Live Video Streaming",
      description:
        "Access real-time feeds from your vehicles directly from your dashboard.",
      icon: <Activity className="w-6 h-6 text-primary" />,
    },
    {
      title: "Cloud Storage",
      description:
        "Critical events like harsh braking or collisions are automatically saved to the secure cloud.",
      icon: <Cloud className="w-6 h-6 text-primary" />,
    },
    {
      title: "AI Safety Alerts",
      description:
        "Detect distracted driving, drowsiness, and cell phone usage instantly.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
  ],
  useCases: [
    {
      title: "Transportation Companies",
      description:
        "Protect drivers from false claims and reduce insurance premiums.",
    },
    {
      title: "Public Transit",
      description: "Ensure passenger safety and monitor driver behavior.",
    },
    {
      title: "Delivery Services",
      description: "Monitor package handling and delivery proof via video.",
    },
  ],
  benefits: [
    {
      title: "Enhanced Safety",
      description: "Proactively correct unsafe driving behaviors.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Reduced Liability",
      description: "Video evidence protects against fraudulent claims.",
      icon: <UserCheck className="w-6 h-6" />,
    },
    {
      title: "Improved Training",
      description: "Use real-world footage for effective driver coaching.",
      icon: <Zap className="w-6 h-6" />,
    },
  ],
  seoMeta: {
    title: "Dash Cam System for Fleet Safety | Garuda",
    description:
      "Improve driver safety with live video streaming and cloud-recorded incident footage.",
  },
  imageUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
};
