import { IndustryData } from "./industriesData";

export const emergencyServices: IndustryData = {
  slug: "emergency-services",
  title: "Emergency Services",
  description: "Improve response times and coordinate emergency vehicles with real-time GPS tracking, optimized dispatching, and integrated communication tools.",
  icon: "Siren",
  features: [
    "Real-time vehicle tracking",
    "Optimized dispatching",
    "Integrated communication",
    "Emergency response coordination",
  ],
  category: "Public Safety",
  detailedDescription: "Enhance the effectiveness of your emergency response with our integrated dispatch and tracking solution. Our platform provides real-time location data for all your emergency vehicles, enabling dispatchers to send the closest unit to an incident. Optimized routing and traffic data help reduce response times. Integrated communication tools allow for seamless coordination between dispatchers and first responders. Improve situational awareness and save lives with a solution designed for the unique demands of emergency services.",
  benefits: [
    "Reduce emergency response times by 30%",
    "Improve situational awareness for first responders",
    "Optimize vehicle dispatching and routing",
    "Enhance coordination between agencies",
  ],
  solutions: [
    "Emergency Vehicle GPS Tracking",
    "Computer-Aided Dispatch (CAD)",
    "Integrated Communication Platform",
    "Real-time Traffic & Routing",
  ],
  imageUrl: "/images/Industries/Emergency Services.jpg",
  stats: [
    { label: "Response Time", value: "-30%", icon: "Clock" },
    { label: "Situational Awareness", value: "+90%", icon: "Eye" },
    { label: "Efficiency", value: "+40%", icon: "TrendingUp" },
  ],
};
