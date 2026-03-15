import { Ship, Compass, Gauge, DollarSign } from "lucide-react";
import { IndustryData } from "./industriesData";

export const marinePortOperations: IndustryData = {
  slug: "marine-port-operations",
  title: "Marine & Port Operations",
  description: "Track containers, cargo handling equipment, and vessels in port environments with marine-grade GPS devices resistant to saltwater and harsh conditions.",
  icon: Ship,
  features: [
    "Container tracking",
    "Port equipment monitoring",
    "Vessel arrival ETA",
    "Yard management",
  ],
  category: "Maritime",
  detailedDescription: "Optimize port and marine operations with our rugged tracking solutions built for challenging maritime environments. Monitor container locations across your yard, track cargo handling equipment utilization, and receive accurate vessel ETAs for better planning. Our marine-grade devices resist saltwater corrosion and maintain reliable connectivity even in areas with limited cellular coverage. Streamline port operations, reduce demurrage charges, and improve throughput with complete visibility of all assets.",
  benefits: [
    "Reduce container search time by 70%",
    "Optimize equipment utilization across shifts",
    "Eliminate demurrage with proactive planning",
    "Improve port throughput with real-time data",
  ],
  solutions: [
    "Marine GPS Trackers",
    "Container Management System",
    "Port Equipment Monitoring",
    "Vessel ETA Platform",
  ],
  imageUrl: "https://images.unsplash.com/photo-1586528116137-7b1c1f5b9c4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  stats: [
    { label: "Container Search", value: "-70% time", icon: Compass },
    { label: "Equipment Utilization", value: "+45%", icon: Gauge },
    { label: "Demurrage Cost", value: "-63%", icon: DollarSign },
  ],
};
