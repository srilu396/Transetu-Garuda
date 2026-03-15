import { Thermometer, Package, CheckCircle, Users } from "lucide-react";
import { IndustryData } from "./industriesData";

export const coldChainLogistics: IndustryData = {
  slug: "cold-chain-logistics",
  title: "Cold Chain Logistics",
  description: "Protect temperature-sensitive shipments with real-time temperature monitoring, automated alerts, and compliance reporting for perishable goods.",
  icon: Thermometer,
  features: [
    "Temperature tracking",
    "Cold chain integrity",
    "Breach notifications",
    "Compliance documentation",
  ],
  category: "Temperature Controlled",
  detailedDescription: "Maintain cold chain integrity from pickup to delivery with our comprehensive temperature monitoring solution. Continuous tracking ensures perishable goods remain within specified temperature ranges, with immediate alerts for any deviations that could compromise quality. Automated compliance reports satisfy regulatory requirements and provide proof of proper handling for insurance purposes. Whether shipping food, pharmaceuticals, or other temperature-sensitive items, our solution protects your products and your reputation.",
  benefits: [
    "Prevent spoilage with instant temperature alerts",
    "Ensure regulatory compliance with audit trails",
    "Reduce insurance claims with proof of handling",
    "Protect brand reputation with quality assurance",
  ],
  solutions: [
    "Temperature Data Loggers",
    "Real-time Monitoring Platform",
    "Compliance Report Generator",
    "Cold Chain Analytics",
  ],
  imageUrl: "https://images.unsplash.com/photo-1581094794327-6e3f1f4b9a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  stats: [
    { label: "Spoilage Reduction", value: "-84%", icon: Package },
    { label: "Regulatory Compliance", value: "100%", icon: CheckCircle },
    { label: "Customer Confidence", value: "+56%", icon: Users },
  ],
};
