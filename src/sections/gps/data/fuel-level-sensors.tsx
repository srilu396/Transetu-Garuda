import React from "react";
import { Fuel, Shield, Activity, BarChart3, Layers, Zap } from "lucide-react";
import { SolutionData } from "./gpsData";

export const fuelLevelSensors: SolutionData = {
  title: "Fuel Monitoring System",
  tagline:
    "Precision fuel tracking to significantly reduce operational costs",
  bgColor: "#E8F5E9",
  overview:
    "Fuel is one of the largest expenses for any fleet. Our high-precision Fuel Monitoring System provides deep visibility into your fuel consumption patterns. By integrating advanced fuel sensors with our core GPS platform, you can detect anomalies, prevent fuel theft, identify inefficient vehicles, and ultimately take control of your fuel budget.",
  features: [
    {
      title: "Live Fuel Levels",
      description:
        "Monitor the exact fuel volume in all your vehicles' tanks in real-time.",
      icon: <Fuel className="w-6 h-6 text-primary" />,
    },
    {
      title: "Theft Detection",
      description:
        "Receive immediate alerts for sudden drops in fuel levels, indicating potential theft.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
    {
      title: "Refueling Verification",
      description:
        "Verify that the billed fuel amount matches the actual fuel added to the tank.",
      icon: <Activity className="w-6 h-6 text-primary" />,
    },
    {
      title: "Consumption Reports",
      description:
        "Analyze fuel efficiency per vehicle, per route, or per driver.",
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
    },
  ],
  useCases: [
    {
      title: "Long-Haul Trucking",
      description:
        "Significant cost savings by preventing fuel pilferage on long routes.",
    },
    {
      title: "Construction Equipment",
      description:
        "Monitor fuel usage of stationary generators and heavy machinery.",
    },
    {
      title: "Agricultural Fleets",
      description: "Track fuel consumption of tractors and harvesters.",
    },
  ],
  benefits: [
    {
      title: "Drastic Cost Savings",
      description: "Identify and eliminate fuel waste and theft.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Accurate Accounting",
      description: "Reconcile fuel bills with precise sensor data.",
      icon: <Layers className="w-6 h-6" />,
    },
    {
      title: "Identify Inefficiency",
      description:
        "Spot vehicles that need maintenance based on poor fuel economy.",
      icon: <Zap className="w-6 h-6" />,
    },
  ],
  seoMeta: {
    title: "Fuel Monitoring & Theft Detection System | Garuda",
    description:
      "Advanced fuel sensors integrated with GPS tracking to monitor consumption, detect theft, and reduce fuel costs.",
  },
};
