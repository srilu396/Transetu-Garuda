import React from "react";
import { MapPin, RotateCcw, Activity, Bell, ShieldCheck, Zap, Lock } from "lucide-react";
import { SolutionData } from "./gpsData";

export const gpsTrackingSolutions: SolutionData = {
  title: "Advanced GPS Tracking",
  tagline: "Total visibility and control over your fleet's movement and performance.",
  icon: MapPin,
  bgColor: "#E5F0FF",
  overview:
    "Our Advanced GPS Tracking solution provides a comprehensive ecosystem for monitoring your mobile assets. It goes beyond simple location tracking by offering deep insights into vehicle health, driver safety, and operational efficiency through an intuitive real-time dashboard.",
  detailedDescription: {
    what: "Advanced GPS Tracking is our flagship fleet management solution that combines high-precision hardware with powerful cloud-based analytics. It provides a real-time digital twin of your entire mobile workforce, allowing you to see exactly where every vehicle is, how it's being driven, and its current mechanical status.",
    how: "Small, rugged GPS devices are installed in each vehicle, collecting data from GPS satellites and the vehicle's internal computer (OBD-II/CAN-bus). This data is transmitted via secure cellular networks to our central servers, where it is processed and displayed on your live dashboard in seconds.",
    who: "This solution is designed for logistics companies, construction firms, service fleets, and any business that operates vehicles. Whether you have 5 vehicles or 5,000, our scalable platform provides the tools needed to manage them effectively.",
    why: "In today's competitive landscape, efficiency is key. Our system helps you eliminate unauthorized vehicle use, reduce fuel consumption through better routing, and improve customer satisfaction by providing accurate ETAs and proof of delivery."
  },
  features: [
    {
      title: "Real-Time Precision Tracking",
      description:
        "Monitor your entire fleet's exact location globally with sub-second updates and high-resolution mapping technology.",
      icon: <MapPin className="w-6 h-6 text-primary" />,
    },
    {
      title: "Historical Route Playback",
      description:
        "Access detailed trip logs and replay precise routes taken by any vehicle over the past 90 days to verify service and identify detours.",
      icon: <RotateCcw className="w-6 h-6 text-primary" />,
    },
    {
      title: "Driver Behavior Scoring",
      description:
        "Automatically score drivers based on harsh braking, rapid acceleration, sharp cornering, and excessive idling events.",
      icon: <Activity className="w-6 h-6 text-primary" />,
    },
    {
      title: "Smart Geofencing",
      description:
        "Create virtual boundaries around key locations and receive instant alerts when vehicles enter or exit designated zones.",
      icon: <Bell className="w-6 h-6 text-primary" />,
    },
    {
      title: "Vehicle Diagnostics",
      description:
        "Monitor engine health, battery levels, and fuel consumption directly from the vehicle's engine control unit (ECU).",
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    },
    {
      title: "Remote Immobilization",
      description:
        "Enhance security by remotely disabling the vehicle's starter in case of theft or unauthorized use (optional hardware required).",
      icon: <Lock className="w-6 h-6 text-primary" />,
    },
  ],
  useCases: [
    {
      title: "Logistics & Last-Mile Delivery",
      description:
        "Optimize delivery routes dynamically to reduce mileage and ensure on-time arrivals for every customer.",
    },
    {
      title: "Service & Maintenance Fleets",
      description:
        "Identify the nearest technician to a service call and track time spent on-site for accurate billing.",
    },
    {
      title: "Public Transport & Shuttles",
      description:
        "Monitor schedule adherence and provide real-time location data to passengers for improved service quality.",
    },
    {
      title: "Construction Asset Management",
      description: "Track expensive machinery across multiple job sites and monitor engine hours for preventive maintenance.",
    }
  ],
  benefits: [
    {
      title: "Maximize Operational Efficiency",
      description: "Reduce idle time and eliminate unauthorized trips to lower overhead costs significantly.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Significant Fuel Savings",
      description: "Fleets typically see a 15-25% reduction in fuel costs through better routing and behavior monitoring.",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "Enhanced Asset Security",
      description: "Real-time theft alerts and high-recovery rates for stolen vehicles and equipment.",
      icon: <Lock className="w-6 h-6" />,
    },
  ],
  steps: [
    {
      title: "Device Provisioning",
      description: "Pre-configured GPS trackers are assigned to your vehicles and tested for data accuracy."
    },
    {
      title: "Rapid Installation",
      description: "Plug-and-play (OBD) or discreet hardwired installation by our certified technicians."
    },
    {
      title: "Platform Onboarding",
      description: "Configure your dashboard, set up alerts, and start monitoring your fleet in real-time."
    }
  ],
  seoMeta: {
    title: "Advanced GPS Fleet Tracking Solutions | Garuda",
    description:
      "Professional GPS tracking for fleets of all sizes. Real-time location, driver behavior monitoring, and route optimization.",
  },
  imageUrl: "/images/products/fleet-tracker.jpg"
};
