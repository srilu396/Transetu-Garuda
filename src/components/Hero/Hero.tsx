"use client";

import React, { useState } from "react";
import GPSVisual from "../GPSTrackingSolutions/GPSVisual";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
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
          <source src="/assets/videos/homepage-video.mp4" type="video/mp4" />
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
              GPS Tracking & Monitoring
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-primary/30 border border-primary/40 rounded-full text-white text-sm font-semibold mb-8 backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse shadow-[0_0_8px_var(--primary)]"></span>
              FASTag Issuance & Partnerships
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
              <span>Garuda OM - </span>
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent italic inline-block pb-2">
                GPS Tracking <span className="font-medium">& FASTag Solutions</span>
              </span>
            </h1>
            <p className="text-lg text-white font-bold mb-10 leading-relaxed max-w-xl drop-shadow-lg">
              Track, monitor, and manage your fleet with real-time GPS, fuel sensors, dash cams, and FASTag integration,
              — everything you need on one powerful platform for complete operational control.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <motion.button
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 15px 30px -5px rgba(var(--primary-rgb), 0.5)",
                }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold transition-all bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 w-full sm:w-auto group shadow-2xl"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                onClick={() => setIsVideoModalOpen(true)}
                whileHover={{
                  scale: 1.04,
                  backgroundColor: "rgba(255,255,255,0.2)",
                  borderColor: "white",
                  boxShadow: "0 15px 30px -5px rgba(255, 255, 255, 0.15)",
                }}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold border-2 border-white/50 text-white h-14 px-10 transition-all w-full sm:w-auto backdrop-blur-md shadow-xl"
              >
                <Play className="w-5 h-5 fill-current" />
                Watch Demo
              </motion.button>
            </div>

            {/* Feature Highlights - High Contrast Tag style */}
            <div className="flex flex-wrap gap-3">
              {[
                "GPS Vehicle Tracking",
                "Dash Cam Security",
                "Fuel Monitoring Systems",
                "FASTag Solutions",
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 bg-black/40 border border-white/20 rounded-full backdrop-blur-md shadow-lg"
                >
                  <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_var(--primary)]"></div>
                  <span className="text-xs font-bold text-white uppercase tracking-widest">
                    {feature}
                  </span>
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

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors border border-white/10"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/nUas2X1v1xY?autoplay=1"
                title="Garuda OM - GPS Tracking Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
