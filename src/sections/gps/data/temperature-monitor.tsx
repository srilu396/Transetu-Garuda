import React from "react";
import { Thermometer, Bell, BarChart3, Layers, ShieldCheck, Activity, UserCheck } from "lucide-react";
import { SolutionData } from "./gpsData";

export const temperatureMonitor: SolutionData = {
  title: "Temperature Monitoring",
  tagline: "Ensure the integrity of your cold chain operations",
  icon: Thermometer,
  bgColor: "#E3F2FD",
  overview:
    "For logistics companies transporting perishable goods, maintaining strict temperature controls is non-negotiable. Our Temperature Monitoring solution uses highly sensitive Bluetooth and wired sensors inside cargo areas to track climate conditions in real-time. Guarantee product quality, maintain regulatory compliance, and prevent catastrophic cargo loss.",
  detailedDescription: {
    what: "Our Temperature Monitoring solution is a comprehensive climate-control system designed for the 'cold chain' industry. It uses high-precision digital sensors to monitor temperature, humidity, and door-open events within refrigerated trailers, containers, or fixed storage units.",
    how: "Wireless Bluetooth (BLE) sensors are placed throughout the cargo area, transmitting data to a central GPS gateway. This gateway sends real-time climate data to our cloud platform every 30 seconds. If a temperature threshold is breached, the system triggers multi-channel alerts (SMS, Email, Voice) to dispatchers and drivers simultaneously.",
    who: "This solution is indispensable for pharmaceutical distributors, food and beverage logistics providers, floral transporters, and chemical companies who must guarantee a specific environmental range for their products.",
    why: "A single cooling system failure can result in hundreds of thousands of dollars in lost cargo. Our system provides the early warning needed to intervene before spoilage occurs, while also automating the complex compliance reporting required by global health and food safety authorities."
  },
  features: [
    {
      title: "Real-Time Climate Analytics",
      description:
        "Continuous monitoring of temperature (accurate to ±0.1°C) and humidity levels with live graphical dashboards.",
      icon: <Thermometer className="w-6 h-6 text-primary" />,
    },
    {
      title: "Dynamic Threshold Alerts",
      description:
        "Set custom high/low temperature boundaries for different cargo types and receive instant alerts upon any deviation.",
      icon: <Bell className="w-6 h-6 text-primary" />,
    },
    {
      title: "Automated Compliance Logs",
      description:
        "Generate tamper-proof PDF reports detailing temperature history for the entire duration of a trip, meeting FSMA and HACCP requirements.",
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
    },
    {
      title: "Multi-Zone Cargo Tracking",
      description:
        "Monitor up to 4 different temperature zones within a single trailer, perfect for mixed-load refrigerated transport.",
      icon: <Layers className="w-6 h-6 text-primary" />,
    },
    {
      title: "Door Status Integration",
      description:
        "Correlate temperature spikes with door-open events to identify inefficient loading practices or unauthorized access.",
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    },
    {
      title: "Power Loss Detection",
      description:
        "Receive immediate alerts if the refrigeration unit (reefer) loses power or its engine stops unexpectedly.",
      icon: <Activity className="w-6 h-6 text-primary" />,
    },
  ],
  useCases: [
    {
      title: "Pharmaceutical Distribution",
      description:
        "Maintain the 'Last Mile' cold chain integrity for vaccines, insulin, and other life-saving temperature-sensitive medications.",
    },
    {
      title: "Fresh & Frozen Food Logistics",
      description: "Ensure that perishables like meat, dairy, and produce stay within safe temperature ranges from farm to fork.",
    },
    {
      title: "High-End Floral Transport",
      description: "Manage humidity and temperature to preserve the freshness and longevity of sensitive floral arrangements during transit.",
    },
    {
      title: "Chemical & Biological Samples",
      description: "Provide a continuous, audited climate record for the transport of sensitive biological samples or reactive chemicals.",
    }
  ],
  benefits: [
    {
      title: "Eliminate Cargo Spoilage",
      description: "Proactive alerts allow drivers to fix reefer issues or move cargo before it reaches critical spoilage temperatures.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "100% Regulatory Compliance",
      description: "Automate the data collection and reporting needed to satisfy FDA, WHO, and local food safety inspectors.",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "Enhanced Brand Trust",
      description: "Provide your customers with verifiable proof that their products were handled with the highest care.",
      icon: <UserCheck className="w-6 h-6" />,
    },
  ],
  steps: [
    {
      title: "Sensor Placement",
      description: "Strategic placement of wireless BLE sensors to capture representative temperature data across the entire cargo space."
    },
    {
      title: "Gateway Configuration",
      description: "Installation of the telematics gateway that aggregates sensor data and provides real-time GPS tracking."
    },
    {
      title: "Alert & Report Setup",
      description: "Define your specific temperature ranges and automated reporting schedules for different clients and cargo types."
    }
  ],
  seoMeta: {
    title: "Cold Chain Temperature Monitoring Systems | Garuda",
    description:
      "Advanced real-time temperature and humidity tracking for refrigerated transport, ensuring cargo integrity and regulatory compliance.",
  },
  imageUrl: "/images/products/temperature.jpg"
};
