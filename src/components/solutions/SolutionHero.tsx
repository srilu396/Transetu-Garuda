"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import GPSVisual from "../GPSVisual";
import { Feature } from "@/data/solutions";

interface SolutionHeroProps {
  title: string;
  tagline: string;
  overview?: string;
  features?: Feature[];
  bgColor: string;
}

export default function SolutionHero({ title, tagline, overview, features, bgColor }: SolutionHeroProps) {
  const isGPSSolution = title.toLowerCase().includes("gps") || title.toLowerCase().includes("tracking");

  return (
    <section 
      className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              rotate: [0, 45, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-primary/20 rounded-full blur-[150px]"
         />
         <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.15, 0.1],
              x: [0, 100, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-10%] right-[-5%] w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px]"
         />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.4)_0%,transparent_50%)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-white/40 rounded-full text-[#6467f2] text-[10px] font-bold uppercase tracking-[0.2em] mb-8 shadow-sm">
              <Shield className="w-3.5 h-3.5" />
              Advanced Fleet Intelligence
            </div>
            
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight">
              {title}
            </h1>
            
            <p className="text-xl md:text-2xl text-[#6467f2] font-bold leading-relaxed mb-6">
              {tagline}
            </p>

            {overview && (
              <p className="text-lg text-slate-600 font-medium leading-[1.6] mb-10 max-w-xl">
                {overview}
              </p>
            )}

            {isGPSSolution && features && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-12">
                {features.slice(0, 4).map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-700 font-bold">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#6467f2]/10 flex items-center justify-center text-[#6467f2]">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{feature.title}</span>
                  </div>
                ))}
              </div>
            )}
 
            <div className="flex flex-col sm:flex-row gap-5">
               <button className="h-14 px-8 bg-[#6467f2] text-white rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-[0_15px_30px_rgba(100,103,242,0.3)] hover:bg-[#5a5ce0] transition-all transform hover:-translate-y-1">
                 Request a Demo
                 <ArrowRight className="w-4 h-4" />
               </button>
               <button className="h-14 px-8 bg-white border border-slate-200 text-slate-900 rounded-2xl font-black text-sm flex items-center justify-center hover:bg-slate-50 transition-all">
                 View Technical Specs
               </button>
            </div>
          </motion.div>
  
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {isGPSSolution ? (
              <div className="relative">
                <div className="absolute -inset-10 bg-[#6467f2]/10 rounded-full blur-[100px] opacity-50" />
                <GPSVisual />
              </div>
            ) : (
              /* Visual element representing a hub/control center */
              <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-[3rem] rotate-3 blur-2xl"></div>
                <div className="relative h-full bg-white/40 backdrop-blur-xl border border-white/50 rounded-[3rem] shadow-2xl p-12 flex items-center justify-center overflow-hidden">
                  <motion.div
                    animate={{ 
                      y: [0, -20, 0],
                      rotateY: [0, 10, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                  >
                    <div className="w-40 h-40 rounded-[2.5rem] bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl shadow-primary/40">
                      <Zap className="w-20 h-20 text-white" />
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
