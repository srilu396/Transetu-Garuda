import React from "react";
import { Layers, MapPin, Shield, BarChart3, ShieldCheck } from "lucide-react";
import { SolutionData } from "./gpsData";

export const fastagHistory: SolutionData = {
  title: "Toll Transaction History",
  tagline: "Complete transparency for every toll payment",
  bgColor: "#f0faf5",
  overview:
    "Transparency is key to efficient fleet management. Our Toll Transaction History feature provides a detailed, searchable log of every toll payment made by your vehicles. From specific timestamps to exact plaza locations, gain full visibility into your fleet's movements and toll expenditures.",
  features: [
    {
      title: "Detailed Audit Logs",
      description: "Every transaction is recorded with plaza name, time, date, and amount.",
      icon: <Layers className="w-6 h-6 text-primary" />,
    },
    {
      title: "Search & Filter",
      description: "Easily find specific transactions by vehicle ID, date range, or location.",
      icon: <MapPin className="w-6 h-6 text-primary" />,
    },
    {
      title: "Route Verification",
      description: "Cross-reference toll data with GPS tracks to verify vehicle routes.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
    {
      title: "Exportable Data",
      description: "Download transaction reports in CSV/PDF formats for accounting or integration.",
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
    },
  ],
  useCases: [
    {
      title: "Corporate Auditing",
      description: "Provide verifiable proof of toll expenses for tax and audit purposes.",
    },
    {
      title: "Dispute Resolution",
      description: "Quickly resolve issues with toll operators using precise transaction data.",
    },
  ],
  benefits: [
    {
      title: "Enhanced Accountability",
      description: "Ensure drivers are following designated routes and toll policies.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Better Budgeting",
      description: "Use historical data to accurately forecast future toll expenses.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
  ],
  steps: [
    { title: "Data Collection", description: "Transaction details are pulled from toll plazas in real-time." },
    { title: "Centralized Logging", description: "Details are organized by vehicle ID and timestamp in your dashboard." },
    { title: "Verification", description: "Cross-reference payments with vehicle location data." },
    { title: "Reporting", description: "Generate detailed history reports for any time period." },
  ],
  seoMeta: {
    title: "Toll Transaction History & Reporting | Garuda",
    description: "Track every toll payment with detailed plaza locations and timestamps.",
  },
};
