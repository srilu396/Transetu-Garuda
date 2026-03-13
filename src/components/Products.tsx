"use client";

import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    title: "FASTag Management",
    description: "Manage FASTag payments for your entire fleet from one platform. Easily recharge accounts, track toll expenses, and keep transaction records organized.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tag"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path><path d="M7 7h.01"></path></svg>
    ),
    badge: "Toll Payments",
    features: ["Automatic FASTag recharge", "Toll transaction history", "Fleet-wide management"],
    link: "/solutions/fastag",
  },
  {
    title: "Dash Cam System",
    description: "Improve driver safety with a smart dash camera that records both road and cabin activity while providing real-time alerts and video monitoring.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-camera"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
    ),
    badge: "Video Safety",
    features: ["Dual camera recording", "Driver safety alerts", "Cloud video access"],
    link: "/solutions/dash-cam-system",
  },
  {
    title: "Fleet GPS Tracker",
    description: "Track and manage your fleet in real time with a powerful GPS tracking system that helps optimize routes and monitor driver performance.",               
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
    ),
    badge: "Fleet Management",
    features: ["Real-time vehicle tracking", "Route optimization", "Driver behavior insights"],    
    link: "/solutions/advanced-fleet-tracker",
  },
  {
    title: "Mining Equipment Tracking",
    description: "A rugged GPS tracking solution designed for heavy mining equipment, helping monitor machinery and improve operational visibility in harsh environments.",     
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-satellite"><path d="M13 7 9 3 5 7l4 4"></path><path d="m17 11 4 4-4 4-4-4"></path><path d="m8 12 4 4 6-6-4-4Z"></path><path d="m16 8 3-3"></path><path d="M9 21a6 6 0 0 0-6-6"></path></svg>
    ),
    badge: "Mining Solutions",
    features: ["Durable GPS devices", "Equipment monitoring", "Geofencing alerts"],        
    link: "/solutions/iot-for-mining",
  },
  {
    title: "Fuel Monitoring System",
    description: "Monitor fuel levels accurately and detect fuel theft using advanced sensors integrated with your vehicle tracking system.",     
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-fuel"><line x1="3" x2="15" y1="22" y2="22"></line><line x1="4" x2="14" y1="9" y2="9"></line><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"></path><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"></path></svg>
    ),
    badge: "Fuel Management",
    features: ["Fuel level tracking", "Theft detection alerts", "Fuel usage reports"],    
    link: "/solutions/fuel-level-sensors",
  },
  {
    title: "Video Telematics",
    description: "Combine GPS tracking with video monitoring to improve security and gain better visibility into vehicle activity and driver behavior.",     
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-camera"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
    ),
    badge: "Security Solutions",
    features: ["Live video streaming", "GPS location tracking", "Motion detection alerts"],    
    link: "/solutions/video-telematics",
  },
  {
    title: "Temperature Monitoring",
    description: "Track temperature conditions during transportation to protect sensitive goods such as food, medicine, and other perishable items.",     
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thermometer"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
    ),
    badge: "Cold Chain",
    features: ["Real-time temperature tracking", "Compliance reports", "Compliance reports"],     
    link: "/solutions/temperature-monitor",
  },
  {
    title: "GPS Smart Padlock",
    description: "Secure cargo, containers, and valuable assets with a smart padlock that provides location tracking and tamper alerts.", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
    ),
    badge: "Asset Security",
    features: ["Remote lock control", "GPS location tracking", "Tamper alerts"],    
    link: "/solutions/padlock-gps",
  },
  {
    title: "Photogrammetry Services",
    description: "High-precision mapping and surveying services using advanced GPS and photogrammetry technology for accurate geographic data.", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
    ),
    badge: "Mapping Services",
    features: ["Survey data collection", "Precision mapping", "3D modeling"],     
    link: "/solutions/photogrammetry-services",
  },
  {
    title: "AIS 140 GPS Tracker",
    description: "Government-approved GPS tracking device designed to meet AIS 140 compliance standards for commercial vehicles.", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
    ),
    badge: "Compliance",
    features: ["Emergency panic button", "AIS 140 certified", "Vehicle diagnostics"],     
    link: "/solutions/ais-140-tracker",
  }
];

export default function Products() {
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
    },
  };

  return (
    <section id="products" className="py-24 bg-[#fef2cb] text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-wider mb-6"
          >
            Our Fleet Solutions
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-slate-900"
          >
            GPS <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Tracking Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            We offer a wide range of GPS tracking solutions designed to help businesses monitor vehicles, equipment, and valuable assets. Whether you manage a transport fleet, mining equipment, or temperature-sensitive cargo, our technology provides real-time visibility, safety monitoring, and detailed analytics to improve operations.
          </motion.p>
        </div>

        {/* Product Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20 auto-rows-fr"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative flex flex-col h-full bg-white border border-slate-200/60 rounded-2xl p-6 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_-15px_rgba(var(--primary-rgb),0.25)] hover:border-primary/40 flex-grow"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm group-hover:scale-110 group-hover:rotate-3">
                  {React.cloneElement(product.icon as React.ReactElement, { className: "w-6 h-6" })}
                </div>
                <div className="px-3 py-1.5 rounded-full bg-slate-100/80 text-primary font-bold text-[10px] uppercase tracking-wide border border-slate-200">
                  {product.badge}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors">
                {product.title}
              </h3>
              <p className="text-slate-600 font-medium text-sm leading-relaxed mb-6 flex-grow">
                {product.description}
              </p>

              <div className="space-y-3 mb-8">
                {product.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center text-sm text-slate-600 font-medium">
                    <div className="w-1.5 h-1.5 bg-primary/50 rounded-full mr-2 group-hover:bg-primary transition-colors"></div>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <a href={product.link} className="block w-full">
                  <button className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-primary text-white text-sm font-bold transition-all duration-300 hover:bg-primary/90 shadow-md hover:shadow-xl hover:shadow-primary/20 group-hover:translate-y-[-2px]">
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Solution Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative text-center bg-white rounded-3xl p-10 lg:p-16 border border-slate-200/80 shadow-[0_10px_40px_rgb(0,0,0,0.08)] overflow-hidden"
        >
          {/* Background Decorative Gradients */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -ml-40 -mb-40"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-extrabold mb-6 text-slate-900 tracking-tight">Need a <span className="text-primary">Custom Solution?</span></h3>
            <p className="text-lg text-slate-600 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
              Our engineering team specializes in architecting bespoke GPS tracking ecosystems tailored 
              to your specific industrial workflows. Let's discuss your unique operational needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -5px rgba(var(--primary-rgb), 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white font-bold h-14 px-10 transition-all shadow-xl shadow-primary/30 w-full sm:w-auto"
              >
                Contact Sales
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-300 text-slate-800 hover:border-primary hover:text-primary font-bold h-14 px-10 transition-all w-full sm:w-auto bg-transparent"
              >
                Request Quote
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
