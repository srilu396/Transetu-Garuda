"use client";

import React from "react";
import { motion } from "framer-motion";
import { Benefit } from "@/data/solutions";

interface BenefitsSectionProps {
  benefits: Benefit[];
}

export default function BenefitsSection({ benefits }: BenefitsSectionProps) {
  return (
    <section className="py-24 bg-slate-50 text-slate-900 border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight text-slate-900">
              Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Impact</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
              Measurable results that drive operational excellence and bottom-line growth.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 text-[#6467f2] group-hover:bg-[#6467f2] group-hover:text-white transition-all duration-500">
                {React.cloneElement(benefit.icon as React.ReactElement, { className: "w-8 h-8" })}
              </div>
              <h3 className="text-2xl font-black mb-4 text-slate-900 leading-tight">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-semibold text-[15px]">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
