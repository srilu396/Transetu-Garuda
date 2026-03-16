import React from "react";
import { Camera, Activity, Cloud, Shield, ShieldCheck, UserCheck, Zap } from "lucide-react";
import { SolutionData } from "./gpsData";

export const dashCamSystem: SolutionData = {
  title: "Dash Cam System",
  tagline: "Real-time vehicle video monitoring for enhanced safety",
  icon: Camera,
  bgColor: "#E3D7DD",
  overview:
    "The Garuda Dash Cam System acts as an unbiased witness to everything that happens in and around your vehicles. Utilizing dual-camera technology, it records the road ahead while simultaneously monitoring the cabin. Integrated with our GPS tracking platform, it provides live video streaming, AI-powered driver safety alerts, and secure cloud storage for critical incident footage.",
  detailedDescription: {
    what: "Our Dash Cam System is an advanced vehicle security and driver monitoring solution that combines high-definition video recording with intelligent AI analysis. It features dual-facing cameras that capture both the external road environment and the internal cabin space, providing a 360-degree view of vehicle operations.",
    how: "The system uses high-speed 4G connectivity to stream live video to our cloud platform. Built-in G-sensors detect sudden impacts or harsh driving maneuvers, automatically flagging and uploading these 'event' clips to secure storage. AI algorithms analyze driver behavior in real-time to identify risks like fatigue or distraction.",
    who: "This solution is essential for fleet operators, logistics companies, public transport providers, and any business that prioritizes driver safety and liability protection. It is particularly valuable for long-haul trucking and high-value cargo transport.",
    why: "By providing irrefutable video evidence, businesses can protect themselves against fraudulent insurance claims, reduce accident rates through driver coaching, and lower overall operational risks. It turns subjective reports into objective data."
  },
  features: [
    {
      title: "Dual-Facing 1080p Cameras",
      description:
        "High-definition recording of both the road ahead and the driver's cabin with night vision capabilities.",
      icon: <Camera className="w-6 h-6 text-primary" />,
    },
    {
      title: "Live Video Streaming",
      description:
        "Instant remote access to real-time video feeds from any vehicle in your fleet via our web or mobile dashboard.",
      icon: <Activity className="w-6 h-6 text-primary" />,
    },
    {
      title: "AI-Powered Driver Alerts",
      description:
        "Real-time detection and in-cab alerts for distracted driving, drowsiness, cell phone use, and smoking.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
    {
      title: "Automated Incident Uploads",
      description:
        "G-sensor triggered recording that automatically saves and uploads footage of collisions or harsh braking to the cloud.",
      icon: <Cloud className="w-6 h-6 text-primary" />,
    },
    {
      title: "Two-Way Audio",
      description:
        "Communicate directly with drivers in real-time through the dash cam unit for immediate feedback or assistance.",
      icon: <UserCheck className="w-6 h-6 text-primary" />,
    },
    {
      title: "GPS Metadata Overlay",
      description:
        "Every video clip is synchronized with precise GPS location, speed, and time data for complete context.",
      icon: <Zap className="w-6 h-6 text-primary" />,
    },
  ],
  useCases: [
    {
      title: "Accident Reconstruction",
      description:
        "Use high-quality video footage to accurately reconstruct accidents and determine fault within minutes.",
    },
    {
      title: "Driver Performance Coaching",
      description: "Review flagged behaviors with drivers using actual footage to improve safety standards and reduce fuel costs.",
    },
    {
      title: "Theft & Vandalism Protection",
      description: "Monitor parked vehicles for suspicious activity and capture evidence of attempted theft or tampering.",
    },
    {
      title: "Cargo Verification",
      description: "Ensure proper loading and unloading procedures are followed and monitor cargo integrity during transit.",
    }
  ],
  benefits: [
    {
      title: "90% Reduction in False Claims",
      description: "Objective video evidence exonerates drivers and protects your business from 'crash-for-cash' scams.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Lower Insurance Premiums",
      description: "Many insurers offer significant discounts for fleets equipped with certified dash cam systems.",
      icon: <UserCheck className="w-6 h-6" />,
    },
    {
      title: "Improved Fleet Safety Culture",
      description: "Encourage safer driving habits and accountability across your entire organization.",
      icon: <Zap className="w-6 h-6" />,
    },
  ],
  steps: [
    {
      title: "Hardware Installation",
      description: "Professional mounting of the dual-camera unit on the windshield and connection to vehicle power."
    },
    {
      title: "Cloud Syncing",
      description: "Automatic connection to the Garuda platform via 4G/LTE for real-time data transmission."
    },
    {
      title: "Real-time Monitoring",
      description: "Start receiving alerts and accessing live feeds through your centralized fleet dashboard."
    }
  ],
  seoMeta: {
    title: "AI-Powered Dash Cam System for Fleet Safety | Garuda",
    description:
      "Advanced dual-facing dash cams with live streaming, AI driver alerts, and secure cloud storage for professional fleet management.",
  },
  imageUrl: "/images/products/dash-cam.jpg",
  secondaryImageUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
};
