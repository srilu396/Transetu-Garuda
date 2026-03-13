"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { industries, IndustryData } from "@/content/industries";
import { ArrowRight, TrendingUp, CheckCircle2, Building2 } from "lucide-react";
import SlidePanel from "../UI/SlidePanel";

export default function IndustriesSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryData | null>(null);

  const categories = [
    "All",
    ...Array.from(new Set(industries.map((ind) => ind.category))),
  ];

  const filteredIndustries =
    selectedCategory === "All"
      ? industries
      : industries.filter((ind) => ind.category === selectedCategory);

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

  const handleIndustryClick = (industry: IndustryData) => {
    setSelectedIndustry(industry);
  };

  const handleClosePanel = () => {
    setSelectedIndustry(null);
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
        <div className="text-center mb-16">
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

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-white/50 text-slate-600 hover:bg-white border border-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Industry Grid */}
        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-80px" }}
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
        >
          {filteredIndustries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div
                  onClick={() => handleIndustryClick(industry)}
                  className="h-full flex flex-col bg-white border border-slate-200/60 rounded-2xl p-8 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_-15px_rgba(var(--primary-rgb),0.25)] hover:border-primary/40 cursor-pointer"
                >
                  {/* Icon & Category */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wide bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10">
                      {industry.category}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors text-slate-900">
                    {industry.title}
                  </h3>
                  <p className="text-slate-600 font-medium text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {industry.description}
                  </p>

                  {/* Highlights/Features */}
                  <div className="space-y-3 mb-8">
                    {industry.features.slice(0, 2).map((feature, fIndex) => (
                      <div
                        key={fIndex}
                        className="flex items-center gap-2.5 text-xs font-semibold text-slate-700"
                      >
                        <div className="p-0.5 rounded-full bg-primary/10 text-primary">
                          <CheckCircle2 size={12} />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Stats Preview */}
                  {industry.stats && industry.stats[1] && (
                    <div className="flex items-center gap-2 text-primary font-bold mb-6 bg-primary/5 p-3 rounded-xl border border-primary/10 group-hover:bg-primary/10 transition-colors">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-xs">
                        {industry.stats[1].label}: {industry.stats[1].value}
                      </span>
                    </div>
                  )}

                  {/* Call to Action */}
                  <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300 mt-auto">
                    View Industry Details
                    <ArrowRight className="w-4 h-4" />
                  </div>
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
          className="mt-20 relative text-center bg-white rounded-3xl p-10 lg:p-16 border border-slate-200/80 shadow-[0_10px_40px_rgb(0,0,0,0.08)] overflow-hidden"
        >
          {/* Background Decorative Gradients */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -ml-40 -mb-40"></div>

          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-extrabold mb-6 text-slate-900 tracking-tight">
              Don't see your <span className="text-primary">industry listed?</span>
            </h3>
            <p className="text-lg text-slate-600 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
              Our technology is highly adaptable. Contact us to discuss how we can
              build a custom tracking solution for your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 30px -5px rgba(var(--primary-rgb), 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white font-bold h-14 px-10 transition-all shadow-xl shadow-primary/30 w-full sm:w-auto"
              >
                Consult Our Experts
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-300 text-slate-800 hover:border-primary hover:text-primary font-bold h-14 px-10 transition-all w-full sm:w-auto bg-transparent"
              >
                Request Customization
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <SlidePanel
        isOpen={!!selectedIndustry}
        onClose={handleClosePanel}
        title={selectedIndustry?.title || ""}
        description={selectedIndustry?.description || ""}
        features={selectedIndustry?.features || []}
        icon={selectedIndustry?.icon || Building2}
        category={selectedIndustry?.category || "Industry Solution"}
        industryData={selectedIndustry || undefined}
      />
    </section>
  );
}
