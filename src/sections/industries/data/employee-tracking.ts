import { IndustryData } from "./industriesData";

export const employeeTracking: IndustryData = {
  slug: "employee-tracking",
  title: "Employee Tracking",
  description: "Monitor and optimize field agent operations with real-time location tracking, task management, and productivity analytics.",
  icon: "Users",
  features: [
    "Real-time personnel location tracking",
    "Task assignment and status updates",
    "Geofencing and route playback",
    "Automated attendance and timesheets",
  ],
  category: "Workforce",
  detailedDescription: "Our comprehensive employee tracking solution is designed to empower your mobile workforce and streamline field operations. With real-time GPS tracking and geofencing, managers gain complete visibility into agent locations and activities, ensuring safety and accountability. The platform simplifies task assignment by allowing dispatchers to allocate jobs based on proximity and availability. Automated attendance tracking and detailed productivity reports help optimize resource management and drive business growth.",
  benefits: [
    "Increase field staff productivity by up to 25%",
    "Ensure the safety and security of remote workers",
    "Streamline dispatching with location-based assignments",
    "Automate timesheet reporting and reduce administrative overhead",
  ],
  solutions: [
    "Live Location & Route Tracking",
    "Task & Job Dispatch Management",
    "Automated Attendance & Geofencing",
    "Performance & Productivity Analytics",
  ],
  imageUrl: "/images/industries/Employee Tracking.jpg",
  stats: [
    { label: "Productivity", value: "+25%", icon: "TrendingUp" },
    { label: "Admin Work", value: "-30%", icon: "Clock" },
    { label: "Safety Score", value: "+40%", icon: "Shield" },
  ],
};
