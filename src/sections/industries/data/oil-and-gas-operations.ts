import { Flame, DrillIcon, Fuel, Activity } from "lucide-react";
import { IndustryData } from "./industriesData";

export const oilAndGasOperations: IndustryData = {
  slug: "oil-and-gas-operations",
  title: "Oil & Gas Operations",
  description: "Track drilling rigs, pipeline assets, and energy fleet vehicles with rugged GPS devices and fuel monitoring systems designed for remote oil field environments.",
  icon: Flame,
  category: "Energy",
  imageUrl: "/images/industries/oil-gas-operations.jpg",
  features: [
    "Real-time drilling rig GPS tracking",
    "Pipeline asset monitoring & leak detection",
    "Fuel consumption tracking for heavy equipment",
    "Remote location satellite coverage",
    "Harsh environment certified hardware",
    "Geofencing for restricted zones",
    "Engine hours & maintenance alerts",
    "Tanker fleet management"
  ],
  stats: [
    { label: "Rigs Tracked", value: "500+", icon: DrillIcon },
    { label: "Fuel Savings", value: "25%", icon: Fuel },
    { label: "Pipeline Miles", value: "10,000+", icon: Activity }
  ],
  detailedDescription: "The oil and gas industry operates in some of the most challenging environments on earth, from remote desert locations to offshore platforms and arctic conditions. Our specialized GPS tracking solutions are engineered to withstand extreme temperatures, vibration, and harsh conditions while providing reliable real-time data on asset location, utilization, and performance. We help energy companies optimize their operations by tracking everything from drilling rigs and pipeline inspection vehicles to fuel trucks and service fleet. Our integrated fuel monitoring systems provide critical insights into consumption patterns, helping detect theft and inefficiencies that can cost millions annually. With satellite-based communication ensuring coverage even in the most remote locations, our solutions give energy companies complete visibility and control over their valuable assets, improving safety, reducing downtime, and maximizing operational efficiency.",
  solutions: [
    "Drilling Rig GPS Tracking",
    "Pipeline Asset Monitoring",
    "Fuel Theft Detection System",
    "Heavy Equipment Telematics",
    "Tanker Fleet Management",
    "Remote Location Satellite Tracking",
    "Well Site Security Monitoring",
    "Equipment Maintenance Alerts"
  ],
  benefits: [
    "Reduce fuel theft by up to 30% with real-time consumption monitoring",
    "Minimize downtime with predictive maintenance alerts",
    "Improve safety with geofencing and restricted zone alerts",
    "Optimize rig utilization with detailed usage analytics",
    "Enhance security with tamper-proof asset tracking",
    "Lower operational costs through efficient route planning",
    "Ensure compliance with environmental and safety regulations",
    "Gain complete visibility across remote operations"
  ]
};
