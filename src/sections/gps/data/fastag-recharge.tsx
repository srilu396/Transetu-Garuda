import React from "react";
import { Zap, Layers, Bell, BarChart3, Activity } from "lucide-react";
import { SolutionData } from "./gpsData";

export const fastagRecharge: SolutionData = {
  title: "Automatic FASTag Recharge",
  tagline: "Never run out of toll balance again",
  bgColor: "#eef6ff",
  overview:
    "Our Automatic FASTag Recharge solution ensures your fleet never faces delays at toll plazas due to insufficient funds. By setting custom low-balance thresholds, the system automatically triggers a top-up from your linked account, maintaining a smooth and uninterrupted journey for every vehicle in your fleet.",
  features: [
    {
      title: "Custom Thresholds",
      description: "Set individual low-balance alerts and recharge triggers for different vehicle types.",
      icon: <Zap className="w-6 h-6 text-primary" />,
    },
    {
      title: "Automated Payments",
      description: "Seamlessly integrate with your corporate wallet or bank account for hands-free management.",
      icon: <Layers className="w-6 h-6 text-primary" />,
    },
    {
      title: "Real-time Notifications",
      description: "Receive instant SMS and email alerts every time a recharge is triggered or completed.",
      icon: <Bell className="w-6 h-6 text-primary" />,
    },
    {
      title: "Predictive Analysis",
      description: "The system learns your fleet's toll usage to suggest optimal threshold levels.",
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
    },
  ],
  useCases: [
    {
      title: "Long-haul Logistics",
      description: "Ideal for trucks crossing multiple state borders daily without manual intervention.",
    },
    {
      title: "Bus Operators",
      description: "Ensures passenger schedules are met by avoiding toll plaza payment issues.",
    },
  ],
  benefits: [
    {
      title: "Zero Downtime",
      description: "Eliminate vehicle stoppages at toll plazas due to low balance.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Reduced Admin Work",
      description: "Automate the tedious task of monitoring hundreds of individual tag balances.",
      icon: <Activity className="w-6 h-6" />,
    },
  ],
  steps: [
    { title: "Balance Monitoring", description: "System continuously syncs with NPCI for live balance updates." },
    { title: "Threshold Detection", description: "Alerts are triggered when balance falls below your set limit." },
    { title: "Automatic Top-up", description: "Funds are instantly transferred from your linked account." },
    { title: "Uninterrupted Travel", description: "Vehicles pass through toll plazas without any payment delays." },
  ],
  seoMeta: {
    title: "Automatic FASTag Recharge Solutions | Garuda",
    description: "Ensure uninterrupted fleet movement with our automated FASTag recharge system.",
  },
};
