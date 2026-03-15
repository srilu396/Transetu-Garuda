import { Shield, CheckCircle, Gauge } from "lucide-react";
import { IndustryData } from "./industriesData";

export const ais140Compliance: IndustryData = {
  slug: "ais-140-compliance",
  title: "AIS 140 Compliance",
  description: "Meet government regulations with AIS 140 certified GPS trackers for commercial vehicles, including emergency panic buttons and vehicle diagnostics.",
  icon: Shield,
  features: [
    "AIS 140 certification",
    "Emergency panic button",
    "Vehicle diagnostics",
    "Regulatory compliance",
  ],
  category: "Compliance",
  detailedDescription: "Ensure full compliance with AIS 140 regulations using our certified GPS tracking solution for commercial vehicles. Our devices meet all government requirements including emergency panic buttons, vehicle diagnostics, and data reporting standards. Automated compliance reports simplify regulatory submissions and provide proof of adherence. Vehicle diagnostics monitor critical systems and alert you to issues before they cause breakdowns. With AIS 140 compliance built-in, you can focus on operations while we handle regulatory requirements.",
  benefits: [
    "Meet all AIS 140 requirements effortlessly",
    "Automate compliance reporting",
    "Enhance safety with panic button integration",
    "Prevent breakdowns with diagnostics",
  ],
  solutions: [
    "AIS 140 Certified Trackers",
    "Emergency Panic Buttons",
    "Vehicle Diagnostics System",
    "Compliance Report Generator",
  ],
  imageUrl: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  stats: [
    { label: "Compliance Rate", value: "100%", icon: CheckCircle },
    { label: "Audit Success", value: "100%", icon: Shield },
    { label: "Diagnostic Accuracy", value: "99%", icon: Gauge },
  ],
};
