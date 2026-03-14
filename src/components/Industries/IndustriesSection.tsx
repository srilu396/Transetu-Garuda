"use client";
import React from "react";
import { motion } from "framer-motion";
import { industries, IndustryData } from "@/content/industries";
import { Building2 } from "lucide-react";
import { useRouter } from "next/navigation";


export default function IndustriesSection() {
  const router = useRouter();

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
      y: -8,
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

  const arrowVariants = {
    hover: {
      x: 5,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 17
      }
    }
  };

  const handleIndustryClick = (industry: IndustryData) => {
    router.push(`/industries/${industry.slug}`);
  };


  return (
    <section
      id="industries"
      className="py-24 bg-[#fef2cb] text-slate-900 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-wider mb-6"
          >
            Custom Solutions
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-slate-900"
          >
            Industries <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">We Serve</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            From logistics to healthcare, our specialized GPS and FASTag
            solutions are designed to meet the unique challenges of every
            sector.
          </motion.p>
        </div>

        {/* Industry Grid - Compact Cards with Animations */}
        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-80px" }}
           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-fr"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                viewport={{ once: true }}
                custom={index}
                className="group relative h-full cursor-pointer"
                onClick={() => handleIndustryClick(industry)}
              >
                <div className="h-full flex flex-col bg-white border-2 border-slate-200/60 rounded-xl p-5 transition-all duration-300 relative">
                  {/* Border overlay with hover animation */}
                  <motion.div 
                    variants={cardBorderVariants}
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                      border: "2px solid transparent",
                    }}
                  />
                  
                  {/* Icon & Title Row */}
                  <div className="flex items-center gap-3 mb-3 relative z-10">
                    <motion.div 
                      variants={iconVariants}
                      className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                    <h3 className="text-base font-bold group-hover:text-primary transition-colors text-slate-900 line-clamp-1">
                      {industry.title}
                    </h3>
                  </div>

                  {/* Short Description */}
                  <p className="text-slate-600 text-xs leading-relaxed mb-3 line-clamp-2 relative z-10">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Custom Solution Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 relative text-center bg-white rounded-2xl p-8 lg:p-12 border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden"
        >
          {/* Background Decorative Gradients */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -ml-40 -mb-40"></div>

          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-extrabold mb-4 text-slate-900 tracking-tight">
              Don't see your <span className="text-primary">industry listed?</span>
            </h3>
            <p className="text-base text-slate-600 font-medium mb-6 max-w-2xl mx-auto leading-relaxed">
              Our technology is highly adaptable. Contact us to discuss how we can
              build a custom tracking solution for your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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