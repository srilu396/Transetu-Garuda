import React from "react";
import { Shield, Satellite, Clock, Lock, ShieldCheck, BarChart3, UserCheck } from "lucide-react";
import { SolutionData } from "./gpsData";

export const iotForMining: SolutionData = {
  title: "Mining Equipment Tracking",
  tagline: "Ruggedized IoT solutions for harsh operational environments",
  icon: Satellite,
  bgColor: "#FBECE6",
  overview:
    "Mining operations require equipment that can withstand extreme conditions. Our Mining Equipment Tracking solution utilizes ultra-durable, IP-rated GPS devices designed specifically for heavy machinery. Monitor equipment utilization, track the location of expensive assets in remote areas without cellular coverage using satellite communication, and ensure the safety of your operators.",
  detailedDescription: {
    what: "Mining Equipment Tracking is a specialized IoT solution designed for the unique challenges of the extractive industries. It provides real-time visibility into the location, health, and utilization of high-value assets like haul trucks, excavators, loaders, and stationary equipment in the most demanding environments on Earth.",
    how: "We deploy IP67/IP69K rated hardware that connects to both cellular and Iridium satellite networks, ensuring 100% global coverage even in deep pits or remote wilderness. These devices interface with machine telematics to collect engine hours, fuel levels, and load data, which is then transmitted to our analytics engine.",
    who: "This solution is purpose-built for mining companies, quarry operators, large-scale construction firms, and heavy equipment rental agencies who need to manage distributed assets across vast, often disconnected geographies.",
    why: "In mining, downtime is incredibly expensive. Our system allows for predictive maintenance based on actual engine hours rather than calendar days, prevents the loss of multi-million dollar assets, and improves safety by monitoring machine-to-machine proximity and geofence adherence."
  },
  features: [
    {
      title: "Ultra-Rugged IP69K Hardware",
      description:
        "Military-grade enclosures built to withstand extreme vibration, high-pressure washing, and temperatures from -40°C to +85°C.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
    {
      title: "Dual-Mode Satellite/Cellular",
      description:
        "Automatically switches to Iridium satellite communication when cellular networks are unavailable, ensuring zero data gaps.",
      icon: <Satellite className="w-6 h-6 text-primary" />,
    },
    {
      title: "Engine Hour & Idle Monitoring",
      description:
        "Track precise engine run-time and idling hours to optimize maintenance schedules and reduce unnecessary fuel burn.",
      icon: <Clock className="w-6 h-6 text-primary" />,
    },
    {
      title: "Precision Geofencing",
      description:
        "Define complex 3D boundaries for pits, haul roads, and blast zones with instant alerts for unauthorized entries or exits.",
      icon: <Lock className="w-6 h-6 text-primary" />,
    },
    {
      title: "Load & Weight Integration",
      description:
        "Interface with onboard weighing systems to track production volumes and prevent dangerous overloading of equipment.",
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
    },
    {
      title: "Operator Identification",
      description:
        "Secure equipment access via RFID or iButton to ensure only certified operators can start and operate specific machinery.",
      icon: <UserCheck className="w-6 h-6 text-primary" />,
    },
  ],
  useCases: [
    {
      title: "Open-Pit Mine Management",
      description:
        "Visualize the entire fleet's movement in real-time to optimize cycle times between loading and dumping points.",
    },
    {
      title: "Remote Site Asset Security",
      description: "Protect expensive stationary assets like generators and pumps in unmanned locations with vibration and tilt sensors.",
    },
    {
      title: "Predictive Maintenance",
      description:
        "Receive automated alerts when equipment approaches service intervals based on actual stress and usage data.",
    },
    {
      title: "Blast Zone Safety",
      description: "Ensure all personnel and equipment are cleared from designated blast zones before detonation using real-time location audits.",
    }
  ],
  benefits: [
    {
      title: "20% Increase in Utilization",
      description: "Identify and redeploy underutilized machinery to maximize production without increasing fleet size.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Zero Asset Loss",
      description: "Recover stolen or misplaced equipment quickly with high-sensitivity GPS and satellite tracking.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Improved Operator Safety",
      description: "Monitor for roll-overs, collisions, and unauthorized speed to maintain the highest safety standards.",
      icon: <UserCheck className="w-6 h-6" />,
    },
  ],
  steps: [
    {
      title: "Environmental Audit",
      description: "We assess your site's topography and connectivity needs to recommend the right hardware mix."
    },
    {
      title: "Rugged Installation",
      description: "Professional installation of vibration-resistant mounts and heavy-duty wiring harnesses."
    },
    {
      title: "Operational Integration",
      description: "Sync tracking data with your existing mine management or ERP systems for unified reporting."
    }
  ],
  seoMeta: {
    title: "Mining & Heavy Equipment Tracking Solutions | Garuda",
    description:
      "Rugged GPS and satellite tracking devices designed for heavy machinery in challenging mining and construction environments.",
  },
  imageUrl: "/images/products/mining.jpg"
};
