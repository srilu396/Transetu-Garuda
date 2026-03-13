"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  ShieldAlert, 
  Wrench, 
  BarChart3, 
  TrendingUp,
  Activity,
  Globe,
  Navigation,
  Fuel
} from "lucide-react";

// Iteration 4: Process Flow Data (5 core steps)
const workflowSteps = [
  {
    title: "Track Vehicles in Real Time",
    description: "Live maps and dashboard overview with sub-second latency.",
    icon: MapPin
  },
  {
    title: "Monitor Driver Behaviour",
    description: "Instant alerts for speeding, harsh braking, and idling.",
    icon: ShieldAlert
  },
  {
    title: "Manage Maintenance",
    description: "Track asset health, fuel monitoring, and service reminders.",
    icon: Wrench
  },
  {
    title: "Analyze Fleet Data",
    description: "Generate deep performance reports and fuel analytics.",
    icon: BarChart3
  },
  {
    title: "Optimize Operations",
    description: "Reduce downtime, improve ROI, and scale your business.",
    icon: TrendingUp
  }
];

export default function GPSSoftware() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  // Iteration 4: Strictly enforced single consistent animation
  // Slide-up with opacity transition, Hover: lift + glow border
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    // Iteration 4 Background: Reverted to soft warm tone #fef2cc for critical separation
    <section id="software" className="relative py-28 bg-[#fef2cc] text-slate-800 overflow-hidden font-sans border-t border-[#f3e3a9]">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/40 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none"></div>

      <div className="container-padding max-w-7xl mx-auto relative z-10">
        
        {/* A. Software Hero Overview */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-wider mb-6"
          >
            Software Capabilities
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
          >
            <span className="text-slate-900">The Garuda Intelligence Hub:</span>
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent inline-block pb-1 mt-2">
              {" "}Full-Scale GPS Fleet Management
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Easily monitor, manage, and optimize your fleet operations in real-time. Our software simplifies complex logistics into a clean, actionable process flow.
          </motion.p>
        </div>

        {/* B. Process Flow Container (Replaces old Feature Grid) */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 mb-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {workflowSteps.map((step, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              // STRICTLY CONSISTENT HOVER: subtle lift + glow border
              className="group relative bg-white/80 backdrop-blur-md border border-white p-6 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(var(--primary-rgb),0.15)] hover:border-primary/40 hover:ring-1 hover:ring-primary/30 flex flex-col h-full"
            >
              {/* Connected line connector for desktop only */}
              {idx !== workflowSteps.length - 1 && (
                <div className="hidden lg:block absolute top-[50px] -right-5 w-4 h-0.5 bg-primary/20 z-0 group-hover:bg-primary/50 transition-colors"></div>
              )}
              
              <div className="w-12 h-12 flex items-center justify-center rounded-xl mb-5 shadow-sm transition-colors duration-500 bg-slate-50 text-slate-700 border border-slate-100 group-hover:bg-primary group-hover:text-white group-hover:border-primary shrink-0 relative z-10">
                <step.icon className="w-6 h-6" />
                {/* Step indicator */}
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-slate-800 text-white rounded-full text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-sm group-hover:bg-accent transition-colors">
                  {idx + 1}
                </span>
              </div>
              
              <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
                {step.title}
              </h3>
              
              <p className="text-sm text-slate-600 font-medium leading-relaxed mt-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* C. Analytics & Management Mockups (Maintains the 3D dashboard supporting Step 4) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto rounded-[2rem] bg-white border border-slate-200/80 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden"
        >
          {/* Browser/App Header */}
          <div className="h-14 bg-[#f8fafc] border-b border-slate-200 flex items-center justify-between px-6 z-20 relative">
            <div className="flex gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-slate-300"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-slate-300"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-slate-300"></div>
            </div>
            <div className="flex-1 max-w-md mx-8 h-8 bg-white rounded-md border border-slate-200 flex items-center justify-center shadow-sm">
              <span className="text-[11px] uppercase font-bold text-slate-500 tracking-wider flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-primary" />
                Garuda Analytics Engine
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent shadow-sm"></div>
            </div>
          </div>

          <div className="p-4 sm:p-8 bg-slate-50/50 relative z-10 w-full">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-8 gap-4">
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Fleet Intelligence Overview</h3>
                <p className="text-slate-500 text-sm font-medium mt-1">Real-time telemetry & geospatial mapping</p>
              </div>
              <div className="flex gap-3">
                <div className="px-5 py-2.5 bg-white rounded-xl border border-slate-200 text-sm font-bold text-slate-700 shadow-sm cursor-pointer hover:bg-slate-50 transition-colors hidden sm:block">Export Data</div>
                <div className="px-5 py-2.5 bg-primary text-white rounded-xl font-bold text-sm shadow-md shadow-primary/20 hover:bg-primary/90 transition-colors cursor-pointer">Live Map</div>
              </div>
            </div>

            {/* Kpi Grid (4 Cards) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
              {[
                { l: "Total Distance", v: "14,842", u: "km", c: "text-blue-600", i: Activity },
                { l: "Fuel Consumed", v: "4,290", u: "Ltr", c: "text-amber-500", i: Fuel },
                { l: "Fleet Efficiency", v: "94.2", u: "%", c: "text-green-500", i: TrendingUp },
                { l: "Critical Alerts", v: "0", u: "Evt", c: "text-slate-400", i: ShieldAlert },
              ].map((idx, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                    <idx.i className={`w-16 h-16 ${idx.c}`} />
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wide">{idx.l}</p>
                    <idx.i className={`w-4 h-4 ${idx.c} opacity-80`} />
                  </div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">{idx.v}</span>
                    <span className={`text-xs sm:text-sm font-bold ${idx.c}`}>{idx.u}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* 3D Dashboard-Style Graphic */}
            <div className="relative w-full h-[450px] bg-[#eef2f6] rounded-2xl border border-slate-200 overflow-hidden shadow-inner flex shrink-0">
              
              {/* Subtle Map Vector Background */}
              <div className="absolute inset-0 opacity-50 mix-blend-multiply pointer-events-none">
                <svg className="w-full h-full object-cover" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice" fill="none" stroke="#CBD5E1" strokeWidth="1.5">
                  <path d="M-100,250 C100,350 300,50 500,200 S700,400 1100,100" />
                  <path d="M-50,400 C150,500 250,150 600,300 S900,100 1200,200" />
                  <path d="M100,-100 V600 M300,-100 V600 M500,-100 V600 M700,-100 V600 M900,-100 V600" strokeDasharray="6 6" opacity="0.4" />
                  <path d="M-100,100 H1100 M-100,200 H1100 M-100,300 H1100 M-100,400 H1100" strokeDasharray="6 6" opacity="0.4" />
                </svg>
              </div>

              {/* Dynamic Vehicle Trackers on Map */}
              <motion.div 
                animate={{ x: [0, 80, 40, 0], y: [0, -40, -10, 0] }} 
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }} 
                className="absolute top-1/3 left-[20%] z-10"
              >
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-primary/30 opacity-75"></span>
                  <div className="w-5 h-5 rounded-full bg-primary border-2 border-white shadow-lg relative z-10 flex items-center justify-center">
                    <Navigation className="w-3 h-3 text-white fill-white rotate-45" />
                  </div>
                  <div className="absolute top-7 left-1/2 -translate-x-1/2 bg-white text-slate-800 text-[11px] font-bold px-3 py-1 rounded-md shadow-md whitespace-nowrap border border-slate-100 hidden sm:block">
                    <span className="text-primary mr-1">●</span> MH-45 Fleet
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ x: [0, -60, -20, 0], y: [0, 30, 50, 0] }} 
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }} 
                className="absolute top-1/2 right-[30%] z-10"
              >
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-accent/30 opacity-75"></span>
                  <div className="w-5 h-5 rounded-full bg-accent border-2 border-white shadow-lg relative z-10 flex items-center justify-center">
                    <Navigation className="w-3 h-3 text-white fill-white -rotate-12" />
                  </div>
                  <div className="absolute top-7 left-1/2 -translate-x-1/2 bg-white text-slate-800 text-[11px] font-bold px-3 py-1 rounded-md shadow-md whitespace-nowrap border border-slate-100 hidden sm:block">
                    <span className="text-accent mr-1">●</span> KL-12 Unit
                  </div>
                </div>
              </motion.div>

              {/* Overlay Glass Panel: Real-time Analytics Chart */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.7, type: "spring" }}
                className="absolute bottom-6 left-6 right-6 lg:left-auto lg:right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/50 lg:w-[450px]"
              >
                <div className="text-sm font-extrabold text-slate-900 mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-primary" />
                    Live Fleet Efficiency vs Time
                  </div>
                  <div className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] uppercase font-bold rounded">Live</div>
                </div>
                
                {/* 3D-effect Animated Bar Chart */}
                <div className="flex items-end justify-between w-full h-32 gap-3 mt-auto border-b border-slate-200 pb-2">
                  {[35, 50, 40, 75, 55, 90, 65, 85].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end h-full group relative">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 shadow-lg">
                        Score: {h}
                      </div>
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.6 + (i * 0.08), type: "spring", bounce: 0.2 }}
                        className={`w-full rounded-t-md cursor-pointer transition-all hover:brightness-110 shadow-sm ${i % 2 === 0 ? 'bg-gradient-to-t from-primary/80 to-primary' : 'bg-gradient-to-t from-[#4f67ff]/80 to-[#4f67ff]'}`}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-3 px-1">
                  <span>08:00</span><span>10:00</span><span>12:00</span><span>14:00</span><span>16:00</span><span>18:00</span>
                </div>
              </motion.div>

              {/* Overlay Glass Panel: Status Indicator */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6, type: "spring" }}
                className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-3.5 rounded-xl shadow-xl border border-white/50 items-center gap-3 z-20 hidden sm:flex"
              >
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-1">Network Status</div>
                  <div className="text-sm font-extrabold text-slate-900 leading-none">All Systems Stable</div>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>

        {/* C. Iteration 4: Completely removed "Ready to Optimize Your Fleet" CTA section */}
        
      </div>
    </section>
  );
}
