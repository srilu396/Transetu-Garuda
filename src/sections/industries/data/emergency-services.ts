import { Ambulance, Clock, Globe, TrendingUp } from "lucide-react";
import { IndustryData } from "./industriesData";

export const emergencyServices: IndustryData = {
  slug: "emergency-services",
  title: "Emergency Services",
  description: "Coordinate ambulance, fire, and police response vehicles with real-time GPS tracking to reduce emergency response times and improve public safety.",
  icon: Ambulance,
  features: [
    "Emergency vehicle tracking",
    "Response time optimization",
    "Incident coordination",
    "Resource dispatch",
  ],
  category: "Emergency Services",
  detailedDescription: "Enhance emergency response capabilities with our specialized tracking solution for first responders. Real-time vehicle locations enable dispatchers to send the closest available unit to every incident, reducing response times when every second counts. Incident coordination features help multiple units work together effectively at the scene. Historical data analysis identifies patterns and opportunities for resource optimization. From ambulance services to fire departments and law enforcement, our solution helps protect communities.",
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
  imageUrl: "https://images.unsplash.com/photo-1586528116493-ce25d2e5f4b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  stats: [
    { label: "Response Time", value: "-32%", icon: Clock },
    { label: "Coverage Area", value: "+45%", icon: Globe },
    { label: "Resource Efficiency", value: "+38%", icon: TrendingUp },
  ],
};
