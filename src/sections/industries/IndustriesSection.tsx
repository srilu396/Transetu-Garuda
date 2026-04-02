"use client";
import React, { memo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { industries as staticIndustries } from "@/sections/industries/data/industriesData";
import { IconRegistry } from "@/components/Icons/IconRegistry";
import { fetchSanityQuery } from "@/actions/sanity";
import { INDUSTRIAL_CARDS_QUERY } from "@/lib/queries";

interface UnifiedIndustry {
  _id?: string;
  iconName?: string;
  icon?: string; // Icon name for registry
  title: string;
  description: string;
  badge?: string;
  category?: string;
  order?: number;
  slug: string;
}

// Memoized Industry Card for better performance
const IndustryCard = memo(({ industry, index }: { industry: UnifiedIndustry, index: number }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
        delay: index * 0.05, // Stagger effect
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 17,
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 17,
      },
    },
  };

  const cardBorderVariants = {
    hover: {
      borderColor: "rgba(236, 57, 176, 0.4)",
      boxShadow:
        "0 30px 60px -15px rgba(236, 57, 176, 0.25), 0 0 0 2px rgba(236, 57, 176, 0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  const iconVariants = {
    hover: {
      rotate: [0, -5, 5, -5, 0],
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeInOut" as const,
      },
    },
  };

  const badgeVariants = {
    hover: {
      opacity: 0.9,
      transition: { duration: 0.2 },
    },
  };

  // Support both Sanity (iconName) and Static (icon)
  const iconRaw = industry.iconName || industry.icon;
  const IndustryIcon = (IconRegistry as Record<string, React.ElementType>)[(iconRaw || "Building") as string] || IconRegistry.Building;
  
  // Support both Sanity (badge) and Static (category)
  const category = industry.badge || industry.category;

  return (
    <Link href={`/industries/${industry.slug}`} passHref prefetch={false}>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        whileTap="tap"
        viewport={{ once: true }}
        className="group relative h-full cursor-pointer"
      >
        <div className="h-full flex flex-col bg-white border-2 border-slate-200/60 rounded-xl p-5 transition-all duration-300 relative">
          <motion.div
            variants={cardBorderVariants}
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{ border: "2px solid transparent" }}
          />

          <div className="flex items-center gap-3 mb-3 relative z-10">
            <motion.div
              variants={iconVariants}
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #ec39b0, #7E60F4)",
                color: "white",
                boxShadow: "0 4px 10px rgba(236, 57, 176, 0.3)"
              }}
            >
              <IndustryIcon className="w-5 h-5" />
            </motion.div>
            <h3 className="text-base font-bold group-hover:text-[#ec39b0] transition-colors text-slate-900 line-clamp-1">
              {industry.title}
            </h3>
          </div>

          <p className="text-slate-600 text-xs leading-relaxed mb-3 line-clamp-2 relative z-10">
            {industry.description}
          </p>

          <motion.div
            variants={badgeVariants}
            className="mt-auto relative z-10 w-fit"
          >
            <span className="inline-block rounded-md border border-primary/25 bg-gradient-to-r from-primary/10 to-accent/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider group-hover:border-[#ec39b0]/25 group-hover:from-[#ec39b0]/10 group-hover:to-[#ec39b0]/10 transition-all duration-300">
              {category}
            </span>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
});

IndustryCard.displayName = "IndustryCard";

export default function IndustriesSection() {
  const [industries, setIndustries] = useState<UnifiedIndustry[]>(staticIndustries);
  const [, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadIndustries() {
      try {
        const isIframe = window.self !== window.top;
        const data = await fetchSanityQuery(INDUSTRIAL_CARDS_QUERY, {}, isIframe);
        if (data && data.length > 0) {
          setIndustries(data);
        } else {
          setIndustries(staticIndustries);
        }
      } catch (error) {
        console.error("Sanity industrial fetch failed, using fallback:", error);
        setIndustries(staticIndustries);
      } finally {
        setIsLoading(false);
      }
    }
    loadIndustries();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const handleContactNavigation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="industries"
      className="py-24 bg-[#fef2cb] text-slate-900 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-wider mb-6"
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
            Industries{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              We Serve
            </span>
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-fr"
        >
          {industries.map((industry, index) => (
            <IndustryCard key={industry.slug} industry={industry} index={index} />
          ))}
        </motion.div>

        {/* Custom Solution Callout - Updated to match GPS section style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 relative text-center bg-white rounded-3xl p-10 lg:p-16 overflow-hidden"
          style={{
            border: "1.5px solid rgba(126, 96, 244, 0.2)",
            boxShadow: "0 10px 40px rgba(126, 96, 244, 0.08)",
          }}
        >
          {/* Background Decorative Gradients */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl -mr-40 -mt-40"
            style={{ background: "rgba(236,57,176,0.08)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl -ml-40 -mb-40"
            style={{ background: "rgba(126,96,244,0.08)" }}
          />

          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-extrabold mb-6 text-slate-900 tracking-tight">
              Don't see your{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(to right, #ec39b0, #7E60F4)" }}
              >
                industry listed?
              </span>
            </h3>
            <p className="text-lg text-slate-500 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
              Our technology is highly adaptable. Contact us to discuss how we
              can build a custom tracking solution for your specific business
              needs.
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
                Consult Our Experts
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
                Request Customization
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}