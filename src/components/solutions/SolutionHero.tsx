"use client";

import React from "react";
import { motion } from "framer-motion";

interface SolutionHeroProps {
  title: string;
  tagline: string;
  bgColor: string;
}

export default function SolutionHero({ title, tagline, bgColor }: SolutionHeroProps) {
  // Split the title roughly in half for accenting
  const titleParts = title.split(" ");
  const half = Math.ceil(titleParts.length / 2);
  const firstHalf = titleParts.slice(0, half).join(" ");
  const secondHalf = titleParts.slice(half).join(" ");

  return (
    <section 
      className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* Dynamic Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-white/40 rounded-full blur-[100px]"
         />
         <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, 100, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-black/5 rounded-full blur-[100px]"
         />
         {/* Subtle pattern overlay */}
         <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center px-4 py-1.5 bg-white/60 backdrop-blur-md border border-white/40 rounded-full text-slate-800 text-xs font-bold uppercase tracking-wider mb-8 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Solution Overview
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-8 leading-[1.1] tracking-tight drop-shadow-sm">
              {firstHalf} <span className="text-primary bg-clip-text bg-gradient-to-r from-primary to-accent relative inline-block">
                {secondHalf}
                {/* Decorative underline */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed max-w-3xl border-l-4 border-primary/30 pl-6 bg-white/20 p-4 rounded-r-2xl backdrop-blur-sm shadow-sm">
              {tagline}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
