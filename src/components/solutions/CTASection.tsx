"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CTASection({ title }: { title: string }) {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]"></div>

      <div className="max-w-7xl mx-auto container-padding">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative text-center bg-slate-900 rounded-[2.5rem] p-12 lg:p-24 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden border border-slate-800"
        >
          {/* Animated Decorative Gradients mimicking Garuda's modern SaaS aesthetic */}
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -mr-60 -mt-60 pointer-events-none"
          ></motion.div>
          <motion.div 
            animate={{ 
              rotate: -360,
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] -ml-60 -mb-60 pointer-events-none"
          ></motion.div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-8 text-white tracking-tight leading-tight drop-shadow-lg">
              Ready to deploy <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative inline-block">
                {title}?
                <svg className="absolute w-full h-4 -bottom-2 left-0 text-accent/50 drop-shadow-sm" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-300 font-medium mb-12 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
              Connect with our enterprise sales team to discuss integration, pricing, and see a live demonstration tailored to your fleet.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(100,103,242,0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-2 rounded-full bg-[#6467f2] text-white font-bold text-lg h-16 px-12 transition-all shadow-[0_0_20px_rgba(100,103,242,0.4)] w-full sm:w-auto overflow-hidden relative"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <span className="relative z-10">Contact Sales</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right relative z-10 group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 text-white font-bold text-lg h-16 px-12 transition-all w-full sm:w-auto bg-transparent backdrop-blur-sm"
              >
                Request Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
