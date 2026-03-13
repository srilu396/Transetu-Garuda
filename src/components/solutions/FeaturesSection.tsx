"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Feature } from "@/content/solutions";

interface FeaturesSectionProps {
  features: Feature[];
  overview: string;
}

export default function FeaturesSection({ features, overview }: FeaturesSectionProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section className="py-24 relative bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-8 tracking-tight text-slate-900 leading-tight">
              Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Capabilities</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              {overview}
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group bg-slate-50 border border-slate-100 rounded-[2rem] p-8 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white shadow-sm mb-6 text-[#6467f2] group-hover:bg-[#6467f2] group-hover:text-white transition-all duration-300">
                {React.cloneElement(feature.icon as React.ReactElement, { className: "w-7 h-7" })}
              </div>
              <h3 className="text-lg font-bold mb-3 text-slate-900">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
