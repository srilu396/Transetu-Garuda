import {
  LucideIcon,
  Truck,
  GraduationCap,
  Pickaxe,
  Factory,
  Pill,
  Radio,
  Car,
  Building,
  Shield,
  Coffee,
  Ship,
  Warehouse,
  Thermometer,
  Camera,
  Fuel,
  Map,
  CreditCard,
  Container,
  Tractor,
  Ambulance,
  TrendingUp,
  Clock,
  Users,
  Navigation,
  Gauge,
  ShieldAlert,
  CheckCircle,
  Package,
  DollarSign,
  ThermometerSnowflake,
  BarChart3,
  Compass,
  AlertCircle,
  Globe,
  Flame,
  Activity,
  Drill as DrillIcon,
} from "lucide-react";

export interface IndustryStat {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface IndustryData {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  category: string;
  detailedDescription: string;
  benefits: string[];
  solutions: string[];
  imageUrl: string;
  stats: IndustryStat[];
}

export const industries: IndustryData[] = [
  {
    slug: "logistics-transportation",
    title: "Logistics & Transportation",
    description:
      "Optimize your logistics and fleet operations with real-time GPS tracking and automated FASTag management for maximum efficiency.",
    icon: Truck,
    features: [
      "Real-time fleet visibility",
      "Automated FASTag toll management",
      "Route efficiency optimization",
      "Delivery proof & ETA tracking",
    ],
    category: "Transportation",
    detailedDescription:
      "Our advanced GPS tracking and automated FASTag management solutions empower logistics companies to optimize their entire fleet. By providing real-time visibility and automated tolling, we help businesses reduce operational delays and ensure timely deliveries for enhanced customer satisfaction.",
    benefits: [
      "Reduce fuel costs with optimized routing",
      "Eliminate toll delays with automated recharges",
      "Improve customer trust with accurate real-time ETAs",
      "Prevent unauthorized vehicle usage with geofencing",
    ],
    solutions: [
      "Fleet GPS Trackers",
      "FASTag Dashboard",
      "Route Optimizer",
      "Behavior Analytics",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1586528116311-ada1f4b5c9e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Fleet Size", value: "1 to 1000+", icon: Truck },
      { label: "Fuel Savings", value: "up to 25%", icon: TrendingUp },
      { label: "ROI Timeline", value: "3-6 months", icon: Clock },
    ],
  },
  {
    slug: "school-fleet-safety",
    title: "School Fleet Safety",
    description:
      "Ensure the highest level of student safety with real-time bus tracking, driver behavior monitoring, and instant parent alerts.",
    icon: GraduationCap,
    features: [
      "Student boarding/deboarding alerts",
      "Driver safety & speed monitoring",
      "Real-time route adherence tracking",
      "Parent communication mobile app",
    ],
    category: "Education",
    detailedDescription:
      "Student safety is our top priority, and our GPS solutions provide schools and parents with real-time bus tracking and instant alerts. By monitoring driver behavior and route adherence, we ensure every journey is safe, predictable, and transparent for everyone involved.",
    benefits: [
      "Real-time parent notifications for arrivals",
      "Enhanced student safety with behavior tracking",
      "Reduced fuel waste from engine idling",
      "Improved school-parent transparency and trust",
    ],
    solutions: [
      "School Bus Trackers",
      "Parent Safety App",
      "Driver Dashboard",
      "Route Compliance",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Student Safety", value: "100% visibility", icon: Users },
      { label: "Parent Satisfaction", value: "95%+", icon: TrendingUp },
      { label: "Route Adherence", value: "99.9%", icon: Navigation },
    ],
  },
  {
    slug: "mining-operations",
    title: "Mining Operations",
    description:
      "Maximize mining productivity with ruggedized GPS tracking and utilization analytics built for the harshest industrial environments.",
    icon: Pickaxe,
    features: [
      "Heavy equipment location tracking",
      "Geofence security for blast zones",
      "Automated maintenance scheduling",
      "Operator & machinery utilization reports",
    ],
    category: "Industrial",
    detailedDescription:
      "Ruggedized GPS tracking solutions built for the harshest industrial environments help mining operations maximize productivity. Our platform monitors heavy machinery location and utilization in real-time to help businesses optimize resources and reduce operational downtime.",
    benefits: [
      "Theft prevention with instant geofence alerts",
      "Usage-based maintenance to extend machinery life",
      "Increased productivity with utilization data",
      "Enhanced site safety for restricted zones",
    ],
    solutions: [
      "Rugged Mining Trackers",
      "Utilization Dashboard",
      "Maintenance Alert System",
      "Geofence Platform",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1584968173922-4e13d6b3a0a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Equipment Uptime", value: "+35%", icon: Gauge },
      { label: "Theft Prevention", value: "99%", icon: Shield },
      { label: "Maintenance Cost", value: "-28%", icon: DollarSign },
    ],
  },
  {
    slug: "ready-mix-concrete",
    title: "Ready Mix Concrete",
    description:
      "Optimize concrete delivery timelines with specialized mixer drum sensors, real-time tracking, and site arrival coordination.",
    icon: Factory,
    features: [
      "Mixer drum rotation monitoring",
      "Concrete delivery time optimization",
      "Automated site arrival notifications",
      "Batch quality & temperature tracking",
    ],
    category: "Construction",
    detailedDescription:
      "Optimize concrete delivery timelines with specialized mixer drum sensors and real-time tracking for better site coordination. Our solutions ensure concrete quality by monitoring transit times and providing precise arrival notifications for construction crews.",
    benefits: [
      "Prevent material waste with drum monitoring",
      "Improve construction site coordination",
      "Reduce fuel costs with optimized dispatch",
      "Eliminate billing disputes with delivery proof",
    ],
    solutions: [
      "Mixer Truck Trackers",
      "Drum Rotation Sensors",
      "Delivery Management",
      "Customer ETA Portal",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1581094794327-6e3f1f4b9a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Material Waste", value: "-42%", icon: Package },
      { label: "On-Time Delivery", value: "98%", icon: Clock },
      { label: "Customer Satisfaction", value: "+45%", icon: Users },
    ],
  },
  {
    slug: "pharmaceutical-logistics",
    title: "Pharmaceutical Logistics",
    description:
      "Protect sensitive medical shipments with high-precision cold chain monitoring and automated compliance documentation.",
    icon: Pill,
    features: [
      "Real-time cold chain monitoring",
      "Instant temperature breach alerts",
      "Automated GDP compliance reporting",
      "End-to-end shipment chain of custody",
    ],
    category: "Healthcare",
    detailedDescription:
      "Protect sensitive medical shipments with high-precision cold chain monitoring and automated compliance reporting. Our platform provides real-time temperature alerts and end-to-end visibility to guarantee product integrity throughout the pharmaceutical supply chain.",
    benefits: [
      "Ensure regulatory compliance with automated logs",
      "Prevent cargo spoilage with real-time climate alerts",
      "Maintain a secure and audited chain of custody",
      "Reduce insurance costs with proof of compliance",
    ],
    solutions: [
      "Wireless Temperature Sensors",
      "Cold Chain Compliance Platform",
      "Real-time Alert Engine",
      "Audit Trail Generator",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    stats: [
      {
        label: "Temperature Compliance",
        value: "99.9%",
        icon: ThermometerSnowflake,
      },
      { label: "Spoilage Reduction", value: "-76%", icon: Package },
      { label: "Audit Pass Rate", value: "100%", icon: CheckCircle },
    ],
  },
  {
    slug: "asset-telematics",
    title: "Asset Telematics",
    description:
      "Track high-value equipment, generators, and construction assets with IoT-enabled GPS devices that provide utilization analytics and theft prevention.",
    icon: Radio,
    features: [
      "Asset utilization tracking",
      "IoT sensor integration",
      "Theft recovery assistance",
      "Predictive maintenance",
    ],
    category: "Telematics",
    detailedDescription:
      "Secure and manage your high-value assets with IoT-enabled GPS devices that provide real-time location and utilization analytics. Our predictive maintenance alerts help prevent unexpected breakdowns and optimize resource allocation for construction and industrial equipment.",
    benefits: [
      "Maximize asset utilization with analytics",
      "Prevent theft with instant movement alerts",
      "Reduce downtime with predictive maintenance",
      "Optimize rental fleet with demand forecasting",
    ],
    solutions: [
      "IoT Asset Trackers",
      "Utilization Analytics Dashboard",
      "Maintenance Prediction Engine",
      "Theft Recovery Network",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Asset Utilization", value: "+32%", icon: BarChart3 },
      { label: "Recovery Rate", value: "97%", icon: Shield },
      { label: "Maintenance Cost", value: "-23%", icon: DollarSign },
    ],
  },
  {
    slug: "personal-vehicle-security",
    title: "Personal Vehicle Security",
    description:
      "Safeguard personal vehicles with discreet GPS trackers, geofence alerts, and smartphone monitoring for family safety and theft prevention.",
    icon: Car,
    features: [
      "Real-time vehicle location",
      "Geofence entry/exit alerts",
      "Driving behavior reports",
      "Emergency SOS alerts",
    ],
    category: "Personal",
    detailedDescription:
      "Protect your personal vehicles and loved ones with discreet GPS tracking, geofence alerts, and 24/7 smartphone monitoring. Our solution provides peace of mind with real-time location updates and emergency SOS features designed for maximum family safety.",
    benefits: [
      "Instant theft alerts with GPS tracking",
      "Monitor teen drivers with behavior reports",
      "Set curfew and area restrictions",
      "Emergency assistance at your fingertips",
    ],
    solutions: [
      "Personal GPS Trackers",
      "Mobile App for iOS & Android",
      "Geofence Alert System",
      "Emergency SOS Service",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Theft Recovery", value: "98%", icon: Shield },
      { label: "User Satisfaction", value: "4.8/5", icon: Users },
      { label: "Response Time", value: "< 30 sec", icon: Clock },
    ],
  },
  {
    slug: "municipal-fleet-management",
    title: "Municipal Fleet Management",
    description:
      "Optimize city service vehicles including waste collection, road maintenance, and public transportation with centralized GPS monitoring.",
    icon: Building,
    features: [
      "Service route optimization",
      "Fuel usage monitoring",
      "Idle time reduction",
      "Public works compliance",
    ],
    category: "Government",
    detailedDescription:
      "Enhance municipal efficiency by monitoring waste collection, road maintenance, and public transport vehicles from a single dashboard. Our route optimization tools help city departments reduce fuel consumption, improve response times, and provide better services to citizens.",
    benefits: [
      "Reduce fleet operating costs by 20-30%",
      "Improve citizen satisfaction with reliable services",
      "Ensure regulatory compliance with automated logs",
      "Optimize vehicle allocation across departments",
    ],
    solutions: [
      "Municipal GPS Tracking System",
      "Route Optimization Platform",
      "Fuel Management Dashboard",
      "Public Works Reporting",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1573497491765-dccce02f29df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Fuel Savings", value: "-28%", icon: Fuel },
      { label: "Service Efficiency", value: "+35%", icon: TrendingUp },
      { label: "Citizen Satisfaction", value: "+42%", icon: Users },
    ],
  },
  {
    slug: "high-value-cargo-security",
    title: "High-Value Cargo Security",
    description:
      "Protect valuable shipments with smart padlock GPS trackers that provide tamper alerts, real-time location, and chain of custody verification.",
    icon: Shield,
    features: [
      "Smart padlock security",
      "Tamper detection alerts",
      "Container integrity monitoring",
      "Cargo handover verification",
    ],
    category: "Security",
    detailedDescription:
      "Secure your high-value shipments with smart padlock GPS trackers that provide instant tamper alerts and verifiable chain of custody. Our solutions ensure container integrity and real-time visibility for electronics, pharmaceuticals, and luxury goods throughout transit.",
    benefits: [
      "Prevent cargo theft with tamper-proof locks",
      "Verify chain of custody at every handover",
      "Receive instant alerts for security breaches",
      "Reduce insurance premiums with proven security",
    ],
    solutions: [
      "Smart GPS Padlocks",
      "Container Integrity Sensors",
      "Chain of Custody Platform",
      "Theft Prevention Alerts",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1586528116493-ce25d2e5f4b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Theft Reduction", value: "-94%", icon: ShieldAlert },
      { label: "Recovery Rate", value: "99%", icon: CheckCircle },
      { label: "Insurance Savings", value: "-35%", icon: DollarSign },
    ],
  },
  {
    slug: "food-beverage-distribution",
    title: "Food & Beverage Distribution",
    description:
      "Maintain food safety standards with temperature-controlled GPS tracking for perishable goods, ensuring cold chain compliance from warehouse to delivery.",
    icon: Coffee,
    features: [
      "Cold chain monitoring",
      "Temperature logging",
      "Delivery freshness alerts",
      "HACCP compliance",
    ],
    category: "Food & Beverage",
    detailedDescription:
      "Ensure food safety and quality standards with temperature-controlled GPS tracking for all perishable shipments. Our cold chain solutions provide real-time monitoring from warehouse to final delivery, protecting your brand reputation and reducing inventory waste.",
    benefits: [
      "Ensure food safety with continuous monitoring",
      "Reduce spoilage with temperature alerts",
      "Simplify HACCP compliance documentation",
      "Protect brand reputation with quality assurance",
    ],
    solutions: [
      "Cold Chain Temperature Sensors",
      "Food Safety Compliance Platform",
      "Delivery Freshness Monitoring",
      "HACCP Reporting Tools",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Spoilage Reduction", value: "-67%", icon: Package },
      { label: "Compliance Rate", value: "100%", icon: CheckCircle },
      { label: "Customer Claims", value: "-82%", icon: AlertCircle },
    ],
  },
  {
    slug: "marine-port-operations",
    title: "Marine & Port Operations",
    description:
      "Track containers, cargo handling equipment, and vessels in port environments with marine-grade GPS devices resistant to saltwater and harsh conditions.",
    icon: Ship,
    features: [
      "Container tracking",
      "Port equipment monitoring",
      "Vessel arrival ETA",
      "Yard management",
    ],
    category: "Maritime",
    detailedDescription:
      "Optimize port operations and maritime logistics with rugged, saltwater-resistant GPS devices that track containers and vessels in real-time. Our solution provides the visibility needed to reduce demurrage charges, improve equipment utilization, and streamline yard management.",
    benefits: [
      "Reduce container search time by 70%",
      "Optimize equipment utilization",
      "Eliminate demurrage with proactive planning",
      "Improve port throughput with real-time data",
    ],
    solutions: [
      "Marine GPS Trackers",
      "Container Management System",
      "Port Equipment Monitoring",
      "Vessel ETA Platform",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1542708993627-76e152656b73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Container Search", value: "-70% time", icon: Compass },
      { label: "Equipment Utilization", value: "+45%", icon: Gauge },
      { label: "Demurrage Cost", value: "-63%", icon: DollarSign },
    ],
  },
  {
    slug: "warehouse-inventory",
    title: "Warehouse & Inventory",
    description:
      "Monitor forklifts, pallet jacks, and inventory movement within warehouse facilities to optimize material handling and prevent asset loss.",
    icon: Warehouse,
    features: [
      "Forklift tracking",
      "Asset utilization",
      "Inventory movement",
      "Warehouse efficiency",
    ],
    category: "Logistics",
    detailedDescription:
      "Gain complete visibility into your warehouse operations by monitoring the movement of forklifts, pallet jacks, and inventory in real-time. Our indoor tracking technology helps optimize material handling workflows, prevent asset loss, and improve overall facility productivity.",
    benefits: [
      "Increase forklift utilization by 30%",
      "Reduce equipment fleet size by 20%",
      "Eliminate asset loss with indoor tracking",
      "Optimize warehouse layout with heat maps",
    ],
    solutions: [
      "Indoor Asset Trackers",
      "Forklift Management System",
      "Inventory Movement Analytics",
      "Warehouse Heat Mapping",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Equipment Utilization", value: "+30%", icon: Gauge },
      { label: "Asset Loss", value: "-95%", icon: Shield },
      { label: "Productivity Gain", value: "+25%", icon: TrendingUp },
    ],
  },
  {
    slug: "cold-chain-logistics",
    title: "Cold Chain Logistics",
    description:
      "Protect temperature-sensitive shipments with real-time temperature monitoring, automated alerts, and compliance reporting for perishable goods.",
    icon: Thermometer,
    features: [
      "Temperature tracking",
      "Cold chain integrity",
      "Breach notifications",
      "Compliance documentation",
    ],
    category: "Temperature Controlled",
    detailedDescription:
      "Maintain strict temperature control for sensitive shipments with our integrated GPS and climate monitoring platform. We provide real-time alerts and automated compliance reporting to ensure that perishable goods remain within specified ranges throughout the entire journey.",
    benefits: [
      "Prevent spoilage with instant temperature alerts",
      "Ensure regulatory compliance with audit trails",
      "Reduce insurance claims with proof of handling",
      "Protect brand reputation with quality assurance",
    ],
    solutions: [
      "Temperature Data Loggers",
      "Real-time Monitoring Platform",
      "Compliance Report Generator",
      "Cold Chain Analytics",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1590244439192-6ca885336494?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Spoilage Reduction", value: "-84%", icon: Package },
      { label: "Regulatory Compliance", value: "100%", icon: CheckCircle },
      { label: "Customer Confidence", value: "+56%", icon: Users },
    ],
  },
  {
    slug: "video-safety-compliance",
    title: "Video Safety & Compliance",
    description:
      "Enhance driver safety with dual-facing dash cams that capture road and cabin activity, providing evidence for incidents and coaching opportunities.",
    icon: Camera,
    features: [
      "Dual-camera recording",
      "Driver fatigue alerts",
      "Incident video evidence",
      "Cloud video storage",
    ],
    category: "Safety",
    detailedDescription:
      "Improve fleet safety and driver accountability with AI-powered dual-facing dash cams that capture both road and cabin activity. Our solution provides cloud-stored video evidence for incidents and real-time fatigue alerts, helping reduce accident rates and insurance premiums.",
    benefits: [
      "Reduce accident rates by 50%+",
      "Exonerate drivers with video evidence",
      "Improve insurance premiums with safety data",
      "Coach drivers based on real behavior",
    ],
    solutions: [
      "AI-Powered Dash Cams",
      "Driver Safety Dashboard",
      "Incident Video Review",
      "Real-time Coaching Alerts",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1514464128413-202802fb9711?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Accident Reduction", value: "-58%", icon: Shield },
      { label: "Insurance Savings", value: "-32%", icon: DollarSign },
      { label: "Driver Acceptance", value: "94%", icon: Users },
    ],
  },
  {
    slug: "fuel-management-solutions",
    title: "Fuel Management Solutions",
    description:
      "Detect fuel theft and optimize consumption with precision fuel sensors integrated with GPS tracking for complete fuel lifecycle management.",
    icon: Fuel,
    features: [
      "Fuel level monitoring",
      "Theft detection alerts",
      "Refueling tracking",
      "Fuel efficiency reports",
    ],
    category: "Fuel Management",
    detailedDescription:
      "Take full control of your fuel expenses with high-precision sensors that detect theft and monitor consumption in real-time. Our analytics dashboard helps identify inefficient driving habits and optimize refueling strategies to significantly reduce operational costs.",
    benefits: [
      "Eliminate fuel theft with instant alerts",
      "Reduce fuel consumption by 15-25%",
      "Identify inefficient drivers and vehicles",
      "Optimize fleet refueling strategies",
    ],
    solutions: [
      "Fuel Level Sensors",
      "Theft Detection System",
      "Consumption Analytics",
      "Refueling Management",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Theft Elimination", value: "99%", icon: Shield },
      { label: "Fuel Savings", value: "-22%", icon: Fuel },
      { label: "ROI Timeline", value: "< 4 months", icon: Clock },
    ],
  },
  {
    slug: "survey-mapping-services",
    title: "Survey & Mapping Services",
    description:
      "Capture high-precision geographic data with photogrammetry and GPS mapping services for land surveys, construction planning, and infrastructure projects.",
    icon: Map,
    features: [
      "Precision mapping",
      "3D modeling",
      "Survey data collection",
      "Geospatial analysis",
    ],
    category: "Mapping",
    detailedDescription:
      "Capture high-precision geographic data using advanced drone photogrammetry and GPS survey tools. Our services provide accurate 3D models and geospatial analysis for construction planning, land surveys, and infrastructure development, saving significant time and field costs.",
    benefits: [
      "Reduce survey time by 60% with drones",
      "Improve project planning with 3D models",
      "Eliminate costly field rework",
      "Access precise data for design",
    ],
    solutions: [
      "Drone Photogrammetry",
      "GPS Survey Equipment",
      "3D Modeling Services",
      "Geospatial Analysis",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1504150559433-c4aae69a8acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Survey Time", value: "-60%", icon: Clock },
      { label: "Data Accuracy", value: "cm-level", icon: Compass },
      { label: "Project Savings", value: "+35%", icon: DollarSign },
    ],
  },
  {
    slug: "fastag-fleet-management",
    title: "FASTag Fleet Management",
    description:
      "Centralize toll payments across your entire fleet with automated FASTag recharges, transaction history, and expense reporting for simplified accounting.",
    icon: CreditCard,
    features: [
      "Auto FASTag recharge",
      "Toll transaction history",
      "Balance monitoring alerts",
      "Fleet toll expense reports",
    ],
    category: "Toll Management",
    detailedDescription:
      "Simplify toll management for your entire fleet with centralized FASTag recharges and automated expense reporting. Our platform eliminates manual toll payments, prevents delays at toll plazas, and provides clear financial visibility for better accounting and budgeting.",
    benefits: [
      "Eliminate toll delays with auto-recharge",
      "Reduce administrative work by 90%",
      "Track toll expenses by vehicle and route",
      "Prevent fines with balance monitoring",
    ],
    solutions: [
      "FASTag Management Dashboard",
      "Automated Recharge System",
      "Toll Transaction Analytics",
      "Expense Reporting Tools",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1591768793355-74d7c513c317?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Admin Time", value: "-90%", icon: Clock },
      { label: "Payment Delays", value: "eliminated", icon: CheckCircle },
      { label: "Cost Visibility", value: "100%", icon: DollarSign },
    ],
  },
  {
    slug: "container-intermodal-transport",
    title: "Container & Intermodal Transport",
    description:
      "Track shipping containers across road, rail, and sea with rugged GPS devices that provide visibility throughout the intermodal transportation chain.",
    icon: Container,
    features: [
      "Container location tracking",
      "Intermodal visibility",
      "Tamper detection",
      "Chain of custody",
    ],
    category: "Container Logistics",
    detailedDescription:
      "Track shipping containers seamlessly across road, rail, and sea with ruggedized GPS devices designed for long-haul intermodal transport. Our platform provides real-time location updates and tamper detection to protect valuable cargo throughout the global supply chain.",
    benefits: [
      "Reduce container loss with real-time tracking",
      "Prevent cargo theft with tamper alerts",
      "Optimize container utilization",
      "Eliminate demurrage with proactive planning",
    ],
    solutions: [
      "Container GPS Trackers",
      "Intermodal Visibility Platform",
      "Tamper Detection System",
      "Chain of Custody Records",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1494412574743-019475b77673?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Container Visibility", value: "100%", icon: Globe },
      { label: "Theft Prevention", value: "-96%", icon: Shield },
      { label: "Utilization Gain", value: "+28%", icon: TrendingUp },
    ],
  },
  {
    slug: "agriculture-farming",
    title: "Agriculture & Farming",
    description:
      "Monitor farm equipment, tractors, and harvesters to optimize field operations, reduce fuel costs, and track agricultural asset utilization.",
    icon: Tractor,
    features: [
      "Farm equipment tracking",
      "Field operation monitoring",
      "Fuel consumption tracking",
      "Maintenance alerts",
    ],
    category: "Agriculture",
    detailedDescription:
      "Maximize agricultural productivity by monitoring the location and usage of tractors, harvesters, and other farm equipment. Our GPS solutions help optimize field operations, reduce fuel waste, and provide maintenance alerts to ensure your machinery is ready for critical harvest windows.",
    benefits: [
      "Increase equipment utilization by 25%",
      "Reduce fuel costs with efficiency tracking",
      "Prevent downtime with maintenance alerts",
      "Optimize field operations with route tracking",
    ],
    solutions: [
      "Agricultural GPS Trackers",
      "Field Operation Monitor",
      "Fuel Efficiency System",
      "Equipment Maintenance Alerts",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Equipment Utilization", value: "+25%", icon: Gauge },
      { label: "Fuel Savings", value: "-18%", icon: Fuel },
      { label: "Downtime Reduction", value: "-42%", icon: Clock },
    ],
  },
  {
    slug: "emergency-services",
    title: "Emergency Services",
    description:
      "Coordinate ambulance, fire, and police response vehicles with real-time GPS tracking to reduce emergency response times and improve public safety.",
    icon: Ambulance,
    features: [
      "Emergency vehicle tracking",
      "Response time optimization",
      "Incident coordination",
      "Resource dispatch",
    ],
    category: "Emergency Services",
    detailedDescription:
      "Reduce critical response times and improve public safety by coordinating emergency vehicles through a centralized GPS tracking platform. Our real-time dispatch tools help identify the closest available units and optimize routes to ensure rapid assistance when every second counts.",
    benefits: [
      "Reduce emergency response times by 30%",
      "Improve resource allocation across incidents",
      "Enhance officer safety with location monitoring",
      "Optimize fleet deployment based on demand",
    ],
    solutions: [
      "Emergency Vehicle Trackers",
      "Dispatch Optimization Platform",
      "Incident Management System",
      "Response Time Analytics",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1587572236558-a3751c6d42c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Response Time", value: "-32%", icon: Clock },
      { label: "Coverage Area", value: "+45%", icon: Globe },
      { label: "Resource Efficiency", value: "+38%", icon: TrendingUp },
    ],
  },
  {
    slug: "ais-140-compliance",
    title: "AIS 140 Compliance",
    description:
      "Meet government regulations with AIS 140 certified GPS trackers for commercial vehicles, including emergency panic buttons and vehicle diagnostics.",
    icon: Shield,
    features: [
      "AIS 140 certification",
      "Emergency panic button",
      "Vehicle diagnostics",
      "Regulatory compliance",
    ],
    category: "Compliance",
    detailedDescription:
      "Ensure your fleet meets all government safety standards with AIS 140 certified GPS trackers. Our solution includes mandatory emergency panic buttons and real-time vehicle diagnostics, making regulatory compliance simple while enhancing passenger and driver safety.",
    benefits: [
      "Meet all AIS 140 requirements effortlessly",
      "Automate compliance reporting",
      "Enhance safety with panic button integration",
      "Prevent breakdowns with diagnostics",
    ],
    solutions: [
      "AIS 140 Certified Trackers",
      "Emergency Panic Buttons",
      "Vehicle Diagnostics System",
      "Compliance Report Generator",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1558444479-c84750339fd0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Compliance Rate", value: "100%", icon: CheckCircle },
      { label: "Audit Success", value: "100%", icon: Shield },
      { label: "Diagnostic Accuracy", value: "99%", icon: Gauge },
    ],
  },
  {
    slug: "oil-gas-operations",
    title: "Oil & Gas Operations",
    description:
      "Track drilling rigs, pipeline assets, and energy fleet vehicles with rugged GPS devices and fuel monitoring systems designed for remote oil field environments.",
    icon: Flame,
    category: "Energy",
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: [
      "Real-time drilling rig GPS tracking",
      "Pipeline asset monitoring & leak detection",
      "Fuel consumption tracking for heavy equipment",
      "Remote location satellite coverage",
    ],
    stats: [
      { label: "Rigs Tracked", value: "500+", icon: DrillIcon },
      { label: "Fuel Savings", value: "25%", icon: Fuel },
      { label: "Pipeline Miles", value: "10,000+", icon: Activity },
    ],
    detailedDescription:
      "Manage complex oil and gas operations with ruggedized GPS tracking for drilling rigs, pipeline assets, and tanker fleets. Our satellite-based monitoring ensures complete visibility in remote environments, helping prevent fuel theft and ensuring the safety of personnel and equipment.",
    benefits: [
      "Reduce fuel theft with consumption monitoring",
      "Minimize downtime with predictive maintenance",
      "Improve safety with geofencing and zone alerts",
      "Optimize rig utilization with usage analytics",
    ],
    solutions: [
      "Drilling Rig GPS Tracking",
      "Pipeline Asset Monitoring",
      "Fuel Theft Detection System",
      "Heavy Equipment Telematics",
      "Tanker Fleet Management",
      "Remote Location Satellite Tracking",
      "Well Site Security Monitoring",
      "Equipment Maintenance Alerts",
    ],
  },
];
