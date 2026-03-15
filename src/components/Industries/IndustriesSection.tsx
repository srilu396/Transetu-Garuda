"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { industries as importedIndustries, IndustryData } from "@/content/industries";
import { Building2, Flame, DrillIcon, Fuel, Shield, Activity, Gauge } from "lucide-react";
import SlidePanel from "../UI/SlidePanel";

// Add Oil & Gas to the industries list with complete detailed data
const industries: IndustryData[] = [
  ...importedIndustries,
  {
    slug: "oil-gas-operations",
    title: "Oil & Gas Operations",
    description: "Track drilling rigs, pipeline assets, and energy fleet vehicles with rugged GPS devices and fuel monitoring systems designed for remote oil field environments.",
    icon: Flame,
    category: "Energy",
    imageUrl: "/images/industries/oil-gas-operations.jpg", // Make sure to add this image
    features: [
      "Real-time drilling rig GPS tracking",
      "Pipeline asset monitoring & leak detection",
      "Fuel consumption tracking for heavy equipment",
      "Remote location satellite coverage",
      "Harsh environment certified hardware",
      "Geofencing for restricted zones",
      "Engine hours & maintenance alerts",
      "Tanker fleet management"
    ],
    stats: [
      { label: "Rigs Tracked", value: "500+", icon: DrillIcon },
      { label: "Fuel Savings", value: "25%", icon: Fuel },
      { label: "Pipeline Miles", value: "10,000+", icon: Activity }
    ],
    detailedDescription: "The oil and gas industry operates in some of the most challenging environments on earth, from remote desert locations to offshore platforms and arctic conditions. Our specialized GPS tracking solutions are engineered to withstand extreme temperatures, vibration, and harsh conditions while providing reliable real-time data on asset location, utilization, and performance. We help energy companies optimize their operations by tracking everything from drilling rigs and pipeline inspection vehicles to fuel trucks and service fleet. Our integrated fuel monitoring systems provide critical insights into consumption patterns, helping detect theft and inefficiencies that can cost millions annually. With satellite-based communication ensuring coverage even in the most remote locations, our solutions give energy companies complete visibility and control over their valuable assets, improving safety, reducing downtime, and maximizing operational efficiency.",
    solutions: [
      "Drilling Rig GPS Tracking",
      "Pipeline Asset Monitoring",
      "Fuel Theft Detection System",
      "Heavy Equipment Telematics",
      "Tanker Fleet Management",
      "Remote Location Satellite Tracking",
      "Well Site Security Monitoring",
      "Equipment Maintenance Alerts"
    ],
    benefits: [
      "Reduce fuel theft by up to 30% with real-time consumption monitoring",
      "Minimize downtime with predictive maintenance alerts",
      "Improve safety with geofencing and restricted zone alerts",
      "Optimize rig utilization with detailed usage analytics",
      "Enhance security with tamper-proof asset tracking",
      "Lower operational costs through efficient route planning",
      "Ensure compliance with environmental and safety regulations",
      "Gain complete visibility across remote operations"
    ]
  }
];

export default function IndustriesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryData | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 17
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 17
      }
    }
  };

  const cardBorderVariants = {
    hover: {
      borderColor: "rgba(249, 115, 22, 0.4)",
      boxShadow: "0 30px 60px -15px rgba(0,0,0,0.45), 0 0 0 2px rgba(249, 115, 22, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: [0, -5, 5, -5, 0],
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeInOut" as const
      }
    }
  };

  const badgeVariants = {
    hover: {
      opacity: 0.9,
      transition: { duration: 0.2 }
    }
  };

  const handleIndustryClick = (industry: IndustryData) => {
    setSelectedIndustry(industry);
  };

  const handleClosePanel = () => {
    setSelectedIndustry(null);
  };

  return (
    <section
      id="industries"
      className="py-24 bg-[#fef2cb] text-slate-900 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-wider mb-6"
          >
            Custom Solutions
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-slate-900"
          >
            Industries <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">We Serve</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            From logistics to healthcare, our specialized GPS and FASTag
            solutions are designed to meet the unique challenges of every
            sector.
          </motion.p>
        </div>

        {/* Industry Grid - Compact Cards with Animations */}
        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-80px" }}
           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-fr"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                viewport={{ once: true }}
                custom={index}
                className="group relative h-full cursor-pointer"
                onClick={() => handleIndustryClick(industry)}
              >
                <div className="h-full flex flex-col bg-white border-2 border-slate-200/60 rounded-xl p-5 transition-all duration-300 relative">
                  {/* Border overlay with hover animation */}
                  <motion.div 
                    variants={cardBorderVariants}
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                      border: "2px solid transparent",
                    }}
                  />
                  
                  {/* Icon & Title Row */}
                  <div className="flex items-center gap-3 mb-3 relative z-10">
                    <motion.div 
                      variants={iconVariants}
                      className="w-10 h-10 bg-gradient-to-br from-primary/15 to-accent/15 rounded-lg flex items-center justify-center text-primary group-hover:bg-gradient-primary transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                    <h3 className="text-base font-bold group-hover:text-primary transition-colors text-slate-900 line-clamp-1">
                      {industry.title}
                    </h3>
                  </div>

                  {/* Short Description */}
                  <p className="text-slate-600 text-xs leading-relaxed mb-3 line-clamp-2 relative z-10">
                    {industry.description}
                  </p>

                  {/* Category badge - part of system, secondary to icon/title */}
                  <motion.div
                    variants={badgeVariants}
                    className="mt-auto relative z-10 w-fit"
                  >
                    <span className="inline-block rounded-md border border-primary/25 bg-gradient-to-r from-primary/10 to-accent/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-primary/90">
                      {industry.category}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Custom Solution Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 relative text-center bg-white rounded-2xl p-8 lg:p-12 border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden"
        >
          {/* Background Decorative Gradients */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-primary/15 to-accent/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tl from-primary/10 to-accent/15 rounded-full blur-3xl -ml-40 -mb-40"></div>

          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-extrabold mb-4 text-slate-900 tracking-tight">
              Don't see your <span className="text-primary">industry listed?</span>
            </h3>
            <p className="text-base text-slate-600 font-medium mb-6 max-w-2xl mx-auto leading-relaxed">
              Our technology is highly adaptable. Contact us to discuss how we can
              build a custom tracking solution for your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 30px -5px rgba(var(--primary-rgb), 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary text-white font-bold h-12 px-8 transition-all shadow-xl shadow-primary/30 w-full sm:w-auto text-sm"
              >
                Consult Our Experts
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-300 text-slate-800 hover:border-primary hover:text-primary font-bold h-12 px-8 transition-all w-full sm:w-auto bg-transparent text-sm"
              >
                Request Customization
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <SlidePanel
        isOpen={!!selectedIndustry}
        onClose={handleClosePanel}
        title={selectedIndustry?.title || ""}
        description={selectedIndustry?.description || ""}
        features={selectedIndustry?.features || []}
        icon={selectedIndustry?.icon || Building2}
        category={selectedIndustry?.category || "Industry Solution"}
        industryData={selectedIndustry || undefined}
      />
    </section>
  );
}