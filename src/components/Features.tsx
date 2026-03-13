"use client";

import React, { useState, useEffect, useCallback } from "react";
import { 
  MapPin, 
  Shield, 
  Fuel, 
  BarChart3, 
  Satellite, 
  Zap, 
  LocateFixed, 
  Route, 
  UserCheck, 
  Box,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

/**
 * 10 High-Quality GPS Feature Cards with vibrant colors and polished descriptions.
 */
const features = [
  {
    title: "Live Asset Visibility",
    description: "Monitor your fleet and assets with high-precision location data updated in real-time.",
    icon: <MapPin className="w-10 h-10 text-blue-500" />,
    color: "bg-blue-500/10",
  },
  {
    title: "Proactive Security Suite",
    description: "Multi-layered security with engine immobilizers, SOS alerts, and advanced anti-theft protocols.",
    icon: <Shield className="w-10 h-10 text-green-500" />,
    color: "bg-green-500/10",
  },
  {
    title: "Dynamic Fuel Intelligence",
    description: "Precise fuel level monitoring to detect sudden drainage and optimize overall consumption.",
    icon: <Fuel className="w-10 h-10 text-orange-500" />,
    color: "bg-orange-500/10",
  },
  {
    title: "Actionable Data Analytics",
    description: "Convert raw GPS data into strategic insights with automated reporting and custom dashboards.",
    icon: <BarChart3 className="w-10 h-10 text-purple-500" />,
    color: "bg-purple-500/10",
  },
  {
    title: "Hyper-Reliable Connectivity",
    description: "Enhanced global connectivity ensuring your assets stay connected even in the most remote areas.",
    icon: <Satellite className="w-10 h-10 text-cyan-500" />,
    color: "bg-cyan-500/10",
  },
  {
    title: "Precision Alert System",
    description: "Instant notifications for over-speeding, excessive idling, and unauthorized route deviations.",
    icon: <Zap className="w-10 h-10 text-yellow-500" />,
    color: "bg-yellow-500/10",
  },
  {
    title: "Smart Virtual Boundaries",
    description: "Define custom geofences and receive immediate alerts for entry/exit events.",
    icon: <LocateFixed className="w-10 h-10 text-red-500" />,
    color: "bg-red-500/10",
  },
  {
    title: "Efficiency-First Routing",
    description: "Intelligent path planning designed to reduce mileage, save time, and lower operating costs.",
    icon: <Route className="w-10 h-10 text-violet-600" />,
    color: "bg-violet-600/10",
  },
  {
    title: "Behavioral Safety Analysis",
    description: "Evaluate driving patterns to ensure safety and improve vehicle longevity across the fleet.",
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

export default function Features() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  // Memoized max index to avoid repetitive calculations
  const maxIndex = Math.max(0, features.length - itemsToShow);

  const updateItemsToShow = useCallback(() => {
    if (window.innerWidth < 640) {
      setItemsToShow(1);
    } else if (window.innerWidth < 768) {
      setItemsToShow(2);
    } else if (window.innerWidth < 1024) {
      setItemsToShow(3);
    } else {
      setItemsToShow(4);
    }
  }, []);

  useEffect(() => {
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, [updateItemsToShow]);

  // Ensure currentIndex stays within bounds when itemsToShow changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsToShow, currentIndex, maxIndex]);

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section id="features" aria-label="Key Features">
      <section className="py-20 bg-gradient-to-b from-background to-secondary/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
              Core <span className="text-gradient">Strengths of Our Platform</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the next generation of logistics management with our comprehensive GPS ecosystem, engineered for precision and performance.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="relative w-full overflow-visible"
              role="region"
              aria-roledescription="carousel"
            >
              {/* Carousel Viewport */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-[cubic-bezier(0.45,0,0.55,1)]"
                  style={{ 
                    // translateX percentage is relative to the container itself (the one with the width calculation)
                    // If each item is (100 / features.length)% of the container width, 
                    // moving by one item means moving by (100 / features.length)%
                    transform: `translateX(-${currentIndex * (100 / features.length)}%)`,
                    width: `${(features.length / itemsToShow) * 100}%` 
                  }}
                >
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      role="group"
                      aria-roledescription="slide"
                      className="px-3"
                      style={{ width: `${100 / features.length}%` }}
                    >
                      <div className="rounded-3xl bg-card text-card-foreground shadow-lg h-full border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] w-full flex flex-col p-8 group">
                        <div className="mb-6 flex justify-center">
                          <div className={`p-6 rounded-2xl ${feature.color} group-hover:scale-110 group-hover:shadow-inner transition-all duration-500`}>
                            {feature.icon}
                          </div>
                        </div>
                        <div className="text-center flex-1">
                          <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                            {feature.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows - Using scale-0 and pointer-events-none for a clean "pause" effect */}
              <button
                onClick={prevSlide}
                className={`absolute z-30 rounded-full transition-all duration-500 top-1/2 -translate-y-1/2 -left-4 sm:-left-12 h-14 w-14 border-2 border-primary bg-background text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground shadow-2xl group ${
                  currentIndex === 0 ? "opacity-0 scale-75 pointer-events-none" : "opacity-100 scale-100"
                }`}
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-8 w-8 transition-transform group-active:scale-75" />
              </button>
              
              <button
                onClick={nextSlide}
                className={`absolute z-30 rounded-full transition-all duration-500 top-1/2 -translate-y-1/2 -right-4 sm:-right-12 h-14 w-14 border-2 border-primary bg-background text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground shadow-2xl group ${
                  currentIndex >= maxIndex ? "opacity-0 scale-75 pointer-events-none" : "opacity-100 scale-100"
                }`}
                aria-label="Next slide"
              >
                <ChevronRight className="h-8 w-8 transition-transform group-active:scale-75" />
              </button>
            </div>

            {/* Intuitive Pagination Indicators */}
            <div className="flex justify-center flex-wrap gap-2.5 mt-16">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 transition-all duration-500 rounded-full ${
                    currentIndex === idx 
                      ? "w-10 bg-primary shadow-md" 
                      : "w-2.5 bg-primary/20 hover:bg-primary/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}