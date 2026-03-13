"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden" aria-label="About Company">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.article variants={itemVariants}>
            <header>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 rounded-full"
              >
                Our Legacy
              </motion.div>
              <h2
                id="about-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight"
              >
                About{" "}
                <span className="text-gradient">
                  Garuda OM
                </span>
              </h2>
            </header>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Established in <strong className="text-slate-900">2001</strong>,{" "}
                <strong className="text-slate-900">Garuda OM</strong> has been a pioneer in{" "}
                <strong className="text-slate-900 text-primary underline underline-offset-4 decoration-primary/20">GPS tracking innovation</strong>, 
                crafting intelligent solutions for fleet management, mining, logistics, and high-impact industrial operations.
              </p>
              <p>
                We deliver more than simple monitoring. Our ecosystem integrates{" "}
                <strong className="text-slate-900 italic">fuel management, temperature precision, AI-driven video surveillance</strong>, 
                and comprehensive asset protection—powering total operational transparency across the globe.
              </p>
            </div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="mt-12 p-8 bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-3xl shadow-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/10 transition-colors" />
              <h3 className="text-xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To empower global enterprises with intelligent tracking ecosystems that redefine security, 
                optimize efficiency, and provide absolute operational certainty through relentless innovation 
                and unparalleled service excellence.
              </p>
            </motion.div>
          </motion.article>

          <motion.aside variants={itemVariants} className="grid grid-cols-2 gap-6">
            {[
              { label: "Active Clients", value: "2000+", icon: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75" },
              { label: "Years Experience", value: "24+", icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20 M12 6v6l4 2" },
              { label: "Uptime Guarantee", value: "99.9%", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" },
              { label: "Industry Awards", value: "50+", icon: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6 M18 9h1.5a2.5 2.5 0 0 0 0-5H18 M4 22h16 M10 14.66V17 M14 14.66V17 M18 2H6v7a6 6 0 0 0 12 0V2Z" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 text-center rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-slate-50 group-hover:bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors">
                  <svg className="w-7 h-7 text-slate-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={stat.icon}></path>
                  </svg>
                </div>
                <p className="text-3xl font-black text-slate-900 mb-2">{stat.value}</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </motion.aside>
        </motion.div>

        <section className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-black mb-4">Our <span className="text-gradient">Core Values</span></h3>
            <p className="text-slate-500 text-lg">The principles that drive every solution we build.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Security First", desc: "Enterprise-grade protection and end-to-end encryption for every byte of your data.", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" },
              { title: "Customer Focused", desc: "Your success is our priority. We provide expert-level 24/7 dedicated support.", icon: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8" },
              { title: "Relentless Innovation", desc: "Pushing boundaries in GPS technology to solve tomorrow's logistics challenges today.", icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" },
            ].map((value, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-slate-50/50 p-10 rounded-[2.5rem] border border-transparent hover:border-primary/10 hover:bg-white hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={value.icon}></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {value.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
