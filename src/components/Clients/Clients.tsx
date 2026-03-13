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

export default function ClientsSection() {
  return (
    <section id="clients" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 rounded-full"
          >
            Our Network
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6 tracking-tight"
          >
            <span className="text-gradient">What Our Clients Say</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Garuda OM is trusted by leading organizations globally for our robust GPS tracking, 
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
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative flex flex-col justify-center items-center h-44 px-4 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-[2rem] shadow-sm hover:shadow-xl hover:bg-white hover:border-primary/20 transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2rem] opacity-0 group-hover:opacity-100 blur transition duration-500" />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-4 p-4 bg-slate-50 rounded-2xl group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                  <client.icon className="w-8 h-8 text-slate-400 group-hover:text-primary transition-colors duration-300" />
                </div>
                <span className="text-xs font-black text-slate-500 group-hover:text-slate-900 uppercase tracking-widest text-center transition-colors duration-300">
                  {client.name}
                </span>
                <div className="mt-4 w-4 h-1 bg-slate-200 rounded-full group-hover:w-12 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
