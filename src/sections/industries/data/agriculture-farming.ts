import { Tractor, Gauge, Fuel, Clock } from "lucide-react";
import { IndustryData } from "./industriesData";

export const agricultureFarming: IndustryData = {
  slug: "agriculture-farming",
  title: "Agriculture & Farming",
  description: "Monitor farm equipment, tractors, and harvesters to optimize field operations, reduce fuel costs, and track agricultural asset utilization.",
  icon: Tractor,
  features: [
    "Farm equipment tracking",
    "Field operation monitoring",
    "Fuel consumption tracking",
    "Maintenance alerts",
  ],
  category: "Agriculture",
  detailedDescription: "Maximize agricultural productivity with our farm equipment tracking solution. Monitor tractors, harvesters, and other implements in real-time to optimize field operations and reduce idle time. Fuel consumption tracking identifies inefficient practices and helps control costs. Maintenance alerts based on actual usage hours prevent breakdowns during critical planting and harvest windows. Detailed reports show equipment utilization across fields, enabling better planning and resource allocation for seasonal operations.",
  benefits: [
    "Increase equipment utilization by 25%",
    "Reduce fuel costs with efficiency monitoring",
    "Prevent downtime with maintenance alerts",
    "Optimize field operations with route tracking",
  ],
  solutions: [
    "Agricultural GPS Trackers",
    "Field Operation Monitor",
    "Fuel Efficiency System",
    "Equipment Maintenance Alerts",
  ],
  imageUrl: "https://images.unsplash.com/photo-1581094794327-6e3f1f4b9a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  stats: [
    { label: "Equipment Utilization", value: "+25%", icon: Gauge },
    { label: "Fuel Savings", value: "-18%", icon: Fuel },
    { label: "Downtime Reduction", value: "-42%", icon: Clock },
  ],
};
