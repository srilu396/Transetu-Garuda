import { Coffee, Package, CheckCircle, AlertCircle } from "lucide-react";
import { IndustryData } from "./industriesData";

export const foodBeverageDistribution: IndustryData = {
  slug: "food-beverage-distribution",
  title: "Food & Beverage Distribution",
  description: "Maintain food safety standards with temperature-controlled GPS tracking for perishable goods, ensuring cold chain compliance from warehouse to delivery.",
  icon: Coffee,
  features: [
    "Cold chain monitoring",
    "Temperature logging",
    "Delivery freshness alerts",
    "HACCP compliance",
  ],
  category: "Food & Beverage",
  detailedDescription: "Deliver fresh, safe food products with our temperature-controlled tracking solution designed for the food and beverage industry. Continuous monitoring ensures perishable goods remain within safe temperature ranges throughout the supply chain, with automated alerts for any deviations. HACCP compliance is simplified with detailed temperature logs and audit-ready reports. From farm to fork, our solution helps maintain product quality, reduce waste, and protect your brand reputation.",
  benefits: [
    "Ensure food safety with continuous monitoring",
    "Reduce spoilage with instant temperature alerts",
    "Simplify HACCP compliance documentation",
    "Protect brand reputation with quality assurance",
  ],
  solutions: [
    "Cold Chain Temperature Sensors",
    "Food Safety Compliance Platform",
    "Delivery Freshness Monitoring",
    "HACCP Reporting Tools",
  ],
  imageUrl: "https://images.unsplash.com/photo-1586528116137-7b1c1f5b9c4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  stats: [
    { label: "Spoilage Reduction", value: "-67%", icon: Package },
    { label: "Compliance Rate", value: "100%", icon: CheckCircle },
    { label: "Customer Claims", value: "-82%", icon: AlertCircle },
  ],
};
