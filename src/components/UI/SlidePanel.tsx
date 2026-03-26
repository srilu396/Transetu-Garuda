"use client";

import React, { useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  LucideIcon,
  Zap,
  Activity,
  Box,
  ChevronRight,
} from "lucide-react";
import { SolutionData } from "@/sections/gps/data/gpsData";
import { IndustryData } from "@/sections/industries/data/industriesData";
import GPSDetailWrapper from "@/sections/gps/GPSTrackingDetails";
import IndustryDetailWrapper from "@/sections/industries/IndustryDetails";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

interface SlidePanelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon | React.ReactNode;
  category?: string;
  layoutType?: "split" | "grid";
  solutionData?: SolutionData;
  industryData?: IndustryData;
  children?: React.ReactNode;
}

export default function SlidePanel({
  isOpen,
  onClose,
  title,
  description,
  features,
  icon: Icon,
  category = "Premium Feature",
  layoutType = "split",
  solutionData,
  industryData,
  children,
}: SlidePanelProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Prevent scrolling when panel is open and handle browser history
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Push state for deep linking
      const hash = `#${title.toLowerCase().replace(/\s+/g, "-")}`;
      window.history.pushState({ panelOpen: true, id: hash }, "", hash);
    } else {
      document.body.style.overflow = "unset";
      // Clean up hash if panel closes via UI, not via back button
      if (window.location.hash) {
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
      }
    }

    const handlePopState = () => {
      if (isOpen) {
        onClose();
        // Browser already removed the hash on back, so we don't need to replaceState
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isOpen, onClose, title]);

  const panelVariants: Variants = {
    hidden: { x: "100%", opacity: 0.8 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 35,
        stiffness: 300,
        mass: 1,
      },
    },
    exit: {
      x: "100%",
      opacity: 0.5,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const renderIcon = (
    IconInput: LucideIcon | React.ReactNode,
    size: number = 28,
  ) => {
    if (!IconInput) return <Box size={size} />;
    if (typeof IconInput === "function") {
      const LucideIconComp = IconInput as LucideIcon;
      return <LucideIconComp size={size} />;
    }
    if (React.isValidElement(IconInput)) {
      return React.cloneElement(IconInput as React.ReactElement, { size });
    }
    return <Box size={size} />;
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          {/* Panel */}
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative h-full w-full bg-white shadow-[-20px_0_60px_rgba(0,0,0,0.15)] flex flex-col"
          >
            {/* Unified Top Header - Navigation only */}
            <div className="relative z-[200]">
              <Navbar />
            </div>

            <div className="flex-grow overflow-y-auto overflow-x-hidden custom-scrollbar bg-white">
              {children ? (
                <div className="flex flex-col min-h-full">
                  {children}
                  <Footer />
                </div>
              ) : solutionData ? (
                <div className="flex flex-col">
                  <GPSDetailWrapper
                    data={solutionData}
                    showNavbarFooter={false}
                    onBack={onClose}
                  />
                  <Footer />
                </div>
              ) : industryData ? (
                <div className="flex flex-col">
                  <IndustryDetailWrapper
                    industry={industryData}
                    showNavbarFooter={false}
                    onBack={onClose}
                  />
                  <Footer />
                </div>
              ) : (
                <div ref={scrollContainerRef}>
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32"
                  >
                    {/* Header Info */}
                    <motion.div
                      variants={fadeIn}
                      className="mb-16 text-center max-w-4xl mx-auto"
                    >
                      <div className="inline-flex items-center px-4 py-1.5 bg-[#6467f2]/10 border border-[#6467f2]/20 text-[#6467f2] text-xs font-black uppercase tracking-widest mb-6">
                        {category}
                      </div>
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1] uppercase">
                        {title}
                      </h1>
                      <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
                        {description}
                      </p>
                    </motion.div>

                    {layoutType === "split" ? (
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Left Side: Visual Content (60%) */}
                        <motion.div
                          variants={fadeIn}
                          className="lg:col-span-7 relative"
                        >
                          <div className="relative z-10 bg-white p-6 shadow-xl border border-slate-800/10 h-full min-h-[500px] flex flex-col">
                            {/* Visualization Dashboard */}
                            <div className="bg-slate-50 border border-slate-200 flex-grow flex flex-col">
                              <div className="h-12 border-b border-slate-200 px-6 flex items-center justify-between bg-white">
                                <div className="flex gap-2">
                                  <div className="w-3 h-3 bg-red-400" />
                                  <div className="w-3 h-3 bg-amber-400" />
                                  <div className="w-3 h-3 bg-emerald-400" />
                                </div>
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                                  Garuda Enterprise Dashboard
                                </div>
                              </div>
                              <div className="flex-grow p-6 space-y-6 overflow-hidden bg-slate-100">
                                <div className="grid grid-cols-2 gap-6">
                                  <div className="h-32 bg-white border border-slate-200 p-5 flex flex-col justify-between shadow-sm">
                                    <Activity className="text-[#6467f2] w-6 h-6" />
                                    <div>
                                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                                        REAL-TIME LATENCY
                                      </p>
                                      <p className="text-2xl font-black text-slate-900">
                                        &lt;10MS
                                      </p>
                                    </div>
                                  </div>
                                  <div className="h-32 bg-[#6467f2] p-5 flex flex-col justify-between shadow-md">
                                    <Zap className="text-white w-6 h-6" />
                                    <div className="text-white">
                                      <p className="text-[9px] font-black text-white/60 uppercase tracking-widest">
                                        SYSTEM UPTIME
                                      </p>
                                      <p className="text-2xl font-black">
                                        99.99%
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                <div className="h-64 bg-slate-900 relative group border border-slate-800">
                                  <div
                                    className="absolute inset-0 opacity-20"
                                    style={{
                                      backgroundImage:
                                        "linear-gradient(#6467f2 1px, transparent 1px), linear-gradient(90deg, #6467f2 1px, transparent 1px)",
                                      backgroundSize: "30px 30px",
                                    }}
                                  />
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                      animate={{ scale: [1, 1.1, 1] }}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "linear",
                                      }}
                                      className="w-16 h-16 bg-[#6467f2]/20 border border-[#6467f2]/40 flex items-center justify-center"
                                    >
                                      <div className="w-4 h-4 bg-[#6467f2] shadow-[0_0_20px_#6467f2]" />
                                    </motion.div>
                                  </div>
                                  <div className="absolute bottom-4 left-4 right-4 h-12 bg-black/50 backdrop-blur-md border border-white/10 flex items-center px-4 justify-between">
                                    <div className="flex items-center gap-3">
                                      <div className="w-2 h-2 bg-emerald-400 animate-pulse" />
                                      <span className="text-[10px] font-black text-white uppercase tracking-widest">
                                        LIVE TRACKING ACTIVE
                                      </span>
                                    </div>
                                    <ChevronRight className="text-white/40 w-5 h-5" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>

                        {/* Right Side: Content (40%) */}
                        <motion.div
                          variants={fadeIn}
                          className="lg:col-span-5 space-y-12"
                        >
                          <div className="space-y-8">
                            <h4 className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-[#6467f2]">
                              <span className="w-12 h-[2px] bg-[#6467f2]"></span>
                              TECHNICAL SPECIFICATIONS
                            </h4>

                            <div className="grid gap-4">
                              {features.map((feature, index) => (
                                <motion.div
                                  key={index}
                                  whileHover={{ x: 5 }}
                                  className="flex items-start gap-4 p-5 bg-white border border-slate-800/10 shadow-sm hover:border-[#6467f2]/50 transition-all duration-300 group"
                                >
                                  <div className="flex-shrink-0 w-8 h-8 bg-[#6467f2]/10 text-[#6467f2] flex items-center justify-center group-hover:bg-[#6467f2] group-hover:text-white transition-all duration-300 rounded-sm">
                                    <CheckCircle2 size={18} />
                                  </div>
                                  <span className="text-slate-900 font-bold text-base uppercase tracking-tight leading-snug pt-1">
                                    {feature}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-4">
                            <button className="w-full h-16 bg-[#6467f2] text-white font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#5a5ce0] transition-colors">
                              REQUEST ENTERPRISE CONSULTATION
                              <ArrowRight size={20} />
                            </button>
                          </div>
                        </motion.div>
                      </div>
                    ) : (
                      <div className="space-y-16">
                        {/* Grid Layout features */}
                        <motion.div
                          variants={fadeIn}
                          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                          {features.map((feature, index) => (
                            <div
                              key={index}
                              className="p-8 bg-white border border-slate-800/10 shadow-sm hover:border-[#6467f2]/50 transition-all duration-300 group"
                            >
                              <div className="w-14 h-14 bg-[#6467f2]/10 text-[#6467f2] flex items-center justify-center mb-6 group-hover:bg-[#6467f2] group-hover:text-white transition-all duration-300 rounded-sm">
                                {renderIcon(Icon, 28)}
                              </div>
                              <h3 className="text-lg font-black text-slate-900 mb-4 uppercase tracking-tighter">
                                {feature}
                              </h3>
                              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                                Detailed analysis and intelligent monitoring
                                designed to optimize your fleet's{" "}
                                {feature.toLowerCase()}.
                              </p>
                            </div>
                          ))}
                        </motion.div>

                        <motion.div variants={fadeIn} className="text-center">
                          <button className="inline-flex items-center justify-center gap-3 px-10 h-16 bg-[#6467f2] text-white font-black text-sm uppercase tracking-widest hover:bg-[#5a5ce0] transition-colors rounded-none">
                            GET STARTED WITH {title}
                            <ArrowRight size={20} />
                          </button>
                        </motion.div>
                      </div>
                    )}
                    <div className="mt-32 pt-16 border-t border-slate-800/10 flex flex-col md:flex-row justify-between items-center gap-6">
                      <div className="text-left">
                        <h5 className="font-black text-slate-900 text-lg uppercase tracking-tight">
                          Garuda Enterprise GPS
                        </h5>
                        <p className="text-sm font-medium text-slate-600 mt-1">
                          Industrial-Grade Tracking Solutions
                        </p>
                      </div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-4">
                        <span>© 2026</span>
                        <span className="w-1 h-1 bg-slate-300" />
                        <span>All Rights Reserved</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
