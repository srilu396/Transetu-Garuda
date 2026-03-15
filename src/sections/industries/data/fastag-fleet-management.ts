import { CreditCard, Clock, CheckCircle, DollarSign } from "lucide-react";
import { IndustryData } from "./industriesData";

export const fastagFleetManagement: IndustryData = {
  slug: "fastag-fleet-management",
  title: "FASTag Fleet Management",
  description: "Centralize toll payments across your entire fleet with automated FASTag recharges, transaction history, and expense reporting for simplified accounting.",
  icon: CreditCard,
  features: [
    "Auto FASTag recharge",
    "Toll transaction history",
    "Balance monitoring alerts",
    "Fleet toll expense reports",
  ],
  category: "Toll Management",
  detailedDescription: "Simplify toll management for your entire fleet with our integrated FASTag platform. Automated recharges ensure tags never run out of balance, preventing delays and fines at toll plazas. Comprehensive transaction history provides visibility into toll expenses across vehicles, routes, and time periods. Balance monitoring alerts notify you before funds run low, enabling proactive management. Detailed expense reports streamline accounting and provide data for route optimization and client billing.",
  benefits: [
    "Eliminate toll payment delays with auto-recharge",
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
  imageUrl: "https://images.unsplash.com/photo-1586528116493-ce25d2e5f4b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  stats: [
    { label: "Admin Time", value: "-90%", icon: Clock },
    { label: "Payment Delays", value: "eliminated", icon: CheckCircle },
    { label: "Cost Visibility", value: "100%", icon: DollarSign },
  ],
};
