import { Pill, ThermometerSnowflake, Package, CheckCircle } from "lucide-react";
import { IndustryData } from "./industriesData";

export const pharmaceuticalLogistics: IndustryData = {
  slug: "pharmaceutical-logistics",
  title: "Pharmaceutical Logistics",
  description: "Maintain cold chain integrity for medicine shipments with temperature sensors, real-time alerts, and compliance documentation for regulatory requirements.",
  icon: Pill,
  features: [
    "Cold chain monitoring",
    "Temperature breach alerts",
    "GDP compliance reports",
    "Shipment chain of custody",
  ],
  category: "Healthcare",
  detailedDescription: "Protect sensitive pharmaceutical shipments with our advanced cold chain monitoring solution. Continuous temperature tracking ensures medications remain within required ranges throughout transit, with immediate alerts if conditions deviate. Comprehensive audit trails satisfy regulatory requirements for GDP and FDA compliance, while chain of custody tracking provides complete visibility from warehouse to delivery. Our platform integrates with existing ERP systems to streamline documentation and reduce administrative burden.",
  benefits: [
    "Ensure regulatory compliance with automated reports",
    "Prevent spoilage with instant temperature alerts",
    "Maintain chain of custody documentation",
    "Reduce insurance claims with proof of compliance",
  ],
  solutions: [
    "Temperature Sensors & Data Loggers",
    "Cold Chain Compliance Platform",
    "Real-time Alert System",
    "Audit Trail Generator",
  ],
  imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  stats: [
    { label: "Temperature Compliance", value: "99.9%", icon: ThermometerSnowflake },
    { label: "Spoilage Reduction", value: "-76%", icon: Package },
    { label: "Audit Pass Rate", value: "100%", icon: CheckCircle },
  ],
};
