import { Building, Fuel, TrendingUp, Users } from "lucide-react";
import { IndustryData } from "./industriesData";

export const municipalFleetManagement: IndustryData = {
  slug: "municipal-fleet-management",
  title: "Municipal Fleet Management",
  description: "Optimize city service vehicles including waste collection, road maintenance, and public transportation with centralized GPS monitoring.",
  icon: Building,
  features: [
    "Service route optimization",
    "Fuel usage monitoring",
    "Idle time reduction",
    "Public works compliance",
  ],
  category: "Government",
  detailedDescription: "Transform municipal fleet operations with our comprehensive tracking solution designed for government agencies. Monitor waste collection, snow removal, road maintenance, and public transportation vehicles from a single dashboard. Route optimization reduces fuel consumption and ensures complete coverage of service areas. Real-time tracking enables better response to citizen requests and emergency situations. Detailed reports demonstrate compliance with service level agreements and provide data for budget planning and resource allocation.",
  benefits: [
    "Reduce fleet operating costs by 20-30%",
    "Improve citizen satisfaction with reliable services",
    "Ensure regulatory compliance with automated logs",
    "Optimize vehicle allocation across departments",
  ],
  solutions: [
    "Municipal GPS Tracking System",
    "Route Optimization Platform",
    "Fuel Management Dashboard",
    "Public Works Reporting",
  ],
  imageUrl: "https://images.unsplash.com/photo-1573497491765-dccce02f29df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  stats: [
    { label: "Fuel Savings", value: "-28%", icon: Fuel },
    { label: "Service Efficiency", value: "+35%", icon: TrendingUp },
    { label: "Citizen Satisfaction", value: "+42%", icon: Users },
  ],
};
