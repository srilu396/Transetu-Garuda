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
        {/* Modern SaaS Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 backdrop-blur-[1px]"></div>
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
            <div className="inline-flex items-center px-4 py-2 bg-gradient-primary rounded-lg text-white text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Empanelled with ISRO
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-white text-sm font-medium mb-8 backdrop-blur-md">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Advanced GPS & IoT Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              <span>Garuda Technologies - </span>
              <span className="text-primary italic">Precision Fleet Management</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-xl">
              Empowering global industries with AI-driven GPS tracking, real-time fuel analytics, and integrated security solutions for complete operational visibility and safety.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/40 h-12 px-8 py-2 w-full sm:w-auto group"
              >
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
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
                whileHover={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "white" }}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium border border-white/30 text-white h-12 px-8 py-2 transition-all w-full sm:w-auto backdrop-blur-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="6 3 20 12 6 21 6 3"></polygon>
                </svg>
                Watch Demo
              </motion.a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Advanced Mining GPS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Real-time Fuel Analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>AI Video Surveillance</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Industrial IoT Platforms</span>
              </div>
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


