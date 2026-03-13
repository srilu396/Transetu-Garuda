"use client";

import React from "react";
import { motion } from "framer-motion";

const VehicleIcon = ({ type, className }: { type: 'car' | 'truck' | 'bus' | 'mobile' | 'marker', className?: string }) => {
  if (type === 'truck') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-4 h-4"}>
        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm12 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1-5.5H3V6h14v7zm0-1z" />
      </svg>
    );
  }
  if (type === 'bus') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-4 h-4"}>
        <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm2-3c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-1zm10 0c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1v-1zM6 6c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v5H6V6z" />
      </svg>
    );
  }
  if (type === 'mobile') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-4 h-4"}>
        <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
      </svg>
    );
  }
  if (type === 'marker') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-4 h-4"}>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-4 h-4"}>
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-4.66l.12-.34h13.77l.11.34V17zm-11-2c-1.1 0-2 .89-2 2s.89 2 2 2 2-.89 2-2-.89-2-2-2zm12 0c-1.1 0-2 .89-2 2s.89 2 2 2 2-.89 2-2-.89-2-2-2z" />
    </svg>
  );
};

const TrackedObject = ({ radius, speed, delay, type, color = "#cc44bf" }: { radius: number, speed: number, delay: number, type: 'car' | 'truck' | 'bus' | 'mobile' | 'marker', color?: string }) => {
  return (
    <motion.div
      className="absolute flex items-center justify-center pointer-events-none"
      style={{ width: radius * 2, height: radius * 2 }}
      animate={{ rotate: 360 }}
      transition={{ duration: speed * 2, repeat: Infinity, ease: "linear", delay }}
    >
      <div 
        className="absolute flex flex-col items-center" 
        style={{ top: -12 }}
      >
        <motion.div
          className="text-primary relative"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <div className="bg-primary/30 p-2 rounded-full backdrop-blur-md border border-primary/50 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]">
            <VehicleIcon type={type} className="w-4 h-4" />
          </div>
          {/* Enhanced Signal Ping */}
          <motion.div
            className="absolute inset-0 border-2 rounded-full"
            style={{ borderColor: `${color}99` }} // color/60 equivalent
            animate={{ scale: [1, 3.5], opacity: [0.7, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", repeatDelay: 1.5 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function GPSVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[420px] mx-auto flex items-center justify-center">
      {/* Enhanced Outer Glow */}
      <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] opacity-40"></div>

      {/* Radar Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Radar Rings - Maximum Visibility */}
        {[
          { scale: 0.2, color: "#8b5cf6" }, // Inner
          { scale: 0.4, color: "#f59e0b" }, 
          { scale: 0.6, color: "#3b82f6" }, 
          { scale: 0.8, color: "#cc44bf" }, 
          { scale: 1.0, color: "#10b981" }, // Outer
        ].map((ring, i) => (
          <div
            key={i}
            className="absolute border rounded-full"
            style={{ 
              width: `${ring.scale * 100}%`, 
              height: `${ring.scale * 100}%`,
              borderColor: `${ring.color}cc`, // 80% opacity (Very Dark/Visible)
              borderWidth: "2px",
              boxShadow: `0 0 25px ${ring.color}4d` // 30% opacity glow
            }}
          />
        ))}

        {/* Radar Sweep Effect - Clearer Contrast */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "conic-gradient(from 0deg, transparent 0% 85%, rgba(var(--primary-rgb), 0.1) 95%, rgba(var(--primary-rgb), 0.3) 100%)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Crosshair Lines - Clearer */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full opacity-15">
          <div className="w-full h-[1.5px] bg-primary"></div>
          <div className="h-full w-[1.5px] bg-primary absolute"></div>
        </div>

        {/* Dynamic Tracking Network - Colors aligned to sections */}
        <TrackedObject radius={190} speed={65} delay={0} type="truck" color="#10b981" />
        <TrackedObject radius={160} speed={55} delay={2} type="marker" color="#cc44bf" />
        <TrackedObject radius={130} speed={45} delay={4} type="car" color="#3b82f6" />
        <TrackedObject radius={100} speed={35} delay={6} type="mobile" color="#f59e0b" />
        <TrackedObject radius={70} speed={25} delay={8} type="bus" color="#8b5cf6" />

        {/* Static Signal Pings (Fixed Locations) - Sectional Colors */}
        {[
          { top: "20%", left: "70%", color: "#10b981" }, // Outer
          { top: "55%", left: "15%", color: "#cc44bf" }, // Outer-mid
          { top: "80%", left: "45%", color: "#3b82f6" }, // Mid
          { top: "40%", left: "55%", color: "#f59e0b" }, // Mid-inner
        ].map((pos, i) => (
          <div key={i} className="absolute" style={{ top: pos.top, left: pos.left }}>
            <motion.div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: pos.color, boxShadow: `0 0 15px ${pos.color}` }}
              animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
            />
            <motion.div
              className="absolute inset-0 w-2.5 h-2.5 border-2 rounded-full"
              style={{ borderColor: `${pos.color}99` }}
              animate={{ scale: [1, 6], opacity: [0.5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.8, repeatDelay: 1.5 }}
            />
          </div>
        ))}

        {/* Central Hub Icon - Sharper glow & primary colors */}
        <motion.div
          className="relative z-10 p-7 bg-primary text-primary-foreground rounded-full shadow-[0_0_50px_rgba(var(--primary-rgb),0.6)] border-2 border-white/30"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <circle cx="12" cy="11" r="3" />
            <path d="M12 18V14" />
          </svg>
        </motion.div>

        {/* Decorative Radar Grid - Stronger presence */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <div className="grid grid-cols-12 grid-rows-12 w-full h-full">
            {[...Array(144)].map((_, i) => (
              <div key={i} className="border-[0.8px] border-primary"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

