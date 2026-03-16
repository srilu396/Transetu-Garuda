import React from "react";
import { Zap, Layers, BarChart3, Bell, Activity, ShieldCheck, Clock } from "lucide-react";
import { SolutionData } from "./gpsData";

export const fastag: SolutionData = {
  title: "FASTag Management System",
  tagline: "Automated toll and fleet payment management",
  bgColor: "#FDF4CC",
  overview:
    "Our FASTag Management System empowers your fleet operations by centralizing all your toll payments into a single, comprehensive dashboard. Eliminate the hassle of managing individual tags, automate recharges, and gain deep insights into your fleet's toll expenditures. This reduces administrative overhead, prevents vehicle delays at toll plazas due to insufficient funds, and ensures smooth, uninterrupted journeys.",
  features: [
    {
      title: "Automated Recharges",
      description:
        "Set low-balance thresholds to trigger automatic top-ups, ensuring your vehicles never stop at a toll.",
      icon: <Zap className="w-6 h-6 text-primary" />,
    },
    {
      title: "Centralized Dashboard",
      description:
        "Monitor all fleet FASTags from a single screen with real-time balance and transaction updates.",
      icon: <Layers className="w-6 h-6 text-primary" />,
    },
    {
      title: "Detailed Analytics",
      description:
        "Generate customized reports on toll expenses, routes taken, and transaction histories for better budgeting.",
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
    },
    {
      title: "Instant Alerts",
      description:
        "Receive instant notifications for low balances, successful recharges, and suspicious transactions.",
      icon: <Bell className="w-6 h-6 text-primary" />,
    },
  ],
  useCases: [
    {
      title: "Logistics Companies",
      description:
        "Ensures seamless long-haul trips across state borders without manual toll payment delays.",
    },
    {
      title: "Cab Aggregators",
      description:
        "Simplifies toll expense tracking and reimbursement for large fleets of passenger vehicles.",
    },
    {
      title: "Corporate Fleets",
      description:
        "Provides transparent accounting and tracking of employee travel expenses.",
    },
  ],
  benefits: [
    {
      title: "Improved Efficiency",
      description:
        "Eliminate manual top-ups and tedious accounting processes.",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "Cost Control",
      description: "Prevent fraud and manage your toll budget effectively.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Time Savings",
      description: "Reduce administrative hours spent on tag management.",
      icon: <Clock className="w-6 h-6" />,
    },
  ],
  seoMeta: {
    title: "FASTag Management System | Garuda",
    description:
      "Advanced FASTag management solution for fleet operators. Automate recharges and track expenses efficiently.",
  },
};
