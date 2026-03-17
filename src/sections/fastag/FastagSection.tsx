"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function SolutionsOverviewSection() {

  const solutions = [
    {
      title: "GPS Tracking & Monitoring",
      description:
        "Live vehicle tracking, fuel sensors, route history, and driver behavior alerts for complete fleet control.",
      features: [
        "Real-time GPS Tracking",
        "Fuel Theft Detection",
        "Dash Cam Integration",
        "Driver Behavior Monitoring",
      ],
      icon: "gps", 
      imageLogo: "/images/products/GPS Tracking & Monitoring.jpg",
      category: "Fleet Solutions",
      layoutType: "split" as const,
      slug: "gps-tracking-solutions",
    },
    {
      title: "FASTag Solutions",
      description:
        "Automated toll payments for fleet owners and easy FASTag issuance for individual users. Partnership opportunities available.",
      features: [
        "Direct FASTag Purchase",
        "Toll Transaction Tracking",
        "Balance & Recharge Management",
        "Partner with Us for FASTag Business",
      ],
      icon: "fastag", 
      imageLogo: "/images/products/Fastag-solutions.jpg",
      category: "Toll Feature",
      layoutType: "grid" as const,
      slug: "fastag",
    },
  ];

  const handleLearnMore = (solution: (typeof solutions)[0]) => {
    if (solution.slug === "gps-tracking-solutions") {
      const element = document.getElementById("products");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (solution.slug === "fastag") {
      const element = document.getElementById("fastag-management");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        delay: index * 0.15,
      },
    }),
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, -3, 3, -3, 0],
      filter: "drop-shadow(0 0 12px rgba(100, 103, 242, 0.4))",
      transition: {
        duration: 0.5,
        ease: "easeInOut" as const
      }
    }
  };

  const featureItemVariants = {
    hover: (index: number) => ({
      x: 5,
      transition: {
        delay: index * 0.05,
        duration: 0.2
      }
    })
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      boxShadow: "0 20px 25px -5px rgba(100, 103, 242, 0.35)",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 17
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const cardBorderVariants = {
    hover: {
      borderColor: "rgba(236, 57, 176, 0.35)", // Changed to #ec39b0
      boxShadow: "0 30px 60px -15px rgba(0,0,0,0.45), 0 0 0 2px rgba(236, 57, 176, 0.2)", // Changed to #ec39b0
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
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
            className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-wider mb-6"
          >
            Our Expertise
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-slate-900"
          >
            GPS Telematics{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              & FASTag Integration
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Integrated vehicle tracking, fuel monitoring, and toll management systems for fleet owners and individual users.
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
                whileHover="hover"
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
                <motion.div 
                  variants={cardBorderVariants}
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    border: "2px solid transparent",
                  }}
                />
                
                <div className="relative z-10 flex flex-col h-full items-center w-full">
                  {/* Image Logo Area with enhanced animation */}
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className="w-20 h-20 rounded-xl flex items-center justify-center mb-6 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 p-2 border border-primary/10"
                  >
                    <Image
                      src={solution.imageLogo}
                      alt={`${solution.title} logo`}
                      width={64}
                      height={64}
                      className="object-contain w-full h-full"
                    />
                  </motion.div>

                  <h3 className="text-xl lg:text-2xl font-bold mb-3 text-slate-800 tracking-tight">
                    {solution.title}
                  </h3>

                  <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  {/* Features with animated items */}
                  <div className="flex-grow flex flex-col items-center space-y-3 mb-8 w-full">
                    {solution.features.map((feature, fIndex) => (
                      <motion.div
                        key={feature}
                        custom={fIndex}
                        variants={featureItemVariants}
                        whileHover="hover"
                        className="flex items-center gap-2.5 text-xs lg:text-sm font-semibold text-slate-700 w-full justify-center"
                      >
                        <motion.div 
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          className="p-1 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 text-primary flex-shrink-0"
                        >
                          <CheckCircle2 size={14} />
                        </motion.div>
                        <span className="text-left">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    onClick={() => handleLearnMore(solution)}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className={[
                      "group/btn flex items-center justify-center gap-2",
                      "py-3.5 px-4 rounded-full",
                      "text-sm font-bold transition-all duration-300",
                      "bg-gradient-primary text-white shadow-md",
                      "w-full mt-auto cursor-pointer",
                    ].join(" ")}
                  >
                    <span className="text-sm font-bold text-white">
                      Learn More
                    </span>
                    <motion.div
                      animate={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
}