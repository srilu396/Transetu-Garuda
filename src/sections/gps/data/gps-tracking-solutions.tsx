import React from "react";
import { MapPin, RotateCcw, Activity, Bell, ShieldCheck, Zap, Lock } from "lucide-react";
import { SolutionData } from "./gpsData";

export const gpsTrackingSolutions: SolutionData = {
  title: "Advanced GPS Tracking",
  tagline: "Total visibility and control over your fleet's movement and performance.",
  bgColor: "#E5F0FF",
  overview:
    "Our Advanced GPS Tracking solution provides a comprehensive ecosystem for monitoring your mobile assets. It goes beyond simple location tracking by offering deep insights into vehicle health, driver safety, and operational efficiency through an intuitive real-time dashboard.",
  features: [
    {
      title: "Real-Time Tracking",
      description:
        "Monitor your entire fleet's exact location globally with sub-second updates and precision mapping technology.",
      icon: <MapPin className="w-6 h-6 text-[#7375f2]" />,
    },
    {
      title: "Route History & Playback",
      description:
        "Access detailed trip logs and replay precise routes taken by any vehicle over the past 90 days to identify unauthorized detours.",
      icon: <RotateCcw className="w-6 h-6 text-[#7375f2]" />,
    },
    {
      title: "Driver Behavior Monitoring",
      description:
        "Utilize advanced G-sensors to detect and report harsh braking, rapid acceleration, sharp cornering, and excessive idling.",
      icon: <Activity className="w-6 h-6 text-[#7375f2]" />,
    },
    {
      title: "Smart Alerts & Notifications",
      description:
        "Configure instant SMS, email, or app notifications for speeding, geofence breaches, maintenance needs, and security triggers.",
      icon: <Bell className="w-6 h-6 text-[#7375f2]" />,
    },
  ],
  useCases: [
    {
      title: "Logistics Optimization",
      description:
        "Reduce delivery times and fuel costs with intelligent route planning and dynamic dispatching.",
    },
    {
      title: "Cold Chain Assurance",
      description:
        "Track sensitive cargo alongside temperature data to ensure product integrity during transit.",
    },
    {
      title: "Employee Safety",
      description:
        "Protect your workforce with SOS alerts and rapid emergency response assistance features.",
    },
  ],
  benefits: [
    {
      title: "99.9% Up-time",
      description: "Rely on our enterprise-grade infrastructure built for continuous, uninterrupted tracking.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "30% Fuel Savings",
      description: "Optimized routing and reduced idling contribute significantly to lowering fuel expenditures.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Precision Security",
      description: "Theft recovery and unauthorized use prevention with remote immobilizer capabilities.",
      icon: <Lock className="w-6 h-6" />,
    },
  ],
  seoMeta: {
    title: "Advanced GPS Fleet Tracking Solutions | Garuda",
    description:
      "Professional GPS tracking for fleets of all sizes. Real-time location, driver behavior monitoring, and route optimization.",
  },
  imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
};
