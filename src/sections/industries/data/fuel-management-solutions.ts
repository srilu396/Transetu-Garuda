import { Fuel, Shield, Clock } from "lucide-react";
import { IndustryData } from "./industriesData";

export const fuelManagementSolutions: IndustryData = {
  slug: "fuel-management-solutions",
  title: "Fuel Management Solutions",
  description: "Detect fuel theft and optimize consumption with precision fuel sensors integrated with GPS tracking for complete fuel lifecycle management.",
  icon: Fuel,
  features: [
    "Fuel level monitoring",
    "Theft detection alerts",
    "Refueling tracking",
    "Fuel efficiency reports",
  ],
  category: "Fuel Management",
  detailedDescription: "Take control of your fuel costs with our comprehensive fuel management system. Precision fuel sensors integrated with GPS tracking provide real-time visibility into fuel levels, consumption patterns, and refueling events. Instant alerts notify you of sudden drops that indicate theft or leaks, enabling immediate investigation. Detailed reports compare fuel efficiency across drivers and vehicles, identifying opportunities for improvement. With fuel typically representing 30-40% of fleet operating costs, our solution delivers rapid ROI.",
  benefits: [
    "Eliminate fuel theft with instant alerts",
    "Reduce fuel consumption by 15-25%",
    "Identify inefficient drivers and vehicles",
    "Optimize refueling strategies",
  ],
  solutions: [
    "Fuel Level Sensors",
    "Theft Detection System",
    "Consumption Analytics",
    "Refueling Management",
  ],
  imageUrl: "https://images.unsplash.com/photo-1581094794327-6e3f1f4b9a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  stats: [
    { label: "Theft Elimination", value: "99%", icon: Shield },
    { label: "Fuel Savings", value: "-22%", icon: Fuel },
    { label: "ROI Timeline", value: "< 4 months", icon: Clock },
  ],
};
