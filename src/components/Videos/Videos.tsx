"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";

export default function VideosSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  const videos = [
    {
      title: "GPS Tracking Dashboard",
      description:
        "Watch how our GPS tracking platform provides real-time vehicle monitoring, route playback, and fleet visibility. Explain how the solution works and what users can see in the demo video.",
      videoUrl: "https://www.youtube.com/watch?v=hL0lz9FS5R8",
      thumbnail: "https://img.youtube.com/vi/hL0lz9FS5R8/maxresdefault.jpg",
    },
    {
      title: "Fuel Monitoring System",
      description:
        "See how the fuel monitoring solution tracks fuel usage, detects fuel theft, and generates consumption reports. Explain how the solution works and what users can see in the demo video.",
      videoUrl: "https://www.youtube.com/watch?v=dVBscmoieDg",
      thumbnail: "https://img.youtube.com/vi/dVBscmoieDg/maxresdefault.jpg",
    },
    {
      title: "Video Telematics Solution",
      description:
        "Explore how dash cam technology improves driver safety and records real-time driving events. Explain how the solution works and what users can see in the demo video.",
      videoUrl: "https://www.youtube.com/watch?v=JAfhk9CKOtc",
      thumbnail: "https://img.youtube.com/vi/JAfhk9CKOtc/maxresdefault.jpg",
    },
  ];

  return (
    <section id="videos" className="py-24 bg-white relative overflow-hidden" aria-label="Demo Videos">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -ml-48" />
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black mb-6 tracking-tight text-slate-900"
          >
            Watch Our <span className="text-primary">Solutions</span> in Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Watch live demonstrations of our powerful fleet management solutions and see how they can transform your operations.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {videos.map((video, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)] transition-all duration-300 overflow-hidden group flex flex-col h-full"
            >
              {/* Thumbnail with Play Button Overlay */}
              <a 
                href={video.videoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative aspect-video block overflow-hidden"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-primary ml-1" fill="currentColor" />
                  </div>
                </div>
              </a>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow text-left">
                <h3 className="text-2xl font-black mb-4 text-slate-900 leading-tight">
                  {video.title}
                </h3>
                <p className="text-slate-600 font-medium text-sm leading-relaxed mb-8 flex-grow">
                  {video.description}
                </p>
                <div className="mt-auto">
                  <a
                    href={video.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary font-bold text-sm tracking-wide group/link"
                  >
                    Explore now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Card Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="relative bg-white border border-slate-100 p-10 lg:p-14 rounded-[3rem] shadow-[0_15px_50px_-20px_rgba(0,0,0,0.1)] overflow-hidden inline-block group w-full max-w-4xl mx-auto">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-3xl md:text-3xl font-black text-slate-900 mb-4 tracking-tight">
                Want to See a Live Demo?
              </h3>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
                Schedule a personalized demonstration of our GPS tracking
                solutions. See how our technology can transform your operations.
              </p>
              <button className="h-14 px-10 bg-primary text-white font-bold rounded-full hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300">
                Schedule Live Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
