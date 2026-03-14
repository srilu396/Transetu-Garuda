"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import SlidePanel from "../UI/SlidePanel";
import { solutions as solutionsData, SolutionData } from "@/content/solutions";

export default function SolutionsOverviewSection() {
  const [selectedSolution, setSelectedSolution] = useState<
    (typeof solutions)[0] | null
  >(null);
  const [selectedSolutionData, setSelectedSolutionData] =
    useState<SolutionData | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const solutions = [
    {
      title: "GPS Tracking & Monitoring",
      description:
        "Live vehicle tracking, fuel sensors, route history, and driver behavior alerts for complete fleet control.",
      features: [
        "Real-time GPS Tracking",
        "Fuel Theft Detection",
        "Dash Cam Integration",
        "Driver Behavior Monitoring",
      ],
      icon: "gps", // Changed to string identifier
      imageLogo: "data:image/png;base64,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",
      category: "Fleet Solutions",
      layoutType: "split" as const,
      slug: "gps-tracking-solutions",
    },
    {
      title: "FASTag Solutions",
      description:
        "Automated toll payments for fleet owners and easy FASTag issuance for individual users. Partnership opportunities available.",
      features: [
        "Direct FASTag Purchase",
        "Toll Transaction Tracking",
        "Balance & Recharge Management",
        "Partner with Us for FASTag Business",
      ],
      icon: "fastag", // Changed to string identifier
      imageLogo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDw8PDQ8PDw0NDw8NDw4NDRAPDw0PFRUWFhURFhYYHSggGBolHRUVITIiJSkrLi4uFyIzODMsNygtLisBCgoKDg0OGxAQGi0lICUwLS03LS0uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKIBOAMBEQACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABgEDBAUHAv/EAEsQAAICAQEDBQwGCAMGBwAAAAECAAMEEQUSIQYTFjFRFBUiQVJUYXGBktHSgpGTlJXTBxcjMkJTZHKhscEkQ1Vio9QzNIOztMPh/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAMEBQIBBgf/xAAwEQEAAgECBAYCAQQCAwEAAAAAAQIDBBESExRRBRUhMVJhQVORIjJxoYGxQkPRJP/aAAwDAQACEQMRAD8A7hAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQBgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGr2ztbubcVa2stt13FHVw7dOPjlLV6vk7VrXeZWtPp+bvMztENU9O0r+L2LQp/h39z/LU/WZQtXW5fW1orC3FtJj9IjilZfZWenhV3mz+y9if8eBkU6TWV/qpff8A5dxqdLb0tTb/AIZGxdvvzgoyhoxO6HI3WDeSw/1k2j8Qvx8rP790ep0VeHmYvbsk822WQEBAQEBAQEBAQEBAQEBAQEDWbS25TjOEsDliu94AB0B7ePolLUa7Fgtw291nDpMmWvFVidK8fybfcX4yDzfB9pvLc30dK8fybfdX4x5vg+zy3N9HSvH8m33F+Meb4Ps8uzfR0rx/Jt9xfjHm+D7PLs30dK8fybfcX4x5vg+z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oCAgICAgICBD+UfI1r7Gtwnrpa3U3V2BwhY/71CnFWPj7evgdda+XT1yTv8AlBkwVvO65RyBw91ecOTzm6N/c2hlbu9px01bq1nXT4+zrk07PfQHA7cv8Qyvnjp8fY5OPsdAcDty/wAQyvnjp8fY5OPsdAcD+r/EMr546fH2OTTsdAcD+r/EMr546fH2OTTsdAcDty/xDK+eOnx9jk4+x0BwO3L/ABDK+eOnx9jk4+x0BwP6v7/lfPHT4+xyadjoDgduX+IZXzx0+PscnH2OgOB25f4hlfPHT4+xycfY6A4H9X+IZXzx0+PscnH2OgOB25f4hlfPHT4+xyadjoDgduX+IZXzx0+PscmnY6A4H9X+IZXzx0+PscnH2OgOB25f4hlfPHIx9jk4+x0AwO3L/EMr545GPscmnY6A4H9X+IZXzxyMfY5OPsqnIDZuoL1W3AfwZGZk3VH11s5U+0GdVxUr7Q6rjrX2hJaalRVVFVEUBVVAFVVHUAB1CSO3uAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAEBAQEBArApAQEBAQEBAQEBAQKwKQEBAQEBAQEBAQECsBApAQKwECkBAQKwKQEBAQP/2Q==",
      category: "Toll Feature",
      layoutType: "grid" as const,
      slug: "fastag",
    },
  ];

  const handleLearnMore = (solution: (typeof solutions)[0]) => {
    setSelectedSolution(solution);
    if (solution.slug && solutionsData[solution.slug]) {
      setSelectedSolutionData(solutionsData[solution.slug]);
    } else {
      setSelectedSolutionData(null);
    }
    setIsPanelOpen(true);
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.15,
      },
    }),
  };

  return (
    <section
      id="solutions"
      className="relative py-24 overflow-hidden"
      style={{
        backgroundColor: "#fff8e7",
        backgroundImage:
          "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,248,231,1) 45%, rgba(255,245,220,1) 100%), radial-gradient(900px 380px at 22% 18%, rgba(99,102,241,0.08) 0%, rgba(99,102,241,0) 60%), radial-gradient(900px 380px at 78% 22%, rgba(236,72,153,0.08) 0%, rgba(236,72,153,0) 62%)",
      }}
    >
      {/* Soft lighting (no dots/grids/patterns) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[58%] h-[420px] w-[980px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 blur-3xl" />
        <div className="absolute left-[18%] top-[65%] h-[340px] w-[340px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[14%] top-[62%] h-[320px] w-[320px] rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6"
          >
            Our Expertise
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-slate-900"
          >
            GPS Telematics{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              & FASTag Integration
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Integrated vehicle tracking, fuel monitoring, and toll management systems for fleet owners and individual users.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {solutions.map((solution, index) => {
            return (
              <motion.div
                key={solution.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={[
                  "group relative h-full flex flex-col items-center text-center",
                  "rounded-3xl p-6 lg:p-8",
                  "bg-white backdrop-blur-md border border-slate-100",
                  "shadow-[0_8px_32px_rgba(0,0,0,0.08)]",
                  "hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)]",
                  "transition-all duration-500",
                  "max-w-md mx-auto w-full",
                ].join(" ")}
              >
                <div className="relative z-10 flex flex-col h-full items-center w-full">
                  {/* Image Logo Area - Replaced icons with images */}
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      filter: "drop-shadow(0 0 12px rgba(100, 103, 242, 0.4))",
                    }}
                    className="w-20 h-20 rounded-xl flex items-center justify-center mb-6 overflow-hidden bg-white p-2 border border-[#7375f2]/10"
                  >
                    <Image
                      src={solution.imageLogo}
                      alt={`${solution.title} logo`}
                      width={64}
                      height={64}
                      className="object-contain w-full h-full"
                    />
                  </motion.div>

                  <h3 className="text-xl lg:text-2xl font-bold mb-3 text-slate-800 tracking-tight">
                    {solution.title}
                  </h3>

                  <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  {/* Features in straight line - updated with consistent alignment */}
                  <div className="flex-grow flex flex-col items-center space-y-3 mb-8 w-full">
                    {solution.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2.5 text-xs lg:text-sm font-semibold text-slate-700 w-full justify-center"
                      >
                        <div className="p-1 rounded-full bg-[#7375f2]/10 text-[#7375f2] flex-shrink-0">
                          <CheckCircle2 size={14} />
                        </div>
                        <span className="text-left">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    onClick={() => handleLearnMore(solution)}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      backgroundColor: "#5a5ce0", // Slightly darker on hover
                    }}
                    whileTap={{ scale: 0.95 }}
                    style={{ backgroundColor: "#6467f2" }}
                    className={[
                      "group/btn flex items-center justify-center gap-2",
                      "py-3.5 px-4 rounded-full",
                      "text-sm font-bold transition-all duration-300",
                      "text-white shadow-md hover:shadow-xl hover:shadow-[#6467f2]/20",
                      "group-hover:translate-y-[-2px]",
                      "w-full mt-auto cursor-pointer",
                    ].join(" ")}
                  >
                    <span className="text-sm font-bold text-white">
                      Learn More
                    </span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {selectedSolution && (
        <SlidePanel
          isOpen={isPanelOpen}
          onClose={() => {
            setIsPanelOpen(false);
            setSelectedSolutionData(null);
          }}
          title={selectedSolution.title}
          description={selectedSolution.description}
          features={selectedSolution.features}
          icon={selectedSolution.icon}
          category={selectedSolution.category}
          layoutType={selectedSolution.layoutType}
          solutionData={selectedSolutionData || undefined}
        />
      )}
    </section>
  );
}