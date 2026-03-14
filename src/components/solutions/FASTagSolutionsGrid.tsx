"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  History,
  LayoutDashboard,
  Bell,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const fastagSolutions = [
  {
    title: "Automatic FASTag Recharge",
    description: "Automatically recharge FASTag accounts when the balance drops below a defined threshold to avoid toll payment interruptions.",
    icon: Zap,
    slug: "fastag-recharge",
  },
  {
    title: "Toll Transaction History",
    description: "Track and review all toll transactions for each vehicle with detailed reports and timestamps.",
    icon: History,
    slug: "fastag-history",
  },
  {
    title: "Fleet-wide FASTag Management",
    description: "Manage FASTag accounts for multiple vehicles from a centralized dashboard.",
    icon: LayoutDashboard,
    slug: "fastag-fleet",
  },
  {
    title: "Balance Monitoring & Alerts",
    description: "Receive alerts when FASTag balance is low to ensure uninterrupted toll payments.",
    icon: Bell,
    slug: "fastag-balance",
  },
  {
    title: "Toll Expense Reports",
    description: "Generate monthly or custom toll expense reports for better financial tracking and fleet budgeting.",
    icon: BarChart3,
    slug: "fastag-reports",
  },
];

export default function FASTagSolutionsGrid() {
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
    <section className="py-20 bg-white">
      <div className="container-padding max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {fastagSolutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={[
                "group relative h-full flex flex-col items-center text-center",
                "rounded-3xl p-8 lg:p-10",
                "bg-white border border-slate-100",
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
                  <solution.icon
                    size={32}
                    className="text-primary group-hover:text-white transition-colors duration-300"
                  />
                </div>

                <h3 className="text-xl font-bold mb-4 text-slate-900 tracking-tight group-hover:text-primary transition-colors duration-300">
                  {solution.title}
                </h3>

                <p className="text-sm text-slate-600 font-medium leading-relaxed mb-8 flex-grow">
                  {solution.description}
                </p>

                <Link
                  href={`/solutions/${solution.slug}`}
                  className={[
                    "group/btn flex items-center justify-center gap-2",
                    "py-3.5 px-4 rounded-full",
                    "text-sm font-bold transition-all duration-300",
                    "bg-[#6467f2] hover:bg-[#5a5ce0] text-white",
                    "shadow-md hover:shadow-xl hover:shadow-[#6467f2]/20",
                    "group-hover:translate-y-[-2px]",
                    "w-full mt-auto",
                  ].join(" ")}
                >
                  <span className="text-sm font-bold text-white">
                    Learn More
                  </span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
