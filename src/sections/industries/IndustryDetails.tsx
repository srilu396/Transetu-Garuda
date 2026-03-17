"use client";

import React from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { IndustryData, industries } from "@/sections/industries/data/industriesData";
import {
  CheckCircle,
  ArrowLeft,
  Lightbulb,
  ShieldCheck,
  Zap,
  BarChart3,
  Search,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface IndustryDetailWrapperProps {
  slug?: string;
  industry?: IndustryData;
  showNavbarFooter?: boolean;
  onBack?: () => void;
}

export default function IndustryDetailWrapper({
  slug,
  industry: propIndustry,
  showNavbarFooter = true,
  onBack,
}: IndustryDetailWrapperProps) {
  const router = useRouter();

  // Find industry if slug is provided, otherwise use propIndustry
  const industry = propIndustry || industries.find((i) => i.slug === slug);

  if (!industry) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search size={40} className="text-slate-400" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            Industry Not Found
          </h1>
          <p className="text-slate-600 mb-8 font-medium">
            The industry details you're looking for aren't available at the moment.
          </p>
          <button
            onClick={() => router.push("/#industries")}
            className="bg-primary text-white px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            Explore Industries
          </button>
        </div>
      </div>
    );
  }

  const Icon = industry.icon;

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  // Map icons for benefits for more variety
  const benefitIcons = [Lightbulb, ShieldCheck, Zap, BarChart3];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {showNavbarFooter && <Navbar />}

      <main className={showNavbarFooter ? "pt-24" : ""}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-7xl mx-auto container-padding py-12"
        >
          {/* Back Button */}
          <motion.button
            variants={itemVariants}
            onClick={handleBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="font-semibold uppercase tracking-wider text-xs">
              Back to {industry.category}
            </span>
          </motion.button>

          {/* Header with Industry Icon and Title */}
          <motion.div
            variants={itemVariants}
            className="mb-12 text-center max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center gap-6 mb-8">
              <div className="w-24 h-24 bg-gradient-primary rounded-3xl flex items-center justify-center shadow-xl ring-8 ring-primary/5">
                <Icon size={56} className="text-white drop-shadow-md" />
              </div>
              <div>
                <span className="text-[10px] font-black text-primary bg-primary/10 px-4 py-1.5 rounded-full inline-block mb-4 uppercase tracking-[0.2em] border border-primary/20">
                  {industry.category}
                </span>
                <h1 className="text-5xl lg:text-7xl font-black tracking-tight bg-gradient-primary bg-clip-text text-transparent uppercase py-2">
                  {industry.title}
                </h1>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
              {industry.description}
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            variants={itemVariants}
            className="relative w-full h-[400px] md:h-[550px] rounded-[2.5rem] overflow-hidden mb-52 shadow-2xl border-8 border-white group"
          >
            <img
              src={industry.imageUrl}
              alt={industry.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />

            {/* Stats Overlay */}
            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {industry.stats.map((stat, idx) => {
                const StatIcon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white/90 backdrop-blur-md p-4 rounded-2xl flex items-center gap-4 shadow-lg border border-white/20"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <StatIcon size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        {stat.label}
                      </p>
                      <p className="text-lg font-black text-slate-900 leading-none">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Main Content Sections */}
          <div className="space-y-32 mb-20">
            {/* Overview & Use Cases Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-12">
                <motion.section variants={itemVariants} className="mb-20">
                  <h2 className="text-4xl md:text-5xl font-black mb-10 text-slate-900 uppercase tracking-tighter inline-block relative">
                    Industry Overview
                    <div className="absolute -bottom-2 left-0 w-24 h-2 bg-primary rounded-full" />
                  </h2>
                  <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-5xl">
                    {industry.detailedDescription}
                  </p>
                </motion.section>
              </div>

              <div className="lg:col-span-8">
                <motion.section variants={itemVariants}>
                  <h2 className="text-3xl md:text-4xl font-black mb-12 text-slate-900 uppercase tracking-tighter inline-block relative">
                    Key Use Cases
                    <div className="absolute -bottom-2 left-0 w-24 h-2 bg-accent rounded-full" />
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {industry.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-5 p-6 rounded-3xl bg-white border-2 border-slate-100 shadow-sm group hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 text-primary mt-0.5 group-hover:bg-primary group-hover:text-white transition-colors">
                          <CheckCircle size={24} />
                        </div>
                        <p className="text-slate-800 font-bold text-base uppercase tracking-tight leading-snug">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.section>
              </div>

              <div className="lg:col-span-4">
                <motion.section
                  variants={itemVariants}
                  className="p-10 rounded-[2.5rem] bg-slate-50 border-2 border-slate-200/50 h-full relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />

                  <h2 className="text-2xl font-black mb-10 text-slate-900 uppercase tracking-tighter relative z-10">
                    Core Solutions
                  </h2>
                  <div className="flex flex-col gap-4 relative z-10">
                    {industry.solutions.map((solution, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 px-6 py-4 bg-white border-2 border-slate-200 rounded-2xl text-[11px] font-black text-slate-800 shadow-sm hover:border-primary/40 transition-all uppercase tracking-widest group"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                        {solution}
                      </div>
                    ))}
                  </div>
                </motion.section>
              </div>
            </div>

            {/* Key Benefits Full Width Section */}
            <motion.section
              variants={itemVariants}
              className="bg-white border-2 border-slate-100 p-10 md:p-16 rounded-[4rem] shadow-[0_40px_100px_rgba(0,0,0,0.05)] relative overflow-hidden"
            >
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-[60px]" />

              <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter mb-8 relative z-10 leading-none">
                  <span className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
                    Key Benefits
                  </span>{" "}
                  <br />
                  <span className="text-4xl md:text-5xl text-slate-400">
                    & Advantages
                  </span>
                </h2>
                <div className="w-32 h-2 bg-gradient-primary mx-auto rounded-full mb-10" />
                <p className="text-lg text-slate-600 font-medium">
                  Experience industrial-grade efficiency and security with our
                  specialized {industry.title.toLowerCase()} tracking platform.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {industry.benefits.map((benefit, index) => {
                  const BenefitIcon = benefitIcons[index % benefitIcons.length];
                  return (
                    <div
                      key={index}
                      className="flex flex-col gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:bg-white transition-all duration-500 group hover:shadow-2xl hover:-translate-y-2"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-gradient-primary group-hover:text-white group-hover:border-transparent transition-all duration-500 group-hover:rotate-6 shadow-sm">
                        <BenefitIcon
                          size={32}
                          className="text-primary group-hover:text-white transition-colors duration-500"
                        />
                      </div>
                      <div>
                        <p className="text-primary font-black text-[10px] uppercase tracking-[0.2em] mb-3 opacity-60">
                          Benefit {index + 1}
                        </p>
                        <p className="text-lg font-black text-slate-900 leading-tight uppercase tracking-tight mb-4">
                          {benefit.split(" ").slice(0, 2).join(" ")}
                        </p>
                        <p className="text-slate-600 font-medium leading-relaxed text-sm">
                          {benefit}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.section>
          </div>
        </motion.div>
      </main>

      {showNavbarFooter && <Footer />}
    </div>
  );
}
