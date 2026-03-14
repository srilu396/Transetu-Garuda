"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Truck, 
  Ship, 
  Pickaxe, 
  Factory, 
  Globe, 
  Zap 
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

const itemVariants = {
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
};

export default function ClientsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background purely for subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                  borderColor: "rgba(var(--primary-rgb), 0.3)"
                }}
                className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 shadow-sm group"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{client.name}</h3>
                <p className="text-xs font-semibold text-primary/70 uppercase tracking-widest">{client.industry}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
