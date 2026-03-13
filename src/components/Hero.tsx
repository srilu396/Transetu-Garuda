"use client";

import React from "react";
import GPSVisual from "./GPSVisual";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        >
          <source src="/homepage-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Modern SaaS Gradient Overlay for maximum readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-transparent"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Area */}
          <motion.div 
            className="text-left max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-primary rounded-lg text-white text-sm font-medium mb-6 shadow-xl">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Empanelled with ISRO
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-primary/30 border border-primary/40 rounded-full text-white text-sm font-semibold mb-8 backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse shadow-[0_0_8px_var(--primary)]"></span>
              Advanced GPS & IoT Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
              <span>Garuda OM - </span>
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent italic inline-block pb-2">
                Precision Fleet <span className="font-medium">Management</span>
              </span>
            </h1>
            <p className="text-lg text-white font-bold mb-10 leading-relaxed max-w-xl drop-shadow-lg">
              Empowering global industries with AI-driven GPS tracking, real-time fuel analytics, and integrated security solutions for complete operational visibility and safety.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <motion.button 
                whileHover={{ scale: 1.04, boxShadow: "0 15px 30px -5px rgba(var(--primary-rgb), 0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold transition-all bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 w-full sm:w-auto group shadow-2xl"
              >
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
              </motion.button>
              <motion.a
                href="https://drive.google.com/file/d/1Ll8JurCrSrr9OETh-j0FBb2bF0O1K9X5/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.2)", borderColor: "white", boxShadow: "0 15px 30px -5px rgba(255, 255, 255, 0.15)" }}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold border-2 border-white/50 text-white h-14 px-10 transition-all w-full sm:w-auto backdrop-blur-md shadow-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="6 3 20 12 6 21 6 3"></polygon>
                </svg>
                Watch Demo
              </motion.a>
            </div>
            
            {/* Feature Highlights - High Contrast Tag style */}
            <div className="flex flex-wrap gap-3">
              {[
                "Advanced Mining GPS",
                "Real-time Fuel Analytics",
                "AI Video Surveillance",
                "Industrial IoT Platforms"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-black/40 border border-white/20 rounded-full backdrop-blur-md shadow-lg">
                  <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_var(--primary)]"></div>
                  <span className="text-xs font-bold text-white uppercase tracking-widest">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>


          {/* Right Visual Area */}
          <motion.div 
            className="flex items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <GPSVisual />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-[2px] h-12 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
      </div>
    </section>
  );
}


