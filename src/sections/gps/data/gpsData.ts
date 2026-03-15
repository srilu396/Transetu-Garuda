// Unused imports removed to fix ESLint errors

export interface SolutionData {
  title: string;
  tagline: string;
  overview: string;
  features: {
    title: string;
    description: string;
    icon: string; // Changed from any to string
  }[];
  benefits: {
    title: string;
    description: string;
    icon: string; // Changed from any to string
  }[];
  useCases: {
    title: string;
    description: string;
  }[];
  steps?: {
    title: string;
    description: string;
  }[];
  imageUrl?: string;
  seoMeta: {
    title: string;
    description: string;
  };
}

export const gpsSolutions: Record<string, SolutionData> = {
  "dash-cam-system": {
    title: "Dash Cam System",
    tagline: "Advanced Video Safety for Your Fleet",
    overview: "Improve driver safety with a smart dash camera that records both road and cabin activity while providing real-time alerts and video monitoring.",
    features: [
      { title: "Dual Recording", description: "Capture both road and cabin views simultaneously.", icon: "Camera" },
      { title: "AI Alerts", description: "Real-time driver fatigue and distraction alerts.", icon: "Bell" },
    ],
    benefits: [
      { title: "Legal Protection", description: "Video evidence for insurance claims and accidents.", icon: "Shield" },
    ],
    useCases: [
      { title: "Fleet Safety", description: "Monitoring driver behavior in commercial fleets." },
    ],
    imageUrl: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80",
    seoMeta: {
      title: "Dash Cam System | Garuda OM",
      description: "Improve driver safety with our AI-powered dash cam systems. Real-time monitoring and recording for your fleet.",
    },
  },
  "gps-tracking-solutions": {
    title: "Fleet GPS Tracker",
    tagline: "Real-time Vehicle Monitoring and Management",
    overview: "Track and manage your fleet in real time with a powerful GPS tracking system that helps optimize routes and monitor driver performance.",
    features: [
      { title: "Real-time Tracking", description: "View vehicle locations with live updates.", icon: "Truck" },
      { title: "Geo-fencing", description: "Set virtual boundaries and get alerts on entry/exit.", icon: "MapPin" },
    ],
    benefits: [
      { title: "Operational Efficiency", description: "Optimize routes and reduce fuel consumption.", icon: "BarChart3" },
    ],
    useCases: [
      { title: "Logistics", description: "Coordinating deliveries and tracking cargo." },
    ],
    seoMeta: {
      title: "Fleet GPS Tracker | Garuda OM",
      description: "Advanced real-time vehicle tracking and fleet management solutions. Optimize routes and monitor driver performance.",
    },
  },
  "iot-for-mining": {
    title: "Mining Equipment Tracking",
    tagline: "Rugged IoT for Harsh Environments",
    overview: "A rugged GPS tracking solution designed for heavy mining equipment, helping monitor machinery and improve operational visibility.",
    features: [
      { title: "High-Durability", description: "Built to withstand extreme vibrations and dust.", icon: "Satellite" },
    ],
    benefits: [
      { title: "Equipment Vitality", description: "Monitor engine hours and maintenance needs.", icon: "Zap" },
    ],
    useCases: [
      { title: "Open Pit Mining", description: "Tracking heavy machinery in vast mining areas." },
    ],
    seoMeta: {
      title: "Mining Equipment Tracking | Garuda OM",
      description: "Rugged GPS tracking and IoT solutions for heavy mining equipment. Durable hardware for harsh environments.",
    },
  },
  "fuel-level-sensors": {
    title: "Fuel Monitoring System",
    tagline: "Precise Fuel Tracking and Theft Prevention",
    overview: "Monitor fuel levels accurately and detect fuel theft using advanced sensors integrated with your vehicle tracking system.",
    features: [
      { title: "Precise Sensors", description: "99% accuracy in fuel level measurement.", icon: "Fuel" },
    ],
    benefits: [
      { title: "Loss Prevention", description: "Instant alerts for sudden fuel level drops.", icon: "Shield" },
    ],
    useCases: [
      { title: "Long-haul Trucking", description: "Monitoring fuel usage over long distances." },
    ],
    seoMeta: {
      title: "Fuel Monitoring System | Garuda OM",
      description: "Accurate fuel level monitoring and theft prevention. Detect fuel drains and refilling in real-time.",
    },
  },
  "video-telematics": {
    title: "Video Telematics",
    tagline: "Combined Video and Data Insights",
    overview: "Combine GPS tracking with video monitoring to improve security and gain better visibility into vehicle activity.",
    features: [
      { title: "Live Streaming", description: "Access live video feeds from any vehicle.", icon: "Camera" },
    ],
    benefits: [
      { title: "Comprehensive Data", description: "Video synchronized with GPS data point.", icon: "Layers" },
    ],
    useCases: [
      { title: "Security", description: "Protecting valuable cargo with high-res video." },
    ],
    seoMeta: {
      title: "Video Telematics | Garuda OM",
      description: "Integrated video and GPS data for enhanced fleet security. Live streaming and incident recording.",
    },
  },
  "temperature-monitor": {
    title: "Temperature Monitoring",
    tagline: "Cold Chain Integrity Management",
    overview: "Track temperature conditions during transportation to protect sensitive goods such as food, medicine, and perishable items.",
    features: [
      { title: "Real-time Thermal Alerts", description: "Get notified when range thresholds are exceeded.", icon: "Thermometer" },
    ],
    benefits: [
      { title: "Quality Assurance", description: "Ensure goods arrive in perfect condition.", icon: "Shield" },
    ],
    useCases: [
      { title: "Pharma Logistics", description: "Tracking vaccines and sensitive medicines." },
    ],
    seoMeta: {
      title: "Temperature Monitoring | Garuda OM",
      description: "Real-time cold chain monitoring for sensitive cargo. Ensure food and pharmaceutical safety during transit.",
    },
  },
  "padlock-gps": {
    title: "GPS Smart Padlock",
    tagline: "Smart Security for Your Cargo",
    overview: "Secure cargo, containers, and valuable assets with a smart padlock that provides location tracking and tamper alerts.",
    features: [
      { title: "Remote Unlocking", description: "Unlock via app or central command center.", icon: "Lock" },
    ],
    benefits: [
      { title: "Theft Deterrence", description: "GPS alerts if the lock is moved or tampered.", icon: "Bell" },
    ],
    useCases: [
      { title: "Container Shipping", description: "Securing ocean and rail containers." },
    ],
    seoMeta: {
      title: "GPS Smart Padlock | Garuda OM",
      description: "Secure your cargo with GPS-enabled smart padlocks. Remote unlocking and tamper alerts for containers.",
    },
  },
  "photogrammetry-services": {
    title: "Photogrammetry Services",
    tagline: "High-Precision Visual Mapping",
    overview: "High-precision mapping and surveying services using advanced GPS and photogrammetry technology.",
    features: [
      { title: "3D Modeling", description: "Generate terrain and object models from photos.", icon: "MapPin" },
    ],
    benefits: [
      { title: "Accurate Surveying", description: "Millimeter-level accuracy for large areas.", icon: "BarChart3" },
    ],
    useCases: [
      { title: "Construction", description: "Mapping sites and monitoring progress." },
    ],
    seoMeta: {
      title: "Photogrammetry Services | Garuda OM",
      description: "High-precision 3D mapping and surveying services. Accurate geographic data for construction and land management.",
    },
  },
  "ais-140-tracker": {
    title: "AIS 140 GPS Tracker",
    tagline: "Government Compliant Tracking",
    overview: "Government-approved GPS tracking device designed to meet AIS 140 compliance standards for commercial vehicles.",
    features: [
      { title: "Emergency Button", description: "Dedicated panic button for driver safety.", icon: "Shield" },
    ],
    benefits: [
      { title: "Legal Compliance", description: "Meet mandatory transport regulations.", icon: "Shield" },
    ],
    useCases: [
      { title: "Public Transport", description: "Mandatory tracking for buses and taxis." },
    ],
    seoMeta: {
      title: "AIS 140 GPS Tracker | Garuda OM",
      description: "Government-approved AIS 140 compliant GPS trackers. Mandatory safety features for commercial vehicles in India.",
    },
  },
};
