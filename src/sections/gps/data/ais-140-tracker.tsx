import React from "react";
import {
  Shield,
  Bell,
  Cloud,
  Zap,
  UserCheck,
  ShieldCheck,
  Activity,
} from "lucide-react";
import { SolutionData } from "./gpsData";

export const ais140Tracker: SolutionData = {
  title: "AIS 140 GPS Tracker",
  tagline: "Certified compliance solutions for commercial vehicles",
  icon: Shield,
  bgColor: "#FFF8E1",
  overview:
    "Meeting government regulations is crucial for commercial transport operators in India. The Garuda AIS 140 GPS Tracker is a fully certified, ruggedized device designed specifically to comply with the AIS 140 standard mandate. It ensures passenger safety, provides precise tracking for authorities, and helps you avoid severe compliance penalties.",
  detailedDescription: {
    what: "Our AIS 140 GPS Tracker is a government-mandated 'Intelligent Transport System' (ITS) device. It is meticulously engineered to meet the stringent Automotive Industry Standard 140 (AIS 140) required for all commercial vehicles, including public transport and school buses, in India.",
    how: "The device features a high-sensitivity GNSS receiver and dual-network eSIM support to ensure constant connectivity. It simultaneously transmits location and emergency data to both the government's central server (VLT) and our private fleet management platform, ensuring you remain compliant while gaining operational insights.",
    who: "This solution is a legal requirement for school bus operators, public transport corporations, taxi aggregators, and commercial vehicle owners operating under national or state permits.",
    why: "Failure to comply with AIS 140 can lead to heavy fines, permit cancellations, and vehicle impounding. Our certified hardware not only guarantees compliance but also adds a critical layer of safety with its integrated panic buttons and real-time emergency response capabilities.",
  },
  features: [
    {
      title: "ARAI/ICAT Certified Hardware",
      description:
        "Fully tested and approved by national agencies (ARAI/ICAT) to meet all AIS 140 technical and safety specifications.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
    {
      title: "Dual IP Data Transmission",
      description:
        "Unique capability to send tracking data to government servers and your private dashboard simultaneously via secure channels.",
      icon: <Cloud className="w-6 h-6 text-primary" />,
    },
    {
      title: "Integrated Panic (SOS) Button",
      description:
        "Supports multiple physical panic buttons for passengers and drivers, triggering instant alerts to the nearest police control room.",
      icon: <Bell className="w-6 h-6 text-primary" />,
    },
    {
      title: "Multi-Network eSIM Support",
      description:
        "Built-in eSIM with support for two different network providers ensures tracking continuity even in poor coverage areas.",
      icon: <Zap className="w-6 h-6 text-primary" />,
    },
    {
      title: "Tamper-Proof Design",
      description:
        "Encased in a rugged, sealed housing with internal sensors that detect and report any attempt to open or disconnect the device.",
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    },
    {
      title: "Large Internal Battery Backup",
      description:
        "Powerful internal battery ensures the device continues to track and send SOS alerts for hours if the vehicle's power is cut.",
      icon: <Activity className="w-6 h-6 text-primary" />,
    },
  ],
  useCases: [
    {
      title: "School Bus Safety",
      description:
        "Mandatory for all school buses to provide parents and school authorities with real-time location and emergency monitoring.",
    },
    {
      title: "Public Transport Fleets",
      description:
        "Essential for state-run and private bus operators to meet transport department regulations and improve passenger security.",
    },
    {
      title: "Commercial Cab Aggregators",
      description:
        "Compliance solution for taxis and ride-sharing vehicles to ensure driver and passenger safety during every trip.",
    },
    {
      title: "Hazmat & Oil Tankers",
      description:
        "Provide high-reliability tracking for dangerous goods transport as required by safety and environmental regulations.",
    },
  ],
  benefits: [
    {
      title: "100% Legal Compliance",
      description:
        "Pass fitness tests and renew permits without any hassle by using our fully certified AIS 140 hardware.",
      icon: <UserCheck className="w-6 h-6" />,
    },
    {
      title: "Enhanced Public Safety",
      description:
        "Contribute to a safer transport ecosystem with direct-to-police emergency signaling and real-time monitoring.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Lower Operational Risk",
      description:
        "Reduce the risk of accidents and unauthorized vehicle use through continuous, government-monitored tracking.",
      icon: <Activity className="w-6 h-6" />,
    },
  ],
  steps: [
    {
      title: "Hardware Registration",
      description:
        "We register your device's unique ID on the government VLT portal and link it to your vehicle's registration.",
    },
    {
      title: "Professional Installation",
      description:
        "Secure, concealed installation of the tracker and panic buttons by our certified technicians.",
    },
    {
      title: "Certification Issuance",
      description:
        "We provide the necessary fitment and activation certificates required for RTO permit renewals.",
    },
  ],
  seoMeta: {
    title: "AIS 140 Certified GPS Trackers for Commercial Vehicles | Garuda",
    description:
      "Government-approved, ARAI/ICAT certified AIS 140 compliant GPS tracking devices with SOS panic buttons for public and commercial transport.",
  },
  imageUrl: "/images/products/ais140.jpg"
 
};
