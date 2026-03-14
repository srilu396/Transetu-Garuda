"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, Fuel, Gauge, Video } from "lucide-react";

export default function VideosSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1
      }
    },
    hover: {
      y: -12,
      scale: 1.02,
      boxShadow: "0 30px 60px -15px rgba(0,119,182,0.25)",
      borderColor: "rgba(0,119,182,0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const thumbnailVariants = {
    hover: {
      scale: 1.08,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const playButtonVariants = {
    hover: {
      scale: 1.15,
      backgroundColor: "rgba(255,255,255,1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };

  const videos = [
    {
      title: "Fuel Monitoring",
      description:
        "Fuel monitoring system mostly provides valuable insights into fuel usage, drainage, and refilling. Fleet managers can easily access real-time data on fuel filling & drainage, along with other relevant information.",
      videoUrl: "https://youtu.be/4g7YCB2ywXc",
      thumbnail: "https://uffizio.com/wp-content/uploads/sites/2/2025/12/fuel-mgmt-video.webp",
      icon: Fuel,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      title: "Tire Management",
      description:
        "Surely, access both real-time and historical tire pressure data for your entire fleet. Additionally, you can set up alerts for extremely low tire pressures, helping you steer clear of unsafe driving conditions.",
      videoUrl: "https://youtu.be/4g7YCB2ywXc",
      thumbnail: "https://uffizio.com/wp-content/uploads/sites/2/2025/12/tire-mgmt-video.webp",
      icon: Gauge,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Video Telematics",
      description:
        "Video telematics certainly goes beyond the capabilities of GPS tracking systems. Moreover, with our video monitoring solutions, you can experience the added benefits that set it apart from basic tracking.",
      videoUrl: "https://youtu.be/n9XE6P7nWI0",
      thumbnail: "https://uffizio.com/wp-content/uploads/sites/2/2025/12/video-telematics-video.webp",
      icon: Video,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <section id="videos" className="py-24 bg-[#fffbf3] relative overflow-hidden" aria-label="Demo Videos">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-20 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -ml-48"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="text-center mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-wider mb-6"
          >
            Watch Demos
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-slate-900"
          >
            Watch <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Platform Demo</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            With our advanced fleet vehicle tracking systems you have complete control over your fleet and their activities.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {videos.map((video, index) => {
            const IconComponent = video.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden group flex flex-col h-full"
              >
                {/* Icon at the top of the card */}
                <div className="p-8 pb-0">
                  <motion.div 
                    className={`w-16 h-16 ${video.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent className={`w-8 h-8 ${video.iconColor}`} />
                  </motion.div>
                </div>

                {/* Thumbnail with Enhanced Play Button Overlay */}
                <motion.a 
                  href={video.videoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative aspect-video block overflow-hidden cursor-pointer mx-8"
                  whileHover="hover"
                >
                  <motion.img
                    src={video.thumbnail}
                    alt={video.title}
                    variants={thumbnailVariants}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center rounded-xl"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div 
                      variants={playButtonVariants}
                      className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl"
                    >
                      <Play className="w-5 h-5 text-primary ml-1" fill="currentColor" />
                    </motion.div>
                  </motion.div>
                </motion.a>

                {/* Card Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <motion.h3 
                    className="text-2xl font-black mb-4 text-slate-900 leading-tight"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {video.title}
                  </motion.h3>
                  <p className="text-slate-600 font-medium text-sm leading-relaxed mb-6">
                    {video.description}
                  </p>
                  
                  {/* Explore Now link */}
                  <div className="mt-auto">
                    <motion.a
                      href={video.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary font-bold text-sm tracking-wide group/link"
                      whileHover={{ x: 5 }}
                    >
                      Explore now
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-2 group-hover/link:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </motion.svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Redesigned CTA Section - Matching Reference Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 relative text-center bg-white rounded-3xl p-10 lg:p-16 border border-slate-200/80 shadow-[0_10px_40px_rgb(0,0,0,0.08)] overflow-hidden"
        >
          {/* Background Decorative Gradients */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -ml-40 -mb-40"></div>

          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-extrabold mb-6 text-slate-900 tracking-tight">
              Need a <span className="text-primary">Live Demo?</span>
            </h3>
            <p className="text-lg text-slate-600 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
              Our product specialists are ready to walk you through our GPS tracking solutions in real-time. Let's schedule a personalized demonstration tailored to your specific fleet management needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 30px -5px rgba(var(--primary-rgb), 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white font-bold h-12 px-8 transition-all shadow-xl shadow-primary/30 w-full sm:w-auto text-sm"
              >
                Schedule Live Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-300 text-slate-800 hover:border-primary hover:text-primary font-bold h-12 px-8 transition-all w-full sm:w-auto bg-transparent text-sm"
              >
                Talk to Sales
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}