"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Feature } from "@/data/solutions";

interface FeaturesSectionProps {
  features: Feature[];
  overview: string;
}

export default function FeaturesSection({ features, overview }: FeaturesSectionProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="py-24 relative bg-slate-50 text-slate-900 border-b border-slate-100 overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-slate-200/50 to-transparent skew-x-[-10deg] transform origin-top right-[-10%] z-0"></div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-16">
          <div className="lg:col-span-5 sticky top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-6 tracking-tight text-slate-900 leading-tight">
                Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Capabilities</span>
              </h2>
              <div className="w-16 h-1.5 bg-primary rounded-full mb-8"></div>
              <p className="text-lg text-slate-600 font-medium leading-relaxed bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                {overview}
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white border border-slate-200/60 rounded-3xl p-8 hover:shadow-[0_20px_40px_-15px_rgba(var(--primary-rgb),0.15)] hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* Card highlight gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 shadow-sm mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 relative z-10">
                  {React.cloneElement(feature.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors relative z-10">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-[15px] leading-relaxed relative z-10 font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
