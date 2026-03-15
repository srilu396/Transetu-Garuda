import { Warehouse, Gauge, Shield, TrendingUp } from "lucide-react";
import { IndustryData } from "./industriesData";

export const warehouseInventory: IndustryData = {
  slug: "warehouse-inventory",
  title: "Warehouse & Inventory",
  description: "Monitor forklifts, pallet jacks, and inventory movement within warehouse facilities to optimize material handling and prevent asset loss.",
  icon: Warehouse,
  features: [
    "Forklift tracking",
    "Asset utilization",
    "Inventory movement",
    "Warehouse efficiency",
  ],
  category: "Logistics",
  detailedDescription: "Transform your warehouse operations with indoor tracking technology that provides real-time visibility of material handling equipment and inventory. Monitor forklift utilization to identify bottlenecks and optimize fleet size. Track pallet and inventory movement to streamline putaway and picking processes. Prevent asset loss with geofence alerts that notify you when equipment leaves designated areas. Our solution integrates with your WMS to provide a complete picture of warehouse operations.",
  benefits: [
    "Increase forklift utilization by 30%",
    "Reduce equipment fleet size by 20%",
    "Eliminate asset loss with indoor tracking",
    "Optimize warehouse layout with heat maps",
  ],
  solutions: [
    "Indoor Asset Trackers",
    "Forklift Management System",
    "Inventory Movement Analytics",
    "Warehouse Heat Mapping",
  ],
  imageUrl: "https://images.unsplash.com/photo-1586528116493-ce25d2e5f4b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  stats: [
    { label: "Equipment Utilization", value: "+30%", icon: Gauge },
    { label: "Asset Loss", value: "-95%", icon: Shield },
    { label: "Productivity Gain", value: "+25%", icon: TrendingUp },
  ],
};
