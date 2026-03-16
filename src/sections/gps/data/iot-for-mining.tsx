import React from "react";
import { Shield, Satellite, Clock, Lock, ShieldCheck, BarChart3, UserCheck } from "lucide-react";
import { SolutionData } from "./gpsData";

export const iotForMining: SolutionData = {
  title: "Mining Equipment Tracking",
  tagline: "Ruggedized IoT solutions for harsh operational environments",
  bgColor: "#FBECE6",
  overview:
    "Mining operations require equipment that can withstand extreme conditions. Our Mining Equipment Tracking solution utilizes ultra-durable, IP-rated GPS devices designed specifically for heavy machinery. Monitor equipment utilization, track the location of expensive assets in remote areas without cellular coverage using satellite communication, and ensure the safety of your operators.",
  features: [
    {
      title: "Rugged Hardware",
      description:
        "Devices built to withstand extreme dust, water, and vibration.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
    {
      title: "Satellite Connectivity",
      description:
        "Maintain tracking even in remote areas without cellular networks.",
      icon: <Satellite className="w-6 h-6 text-primary" />,
    },
    {
      title: "Utilization Tracking",
      description:
        "Monitor engine hours and usage to optimize maintenance schedules.",
      icon: <Clock className="w-6 h-6 text-primary" />,
    },
    {
      title: "Asset Security",
      description:
        "Receive instant alerts if equipment is moved outside designated operational zones.",
      icon: <Lock className="w-6 h-6 text-primary" />,
    },
  ],
  useCases: [
    {
      title: "Open-Pit Mining",
      description:
        "Track haul trucks and excavators across vast operational sites.",
    },
    {
      title: "Construction Sites",
      description: "Monitor expensive heavy machinery and prevent theft.",
    },
    {
      title: "Equipment Rental",
      description:
        "Track the location and usage of rented generators and lifters.",
    },
  ],
  benefits: [
    {
      title: "Prevent Asset Loss",
      description: "Stop unauthorized movement and recover stolen equipment.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Maximize ROI",
      description:
        "Identify underutilized machinery and redeploy effectively.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Enhanced Safety",
      description:
        "Ensure operators remain within safe operational boundaries.",
      icon: <UserCheck className="w-6 h-6" />,
    },
  ],
  seoMeta: {
    title: "Mining Equipment Tracking System | Garuda",
    description:
      "Rugged GPS tracking devices designed for heavy machinery in challenging mining and construction environments.",
  },
  imageUrl: "https://images.unsplash.com/photo-1578351508211-1ca87895bc63?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
};
