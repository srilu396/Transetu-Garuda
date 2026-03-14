"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  History,
  LayoutDashboard,
  Bell,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import SlidePanel from "./SlidePanel";
import { solutions as solutionsData, SolutionData } from "@/content/solutions";

const fastagFeatures = [
  {
    title: "Automatic FASTag Recharge",
    description:
      "Automatically recharge FASTag accounts when the balance drops below a defined threshold to avoid toll payment interruptions.",
    icon: Zap,
    features: ["Threshold setting", "Auto-payment", "Notification system"],
    slug: "fastag-recharge",
    category: "FASTag Solution",
    layoutType: "grid" as const,
  },
  {
    title: "Toll Transaction History",
    description:
      "Track and review all toll transactions for each vehicle with detailed reports and timestamps.",
    icon: History,
    features: ["Real-time logs", "Detailed timestamps", "Exportable reports"],
    slug: "fastag-history",
    category: "FASTag Solution",
    layoutType: "grid" as const,
  },
  {
    title: "Fleet-wide FASTag Management",
    description:
      "Manage FASTag accounts for multiple vehicles from a centralized dashboard.",
    icon: LayoutDashboard,
    features: ["Centralized view", "Multi-vehicle support", "Easy assignment"],
    slug: "fastag-fleet",
    category: "FASTag Solution",
    layoutType: "grid" as const,
  },
  {
    title: "Balance Monitoring & Alerts",
    description:
      "Receive alerts when FASTag balance is low to ensure uninterrupted toll payments.",
    icon: Bell,
    features: [
      "Low balance alerts",
      "SMS/Email notifications",
      "Live monitoring",
    ],
    slug: "fastag-balance",
    category: "FASTag Solution",
    layoutType: "grid" as const,
  },
  {
    title: "Toll Expense Reports",
    description:
      "Generate monthly or custom toll expense reports for better financial tracking and fleet budgeting.",
    icon: BarChart3,
    features: [
      "Monthly summaries",
      "Custom date ranges",
      "Financial analytics",
    ],
    slug: "fastag-reports",
    category: "FASTag Solution",
    layoutType: "grid" as const,
  },
];

export default function FASTagManagement() {
  const [selectedFeature, setSelectedFeature] = useState<typeof fastagFeatures[0] | null>(null);
  const [selectedSolutionData, setSelectedSolutionData] = useState<SolutionData | null>(null);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="fastag-management"
      className="relative py-28 bg-gradient-to-b from-[#eef6ff] to-white text-slate-800 overflow-hidden font-sans border-t border-slate-200"
    >
      {/* Subtle Background Elements - Consistent with GPS section */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -ml-40 -mt-40 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] -mr-40 -mb-40 pointer-events-none"></div>

      <div className="container-padding max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-wider mb-6"
          >
            Garuda Toll Hub
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-extrabold mb-8 tracking-tight text-slate-900"
          >
            FASTag{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Management Solutions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Our platform helps manage FASTag toll payments for fleet vehicles
            from one centralized dashboard, reducing administrative overhead and
            ensuring smooth journeys.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {fastagFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={[
                "group relative h-full flex flex-col items-center text-center",
                "rounded-3xl p-8 lg:p-10",
                "bg-white/80 backdrop-blur-md border border-slate-100",
                "shadow-[0_8px_32px_rgba(0,0,0,0.06)]",
                "hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)]",
                "transition-all duration-500",
              ].join(" ")}
            >
              <div className="relative z-10 flex flex-col h-full items-center w-full">
                {/* Icon Area */}
                <div
                  className={[
                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-6",
                    "transition-all duration-500",
                    "bg-primary/5 group-hover:bg-primary group-hover:text-white group-hover:scale-110",
                    "border border-primary/10 group-hover:shadow-lg group-hover:shadow-primary/20",
                  ].join(" ")}
                >
                  {(() => {
                    const Icon = feature.icon;
                    return (
                      <Icon
                        size={32}
                        className="text-primary group-hover:text-white transition-colors duration-300"
                      />
                    );
                  })()}
                </div>

                <h3 className="text-xl font-bold mb-4 text-slate-900 tracking-tight group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-sm text-slate-600 font-medium leading-relaxed mb-8 flex-grow">
                  {feature.description}
                </p>

                <motion.button
                  onClick={() => {
                    setSelectedFeature(feature);
                    if (feature.slug && solutionsData[feature.slug]) {
                      setSelectedSolutionData(solutionsData[feature.slug]);
                    } else {
                      setSelectedSolutionData(null);
                    }
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#5a5ce0",
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{ backgroundColor: "#6467f2" }}
                  className={[
                    "group/btn flex items-center justify-center gap-2",
                    "py-3.5 px-4 rounded-full",
                    "text-sm font-bold transition-all duration-300",
                    "text-white shadow-md hover:shadow-xl hover:shadow-[#6467f2]/20",
                    "group-hover:translate-y-[-2px]",
                    "w-full mt-auto cursor-pointer",
                  ].join(" ")}
                >
                  <span className="text-sm font-bold text-white">
                    Learn More
                  </span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <SlidePanel
        isOpen={!!selectedFeature}
        onClose={() => {
          setSelectedFeature(null);
          setSelectedSolutionData(null);
        }}
        title={selectedFeature?.title || ""}
        description={selectedFeature?.description || ""}
        features={selectedFeature?.features || []}
        icon={selectedFeature?.icon || Zap}
        category={selectedFeature?.category || "FASTag Solution"}
        layoutType={selectedFeature?.layoutType || "grid"}
        solutionData={selectedSolutionData || undefined}
      />
    </section>
  );
}
