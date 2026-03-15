import { Radio, BarChart3, Shield, DollarSign } from "lucide-react";
import { IndustryData } from "./industriesData";

export const assetTelematics: IndustryData = {
  slug: "asset-telematics",
  title: "Asset Telematics",
  description: "Track high-value equipment, generators, and construction assets with IoT-enabled GPS devices that provide utilization analytics and theft prevention.",
  icon: Radio,
  features: [
    "Asset utilization tracking",
    "IoT sensor integration",
    "Theft recovery assistance",
    "Predictive maintenance",
  ],
  category: "Telematics",
  detailedDescription: "Gain complete visibility into your valuable assets with our IoT-enabled telematics platform. Whether tracking construction equipment, generators, or industrial machinery, our solution provides real-time location and status updates. Utilization analytics reveal underused assets, enabling better capital allocation and rental decisions. Predictive maintenance alerts prevent unexpected breakdowns by monitoring engine hours and operating conditions. In case of theft, our recovery assistance network helps authorities locate and recover stolen assets quickly.",
  benefits: [
    "Maximize asset utilization with usage analytics",
    "Prevent theft with instant movement alerts",
    "Reduce downtime with predictive maintenance",
    "Optimize rental fleet with demand forecasting",
  ],
  solutions: [
    "IoT Asset Trackers",
    "Utilization Analytics Dashboard",
    "Maintenance Prediction Engine",
    "Theft Recovery Network",
  ],
  imageUrl: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  stats: [
    { label: "Asset Utilization", value: "+32%", icon: BarChart3 },
    { label: "Recovery Rate", value: "97%", icon: Shield },
    { label: "Maintenance Cost", value: "-23%", icon: DollarSign },
  ],
};
