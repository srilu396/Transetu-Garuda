import React from "react";
import { Shield, Bell, Cloud, Zap, UserCheck, ShieldCheck, Activity } from "lucide-react";
import { SolutionData } from "./gpsData";

export const ais140Tracker: SolutionData = {
  title: "AIS 140 GPS Tracker",
  tagline: "Certified compliance solutions for commercial vehicles",
  bgColor: "#FFF8E1",
  overview:
    "Meeting government regulations is crucial for commercial transport operators in India. The Garuda AIS 140 GPS Tracker is a fully certified, ruggedized device designed specifically to comply with the AIS 140 standard mandate. It ensures passenger safety, provides precise tracking for authorities, and helps you avoid severe compliance penalties.",
  features: [
    {
      title: "ARAI/ICAT Certified",
      description:
        "Fully approved hardware meeting all government AIS 140 specifications.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
    {
      title: "SOS Panic Button",
      description:
        "Integrated emergency buttons for passenger safety, alerting authorities instantly.",
      icon: <Bell className="w-6 h-6 text-primary" />,
    },
    {
      title: "Dual IP Transmission",
      description:
        "Simultaneously transmits data to government servers and your fleet dashboard.",
      icon: <Cloud className="w-6 h-6 text-primary" />,
    },
    {
      title: "Internal Battery Backup",
      description:
        "Continuous operation even if the main vehicle battery is disconnected.",
      icon: <Zap className="w-6 h-6 text-primary" />,
    },
  ],
  useCases: [
    {
      title: "School Buses",
      description:
        "Mandatory compliance for student safety and parent peace of mind.",
    },
    {
      title: "Public Transport",
      description:
        "City buses and auto-rickshaws requiring state transport department approval.",
    },
    {
      title: "Commercial Cabs",
      description:
        "Taxis and aggregators operating under government permits.",
    },
  ],
  benefits: [
    {
      title: "Guaranteed Compliance",
      description: "Avoid fines, permit cancellations, and legal issues.",
      icon: <UserCheck className="w-6 h-6" />,
    },
    {
      title: "Passenger Security",
      description:
        "SOS buttons provide a critical lifeline during emergencies.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Reliable Tracking",
      description: "High-quality hardware ensures consistent location data.",
      icon: <Activity className="w-6 h-6" />,
    },
  ],
  seoMeta: {
    title: "AIS 140 Certified GPS Trackers | Garuda",
    description:
      "Government-approved AIS 140 compliant GPS tracking devices for commercial vehicles and public transport.",
  },
};
