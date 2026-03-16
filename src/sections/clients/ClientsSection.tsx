"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Truck, 
  Ship, 
  Pickaxe, 
  Factory
} from "lucide-react";

const clients = [
  { name: "ONGC", icon: Factory, industry: "Energy & Petroleum" },
  { name: "Maha Cement", icon: Building2, industry: "Construction" },
  { name: "Maersk", icon: Ship, industry: "Global Logistics" },
  { name: "TS Mining", icon: Pickaxe, industry: "Mining & Minerals" },
  { name: "AP Mining", icon: Pickaxe, industry: "Resource Extraction" },
  { name: "AP Transportation", icon: Truck, industry: "Logistics" },
  { name: "Singareni Mining", icon: Pickaxe, industry: "Coal Mining" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
  hover: {
    y: -12,
    scale: 1.02,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 17,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 17,
    },
  },
};

const cardBorderVariants = {
  hover: {
    borderColor: "rgba(249, 115, 22, 0.4)",
    boxShadow: "0 30px 60px -15px rgba(0,0,0,0.45), 0 0 0 2px rgba(249, 115, 22, 0.1)",
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

const iconVariants = {
  hover: {
    rotate: [0, -5, 5, -5, 0],
    scale: 1.1,
    transition: {
      duration: 0.5,
      ease: "easeInOut" as const,
    },
  },
};

export default function ClientsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background purely for subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-wider mb-6"
          >
            Trust & Partners
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-slate-900"
          >
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Client Organizations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            We proudly support leading organizations across logistics, mining, transportation, and industrial sectors by providing advanced fleet technology and monitoring solutions.
          </motion.p>
        </div>

        {/* Client Cards Grid with Enhanced Animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                whileTap="tap"
                custom={index}
                className="group relative bg-white border-2 border-slate-200/60 rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
              >
                {/* Border overlay with hover animation */}
                <motion.div 
                  variants={cardBorderVariants}
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    border: "2px solid transparent",
                  }}
                />
                
                {/* Icon with animation */}
                <motion.div 
                  variants={iconVariants}
                  whileHover="hover"
                  className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300 relative z-10"
                >
                  <Icon className="w-8 h-8 text-primary" />
                </motion.div>
                
                {/* Client Name */}
                <h3 className="font-bold text-slate-900 mb-1 relative z-10 group-hover:text-primary transition-colors duration-300">
                  {client.name}
                </h3>
                
                {/* Industry */}
                <p className="text-xs font-semibold text-primary/70 uppercase tracking-widest relative z-10">
                  {client.industry}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}