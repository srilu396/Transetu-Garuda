import React from "react";
import { Layers, Shield, Activity, UserCheck, ShieldCheck } from "lucide-react";
import { SolutionData } from "../solutions";

export const fastagFleet: SolutionData = {
  title: "Fleet-wide FASTag Management",
  tagline: "Centralized control for thousands of tags",
  bgColor: "#fff7ed",
  overview:
    "Manage your entire fleet's FASTag requirements from a single, intuitive interface. Our Fleet-wide Management solution simplifies tag issuance, balance pooling, and vehicle assignment, making it the perfect choice for large-scale logistics and transport operators.",
  features: [
    {
      title: "Centralized Wallet",
      description: "Manage a single pool of funds shared across all FASTags in your fleet.",
      icon: <Layers className="w-6 h-6 text-primary" />,
    },
    {
      title: "Bulk Tag Management",
      description: "Activate, block, or reassign hundreds of tags simultaneously with ease.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
    {
      title: "Vehicle Hierarchy",
      description: "Organize vehicles by region, department, or client for structured management.",
      icon: <Activity className="w-6 h-6 text-primary" />,
    },
    {
      title: "Role-based Access",
      description: "Assign different permission levels to dispatchers, accountants, and managers.",
      icon: <UserCheck className="w-6 h-6 text-primary" />,
    },
  ],
  useCases: [
    {
      title: "National Logistics",
      description: "Manage tags across multiple hubs and regional offices seamlessly.",
    },
    {
      title: "Leasing Companies",
      description: "Effortlessly handle tag transitions as vehicles move between clients.",
    },
  ],
  benefits: [
    {
      title: "Streamlined Ops",
      description: "Simplify complex tag management workflows into a few clicks.",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "Reduced Risk",
      description: "Centralized controls prevent unauthorized tag usage and fraud.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
  ],
  steps: [
    { title: "Single Wallet Setup", description: "Establish a master funding pool for your entire fleet." },
    { title: "Tag Association", description: "Bulk assign tags to vehicles in your centralized dashboard." },
    { title: "Limit Allocation", description: "Set individual spending or balance limits per vehicle group." },
    { title: "Unified Monitoring", description: "Track the status of thousands of tags from one unified view." },
  ],
  seoMeta: {
    title: "Fleet-wide FASTag Management Solutions | Garuda",
    description: "Scale your fleet operations with centralized FASTag control and pooling.",
  },
};
