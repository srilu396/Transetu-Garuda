import { Truck, TrendingUp, Clock } from "lucide-react";
import { IndustryData } from "./industriesData";

export const logisticsTransportation: IndustryData = {
  slug: "logistics-transportation",
  title: "Logistics & Transportation",
  description:
    "Streamline your fleet operations with real-time vehicle tracking, route optimization, and FASTag integration for seamless toll management across national highways.",
  icon: Truck,
  features: [
    "Real-time fleet visibility",
    "FASTag toll management",
    "Route efficiency optimization",
    "Delivery proof & ETA tracking",
  ],
  category: "Transportation",
  detailedDescription:
    "Transform your logistics operations with our comprehensive GPS tracking and FASTag management platform. Our solution provides end-to-end visibility across your entire fleet, enabling real-time decision-making that reduces operational costs and improves delivery performance. With integrated FASTag management, you can automate toll payments across hundreds of vehicles, eliminating manual reconciliation and ensuring uninterrupted journeys. Advanced route optimization algorithms analyze traffic patterns and historical data to suggest the most efficient paths, reducing fuel consumption and improving on-time delivery rates.",
  benefits: [
    "Reduce fuel costs by up to 25% through optimized routing",
    "Eliminate toll payment delays with automated FASTag recharges",
    "Improve customer satisfaction with accurate ETAs",
    "Prevent unauthorized vehicle usage with geofence alerts",
  ],
  solutions: [
    "Fleet GPS Trackers with real-time monitoring",
    "FASTag Fleet Management Dashboard",
    "Route Optimization Engine",
    "Driver Behavior Analytics",
  ],
  imageUrl:
    "https://images.unsplash.com/photo-1586528116311-ada1f4b5c9e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  stats: [
    { label: "Fleet Size", value: "1 to 1000+", icon: Truck },
    { label: "Fuel Savings", value: "up to 25%", icon: TrendingUp },
    { label: "ROI Timeline", value: "3-6 months", icon: Clock },
  ],
};
