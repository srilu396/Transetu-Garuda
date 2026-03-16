import React from "react";
import { Fuel, Shield, Activity, BarChart3, Layers, Zap } from "lucide-react";
import { SolutionData } from "./gpsData";

export const fuelLevelSensors: SolutionData = {
  title: "Fuel Monitoring System",
  tagline:
    "Precision fuel tracking to significantly reduce operational costs",
  icon: Fuel,
  bgColor: "#E8F5E9",
  overview:
    "Fuel is one of the largest expenses for any fleet. Our high-precision Fuel Monitoring System provides deep visibility into your fuel consumption patterns. By integrating advanced fuel sensors with our core GPS platform, you can detect anomalies, prevent fuel theft, identify inefficient vehicles, and ultimately take control of your fuel budget.",
  detailedDescription: {
    what: "Our Fuel Monitoring System is a high-accuracy solution that uses advanced capacitive or ultrasonic sensors to measure the exact volume of fuel in a vehicle's tank. Unlike standard dashboard gauges, our system provides precision down to 1% of total tank volume, giving you laboratory-grade data in the field.",
    how: "The sensor is installed directly into the fuel tank and connected to our GPS tracking unit. It continuously measures fuel level, temperature, and density. This data is then filtered through our advanced algorithms to account for fuel sloshing and expansion, providing a stable and accurate reading on your dashboard.",
    who: "This is a critical tool for long-haul transport companies, construction firms with stationary fuel tanks, mining operations, and any business where fuel represents a significant portion of operating costs.",
    why: "Fuel theft and 'skimming' can account for up to 15% of a fleet's total fuel spend. Our system provides the transparency needed to eliminate these losses, verify fuel purchases at the pump, and identify vehicles with poor fuel economy that may require maintenance."
  },
  features: [
    {
      title: "Real-Time Volume Tracking",
      description:
        "Monitor the exact liter-by-liter fuel volume in multiple tanks simultaneously with 99% accuracy.",
      icon: <Fuel className="w-6 h-6 text-primary" />,
    },
    {
      title: "Instant Theft Alerts",
      description:
        "Receive immediate push or SMS notifications if a sudden drop in fuel level is detected while the vehicle is stationary or moving.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
    {
      title: "Refueling Audit Trail",
      description:
        "Automatically log the time, location, and exact volume of every refueling event to reconcile against fuel cards and receipts.",
      icon: <Activity className="w-6 h-6 text-primary" />,
    },
    {
      title: "Fuel Consumption Analytics",
      description:
        "Detailed reports on fuel consumed per 100km, fuel wasted during idling, and comparative efficiency across your fleet.",
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
    },
    {
      title: "Temperature Compensation",
      description:
        "Advanced sensors that adjust readings based on fuel temperature to prevent false 'theft' alerts caused by thermal expansion.",
      icon: <Layers className="w-6 h-6 text-primary" />,
    },
    {
      title: "Drainage Detection",
      description:
        "Detect and alert on unauthorized fuel drainage from the return line or main tank even when the engine is off.",
      icon: <Zap className="w-6 h-6 text-primary" />,
    },
  ],
  useCases: [
    {
      title: "Long-Haul Logistics",
      description:
        "Prevent 'side-pumping' theft on overnight stops and optimize routes based on fuel price and consumption data.",
    },
    {
      title: "Construction Site Fuel Tanks",
      description: "Monitor stationary storage tanks and mobile bowsers to ensure fuel is only being used for authorized machinery.",
    },
    {
      title: "Generator Monitoring",
      description: "Track fuel levels in remote generators to prevent run-outs and ensure continuous power for critical infrastructure.",
    },
    {
      title: "Fuel Delivery Verification",
      description: "Ensure that the full amount of fuel paid for actually enters the vehicle tank during commercial refueling.",
    }
  ],
  benefits: [
    {
      title: "Up to 20% Cost Reduction",
      description: "Eliminate fuel theft and reduce idling to see immediate and significant bottom-line improvements.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "100% Billing Accuracy",
      description: "Automate fuel reconciliation and eliminate manual errors or fraudulent fuel expense claims.",
      icon: <Layers className="w-6 h-6" />,
    },
    {
      title: "Enhanced Engine Health",
      description: "Detect engine issues early by monitoring sudden changes in fuel consumption patterns.",
      icon: <Zap className="w-6 h-6" />,
    },
  ],
  steps: [
    {
      title: "Tank Calibration",
      description: "We perform a precise multi-point calibration of your fuel tank to ensure the highest sensor accuracy."
    },
    {
      title: "Sensor Installation",
      description: "Professional installation of high-precision probes or ultrasonic sensors with tamper-proof seals."
    },
    {
      title: "Real-time Reporting",
      description: "Configure your custom fuel dashboard and set up instant alerts for theft or low fuel levels."
    }
  ],
  seoMeta: {
    title: "Precision Fuel Monitoring & Theft Detection | Garuda",
    description:
      "Advanced fuel sensors integrated with GPS tracking to monitor consumption, detect theft, and reduce fuel costs with 99% accuracy.",
  },
  imageUrl: "/images/products/fuel-monitor.jpg",
  secondaryImageUrl: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
};
