"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Mountain, 
  Truck, 
  Globe, 
  ShieldCheck, 
  Box, 
  Factory 
} from "lucide-react";

const clients = [
  { name: "Mining Logistics", icon: Mountain },
  { name: "FastWay Trans", icon: Truck },
  { name: "Global Fleet", icon: Globe },
  { name: "Safe Move", icon: ShieldCheck },
  { name: "Urban Cargo", icon: Box },
  { name: "Heavy Haul", icon: Factory },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-[#fdf1cd] border-y border-black/5">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-20 px-4">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight"
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-800 text-lg max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Garuda Technologies is trusted by leading organizations globally for our robust GPS tracking, 
            AI-driven security, and industrial-grade logistics solutions.
          </motion.p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {clients.map((client, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.1)" 
              }}
              className="group flex flex-col justify-center items-center h-36 px-4 bg-white/60 border border-black/5 rounded-3xl shadow-sm transition-all duration-500 cursor-default"
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors duration-500">
                <client.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="text-xs font-black text-slate-900 uppercase tracking-widest text-center">
                {client.name}
              </span>
              <div className="mt-3 w-8 h-[2px] bg-primary/30 rounded-full group-hover:w-12 group-hover:bg-primary transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
