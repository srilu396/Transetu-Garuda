"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Satellite, CreditCard, ArrowRight, CheckCircle2 } from "lucide-react";
import SlidePanel from "../UI/SlidePanel";
import { solutions as solutionsData, SolutionData } from "@/content/solutions";

export default function SolutionsOverviewSection() {
  const [selectedSolution, setSelectedSolution] = useState<
    (typeof solutions)[0] | null
  >(null);
  const [selectedSolutionData, setSelectedSolutionData] =
    useState<SolutionData | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const solutions = [
    {
      title: "GPS Tracking Solutions",
      description:
        "The platform provides live vehicle tracking, route history, and intelligent notifications that help fleet managers maintain full control over their operations and ensure driver safety.",
      features: [
        "Live Vehicle Tracking",
        "Route History & Geofencing",
        "Driver Behaviour Monitoring",
      ],
      icon: Satellite,
      category: "Fleet Solutions",
      layoutType: "split" as const,
      slug: "gps-tracking-solutions",
    },
    {
      title: "FASTag Management Solutions",
      description:
        "Automate toll payments, manage FASTag balances, track toll transactions, and simplify expense management for your fleet.",
      features: [
        "Automatic Toll Payments",
        "Transaction Tracking",
        "Balance & Recharge Management",
      ],
      icon: CreditCard,
      category: "Toll Feature",
      layoutType: "grid" as const,
      slug: "fastag",
    },
  ];

  const handleLearnMore = (solution: (typeof solutions)[0]) => {
    setSelectedSolution(solution);
    if (solution.slug && solutionsData[solution.slug]) {
      setSelectedSolutionData(solutionsData[solution.slug]);
    } else {
      setSelectedSolutionData(null);
    }
    setIsPanelOpen(true);
  };

  const cardVariants: Variants = {
    // ... rest of the component
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.15,
      },
    }),
  };

  return (
    <section
      id="solutions"
      className="relative py-24 overflow-hidden"
      style={{
        backgroundColor: "#fff8e7",
        backgroundImage:
          "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,248,231,1) 45%, rgba(255,245,220,1) 100%), radial-gradient(900px 380px at 22% 18%, rgba(99,102,241,0.08) 0%, rgba(99,102,241,0) 60%), radial-gradient(900px 380px at 78% 22%, rgba(236,72,153,0.08) 0%, rgba(236,72,153,0) 62%)",
      }}
    >
      {/* Soft lighting (no dots/grids/patterns) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[58%] h-[420px] w-[980px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 blur-3xl" />
        <div className="absolute left-[18%] top-[65%] h-[340px] w-[340px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[14%] top-[62%] h-[320px] w-[320px] rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6"
          >
            Our Core Expertise
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-slate-900"
          >
            Intelligent Fleet{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Management Solutions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Smart technology solutions designed to simplify fleet tracking and
            toll management.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {solutions.map((solution, index) => {
            return (
              <motion.div
                key={solution.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={[
                  "group relative h-full flex flex-col items-center text-center",
                  "rounded-3xl p-6 lg:p-8",
                  "bg-white backdrop-blur-md border border-slate-100",
                  "shadow-[0_8px_32px_rgba(0,0,0,0.08)]",
                  "hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)]",
                  "transition-all duration-500",
                  "max-w-md mx-auto w-full",
                ].join(" ")}
              >
                <div className="relative z-10 flex flex-col h-full items-center w-full">
                  {/* Compact Icon Area */}
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(115, 117, 242, 0.12)",
                      filter: "drop-shadow(0 0 12px rgba(100, 103, 242, 0.4))",
                    }}
                    className={[
                      "w-16 h-16 rounded-xl flex items-center justify-center mb-6",
                      "transition-all duration-500",
                      "bg-[#7375f2]/5",
                      "border border-[#7375f2]/10",
                    ].join(" ")}
                    style={{
                      filter: "drop-shadow(0 0 8px rgba(115, 117, 242, 0.2))",
                    }}
                  >
                    <motion.div
                      whileHover={{ color: "#6467f2" }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-center"
                    >
                      <solution.icon
                        size={32}
                        strokeWidth={2}
                        style={{ color: "#7375f2" }}
                        className="transition-colors duration-300"
                      />
                    </motion.div>
                  </motion.div>

                  <h3 className="text-xl lg:text-2xl font-bold mb-3 text-slate-800 tracking-tight">
                    {solution.title}
                  </h3>

                  <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  <div className="flex-grow flex flex-col items-center space-y-3 mb-8">
                    {solution.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2.5 text-xs lg:text-sm font-semibold text-slate-700"
                      >
                        <div className="p-1 rounded-full bg-[#7375f2]/10 text-[#7375f2]">
                          <CheckCircle2 size={14} />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <motion.button
                    onClick={() => handleLearnMore(solution)}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      backgroundColor: "#5a5ce0", // Slightly darker on hover
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
            );
          })}
        </div>
      </div>

      {selectedSolution && (
        <SlidePanel
          isOpen={isPanelOpen}
          onClose={() => {
            setIsPanelOpen(false);
            setSelectedSolutionData(null);
          }}
          title={selectedSolution.title}
          description={selectedSolution.description}
          features={selectedSolution.features}
          icon={selectedSolution.icon}
          category={selectedSolution.category}
          layoutType={selectedSolution.layoutType}
          solutionData={selectedSolutionData || undefined}
        />
      )}
    </section>
  );
}
