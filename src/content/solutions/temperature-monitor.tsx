import React from "react";
import { Thermometer, Bell, BarChart3, Layers, ShieldCheck, Activity, UserCheck } from "lucide-react";
import { SolutionData } from "../solutions";

export const temperatureMonitor: SolutionData = {
  title: "Temperature Monitoring",
  tagline: "Ensure the integrity of your cold chain operations",
  bgColor: "#E3F2FD",
  overview:
    "For logistics companies transporting perishable goods, maintaining strict temperature controls is non-negotiable. Our Temperature Monitoring solution uses highly sensitive Bluetooth and wired sensors inside cargo areas to track climate conditions in real-time. Guarantee product quality, maintain regulatory compliance, and prevent catastrophic cargo loss.",
  features: [
    {
      title: "Real-Time Climate Data",
      description:
        "Continuous monitoring of temperature and humidity levels inside the trailer.",
      icon: <Thermometer className="w-6 h-6 text-primary" />,
    },
    {
      title: "Threshold Alerts",
      description:
        "Instant notifications if the temperature deviates from safe ranges.",
      icon: <Bell className="w-6 h-6 text-primary" />,
    },
    {
      title: "Compliance Reporting",
      description:
        "Generate automated temperature logs required for FDA or FSMA compliance.",
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
    },
    {
      title: "Multi-Zone Support",
      description:
        "Monitor different compartments with varying temperature requirements simultaneously.",
      icon: <Layers className="w-6 h-6 text-primary" />,
    },
  ],
  useCases: [
    {
      title: "Pharmaceuticals",
      description:
        "Maintain strict cold-chain integrity for vaccines and medicines.",
    },
    {
      title: "Food & Beverage",
      description:
        "Ensure fresh produce, dairy, and frozen goods arrive in perfect condition.",
    },
    {
      title: "Chemical Transport",
      description:
        "Monitor temperature-sensitive chemicals to prevent hazardous reactions.",
    },
  ],
  benefits: [
    {
      title: "Prevent Cargo Spoilage",
      description:
        "React to cooling system failures before products are ruined.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Ensure Compliance",
      description:
        "Easily prove regulatory compliance to authorities and customers.",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "Protect Brand Reputation",
      description:
        "Guarantee that customers always receive high-quality goods.",
      icon: <UserCheck className="w-6 h-6" />,
    },
  ],
  seoMeta: {
    title: "Cold Chain Temperature Monitoring Systems | Garuda",
    description:
      "Real-time temperature and humidity tracking to protect perishable cargo and ensure regulatory compliance.",
  },
};
