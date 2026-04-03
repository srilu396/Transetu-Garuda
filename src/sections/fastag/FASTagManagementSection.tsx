"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CreditCard, Handshake, ShieldCheck, TrendingUp } from "lucide-react";

const fastagOptions = [
  {
    id: "buy",
    title: "Buy FASTag for Your Vehicle",
    description:
      "Users can directly purchase FASTag through Garuda OM for personal or business vehicles. The FASTag enables automatic toll payments, reduces waiting time at toll plazas, and allows seamless integration with vehicle tracking systems.",
    icon: CreditCard,
    iconBg: "bg-[#f8fafc]/30 text-[#7c3a5e] border-[#7c3a5e]/20",
    features: [
      "Easy FASTag purchase and activation",
      "Works for personal vehicles and fleets",
      "Faster toll payments without stopping",
      "Integrated with GPS fleet monitoring",
      "Toll transaction history and reports",
    ],
    buttonText: "Get FASTag",
    buttonLink: "/#contact",
    learnMoreLink: "/fastag/buy",
    buttonVariant: "primary" as const,
    badge: "For Vehicle Owners",
    badgeIcon: ShieldCheck,
  },
  {
    id: "partner",
    title: "Become a FASTag Business Partner",
    description:
      "Businesses or agents interested in expanding their services can partner with Garuda OM to offer FASTag services to customers. This program allows partners to build a FASTag distribution network and grow their business.",
    icon: Handshake,
    iconBg: "bg-[#f8fafc]/30 text-[#9d5b7a] border-[#9d5b7a]/20",
    features: [
      "Opportunity to become a FASTag distributor",
      "Build your own network of FASTag customers",
      "Support from Garuda OM team",
      "Ideal for transport agencies and vehicle service providers",
      "Business growth opportunity in the toll management ecosystem",
    ],
    buttonText: "Become a Partner",
    buttonLink: "/#contact",
    learnMoreLink: "/fastag/partner",
    buttonVariant: "outline" as const,
    badge: "Business Opportunity",
    badgeIcon: TrendingUp,
  },
];

interface FastTagSanityData {
  cards?: {
    identifier: string;
    title: string;
    description: string;
  }[];
}

export default function FASTagManagement({ sanityData }: { sanityData?: FastTagSanityData }) {
  // Merge Sanity data into fastagOptions with robust safety checks
  const displayedOptions = fastagOptions.map(option => {
    // Return early if sanityData or cards is missing
    if (!sanityData?.cards) return option;
    
    const sData = sanityData.cards.find(c => 
      c.identifier === (option.id === 'buy' ? 'buyFastTag' : 'businessPartner')
    );
    
    if (sData) {
      return {
        ...option,
        title: sData.title || option.title,
        description: sData.description || option.description,
      };
    }
    return option;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
        damping: 12,
      },
    },
    hover: {
      y: -12,
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
      borderColor: "rgba(236, 57, 176, 0.4)", // Changed to #ec39b0
      boxShadow: "0 30px 60px -15px rgba(0,0,0,0.45), 0 0 0 2px rgba(236, 57, 176, 0.1)", // Changed to #ec39b0
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
      scale: 1.05,
      backgroundColor: "rgba(236, 57, 176, 0.15)", // Changed to #ec39b0
      transition: {
        duration: 0.2,
      },
    },
  };

  const featureItemVariants = {
    hover: (index: number) => ({
      x: 5,
      transition: {
        delay: index * 0.05,
        duration: 0.2,
      },
    }),
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(249, 115, 22, 0.3)", // Kept original button shadow color
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 17,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section
      id="fastag-management"
      className="relative py-24 overflow-hidden font-sans"
      style={{ backgroundColor: "#f8fafc" }}
    >
      {/* Background Decorative Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[40%] h-[500px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute left-[15%] top-[30%] h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute right-[15%] top-[70%] h-[350px] w-[350px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container-padding max-w-7xl mx-auto relative z-10">
        {/* Section Header - Updated to match reference style */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-wider mb-6"
          >
            Toll Management
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-slate-900"
          >
            FASTag for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Customers & Partners
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Garuda OM provides FASTag services for both individual
            customers and business partners. The system helps manage toll
            payments, vehicle tracking, and fleet monitoring.
          </motion.p>
        </div>

        {/* Action Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {displayedOptions.map((option, index) => {
            const Icon = option.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                viewport={{ once: true }}
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
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary"
                  >
                    <Icon size={24} />
                  </motion.div>

                  <motion.div
                    variants={badgeVariants}
                    className="px-3 py-1.5 rounded-full bg-slate-100/80 text-primary font-bold text-[10px] uppercase tracking-wide border border-slate-200"
                  >
                    {option.badge}
                  </motion.div>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    {option.title}
                  </h3>
                  <p className="text-slate-600 font-medium text-sm leading-relaxed mb-6">
                    {option.description}
                  </p>
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                  {option.features.map((feature, fIndex) => (
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

                <div className="mt-auto flex flex-col gap-3">
                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="w-full"
                  >
                    <Link
                      href={option.buttonLink}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-gradient-primary text-white text-sm font-bold transition-all duration-300 shadow-md cursor-pointer"
                    >
                      {option.buttonText}
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
                        transition={{
                          type: "spring" as const,
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </motion.svg>
                    </Link>
                  </motion.div>

                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="w-full"
                  >
                    <Link
                      href={option.learnMoreLink}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full border-2 border-primary text-primary bg-transparent text-sm font-bold transition-all duration-300 hover:bg-primary/5 cursor-pointer"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}