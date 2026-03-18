"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
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

// How many cards visible at once (used to calculate dot count)
const CARDS_PER_VIEW = 3;
const TOTAL_DOTS = features.length - CARDS_PER_VIEW + 1; // 7 dot positions
const AUTO_SCROLL_INTERVAL = 6000; // 6 seconds — enough time to read each card

export default function FeaturesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoScrollTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Auto-scroll: starts on mount, pauses on hover, resumes on leave ──────
  const startAutoScroll = useCallback(() => {
    if (autoScrollTimer.current) clearInterval(autoScrollTimer.current);
    autoScrollTimer.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = prev >= TOTAL_DOTS - 1 ? 0 : prev + 1;
        // scrollToIndex needs the ref — call it via a small helper below
        if (scrollRef.current) {
          const SNAP = 340 + 24;
          const maxScroll = Math.max(0, scrollRef.current.scrollWidth - scrollRef.current.clientWidth);
          scrollRef.current.scrollTo({
            left: Math.min(next * SNAP, maxScroll),
            behavior: "smooth",
          });
        }
        return next;
      });
    }, AUTO_SCROLL_INTERVAL);
  }, []);

  const stopAutoScroll = useCallback(() => {
    if (autoScrollTimer.current) clearInterval(autoScrollTimer.current);
  }, []);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [startAutoScroll, stopAutoScroll]);

  const CARD_WIDTH = 340;
  const GAP = 24;
  const SCROLL_SNAP_ITEM = CARD_WIDTH + GAP;

  // ── Scroll to a specific card index ──────────────────────────────────────
  const scrollToIndex = useCallback(
    (index: number, animated = true) => {
      if (!scrollRef.current) return;
      const container = scrollRef.current;
      const maxScroll = Math.max(0, container.scrollWidth - container.clientWidth);
      const clampedIndex = Math.max(0, Math.min(index, TOTAL_DOTS - 1));
      const newScroll = Math.min(clampedIndex * SCROLL_SNAP_ITEM, maxScroll);

      container.scrollTo({ left: newScroll, behavior: animated ? "smooth" : "auto" });
      setActiveIndex(clampedIndex);
    },
    [SCROLL_SNAP_ITEM]
  );

  // ── Arrow navigation ──────────────────────────────────────────────────────
  const scroll = (direction: "left" | "right") => {
    if (isAnimating) return;
    setIsAnimating(true);
    startAutoScroll(); // reset timer on manual interaction

    const next =
      direction === "left"
        ? Math.max(0, activeIndex - 1)
        : Math.min(TOTAL_DOTS - 1, activeIndex + 1);

    scrollToIndex(next);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // ── Update active dot when user manually scrolls ──────────────────────────
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const index = Math.round(scrollLeft / SCROLL_SNAP_ITEM);
    setActiveIndex(Math.min(index, TOTAL_DOTS - 1));
  };

  // ── Animation variants (unchanged from original) ──────────────────────────
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 12 },
    },
    hover: {
      y: -12,
      transition: { type: "spring" as const, stiffness: 400, damping: 17 },
    },
    tap: {
      scale: 0.98,
      transition: { type: "spring" as const, stiffness: 400, damping: 17 },
    },
  };

  const cardShadowVariants = {
    hover: {
      boxShadow: `0 25px 50px -12px rgba(236, 57, 176, 0.35), 0 0 0 1px rgba(236, 57, 176, 0.15)`,
      borderColor: "rgba(236, 57, 176, 0.2)",
      transition: { duration: 0.2, ease: "easeOut" as const },
    },
  };

  const cardBorderVariants = {
    hover: {
      borderColor: "rgba(236, 57, 176, 0.4)",
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
  };

  const iconVariants = {
    hover: {
      rotate: [0, -5, 5, -5, 0],
      scale: 1.1,
      transition: { duration: 0.5, ease: "easeInOut" as const },
    },
  };

  return (
    <section
      id="features"
      aria-label="Key Features"
      className="relative"
      style={{ backgroundColor: "#fffcf8" }}
    >
      {/* Decorative background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-primary/10 to-accent/10 rounded-full blur-3xl" />
      </div>

      <section className="py-20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* ── Section header ── */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-wider mb-6"
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

          {/* ── Carousel wrapper ── */}
          <div
            className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
            onMouseEnter={stopAutoScroll}
            onMouseLeave={startAutoScroll}
          >
            {/* Left arrow */}
            <button
              onClick={() => scroll("left")}
              disabled={isAnimating}
              className="absolute z-50 rounded-full transition-all duration-300 top-1/2 -translate-y-1/2 -left-4 sm:-left-12 h-12 w-12 border border-gray-200 flex items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-primary text-white"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Right arrow */}
            <button
              onClick={() => scroll("right")}
              disabled={isAnimating}
              className="absolute z-50 rounded-full transition-all duration-300 top-1/2 -translate-y-1/2 -right-4 sm:-right-12 h-12 w-12 border border-gray-200 flex items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-primary text-white"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* ── Scrollable cards row ── */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="features-scroll overflow-x-auto overflow-y-hidden py-12"
              style={{
                WebkitOverflowScrolling: "touch",
                scrollBehavior: "smooth",
                scrollSnapType: "x mandatory",
              }}
            >
              <style>{`
                .features-scroll {
                  scrollbar-width: none !important;
                  -ms-overflow-style: none !important;
                }
                .features-scroll::-webkit-scrollbar {
                  display: none !important;
                  width: 0 !important;
                  height: 0 !important;
                  background: transparent !important;
                }
              `}</style>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex gap-6"
                style={{ width: "max-content" }}
              >
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[300px] sm:w-[320px] md:w-[340px] snap-center"
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
                      <motion.div
                        variants={cardShadowVariants}
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        style={{ boxShadow: "0 10px 30px -15px rgba(0,0,0,0.15)" }}
                      />
                      <motion.div
                        variants={cardBorderVariants}
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        style={{ border: "2px solid transparent" }}
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

            {/* ── Dot indicators ── */}
            <div className="flex justify-center items-center gap-2 mt-4">
              {Array.from({ length: TOTAL_DOTS }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    startAutoScroll(); // reset timer on manual dot click
                    scrollToIndex(i);
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                  className="transition-all duration-300 rounded-full focus:outline-none"
                  style={{
                    width: activeIndex === i ? "28px" : "10px",
                    height: "10px",
                    background:
                      activeIndex === i
                        ? "linear-gradient(to right, #ec39b0, #7E60F4)"
                        : "linear-gradient(to right, rgba(236, 57, 176, 0.3), rgba(126, 96, 244, 0.3))",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}