"use client";

import React from "react";
import { motion } from "framer-motion";

interface Step {
  title: string;
  description: string;
}

interface HowItWorksSectionProps {
  steps?: Step[];
}

export default function HowItWorksSection({ steps }: HowItWorksSectionProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight text-slate-900">
              How the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">System Works</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
              A seamless, automated workflow designed for high-performance fleet operations.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Horizontal line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-100 z-0">
             <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-primary to-accent shadow-[0_0_10px_rgba(var(--primary-rgb),0.3)]"
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                <div className="w-24 h-24 rounded-3xl bg-white border-2 border-slate-100 flex items-center justify-center mb-8 shadow-sm group hover:border-primary/30 transition-all duration-300 relative">
                  <div className="absolute inset-2 rounded-2xl bg-slate-50 flex items-center justify-center text-2xl font-black text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
