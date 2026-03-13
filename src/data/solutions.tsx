import React from "react";
import {
  Camera,
  Satellite,
  Fuel,
  Thermometer,
  Lock,
  MapPin,
  Shield,
  BarChart3,
  Bell,
  Cloud,
  Layers,
  Activity,
  UserCheck,
  Zap,
  ShieldCheck,
  Clock
} from "lucide-react";

export type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export type UseCase = {
  title: string;
  description: string;
};

export type Benefit = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export type SolutionData = {
  title: string;
  tagline: string;
  bgColor: string; // e.g., "#FDF4CC", "#E3D7DD" - MUST NOT BE PURE WHITE
  overview: string;
  features: Feature[];
  useCases: UseCase[];
  benefits: Benefit[];
  seoMeta: {
    title: string;
    description: string;
  };
};

export const solutions: Record<string, SolutionData> = {
  "fastag": {
    title: "FASTag Management System",
    tagline: "Automated toll and fleet payment management",
    bgColor: "#FDF4CC",
    overview: "Our FASTag Management System empowers your fleet operations by centralizing all your toll payments into a single, comprehensive dashboard. Eliminate the hassle of managing individual tags, automate recharges, and gain deep insights into your fleet's toll expenditures. This reduces administrative overhead, prevents vehicle delays at toll plazas due to insufficient funds, and ensures smooth, uninterrupted journeys.",
    features: [
      {
        title: "Automated Recharges",
        description: "Set low-balance thresholds to trigger automatic top-ups, ensuring your vehicles never stop at a toll.",
        icon: <Zap className="w-6 h-6 text-primary" />
      },
      {
        title: "Centralized Dashboard",
        description: "Monitor all fleet FASTags from a single screen with real-time balance and transaction updates.",
        icon: <Layers className="w-6 h-6 text-primary" />
      },
      {
        title: "Detailed Analytics",
        description: "Generate customized reports on toll expenses, routes taken, and transaction histories for better budgeting.",
        icon: <BarChart3 className="w-6 h-6 text-primary" />
      },
      {
        title: "Instant Alerts",
        description: "Receive instant notifications for low balances, successful recharges, and suspicious transactions.",
        icon: <Bell className="w-6 h-6 text-primary" />
      }
    ],
    useCases: [
      {
        title: "Logistics Companies",
        description: "Ensures seamless long-haul trips across state borders without manual toll payment delays."
      },
      {
        title: "Cab Aggregators",
        description: "Simplifies toll expense tracking and reimbursement for large fleets of passenger vehicles."
      },
      {
        title: "Corporate Fleets",
        description: "Provides transparent accounting and tracking of employee travel expenses."
      }
    ],
    benefits: [
      {
        title: "Improved Efficiency",
        description: "Eliminate manual top-ups and tedious accounting processes.",
        icon: <Activity className="w-6 h-6" />
      },
      {
        title: "Cost Control",
        description: "Prevent fraud and manage your toll budget effectively.",
        icon: <ShieldCheck className="w-6 h-6" />
      },
      {
        title: "Time Savings",
        description: "Reduce administrative hours spent on tag management.",
        icon: <Clock className="w-6 h-6" />
      }
    ],
    seoMeta: {
      title: "FASTag Management System | Garuda",
      description: "Advanced FASTag management solution for fleet operators. Automate recharges and track expenses efficiently."
    }
  },
  "dash-cam-system": {
    title: "Dash Cam System",
    tagline: "Real-time vehicle video monitoring for enhanced safety",
    bgColor: "#E3D7DD",
    overview: "The Garuda Dash Cam System acts as an unbiased witness to everything that happens in and around your vehicles. Utilizing dual-camera technology, it records the road ahead while simultaneously monitoring the cabin. Integrated with our GPS tracking platform, it provides live video streaming, AI-powered driver safety alerts, and secure cloud storage for critical incident footage.",
    features: [
      {
        title: "Dual-Facing Cameras",
        description: "Record both the road and the driver's cabin to get a complete picture of any incident.",
        icon: <Camera className="w-6 h-6 text-primary" />
      },
      {
        title: "Live Video Streaming",
        description: "Access real-time feeds from your vehicles directly from your dashboard.",
        icon: <Activity className="w-6 h-6 text-primary" />
      },
      {
        title: "Cloud Storage",
        description: "Critical events like harsh braking or collisions are automatically saved to the secure cloud.",
        icon: <Cloud className="w-6 h-6 text-primary" />
      },
      {
        title: "AI Safety Alerts",
        description: "Detect distracted driving, drowsiness, and cell phone usage instantly.",
        icon: <Shield className="w-6 h-6 text-primary" />
      }
    ],
    useCases: [
      {
        title: "Transportation Companies",
        description: "Protect drivers from false claims and reduce insurance premiums."
      },
      {
        title: "Public Transit",
        description: "Ensure passenger safety and monitor driver behavior."
      },
      {
        title: "Delivery Services",
        description: "Monitor package handling and delivery proof via video."
      }
    ],
    benefits: [
      {
        title: "Enhanced Safety",
        description: "Proactively correct unsafe driving behaviors.",
        icon: <ShieldCheck className="w-6 h-6" />
      },
      {
        title: "Reduced Liability",
        description: "Video evidence protects against fraudulent claims.",
        icon: <UserCheck className="w-6 h-6" />
      },
      {
        title: "Improved Training",
        description: "Use real-world footage for effective driver coaching.",
        icon: <Zap className="w-6 h-6" />
      }
    ],
    seoMeta: {
      title: "Dash Cam System for Fleet Safety | Garuda",
      description: "Improve driver safety with live video streaming and cloud-recorded incident footage."
    }
  },
  "advanced-fleet-tracker": {
    title: "Advanced Fleet Tracker",
    tagline: "Comprehensive real-time tracking and route optimization",
    bgColor: "#E5F0FF",
    overview: "Gain total control over your mobile assets with our Advanced Fleet GPS Tracker. Built for scale, it delivers pinpoint location accuracy, insightful driver behavior analytics, and powerful routing features. Our solution helps dispatchers ensure on-time deliveries, reduces fuel consumption through optimized routing, and significantly extends the lifespan of your vehicles with automated maintenance scheduling.",
    features: [
      {
        title: "Real-Time Tracking",
        description: "Monitor vehicle locations globally with precise, up-to-the-second updates.",
        icon: <MapPin className="w-6 h-6 text-primary" />
      },
      {
        title: "Route Optimization",
        description: "Calculate the most efficient routes to save fuel and reduce travel time.",
        icon: <Activity className="w-6 h-6 text-primary" />
      },
      {
        title: "Geofencing",
        description: "Create virtual boundaries and receive alerts when vehicles enter or exit specific zones.",
        icon: <Layers className="w-6 h-6 text-primary" />
      },
      {
        title: "Driver Behavior Analysis",
        description: "Track speeding, harsh braking, and rapid acceleration.",
        icon: <BarChart3 className="w-6 h-6 text-primary" />
      }
    ],
    useCases: [
      {
        title: "Distribution Fleets",
        description: "Optimize delivery schedules and improve customer ETA accuracy."
      },
      {
        title: "Field Service Teams",
        description: "Dispatch the nearest technician to emergency calls quickly."
      },
      {
        title: "Rentals & Leasing",
        description: "Monitor asset usage and prevent unauthorized movement."
      }
    ],
    benefits: [
      {
        title: "Operational Efficiency",
        description: "Complete more jobs per day with optimized routing.",
        icon: <Activity className="w-6 h-6" />
      },
      {
        title: "Cost Reduction",
        description: "Lower fuel consumption and reduce vehicle wear and tear.",
        icon: <BarChart3 className="w-6 h-6" />
      },
      {
        title: "Better Customer Service",
        description: "Provide accurate arrival times to your clients.",
        icon: <UserCheck className="w-6 h-6" />
      }
    ],
    seoMeta: {
      title: "Advanced Fleet GPS Tracking | Garuda",
      description: "Optimize your fleet operations with real-time vehicle tracking, geofencing, and advanced analytics."
    }
  },
  "iot-for-mining": {
    title: "Mining Equipment Tracking",
    tagline: "Ruggedized IoT solutions for harsh operational environments",
    bgColor: "#FBECE6",
    overview: "Mining operations require equipment that can withstand extreme conditions. Our Mining Equipment Tracking solution utilizes ultra-durable, IP-rated GPS devices designed specifically for heavy machinery. Monitor equipment utilization, track the location of expensive assets in remote areas without cellular coverage using satellite communication, and ensure the safety of your operators.",
    features: [
      {
        title: "Rugged Hardware",
        description: "Devices built to withstand extreme dust, water, and vibration.",
        icon: <Shield className="w-6 h-6 text-primary" />
      },
      {
        title: "Satellite Connectivity",
        description: "Maintain tracking even in remote areas without cellular networks.",
        icon: <Satellite className="w-6 h-6 text-primary" />
      },
      {
        title: "Utilization Tracking",
        description: "Monitor engine hours and usage to optimize maintenance schedules.",
        icon: <Clock className="w-6 h-6 text-primary" />
      },
      {
        title: "Asset Security",
        description: "Receive instant alerts if equipment is moved outside designated operational zones.",
        icon: <Lock className="w-6 h-6 text-primary" />
      }
    ],
    useCases: [
      {
        title: "Open-Pit Mining",
        description: "Track haul trucks and excavators across vast operational sites."
      },
      {
        title: "Construction Sites",
        description: "Monitor expensive heavy machinery and prevent theft."
      },
      {
        title: "Equipment Rental",
        description: "Track the location and usage of rented generators and lifters."
      }
    ],
    benefits: [
      {
        title: "Prevent Asset Loss",
        description: "Stop unauthorized movement and recover stolen equipment.",
        icon: <ShieldCheck className="w-6 h-6" />
      },
      {
        title: "Maximize ROI",
        description: "Identify underutilized machinery and redeploy effectively.",
        icon: <BarChart3 className="w-6 h-6" />
      },
      {
        title: "Enhanced Safety",
        description: "Ensure operators remain within safe operational boundaries.",
        icon: <UserCheck className="w-6 h-6" />
      }
    ],
    seoMeta: {
      title: "Mining Equipment Tracking System | Garuda",
      description: "Rugged GPS tracking devices designed for heavy machinery in challenging mining and construction environments."
    }
  },
  "fuel-level-sensors": {
    title: "Fuel Monitoring System",
    tagline: "Precision fuel tracking to significantly reduce operational costs",
    bgColor: "#E8F5E9",
    overview: "Fuel is one of the largest expenses for any fleet. Our high-precision Fuel Monitoring System provides deep visibility into your fuel consumption patterns. By integrating advanced fuel sensors with our core GPS platform, you can detect anomalies, prevent fuel theft, identify inefficient vehicles, and ultimately take control of your fuel budget.",
    features: [
      {
        title: "Live Fuel Levels",
        description: "Monitor the exact fuel volume in all your vehicles' tanks in real-time.",
        icon: <Fuel className="w-6 h-6 text-primary" />
      },
      {
        title: "Theft Detection",
        description: "Receive immediate alerts for sudden drops in fuel levels, indicating potential theft.",
        icon: <Shield className="w-6 h-6 text-primary" />
      },
      {
        title: "Refueling Verification",
        description: "Verify that the billed fuel amount matches the actual fuel added to the tank.",
        icon: <Activity className="w-6 h-6 text-primary" />
      },
      {
        title: "Consumption Reports",
        description: "Analyze fuel efficiency per vehicle, per route, or per driver.",
        icon: <BarChart3 className="w-6 h-6 text-primary" />
      }
    ],
    useCases: [
      {
        title: "Long-Haul Trucking",
        description: "Significant cost savings by preventing fuel pilferage on long routes."
      },
      {
        title: "Construction Equipment",
        description: "Monitor fuel usage of stationary generators and heavy machinery."
      },
      {
        title: "Agricultural Fleets",
        description: "Track fuel consumption of tractors and harvesters."
      }
    ],
    benefits: [
      {
        title: "Drastic Cost Savings",
        description: "Identify and eliminate fuel waste and theft.",
        icon: <BarChart3 className="w-6 h-6" />
      },
      {
        title: "Accurate Accounting",
        description: "Reconcile fuel bills with precise sensor data.",
        icon: <Layers className="w-6 h-6" />
      },
      {
        title: "Identify Inefficiency",
        description: "Spot vehicles that need maintenance based on poor fuel economy.",
        icon: <Zap className="w-6 h-6" />
      }
    ],
    seoMeta: {
      title: "Fuel Monitoring & Theft Detection System | Garuda",
      description: "Advanced fuel sensors integrated with GPS tracking to monitor consumption, detect theft, and reduce fuel costs."
    }
  },
  "video-telematics": {
    title: "Video Telematics",
    tagline: "Unify location data with powerful visual context",
    bgColor: "#F3E5F5",
    overview: "Go beyond dots on a map with Garuda Video Telematics. This solution seamlessly overlays rich video footage with precise GPS data, speed, and telemetry information. It provides an undeniable record of events, enabling rapid incident resolution, proactive driver coaching, and a comprehensive understanding of your fleet's on-road reality.",
    features: [
      {
        title: "Integrated Dashboard",
        description: "View GPS location on a map simultaneously with live or recorded video.",
        icon: <Layers className="w-6 h-6 text-primary" />
      },
      {
        title: "Event-Triggered Recording",
        description: "Automatically capture video when harsh braking, acceleration, or impacts occur.",
        icon: <Camera className="w-6 h-6 text-primary" />
      },
      {
        title: "Remote Video Retrieval",
        description: "Request specific moments of historical video footage directly from the cloud.",
        icon: <Cloud className="w-6 h-6 text-primary" />
      },
      {
        title: "Driver Coaching Tools",
        description: "Use annotated video clips to train drivers on safety best practices.",
        icon: <UserCheck className="w-6 h-6 text-primary" />
      }
    ],
    useCases: [
      {
        title: "Passenger Transport",
        description: "Ensure the safety and security of passengers during transit."
      },
      {
        title: "Emergency Services",
        description: "Review response routes and incident handling with complete context."
      },
      {
        title: "High-Value Cargo",
        description: "Provide visual proof of secure transport and delivery."
      }
    ],
    benefits: [
      {
        title: "Rapid Claim Resolution",
        description: "Clear video evidence expedites insurance claims.",
        icon: <Zap className="w-6 h-6" />
      },
      {
        title: "Improved Driver Retention",
        description: "Protect drivers from unjust blame and foster a culture of safety.",
        icon: <ShieldCheck className="w-6 h-6" />
      },
      {
        title: "Comprehensive Visibility",
        description: "Know exactly what happened, when, and where.",
        icon: <Activity className="w-6 h-6" />
      }
    ],
    seoMeta: {
      title: "Video Telematics & Fleet Monitoring | Garuda",
      description: "Combine GPS data with live and recorded video for total fleet visibility and safety management."
    }
  },
  "temperature-monitor": {
    title: "Temperature Monitoring",
    tagline: "Ensure the integrity of your cold chain operations",
    bgColor: "#E3F2FD",
    overview: "For logistics companies transporting perishable goods, maintaining strict temperature controls is non-negotiable. Our Temperature Monitoring solution uses highly sensitive Bluetooth and wired sensors inside cargo areas to track climate conditions in real-time. Guarantee product quality, maintain regulatory compliance, and prevent catastrophic cargo loss.",
    features: [
      {
        title: "Real-Time Climate Data",
        description: "Continuous monitoring of temperature and humidity levels inside the trailer.",
        icon: <Thermometer className="w-6 h-6 text-primary" />
      },
      {
        title: "Threshold Alerts",
        description: "Instant notifications if the temperature deviates from safe ranges.",
        icon: <Bell className="w-6 h-6 text-primary" />
      },
      {
        title: "Compliance Reporting",
        description: "Generate automated temperature logs required for FDA or FSMA compliance.",
        icon: <BarChart3 className="w-6 h-6 text-primary" />
      },
      {
        title: "Multi-Zone Support",
        description: "Monitor different compartments with varying temperature requirements simultaneously.",
        icon: <Layers className="w-6 h-6 text-primary" />
      }
    ],
    useCases: [
      {
        title: "Pharmaceuticals",
        description: "Maintain strict cold-chain integrity for vaccines and medicines."
      },
      {
        title: "Food & Beverage",
        description: "Ensure fresh produce, dairy, and frozen goods arrive in perfect condition."
      },
      {
        title: "Chemical Transport",
        description: "Monitor temperature-sensitive chemicals to prevent hazardous reactions."
      }
    ],
    benefits: [
      {
        title: "Prevent Cargo Spoilage",
        description: "React to cooling system failures before products are ruined.",
        icon: <ShieldCheck className="w-6 h-6" />
      },
      {
        title: "Ensure Compliance",
        description: "Easily prove regulatory compliance to authorities and customers.",
        icon: <Activity className="w-6 h-6" />
      },
      {
        title: "Protect Brand Reputation",
        description: "Guarantee that customers always receive high-quality goods.",
        icon: <UserCheck className="w-6 h-6" />
      }
    ],
    seoMeta: {
      title: "Cold Chain Temperature Monitoring Systems | Garuda",
      description: "Real-time temperature and humidity tracking to protect perishable cargo and ensure regulatory compliance."
    }
  },
  "padlock-gps": {
    title: "GPS Smart Padlock",
    tagline: "Intelligent security for containers and remote assets",
    bgColor: "#FFF3E0",
    overview: "Secure your valuable cargo against theft and tampering with the Garuda GPS Smart Padlock. This keyless, heavy-duty electronic lock combines physical security with advanced GPS tracking. Control access remotely, track the lock's location in real-time, and receive immediate alerts if unauthorized tampering is detected.",
    features: [
      {
        title: "Keyless Operation",
        description: "Unlock via RFID, Bluetooth, or remotely through the management dashboard.",
        icon: <Zap className="w-6 h-6 text-primary" />
      },
      {
        title: "Location Tracking",
        description: "Built-in GPS tracks the movement of the locked asset continuously.",
        icon: <MapPin className="w-6 h-6 text-primary" />
      },
      {
        title: "Tamper Alerts",
        description: "Immediate notifications upon cutting, striking, or unauthorized opening attempts.",
        icon: <Shield className="w-6 h-6 text-primary" />
      },
      {
        title: "Audit Trails",
        description: "Complete logs of when, where, and by whom the padlock was opened.",
        icon: <BarChart3 className="w-6 h-6 text-primary" />
      }
    ],
    useCases: [
      {
        title: "Shipping Containers",
        description: "Secure cargo during long transit routes across sea and land."
      },
      {
        title: "Remote Storage Facilities",
        description: "Protect equipment stored in unmanned, isolated locations."
      },
      {
        title: "Cash-in-Transit",
        description: "High-security locking for valuable goods transportation."
      }
    ],
    benefits: [
      {
        title: "Enhanced Security",
        description: "Deter theft and ensure the integrity of your enclosed assets.",
        icon: <ShieldCheck className="w-6 h-6" />
      },
      {
        title: "Access Control",
        description: "Manage multiple locks and user permissions from a central platform.",
        icon: <UserCheck className="w-6 h-6" />
      },
      {
        title: "Operational Visibility",
        description: "Know exactly when a delivery is opened and by the authorized person.",
        icon: <Activity className="w-6 h-6" />
      }
    ],
    seoMeta: {
      title: "GPS Smart Padlocks for Asset Security | Garuda",
      description: "Secure containers and cargo with keyless electronic padlocks featuring built-in GPS tracking and tamper alerts."
    }
  },
  "photogrammetry-services": {
    title: "Photogrammetry Services",
    tagline: "High-precision 3D mapping and topographical surveying",
    bgColor: "#E0F7FA",
    overview: "Transform aerial imagery and spatial data into highly accurate 3D models and maps. Our Photogrammetry Services combine advanced drone technology, precise GPS ground control points, and sophisticated processing software to deliver survey-grade topographical data for construction, mining, and urban planning projects.",
    features: [
      {
        title: "Drone Imagery Capture",
        description: "High-resolution aerial photography covering large areas efficiently.",
        icon: <Camera className="w-6 h-6 text-primary" />
      },
      {
        title: "3D Modeling",
        description: "Create detailed 3D meshes, point clouds, and orthomosaics.",
        icon: <Layers className="w-6 h-6 text-primary" />
      },
      {
        title: "Volumetric Analysis",
        description: "Accurately measure stockpile volumes for inventory management.",
        icon: <BarChart3 className="w-6 h-6 text-primary" />
      },
      {
        title: "Topographical Mapping",
        description: "Generate precise contour maps and digital elevation models (DEMs).",
        icon: <MapPin className="w-6 h-6 text-primary" />
      }
    ],
    useCases: [
      {
        title: "Construction & Engineering",
        description: "Track site progress and calculate earthwork volumes."
      },
      {
        title: "Mining Operations",
        description: "Manage stockpiles and map quarry expansions safely."
      },
      {
        title: "Agriculture & Forestry",
        description: "Monitor crop health and map large land areas."
      }
    ],
    benefits: [
      {
        title: "Cost & Time Efficiency",
        description: "Survey large areas much faster than traditional ground methods.",
        icon: <Clock className="w-6 h-6" />
      },
      {
        title: "Enhanced Accuracy",
        description: "Survey-grade precision for critical engineering decisions.",
        icon: <Activity className="w-6 h-6" />
      },
      {
        title: "Improved Safety",
        description: "Survey dangerous or hard-to-reach areas without putting personnel at risk.",
        icon: <ShieldCheck className="w-6 h-6" />
      }
    ],
    seoMeta: {
      title: "Drone Photogrammetry & 3D Mapping Services | Garuda",
      description: "High-precision aerial surveying and photogrammetry services for accurate topographical data and 3D modeling."
    }
  },
  "ais-140-tracker": {
    title: "AIS 140 GPS Tracker",
    tagline: "Certified compliance solutions for commercial vehicles",
    bgColor: "#FFF8E1",
    overview: "Meeting government regulations is crucial for commercial transport operators in India. The Garuda AIS 140 GPS Tracker is a fully certified, ruggedized device designed specifically to comply with the AIS 140 standard mandate. It ensures passenger safety, provides precise tracking for authorities, and helps you avoid severe compliance penalties.",
    features: [
      {
        title: "ARAI/ICAT Certified",
        description: "Fully approved hardware meeting all government AIS 140 specifications.",
        icon: <Shield className="w-6 h-6 text-primary" />
      },
      {
        title: "SOS Panic Button",
        description: "Integrated emergency buttons for passenger safety, alerting authorities instantly.",
        icon: <Bell className="w-6 h-6 text-primary" />
      },
      {
        title: "Dual IP Transmission",
        description: "Simultaneously transmits data to government servers and your fleet dashboard.",
        icon: <Cloud className="w-6 h-6 text-primary" />
      },
      {
        title: "Internal Battery Backup",
        description: "Continuous operation even if the main vehicle battery is disconnected.",
        icon: <Zap className="w-6 h-6 text-primary" />
      }
    ],
    useCases: [
      {
        title: "School Buses",
        description: "Mandatory compliance for student safety and parent peace of mind."
      },
      {
        title: "Public Transport",
        description: "City buses and auto-rickshaws requiring state transport department approval."
      },
      {
        title: "Commercial Cabs",
        description: "Taxis and aggregators operating under government permits."
      }
    ],
    benefits: [
      {
        title: "Guaranteed Compliance",
        description: "Avoid fines, permit cancellations, and legal issues.",
        icon: <UserCheck className="w-6 h-6" />
      },
      {
        title: "Passenger Security",
        description: "SOS buttons provide a critical lifeline during emergencies.",
        icon: <ShieldCheck className="w-6 h-6" />
      },
      {
        title: "Reliable Tracking",
        description: "High-quality hardware ensures consistent location data.",
        icon: <Activity className="w-6 h-6" />
      }
    ],
    seoMeta: {
      title: "AIS 140 Certified GPS Trackers | Garuda",
      description: "Government-approved AIS 140 compliant GPS tracking devices for commercial vehicles and public transport."
    }
  }
};
