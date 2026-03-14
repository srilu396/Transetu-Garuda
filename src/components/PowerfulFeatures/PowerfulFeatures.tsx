"use client";

import React, { useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  MapPin,
  Shield,
  Fuel,
  BarChart3,
  Satellite,
  Zap,
  Route,
  UserCheck,
  Box,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/**
 * 10 High-Quality GPS Feature Cards with vibrant colors and polished descriptions.
 */
const features = [
  {
    title: "Real-Time GPS Tracking",
    description: "Monitor your fleet and assets with precise, real-time location data and comprehensive reporting.",
    icon: <MapPin className="w-10 h-10 text-blue-500" />,
    color: "bg-blue-500/10",
  },
  {
    title: "Advanced Security",
    description: "Protect your valuable assets with geo-fencing, alerts, and anti-theft features.",
    icon: <Shield className="w-10 h-10 text-green-500" />,
    color: "bg-transparent",
  },
  {
    title: "Fuel Monitoring",
    description: "Track fuel consumption, detect theft, and optimize fuel efficiency across your fleet.",
    icon: <Fuel className="w-10 h-10 text-orange-500" />,
    color: "bg-orange-500/10",
  },
  {
    title: "Analytics & Reports",
    description: "Get detailed insights with customizable dashboards and comprehensive analytics.",
    icon: <BarChart3 className="w-10 h-10 text-purple-500" />,
    color: "bg-purple-500/10",
  },
  {
    title: "Satellite Coverage",
    description: "Global coverage with reliable satellite communication for remote locations.",
    icon: <Satellite className="w-10 h-10 text-cyan-500" />,
    color: "bg-cyan-500/10",
  },
  {
    title: "Instant Alerts",
    description: "Receive immediate notifications for critical events and system updates.",
    icon: <Zap className="w-10 h-10 text-yellow-500" />,
    color: "bg-yellow-500/10",
  },
  {
    title: "Efficiency-First Routing",
    description: "Intelligent path planning designed to reduce mileage, save time, and lower operating costs.",
    icon: <Route className="w-10 h-10 text-violet-600" />,
    color: "bg-violet-600/10",
  },
  {
    title: "AI-Powered Safety",
    description: "Future-ready AI technology that analyzes driving patterns, predicts risks, and enhances fleet safety.",
    icon: <UserCheck className="w-10 h-10 text-amber-600" />,
    color: "bg-amber-600/10",
  },
  {
    title: "Total Lifecycle Control",
    description: "Holistic tracking for all equipment with maintenance reminders and automated usage logs.",
    icon: <Box className="w-10 h-10 text-rose-600" />,
    color: "bg-rose-600/10",
  },
];

// Duplicate features array to create seamless loop
const duplicatedFeatures = [...features, ...features];

export default function FeaturesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Animation variants (unchanged)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      y: -12,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
  };

  const cardShadowVariants = {
    hover: {
      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.35), 0 0 0 1px rgba(249, 115, 22, 0.15)",
      borderColor: "rgba(249, 115, 22, 0.2)",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const cardBorderVariants = {
    hover: {
      borderColor: "rgba(249, 115, 22, 0.4)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hover: {
      rotate: [0, -5, 5, -5, 0],
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current || isAnimating) return;
    
    setIsAnimating(true);
    
    const container = scrollRef.current;
    const cardWidth = container.querySelector('div > div')?.clientWidth || 340;
    const gap = 24; // gap-6 = 1.5rem = 24px
    const scrollAmount = cardWidth + gap;
    
    const currentScroll = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    let newScrollPosition;
    
    if (direction === 'left') {
      newScrollPosition = currentScroll - scrollAmount;
      // If we're at the beginning, jump to the duplicated set
      if (newScrollPosition < 0) {
        newScrollPosition = container.scrollWidth / 2 - scrollAmount;
      }
    } else {
      newScrollPosition = currentScroll + scrollAmount;
      // If we're at the end of original set, jump to beginning of duplicated set
      if (newScrollPosition > container.scrollWidth / 2) {
        newScrollPosition = 0;
      }
    }
    
    container.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth'
    });
    
    // Reset animation lock after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section id="features" aria-label="Key Features" className="relative" style={{ backgroundColor: '#fffcf8' }}>
      {/* Decorative background elements to enhance the "showing through" effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl"></div>
      </div>

      <section className="py-20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            {/* Innovation & Technology Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6"
            >
              Innovation & Technology
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight"
            >
              Cloud-Powered{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Fleet Intelligence
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Discover the comprehensive suite of tools designed to optimize your operations
            </motion.p>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Navigation Arrows with updated color #6467f2 */}
            <motion.button
              onClick={() => scroll('left')}
              disabled={isAnimating}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute z-50 rounded-full transition-all duration-300 top-1/2 -translate-y-1/2 -left-4 sm:-left-12 h-12 w-12 border border-gray-200 flex items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ 
                backgroundColor: '#6467f2',
                color: 'white'
              }}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>

            <motion.button
              onClick={() => scroll('right')}
              disabled={isAnimating}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute z-50 rounded-full transition-all duration-300 top-1/2 -translate-y-1/2 -right-4 sm:-right-12 h-12 w-12 border border-gray-200 flex items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ 
                backgroundColor: '#6467f2',
                color: 'white'
              }}
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>

            {/* Horizontal scrolling container - scrollbar colored to match background */}
            <div
              ref={scrollRef}
              className="overflow-x-auto"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#fffcf8 #fffcf8',
                msOverflowStyle: 'auto',
                WebkitOverflowScrolling: 'touch',
                scrollBehavior: 'smooth',
              }}
            >
              <style>{`
                div::-webkit-scrollbar {
                  height: 8px;
                  background-color: #fffcf8;
                }
                div::-webkit-scrollbar-thumb {
                  background-color: #fffcf8;
                  border-radius: 4px;
                }
                div::-webkit-scrollbar-track {
                  background-color: #fffcf8;
                }
                div::-webkit-scrollbar-button {
                  display: none;
                }
                div::-webkit-scrollbar-corner {
                  background-color: #fffcf8;
                }
              `}</style>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex gap-6 py-12 my-4"
              >
                {duplicatedFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[300px] sm:w-[320px] md:w-[340px]"
                  >
                    <motion.div
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      whileTap="tap"
                      viewport={{ once: true }}
                      className="group relative flex flex-col h-full bg-white rounded-2xl w-full p-6 border border-gray-200/60 hover:z-50"
                      style={{
                        transformOrigin: "center center",
                        willChange: "transform",
                        transition: "box-shadow 0.3s ease, transform 0.3s ease",
                      }}
                    >
                      {/* Shadow overlay that becomes more prominent on hover */}
                      <motion.div
                        variants={cardShadowVariants}
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        style={{
                          boxShadow: "0 10px 30px -15px rgba(0,0,0,0.15)",
                        }}
                      />

                      {/* Border overlay */}
                      <motion.div
                        variants={cardBorderVariants}
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        style={{
                          border: "2px solid transparent",
                        }}
                      />

                      <div className="mb-4 flex justify-center relative z-10">
                        <motion.div
                          variants={iconVariants}
                          className={`p-4 rounded-xl ${feature.color} group-hover:scale-110 transition-all duration-500`}
                        >
                          {feature.icon}
                        </motion.div>
                      </div>
                      
                      <div className="text-center flex-1 relative z-10">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}