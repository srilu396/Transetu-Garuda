import React from "react";
import {
  Zap,
  MapPin,
  Shield,
  BarChart3,
  ShieldCheck,
  UserCheck,
  Activity,
  Lock,
} from "lucide-react";
import { SolutionData } from "./gpsData";

export const padlockGps: SolutionData = {
  title: "GPS Smart Padlock",
  tagline: "Intelligent security for containers and remote assets",
  icon: Lock,
  bgColor: "#FFF3E0",
  overview:
    "Secure your valuable cargo against theft and tampering with the Garuda GPS Smart Padlock. This keyless, heavy-duty electronic lock combines physical security with advanced GPS tracking. Control access remotely, track the lock's location in real-time, and receive immediate alerts if unauthorized tampering is detected.",
  detailedDescription: {
    what: "The Garuda GPS Smart Padlock is a military-grade electronic locking device that integrates high-precision GPS tracking with a rugged physical barrier. It is designed to replace traditional mechanical locks on containers, trailers, and remote storage units, providing both theft prevention and real-time asset visibility.",
    how: "The device connects to cellular networks to transmit its GPS location and lock status to our cloud platform. It can be unlocked via authorized RFID cards, Bluetooth through a mobile app, or remotely by a dispatcher. Built-in sensors detect cable cutting, impact, or unauthorized vibration, triggering an immediate high-priority alert.",
    who: "This solution is essential for logistics companies, shipping lines, remote infrastructure operators (telecom/energy), and high-value cargo transporters who need to secure and track assets that don't have their own power source.",
    why: "Traditional padlocks are easily bypassed and offer no visibility once a container leaves the yard. Our smart padlock provides a 'digital seal' that proves the integrity of the cargo throughout its entire journey, reduces the risk of internal theft, and provides an immutable audit trail for insurance and compliance purposes.",
  },
  features: [
    {
      title: "Keyless Multi-Method Unlocking",
      description:
        "Authorize access via RFID, Bluetooth (Mobile App), or remote OTA (Over-the-Air) commands from the central dashboard.",
      icon: <Zap className="w-6 h-6 text-primary" />,
    },
    {
      title: "Real-Time GPS Asset Tracking",
      description:
        "High-sensitivity GPS/GNSS receiver provides continuous location updates even when the asset is in transit or stationary.",
      icon: <MapPin className="w-6 h-6 text-primary" />,
    },
    {
      title: "Active Tamper Detection",
      description:
        "Immediate cloud alerts for shackle cutting, lock body impact, or unauthorized vibration using built-in 3-axis accelerometers.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
    {
      title: "Immutable Access Audit Logs",
      description:
        "Every lock/unlock event is recorded with a precise timestamp, GPS coordinate, and the identity of the person who accessed it.",
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
    },
    {
      title: "Long-Life Battery Performance",
      description:
        "Large capacity internal battery provides up to 12 months of operation on a single charge with intelligent power-saving modes.",
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    },
    {
      title: "Ruggedized IP67 Enclosure",
      description:
        "Built with high-strength zinc alloy and stainless steel to withstand extreme weather, salt spray, and physical attacks.",
      icon: <Activity className="w-6 h-6 text-primary" />,
    },
  ],
  useCases: [
    {
      title: "Intermodal Shipping Containers",
      description:
        "Monitor and secure cargo moving through ports, rail terminals, and cross-border checkpoints without manual inspections.",
    },
    {
      title: "Remote Telecom & Power Sites",
      description:
        "Secure outdoor equipment cabinets and fuel storage tanks in unmanned locations with remote access management.",
    },
    {
      title: "High-Value Retail Logistics",
      description:
        "Ensure that 'sealed' deliveries of electronics or pharmaceuticals are only opened by authorized staff at the destination.",
    },
    {
      title: "Construction Site Storage",
      description:
        "Track the location of mobile tool trailers and secure expensive equipment after hours with instant movement alerts.",
    },
  ],
  benefits: [
    {
      title: "99% Theft Deterrence",
      description:
        "Visible high-tech security combined with active monitoring significantly reduces the likelihood of attempted theft.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Simplified Key Management",
      description:
        "Eliminate the cost and security risk of physical keys; manage thousands of locks from a single digital interface.",
      icon: <UserCheck className="w-6 h-6" />,
    },
    {
      title: "Verifiable Cargo Integrity",
      description:
        "Provide clients with definitive proof that their cargo remained sealed and secure from origin to destination.",
      icon: <Activity className="w-6 h-6" />,
    },
  ],
  steps: [
    {
      title: "Asset Registration",
      description:
        "Assign each smart padlock to a specific container or asset within the Garuda management platform.",
    },
    {
      title: "Secure Locking",
      description:
        "Manually close the high-strength shackle; the device automatically initializes GPS tracking and sensor monitoring.",
    },
    {
      title: "Access Management",
      description:
        "Issue digital 'keys' to authorized personnel or monitor transit progress via the live map dashboard.",
    },
  ],
  seoMeta: {
    title: "GPS Smart Padlocks for High-Security Asset Tracking | Garuda",
    description:
      "Advanced electronic padlocks with built-in GPS and tamper alerts for securing containers, trailers, and remote infrastructure.",
  },
  imageUrl: "/images/products/padlock.jpg"
};
