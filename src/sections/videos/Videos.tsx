"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Play, Fuel, Gauge, Video } from "lucide-react";
import { useRouter } from "next/navigation";

export default function VideosSection() {
  const router = useRouter();

  // Function to handle navigation to contact section
  const handleContactNavigation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/#contact");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: index * 0.1,
      },
    }),
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      borderColor: "rgba(236, 57, 176, 0.3)", // Changed to #ec39b0
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20
      }
    }
  };

  const cardBorderVariants = {
    hover: {
      borderColor: "rgba(236, 57, 176, 0.4)", // Changed to #ec39b0
      boxShadow: "0 30px 60px -15px rgba(0,0,0,0.45), 0 0 0 2px rgba(236, 57, 176, 0.1)", // Changed to #ec39b0
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  const thumbnailVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const
      }
    }
  };

  const playButtonVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "rgba(255,255,255,1)",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 15
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, -3, 3, -3, 0],
      transition: {
        duration: 0.4,
        ease: "easeInOut" as const,
      },
    },
  };

  const videos = [
    {
      title: "Fuel Monitoring",
      description:
        "Fuel monitoring system provides valuable insights into fuel usage, drainage, and refilling. Fleet managers can easily access real-time data on fuel filling & drainage.",
      videoUrl: "https://youtu.be/4g7YCB2ywXc",
      thumbnail: "https://uffizio.com/wp-content/uploads/sites/2/2025/12/fuel-mgmt-video.webp",
      icon: Fuel,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      title: "Tire Management",
      description:
        "Access both real-time and historical tire pressure data for your entire fleet. Set up alerts for extremely low tire pressures to avoid unsafe driving conditions.",
      videoUrl: "https://youtu.be/4g7YCB2ywXc",
      thumbnail: "https://uffizio.com/wp-content/uploads/sites/2/2025/12/tire-mgmt-video.webp",
      icon: Gauge,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Video Telematics",
      description:
        "Video telematics goes beyond GPS tracking systems. With our video monitoring solutions, you can experience added benefits that set it apart from basic tracking.",
      videoUrl: "https://youtu.be/n9XE6P7nWI0",
      thumbnail: "https://uffizio.com/wp-content/uploads/sites/2/2025/12/video-telematics-video.webp",
      icon: Video,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <section
      id="videos"
      className="relative py-24 overflow-hidden"
      style={{
        backgroundColor: "#fff9ec",
        backgroundImage:
          "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,249,236,1) 45%, rgba(255,244,220,1) 100%), radial-gradient(900px 380px at 22% 18%, rgba(99,102,241,0.08) 0%, rgba(99,102,241,0) 60%), radial-gradient(900px 380px at 78% 22%, rgba(236,72,153,0.08) 0%, rgba(236,72,153,0) 62%)",
      }}
      aria-label="Demo Videos"
    >
      {/* Soft lighting elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[58%] h-[420px] w-[980px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 blur-3xl" />
        <div className="absolute left-[18%] top-[65%] h-[340px] w-[340px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[14%] top-[62%] h-[320px] w-[320px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Section Header */}
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

        {/* Video Cards Grid - Properly arranged */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {videos.map((video, index) => {
            const IconComponent = video.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                whileHover="hover"
                className="group relative bg-white rounded-2xl border-2 border-slate-200/60 overflow-hidden flex flex-col h-full shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
              >
                <motion.div
                  variants={cardBorderVariants}
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    border: "2px solid transparent",
                  }}
                />

                {/* Icon */}
                <div className="p-6 pb-0">
                  <motion.div 
                    variants={iconVariants}
                    whileHover="hover"
                    className={`w-14 h-14 ${video.iconBg} rounded-xl flex items-center justify-center`}
                  >
                    <IconComponent className={`w-7 h-7 ${video.iconColor}`} />
                  </motion.div>
                </div>

                {/* Thumbnail */}
                <div className="px-6 pt-4">
                  <motion.a 
                    href={video.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative aspect-video block overflow-hidden rounded-xl cursor-pointer"
                    whileHover="hover"
                  >
                    <motion.img
                      src={video.thumbnail}
                      alt={video.title}
                      variants={thumbnailVariants}
                      className="w-full h-full object-cover"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex items-center justify-center rounded-xl"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.div 
                        variants={playButtonVariants}
                        className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl"
                      >
                        <Play className="w-5 h-5 text-primary ml-1" fill="currentColor" />
                      </motion.div>
                    </motion.div>
                  </motion.a>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <motion.h3 
                    className="text-xl font-bold mb-3 text-slate-900"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {video.title}
                  </motion.h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {video.description}
                  </p>
                  
                  {/* Explore Now link */}
                  <div className="mt-auto pt-2">
                    <motion.a
                      href={video.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary font-semibold text-sm group/link"
                      whileHover={{ x: 3 }}
                    >
                      Watch Video
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
                        className="ml-1.5 group-hover/link:translate-x-1 transition-transform"
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

        {/* CTA Section - Updated with navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 relative text-center bg-white rounded-3xl p-10 lg:p-16 border border-slate-200/80 shadow-[0_10px_40px_rgb(0,0,0,0.08)] overflow-hidden"
        >
          {/* Background Decorative Gradients */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-primary/15 to-accent/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tl from-primary/10 to-accent/15 rounded-full blur-3xl -ml-40 -mb-40"></div>

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
      boxShadow: "0 15px 30px -5px rgba(236, 57, 176, 0.4)",
    }}
    whileTap={{ scale: 0.95 }}
    onClick={handleContactNavigation}
    type="button"
    className="inline-flex items-center justify-center gap-2 rounded-full text-white font-bold h-12 px-8 transition-all shadow-lg w-full sm:w-auto text-sm cursor-pointer"
    style={{ background: "linear-gradient(to right, #ec39b0, #7E60F4)" }}
  >
    Schedule Live Demo
  </motion.button>
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={handleContactNavigation}
    type="button"
    className="inline-flex items-center justify-center gap-2 rounded-full font-bold h-12 px-8 transition-all w-full sm:w-auto bg-transparent text-sm cursor-pointer"
    style={{
      border: "2px solid rgba(126,96,244,0.4)",
      color: "#7E60F4",
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLButtonElement).style.borderColor = "#ec39b0";
      (e.currentTarget as HTMLButtonElement).style.color = "#ec39b0";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(126,96,244,0.4)";
      (e.currentTarget as HTMLButtonElement).style.color = "#7E60F4";
    }}
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