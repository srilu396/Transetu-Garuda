import { Pickaxe, Gauge, Shield, DollarSign } from "lucide-react";
import { IndustryData } from "./industriesData";

export const miningOperations: IndustryData = {
  slug: "mining-operations",
  title: "Mining Operations",
  description: "Monitor heavy earthmoving equipment in remote mining locations with rugged GPS trackers designed to withstand dust, vibration, and extreme temperatures.",
  icon: Pickaxe,
  features: [
    "Heavy equipment tracking",
    "Geofence security alerts",
    "Maintenance scheduling",
    "Operator utilization reports",
  ],
  category: "Industrial",
  detailedDescription: "Maximize productivity and security in your mining operations with our rugged GPS tracking solutions built for extreme environments. Our devices withstand dust, vibration, and temperature extremes while providing precise location data for all heavy equipment. Prevent theft with geofence alerts that notify you immediately when equipment leaves designated areas. Maintenance scheduling based on actual usage hours helps prevent costly breakdowns and extends equipment life. Detailed utilization reports show you exactly how each piece of equipment is being used, enabling better resource allocation.",
  benefits: [
    "Reduce equipment theft with instant geofence alerts",
    "Extend machinery life with preventive maintenance",
    "Optimize equipment utilization across shifts",
    "Improve safety with operator monitoring",
  ],
  solutions: [
    "Rugged GPS Trackers for Mining",
    "Equipment Utilization Dashboard",
    "Maintenance Alert System",
    "Geofence Security Platform",
  ],
  imageUrl: "https://images.unsplash.com/photo-1584968173922-4e13d6b3a0a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  stats: [
    { label: "Equipment Uptime", value: "+35%", icon: Gauge },
    { label: "Theft Prevention", value: "99%", icon: Shield },
    { label: "Maintenance Cost", value: "-28%", icon: DollarSign },
  ],
};
