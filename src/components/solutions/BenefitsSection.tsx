"use client";

import React from "react";
import { motion } from "framer-motion";
import { Benefit } from "@/data/solutions";

interface BenefitsSectionProps {
  benefits: Benefit[];
}

export default function BenefitsSection({ benefits }: BenefitsSectionProps) {
  return (
    <section className="py-24 bg-slate-50 text-slate-900 border-b border-slate-100 relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">
              Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative inline-block">Impact
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
              Measurable results that drive operational excellence and bottom-line growth.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
              className="group flex flex-col justify-center items-center text-center p-10 rounded-3xl bg-white border border-slate-200/80 hover:bg-slate-900 hover:border-slate-800 transition-all duration-500 shadow-sm hover:shadow-2xl relative overflow-hidden"
            >
              {/* Radial gradient glow effect behind icon on hover */}
              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100 shadow-inner flex items-center justify-center mb-8 text-primary group-hover:text-white group-hover:bg-white/10 group-hover:border-white/20 group-hover:-translate-y-3 group-hover:scale-110 transition-all duration-500 z-10">
                {React.cloneElement(benefit.icon as React.ReactElement, { className: "w-10 h-10" })}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-white transition-colors duration-500 z-10 w-full">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium group-hover:text-slate-300 transition-colors duration-500 z-10 w-full">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
