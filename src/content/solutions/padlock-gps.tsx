import React from "react";
import { Zap, MapPin, Shield, BarChart3, ShieldCheck, UserCheck, Activity } from "lucide-react";
import { SolutionData } from "../solutions";

export const padlockGps: SolutionData = {
  title: "GPS Smart Padlock",
  tagline: "Intelligent security for containers and remote assets",
  bgColor: "#FFF3E0",
  overview:
    "Secure your valuable cargo against theft and tampering with the Garuda GPS Smart Padlock. This keyless, heavy-duty electronic lock combines physical security with advanced GPS tracking. Control access remotely, track the lock's location in real-time, and receive immediate alerts if unauthorized tampering is detected.",
  features: [
    {
      title: "Keyless Operation",
      description:
        "Unlock via RFID, Bluetooth, or remotely through the management dashboard.",
      icon: <Zap className="w-6 h-6 text-primary" />,
    },
    {
      title: "Location Tracking",
      description:
        "Built-in GPS tracks the movement of the locked asset continuously.",
      icon: <MapPin className="w-6 h-6 text-primary" />,
    },
    {
      title: "Tamper Alerts",
      description:
        "Immediate notifications upon cutting, striking, or unauthorized opening attempts.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
    {
      title: "Audit Trails",
      description:
        "Complete logs of when, where, and by whom the padlock was opened.",
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
    },
  ],
  useCases: [
    {
      title: "Shipping Containers",
      description:
        "Secure cargo during long transit routes across sea and land.",
    },
    {
      title: "Remote Storage Facilities",
      description:
        "Protect equipment stored in unmanned, isolated locations.",
    },
    {
      title: "Cash-in-Transit",
      description: "High-security locking for valuable goods transportation.",
    },
  ],
  benefits: [
    {
      title: "Enhanced Security",
      description:
        "Deter theft and ensure the integrity of your enclosed assets.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Access Control",
      description:
        "Manage multiple locks and user permissions from a central platform.",
      icon: <UserCheck className="w-6 h-6" />,
    },
    {
      title: "Operational Visibility",
      description:
        "Know exactly when a delivery is opened and by the authorized person.",
      icon: <Activity className="w-6 h-6" />,
    },
  ],
  seoMeta: {
    title: "GPS Smart Padlocks for Asset Security | Garuda",
    description:
      "Secure containers and cargo with keyless electronic padlocks featuring built-in GPS tracking and tamper alerts.",
  },
};
