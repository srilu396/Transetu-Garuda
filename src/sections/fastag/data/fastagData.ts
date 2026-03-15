import { SolutionData } from "../../gps/data/gpsData";

export const fastagSolutions: Record<string, SolutionData> = {
  "fastag-management": {
    title: "FASTag Management Dashboard",
    tagline: "Centralized Toll Management for Your Entire Fleet",
    overview: "Simplify toll management with our integrated FASTag platform. Automated recharges ensure tags never run out of balance, preventing delays and fines at toll plazas.",
    features: [
      { title: "Auto Recharge", description: "Automated funds top-up when balance is low.", icon: "zap" },
      { title: "Real-time Tracking", description: "Monitor all toll transactions as they happen.", icon: "activity" },
      { title: "Expense Reports", description: "Detailed analytic reports for toll spending.", icon: "bar-chart" },
      { title: "Balance Alerts", description: "Instant notifications for low balance status.", icon: "bell" },
    ],
    benefits: [
      { title: "Zero Delays", description: "Eliminate toll payment delays with auto-recharge.", icon: "clock" },
      { title: "Cost Savings", description: "Reduce administrative work by 90%.", icon: "shield" },
    ],
    useCases: [
      { title: "Commercial Fleets", description: "Managing toll payments for large vehicle networks." },
      { title: "Transport Agencies", description: "Streamlining toll expenses for client billing." },
    ],
    imageUrl: "https://images.unsplash.com/photo-1586528116493-ce25d2e5f4b5?auto=format&fit=crop&q=80",
    seoMeta: {
      title: "FASTag management | Garuda OM",
      description: "Automated toll payments and centralized FASTag management for fleets. Buy FASTag and monitor transactions in real-time.",
    },
  },
};
