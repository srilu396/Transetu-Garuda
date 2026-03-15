import { GraduationCap, Users, TrendingUp, Navigation } from "lucide-react";
import { IndustryData } from "./industriesData";

export const schoolFleetSafety: IndustryData = {
  slug: "school-fleet-safety",
  title: "School Fleet Safety",
  description: "Protect students with comprehensive school bus monitoring, driver behavior analysis, and instant parent notifications through GPS-enabled safety systems.",
  icon: GraduationCap,
  features: [
    "Student boarding alerts",
    "Driver safety monitoring",
    "Route adherence tracking",
    "Parent communication portal",
  ],
  category: "Education",
  detailedDescription: "Ensure the safest possible transportation for students with our comprehensive school bus tracking and safety platform. Our system provides real-time visibility into every school bus in your fleet, with instant notifications to parents when children board or exit the vehicle. Driver behavior monitoring helps identify and correct unsafe driving patterns, while geofencing ensures buses stay on approved routes. The parent communication portal provides peace of mind with live bus tracking and estimated arrival times at designated stops.",
  benefits: [
    "Real-time parent notifications for boarding and drop-off",
    "Reduce idling time and fuel consumption",
    "Ensure route compliance with geofence alerts",
    "Improve driver accountability with behavior monitoring",
  ],
  solutions: [
    "School Bus GPS Trackers",
    "Parent Mobile App",
    "Driver Safety Dashboard",
    "Route Compliance System",
  ],
  imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  stats: [
    { label: "Student Safety", value: "100% visibility", icon: Users },
    { label: "Parent Satisfaction", value: "95%+", icon: TrendingUp },
    { label: "Route Adherence", value: "99.9%", icon: Navigation },
  ],
};
