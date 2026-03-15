import { Car, Shield, Users, Clock } from "lucide-react";
import { IndustryData } from "./industriesData";

export const personalVehicleSecurity: IndustryData = {
  slug: "personal-vehicle-security",
  title: "Personal Vehicle Security",
  description: "Safeguard personal vehicles with discreet GPS trackers, geofence alerts, and smartphone monitoring for family safety and theft prevention.",
  icon: Car,
  features: [
    "Real-time vehicle location",
    "Geofence entry/exit alerts",
    "Driving behavior reports",
    "Emergency SOS alerts",
  ],
  category: "Personal",
  detailedDescription: "Protect what matters most with our personal vehicle security solutions. Discreet GPS trackers provide real-time location monitoring through your smartphone, with instant alerts if your vehicle enters or leaves designated areas. Driving behavior reports help parents monitor teen drivers and promote safer habits. In emergencies, the SOS button sends immediate alerts with your location to pre-selected contacts. Whether protecting your daily driver, RV, or classic car collection, our solution provides peace of mind 24/7.",
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
  imageUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  stats: [
    { label: "Theft Recovery", value: "98%", icon: Shield },
    { label: "User Satisfaction", value: "4.8/5", icon: Users },
    { label: "Response Time", value: "< 30 sec", icon: Clock },
  ],
};
