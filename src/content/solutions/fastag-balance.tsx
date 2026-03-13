import React from "react";
import { Activity, Bell, BarChart3, Layers, ShieldCheck, Zap } from "lucide-react";
import { SolutionData } from "../solutions";

export const fastagBalance: SolutionData = {
  title: "Balance Monitoring & Alerts",
  tagline: "Stay informed, stay moving",
  bgColor: "#f5f3ff",
  overview:
    "Don't let a low balance catch you off guard. Our Balance Monitoring & Alerts system provides real-time visibility into the health of your FASTag accounts. With customizable alert profiles, you'll always know when it's time to top up, preventing any disruptions to your fleet's operations.",
  features: [
    {
      title: "Live Balance Sync",
      description: "Our system syncs directly with NPCI servers for up-to-the-minute balance data.",
      icon: <Activity className="w-6 h-6 text-primary" />,
    },
    {
      title: "Multi-channel Alerts",
      description: "Choose to receive alerts via WhatsApp, SMS, Email, or Web Push notifications.",
      icon: <Bell className="w-6 h-6 text-primary" />,
    },
    {
      title: "Low Balance Projection",
      description: "Get notified before you run out of funds based on scheduled trips.",
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
    },
    {
      title: "Health Dashboard",
      description: "A color-coded view of your fleet's balance status (Critical, Warning, Healthy).",
      icon: <Layers className="w-6 h-6 text-primary" />,
    },
  ],
  useCases: [
    {
      title: "Small Fleet Owners",
      description: "Perfect for operators who prefer manual control but with automated reminders.",
    },
    {
      title: "Delivery Networks",
      description: "Ensures local delivery vans are always ready for intra-city toll routes.",
    },
  ],
  benefits: [
    {
      title: "Peace of Mind",
      description: "Never worry about whether a vehicle has enough balance for its route.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Instant Action",
      description: "Alerts include direct links to quick-recharge pages for minimal friction.",
      icon: <Zap className="w-6 h-6" />,
    },
  ],
  steps: [
    { title: "Sync NPCI Data", description: "Real-time connection ensures your dashboard reflects official balances." },
    { title: "Configure Alerts", description: "Define who receives notifications and through which channels (SMS/WhatsApp)." },
    { title: "Auto-Projection", description: "System predicts balance exhaustion based on upcoming route tolls." },
    { title: "Triggered Warnings", description: "Get instant push notifications the moment a balance becomes critical." },
  ],
  seoMeta: {
    title: "FASTag Balance Monitoring & Real-time Alerts | Garuda",
    description: "Customizable low-balance alerts to keep your fleet operational 24/7.",
  },
};
