import React from "react";
import { BarChart3, MapPin, Shield, Layers, Activity } from "lucide-react";
import { SolutionData } from "../solutions";

export const fastagReports: SolutionData = {
  title: "Toll Expense Reports",
  tagline: "Data-driven insights into your toll spending",
  bgColor: "#fff1f2",
  overview:
    "Turn your raw toll data into actionable business intelligence. Our Toll Expense Reports provide comprehensive analytics that help you identify cost-saving opportunities, detect anomalies, and simplify your financial reconciliation process.",
  features: [
    {
      title: "Consolidated Billing",
      description: "Generate monthly statements summarizing all toll expenses across the entire fleet.",
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
    },
    {
      title: "Route Analysis",
      description: "Identify the most expensive toll routes and find more cost-effective alternatives.",
      icon: <MapPin className="w-6 h-6 text-primary" />,
    },
    {
      title: "Anomaly Detection",
      description: "Our AI flags double-deductions or erroneous toll charges for immediate review.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
    {
      title: "Custom Dashboards",
      description: "Create visual charts and graphs of spending trends by time, vehicle, or region.",
      icon: <Layers className="w-6 h-6 text-primary" />,
    },
  ],
  useCases: [
    {
      title: "Finance Teams",
      description: "Simplify the month-end reconciliation of toll expenses with automated reports.",
    },
    {
      title: "Operations Managers",
      description: "Use spending data to optimize route planning and reduce overhead.",
    },
  ],
  benefits: [
    {
      title: "Financial Control",
      description: "Gain 100% accuracy in your toll spending and budget management.",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "Cost Optimization",
      description: "Identify and eliminate hidden inefficiencies in your toll expenditures.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
  ],
  steps: [
    { title: "Aggregation", description: "Gather all transaction data points across your entire fleet." },
    { title: "Categorization", description: "Sort expenses by vehicle type, route, or regional hub automatically." },
    { title: "Analytics Engine", description: "Identify trends and spending anomalies using our AI layer." },
    { title: "Report Generation", description: "Download white-labeled, audit-ready PDF or CSV reports." },
  ],
  seoMeta: {
    title: "Advanced Toll Expense Reporting & Analytics | Garuda",
    description: "Comprehensive toll spending analysis to help you optimize fleet costs.",
  },
};
