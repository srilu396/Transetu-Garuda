"use client";

import React from "react";
import { motion } from "framer-motion";

const VehicleIcon = ({ type }: { type: 'car' | 'truck' | 'bus' }) => {
  if (type === 'truck') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm12 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1-5.5H3V6h14v7zm0-1z" />
      </svg>
    );
  }
  if (type === 'bus') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm2-3c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-1zm10 0c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1v-1zM6 6c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v5H6V6z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-4.66l.12-.34h13.77l.11.34V17zm-11-2c-1.1 0-2 .89-2 2s.89 2 2 2 2-.89 2-2-.89-2-2-2zm12 0c-1.1 0-2 .89-2 2s.89 2 2 2 2-.89 2-2-.89-2-2-2z" />
    </svg>
  );
};

const TrackedVehicle = ({ radius, speed, delay, type }: { radius: number, speed: number, delay: number, type: 'car' | 'truck' | 'bus' }) => {
  return (
    <motion.div
      className="absolute flex items-center justify-center pointer-events-none"
      style={{ width: radius * 2, height: radius * 2 }}
      animate={{ rotate: 360 }}
      transition={{ duration: speed * 2, repeat: Infinity, ease: "linear", delay }}
    >
      <div 
        className="absolute flex flex-col items-center" 
        style={{ top: -10 }}
      >
        <motion.div
          className="text-primary relative"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <div className="bg-primary/20 p-1.5 rounded-full backdrop-blur-sm border border-primary/30 shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)]">
            <VehicleIcon type={type} />
          </div>
          {/* Signal Ping from Vehicle - Every few seconds */}
          <motion.div
            className="absolute inset-0 border-2 border-primary/40 rounded-full"
            animate={{ scale: [1, 3], opacity: [0.6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut", repeatDelay: 1 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function GPSVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-primary/10 rounded-full blur-[80px] opacity-50"></div>

      {/* Radar Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Radar Rings - Increased Opacity */}
        {[0.2, 0.4, 0.6, 0.8, 1].map((scale, i) => (
          <div
            key={i}
            className="absolute border border-primary/20 rounded-full shadow-[0_0_10px_rgba(var(--primary-rgb),0.05)]"
            style={{ width: `${scale * 100}%`, height: `${scale * 100}%` }}
          />
        ))}

        {/* Radar Sweep Effect - Stronger Gradients */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "conic-gradient(from 0deg, transparent 0% 90%, rgba(var(--primary-rgb), 0.05) 95%, rgba(var(--primary-rgb), 0.2) 100%)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        {/* Crosshair Lines - Slightly Sharper */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full opacity-10">
          <div className="w-full h-[1px] bg-primary"></div>
          <div className="h-full w-[1px] bg-primary absolute"></div>
        </div>

        {/* Dynamic Vehicles Tracking - Slow, Professional Speeds */}
        <TrackedVehicle radius={185} speed={60} delay={0} type="truck" />
        <TrackedVehicle radius={135} speed={45} delay={2} type="car" />
        <TrackedVehicle radius={85} speed={30} delay={5} type="bus" />

        {/* Static Signal Pings (Fixed Locations) - Sharper Pulses */}
        {[
          { top: "25%", left: "65%" },
          { top: "60%", left: "20%" },
          { top: "75%", left: "80%" },
        ].map((pos, i) => (
          <div key={i} className="absolute" style={{ top: pos.top, left: pos.left }}>
            <motion.div
              className="w-2 h-2 bg-primary rounded-full shadow-[0_0_12px_var(--primary)]"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 1 }}
            />
            <motion.div
              className="absolute inset-0 w-2 h-2 border border-primary/50 rounded-full"
              animate={{ scale: [1, 5], opacity: [0.5, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 1, repeatDelay: 2 }}
            />
          </div>
        ))}

        {/* Central Hub Icon - ISRO / Shield Visual - Sharper glow */}
        <motion.div
          className="relative z-10 p-6 bg-primary text-primary-foreground rounded-full shadow-[0_0_40px_rgba(var(--primary-rgb),0.5)] border-2 border-white/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <circle cx="12" cy="11" r="3" />
            <path d="M12 18V14" />
          </svg>
        </motion.div>

        {/* Decorative Radar Grid - Slightly visible */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <div className="grid grid-cols-12 grid-rows-12 w-full h-full">
            {[...Array(144)].map((_, i) => (
              <div key={i} className="border-[0.5px] border-primary"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

