"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  // Function to handle navigation to contact section
  const handleGetStarted = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/#contact");
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 sm:pt-0 sm:pb-0"
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto container-padding px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center text-center mt-0 sm:mt-0">
          <motion.div
            className="w-full max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-primary rounded-lg text-white text-sm font-medium shadow-xl">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                GPS Tracking & Monitoring
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-primary/30 border border-primary/40 rounded-full text-white text-sm font-semibold backdrop-blur-md shadow-lg">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse shadow-[0_0_8px_var(--primary)]"></span>
                FASTag Issuance & Partnerships
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
              <span>Garuda OM - </span>
              <br />
              <span className="text-white font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                GPS Tracking{" "}
                <span className="font-medium">& FASTag Solutions</span>
              </span>
            </h1>
            <p className="text-lg text-white font-bold mb-10 leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
              Track, monitor, and manage your fleet with real-time GPS, fuel
              sensors, dash cams, and FASTag integration, — everything you need
              on one powerful platform for complete operational control.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <motion.button
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 15px 30px -5px rgba(249, 115, 22, 0.5)",
                }}
                whileTap={{ scale: 0.97 }}
                onClick={handleGetStarted}
                type="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold transition-all bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 w-full sm:w-auto group shadow-2xl cursor-pointer"
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
                href="/assets/videos/homepage-video.mp4"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.04,
                  backgroundColor: "rgba(255,255,255,0.2)",
                  borderColor: "white",
                  boxShadow: "0 15px 30px -5px rgba(255, 255, 255, 0.15)",
                }}
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
            <div className="flex flex-wrap justify-center gap-3">
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
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-[2px] h-12 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
      </div>
    </section>
  );
}
