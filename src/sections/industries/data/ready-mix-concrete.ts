import { IndustryData } from "./industriesData";

export const readyMixConcrete: IndustryData = {
  slug: "ready-mix-concrete",
  title: "Ready-Mix Concrete",
  description: "Track concrete mixers from plant to pour with real-time location data, drum rotation monitoring, and automated status updates for optimal delivery.",
  icon: "Truck",
  features: [
    "Real-time mixer tracking",
    "Drum rotation monitoring",
    "Automated status updates",
    "Geofence-based alerts",
  ],
  category: "Construction",
  detailedDescription: "Optimize your ready-mix concrete operations with our specialized tracking solution. Monitor the real-time location of every mixer, receive alerts for unauthorized stops, and track drum rotation to ensure concrete quality. Our system provides automated status updates from plant to pour, eliminating the need for manual check-ins. Geofence alerts at job sites and plants streamline dispatching and improve on-time performance. Ensure every delivery meets specifications with our comprehensive ready-mix concrete solution.",
  benefits: [
    "Improve on-time delivery by 25%",
    "Reduce unauthorized mixer use",
    "Ensure concrete quality with drum monitoring",
    "Automate dispatch and status updates",
  ],
  solutions: [
    "Concrete Mixer GPS Trackers",
    "Drum Rotation Sensors",
    "Automated Dispatch Platform",
    "Job Site Geofencing",
  ],
  imageUrl: "https://images.unsplash.com/photo-1529939803454-2564997a854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  stats: [
    { label: "On-Time Delivery", value: "+25%", icon: "Clock" },
    { label: "Fuel Efficiency", value: "+15%", icon: "Fuel" },
    { label: "Fleet Utilization", value: "+20%", icon: "TrendingUp" },
  ],
};
