import { IndustryData } from "./industriesData";

export const miningOperations: IndustryData = {
  slug: "mining-operations",
  title: "Mining Operations",
  description: "Track heavy machinery, monitor equipment health, and enhance worker safety in rugged, remote mining environments with our specialized solutions.",
  icon: "Mountain",
  features: [
    "Heavy machinery tracking",
    "Equipment health monitoring",
    "Worker safety alerts",
    "Remote site connectivity",
  ],
  category: "Heavy Industry",
  detailedDescription: "Maximize productivity and safety in your mining operations with our ruggedized tracking and telematics platform. Monitor the location and status of heavy machinery in real-time, optimize haul routes, and reduce idle time. Our equipment health monitoring solution provides predictive maintenance alerts, preventing costly downtime. Enhance worker safety with man-down alerts and geofence-based safety zones. Our solution is built to withstand the harsh conditions of mining environments, ensuring reliable connectivity and data collection.",
  benefits: [
    "Increase equipment uptime by 20%",
    "Reduce fuel consumption with idle monitoring",
    "Improve worker safety with real-time alerts",
    "Optimize haul routes for maximum efficiency",
  ],
  solutions: [
    "Heavy Equipment GPS Trackers",
    "Predictive Maintenance Sensors",
    "Worker Safety Devices",
    "Remote Site Connectivity Solutions",
  ],
  imageUrl: "/images/Industries/Mining Operations.jpg",
  stats: [
    { label: "Uptime", value: "+20%", icon: "Zap" },
    { label: "Safety", value: "-60% Incidents", icon: "Shield" },
    { label: "Productivity", value: "+30%", icon: "TrendingUp" },
  ],
};
