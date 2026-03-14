"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VideosSection() {
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

  const videos = [
    {
      title: "Tracks Monitoring through Our Cloud Platform",
      description:
        "Experience comprehensive vehicle tracking through our advanced cloud-based platform. Monitor your entire fleet in real-time with detailed analytics, route optimization, and instant alerts. See how our intuitive dashboard provides complete visibility into vehicle locations, driver behavior, and operational efficiency across all your assets.",
      videoUrl: "https://www.youtube.com/watch?v=hL0lz9FS5R8",
      thumbnail: "https://img.youtube.com/vi/hL0lz9FS5R8/hqdefault.jpg",
    },
    {
      title: "Monitoring the Vehicles",
      description:
        "Discover advanced vehicle monitoring capabilities that go beyond basic tracking. Our comprehensive system provides real-time insights into vehicle performance, driver behavior analysis, maintenance alerts, and fuel consumption patterns. Watch how businesses optimize their fleet operations with our intelligent monitoring solutions.",
      videoUrl: "https://www.youtube.com/watch?v=dVBscmoieDg",
      thumbnail: "https://img.youtube.com/vi/dVBscmoieDg/hqdefault.jpg",
    },
    {
      title: "Geofences",
      description:
        "Learn about our powerful geofencing technology that creates virtual boundaries for enhanced security and operational control. Set up custom zones, receive instant notifications when vehicles enter or exit designated areas, and improve compliance with automated reporting. Perfect for construction sites, mining operations, and restricted zones.",
      videoUrl: "https://www.youtube.com/watch?v=JAfhk9CKOtc",
      thumbnail: "https://img.youtube.com/vi/JAfhk9CKOtc/hqdefault.jpg",
    },
    {
      title: "Engine Hours Location",
      description:
        "Explore our engine hour tracking and location monitoring system designed for heavy machinery and industrial equipment. Track engine usage, schedule preventive maintenance, monitor equipment utilization, and optimize operational costs. Essential for mining, construction, and agricultural operations where engine hours directly impact profitability.",
      videoUrl: "https://www.youtube.com/watch?v=4CPrdveVpp4",
      thumbnail: "https://img.youtube.com/vi/4CPrdveVpp4/hqdefault.jpg",
    },
  ];

  return (
    <section id="videos" className="py-24 bg-slate-50 relative overflow-hidden" aria-label="Demo Videos">
      {/* Decorative blurs matching Testimonials section */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-wider mb-6"
          >
            Demo Videos
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-slate-900"
          >
            Watch Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Solutions</span> in
            Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Discover how Trans Global IOT's GPS tracking solutions work in
            real-world scenarios. See our technology in action across
            different industries and applications.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {videos.map((video, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative flex flex-col h-full bg-white border border-slate-200/60 rounded-2xl transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_-15px_rgba(var(--primary-rgb),0.25)] hover:border-primary/40 overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden border-b border-slate-100">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center cursor-pointer">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg group-hover:shadow-primary/50 text-primary">
                    <Play className="w-8 h-8 ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-1.5 bg-red-600/95 backdrop-blur-sm px-3 py-1.5 rounded-md text-white text-xs font-bold shadow-sm">
                    <Play className="w-3.5 h-3.5" fill="currentColor" />
                    <span>YouTube</span>
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl lg:text-2xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors tracking-tight">
                  {video.title}
                </h3>
                <p className="text-slate-600 font-medium text-sm leading-relaxed mb-6 flex-grow">
                  {video.description}
                </p>
                <div className="mt-auto pt-6 border-t border-slate-100/80">
                  <a
                    href={video.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#6467f2] font-bold text-sm group/link hover:text-[#5a5ce0] transition-colors"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Video
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
                      className="ml-2 group-hover/link:translate-x-1 transition-transform"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="relative bg-white border border-slate-200/80 p-10 lg:p-14 rounded-[2.5rem] shadow-[0_10px_40px_rgb(0,0,0,0.08)] overflow-hidden inline-block group w-full max-w-4xl mx-auto">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-3xl md:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Want to See a Live Demo?
              </h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
                Schedule a personalized demonstration of our GPS tracking
                solutions. See how our technology can transform your operations.
              </p>
              <button className="px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
                Schedule Live Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
