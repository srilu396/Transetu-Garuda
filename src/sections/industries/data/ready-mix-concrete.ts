import { Factory, Package, Clock, Users } from "lucide-react";
import { IndustryData } from "./industriesData";

export const readyMixConcrete: IndustryData = {
  slug: "ready-mix-concrete",
  title: "Ready Mix Concrete",
  description: "Ensure timely concrete delivery with mixer drum rotation monitoring, slump management, and precise ETA updates for construction site coordination.",
  icon: Factory,
  features: [
    "Drum rotation monitoring",
    "Delivery time optimization",
    "Site arrival alerts",
    "Batch quality tracking",
  ],
  category: "Construction",
  detailedDescription: "Revolutionize your concrete delivery operations with specialized GPS tracking designed for ready-mix fleets. Our system monitors drum rotation to ensure concrete quality during transit, preventing material waste from delayed deliveries. Real-time tracking provides accurate ETAs to construction sites, enabling better workforce coordination and reducing wait times. Temperature monitoring alerts you to conditions that could affect concrete setting times, while automated delivery confirmation streamlines billing and reconciliation.",
  benefits: [
    "Prevent concrete waste with drum rotation monitoring",
    "Improve site coordination with accurate ETAs",
    "Reduce fuel consumption with optimized routing",
    "Eliminate billing disputes with delivery proof",
  ],
  solutions: [
    "Mixer Truck GPS Trackers",
    "Drum Rotation Sensors",
    "Delivery Management Platform",
    "Customer ETA Portal",
  ],
  imageUrl: "https://images.unsplash.com/photo-1581094794327-6e3f1f4b9a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  stats: [
    { label: "Material Waste", value: "-42%", icon: Package },
    { label: "On-Time Delivery", value: "98%", icon: Clock },
    { label: "Customer Satisfaction", value: "+45%", icon: Users },
  ],
};
