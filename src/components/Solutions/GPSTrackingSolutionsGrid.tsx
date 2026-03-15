"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SlidePanel from "../UI/SlidePanel";
import {
  Camera,
  Truck,
  Satellite,
  Fuel,
  Thermometer,
  Lock,
  MapPin,
  Shield,
} from "lucide-react";
import { solutions as solutionsData, SolutionData } from "@/content/solutions";

const products = [
  {
    title: "Dash Cam System",
    description:
      "Improve driver safety with a smart dash camera that records both road and cabin activity while providing real-time alerts and video monitoring.",
    icon: Camera,
    badge: "Video Safety",
    features: [
      "Dual camera recording",
      "Driver safety alerts",
      "Cloud video access",
    ],
    link: "/solutions/dash-cam-system",
    slug: "dash-cam-system",
  },
  {
    title: "Fleet GPS Tracker",
    description:
      "Track and manage your fleet in real time with a powerful GPS tracking system that helps optimize routes and monitor driver performance.",
    icon: Truck,
    badge: "Fleet Management",
    features: [
      "Real-time vehicle tracking",
      "Route optimization",
      "Driver behavior insights",
    ],
    link: "/solutions/gps-tracking-solutions",
    slug: "gps-tracking-solutions",
  },
  {
    title: "Mining Equipment Tracking",
    description:
      "A rugged GPS tracking solution designed for heavy mining equipment, helping monitor machinery and improve operational visibility in harsh environments.",
    icon: Satellite,
    badge: "Mining Solutions",
    features: [
      "Durable GPS devices",
      "Equipment monitoring",
      "Geofencing alerts",
    ],
    link: "/solutions/iot-for-mining",
    slug: "iot-for-mining",
  },
  {
    title: "Fuel Monitoring System",
    description:
      "Monitor fuel levels accurately and detect fuel theft using advanced sensors integrated with your vehicle tracking system.",
    icon: Fuel,
    badge: "Fuel Management",
    features: [
      "Fuel level tracking",
      "Theft detection alerts",
      "Fuel usage reports",
    ],
    link: "/solutions/fuel-level-sensors",
    slug: "fuel-level-sensors",
  },
  {
    title: "Video Telematics",
    description:
      "Combine GPS tracking with video monitoring to improve security and gain better visibility into vehicle activity and driver behavior.",
    icon: Camera,
    badge: "Security Solutions",
    features: [
      "Live video streaming",
      "GPS location tracking",
      "Motion detection alerts",
    ],
    link: "/solutions/video-telematics",
    slug: "video-telematics",
  },
  {
    title: "Temperature Monitoring",
    description:
      "Track temperature conditions during transportation to protect sensitive goods such as food, medicine, and other perishable items.",
    icon: Thermometer,
    badge: "Cold Chain",
    features: [
      "Real-time temperature tracking",
      "Compliance reports",
      "Instant alerts",
    ],
    link: "/solutions/temperature-monitor",
    slug: "temperature-monitor",
  },
  {
    title: "GPS Smart Padlock",
    description:
      "Secure cargo, containers, and valuable assets with a smart padlock that provides location tracking and tamper alerts.",
    icon: Lock,
    badge: "Asset Security",
    features: ["Remote lock control", "GPS location tracking", "Tamper alerts"],
    link: "/solutions/padlock-gps",
    slug: "padlock-gps",
  },
  {
    title: "Photogrammetry Services",
    description:
      "High-precision mapping and surveying services using advanced GPS and photogrammetry technology for accurate geographic data.",
    icon: MapPin,
    badge: "Mapping Services",
    features: ["Survey data collection", "Precision mapping", "3D modeling"],
    link: "/solutions/photogrammetry-services",
    slug: "photogrammetry-services",
  },
  {
    title: "AIS 140 GPS Tracker",
    description:
      "Government-approved GPS tracking device designed to meet AIS 140 compliance standards for commercial vehicles.",
    icon: Shield,
    badge: "Compliance",
    features: [
      "Emergency panic button",
      "AIS 140 certified",
      "Vehicle diagnostics",
    ],
    link: "/solutions/ais-140-tracker",
    slug: "ais-140-tracker",
  },
];

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [selectedSolutionData, setSelectedSolutionData] = useState<SolutionData | null>(null);
  
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
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      y: -12,
      scale: 1.02,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 17
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 17
      }
    }
  };

  const cardBorderVariants = {
    hover: {
      borderColor: "rgba(249, 115, 22, 0.4)",
      boxShadow: "0 30px 60px -15px rgba(0,0,0,0.45), 0 0 0 2px rgba(249, 115, 22, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: [0, -5, 5, -5, 0],
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeInOut" as const
      }
    }
  };

  const badgeVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(249, 115, 22, 0.15)",
      transition: {
        duration: 0.2
      }
    }
  };

  const featureItemVariants = {
    hover: (index: number) => ({
      x: 5,
      transition: {
        delay: index * 0.05,
        duration: 0.2
      }
    })
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(249, 115, 22, 0.3)",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 17
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section
      id="products"
      className="py-24 bg-[#fef2cb] text-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-wider mb-6"
          >
            Our GPS Solutions
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-slate-900"
          >
            GPS{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tracking Solutions
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Built for Mining, Logistics, Transportation & More
            Rugged GPS tracking devices, accurate fuel level sensors, and HD
            dash cams designed for harsh environments and 24/7 operations.
          </motion.p>
        </div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-32 auto-rows-fr"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              whileTap="tap"
              viewport={{ once: true }}
              custom={index}
              className="group relative flex flex-col h-full bg-white border-2 border-slate-200/60 rounded-2xl p-6 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
            >
              <motion.div 
                variants={cardBorderVariants}
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  border: "2px solid transparent",
                }}
              />
              
              <div className="flex items-start justify-between mb-6">
                <motion.div 
                  variants={iconVariants}
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-primary text-white"
                >
                  {(() => {
                    const Icon = product.icon;
                    return <Icon className="w-6 h-6" />;
                  })()}
                </motion.div>
                <motion.div 
                  variants={badgeVariants}
                  className="px-3 py-1.5 rounded-full bg-slate-100/80 text-primary font-bold text-[10px] uppercase tracking-wide border border-slate-200"
                >
                  {product.badge}
                </motion.div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-slate-900">
                {product.title}
              </h3>
              <p className="text-slate-600 font-medium text-sm leading-relaxed mb-6 flex-grow">
                {product.description}
              </p>

              <div className="space-y-3 mb-8">
                {product.features.map((feature, fIndex) => (
                  <motion.div
                    key={fIndex}
                    custom={fIndex}
                    variants={featureItemVariants}
                    className="flex items-center text-sm text-slate-600 font-medium"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    {feature}
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto">
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => {
                    setSelectedProduct(product);
                    if (product.slug && solutionsData[product.slug]) {
                      setSelectedSolutionData(solutionsData[product.slug]);
                    } else {
                      setSelectedSolutionData(null);
                    }
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-primary text-white text-sm font-bold transition-all duration-300 shadow-md"
                >
                  Learn More
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right"
                    animate={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </motion.svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <SlidePanel
          isOpen={!!selectedProduct}
          onClose={() => {
            setSelectedProduct(null);
            setSelectedSolutionData(null);
          }}
          title={selectedProduct?.title || ""}
          description={selectedProduct?.description || ""}
          features={selectedProduct?.features || []}
          icon={selectedProduct?.icon || Truck}
          category={selectedProduct?.badge || "Fleet Solution"}
          solutionData={selectedSolutionData || undefined}
        />

        {/* Custom Solution Callout - Updated to match reference style */}
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
              Need a <span className="text-primary">Custom Solution?</span>
            </h3>
            <p className="text-lg text-slate-600 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
              Our engineering team specializes in architecting bespoke GPS
              tracking ecosystems tailored to your specific industrial
              workflows. Let's discuss your unique operational needs.
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
                Consult Our Experts
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-300 text-slate-800 hover:border-primary hover:text-primary font-bold h-12 px-8 transition-all w-full sm:w-auto bg-transparent text-sm"
              >
                Request Customization
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}