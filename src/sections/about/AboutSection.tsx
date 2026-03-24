"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Target,
  Eye,
  Briefcase,
  GraduationCap,
  Truck,
  Users,
  Globe,
  Package,
  Clock,
  CheckCircle,
  Phone,
  Mail,
  Linkedin,
  Fuel,
  Camera,
  CreditCard,
  Rocket,
  ChevronDown,
  ChevronUp,
  Award,
  Star,
} from "lucide-react";

export default function AboutSection() {
  const [showMore, setShowMore] = useState(false);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };


  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  // Icon hover animation - simple scale
  const iconHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring" as const,
        stiffness: 500,
        damping: 20,
      },
    },
  };

  const expertiseAreas = [
    {
      icon: Truck,
      label: "GPS Tracking",
      description: "Real-time fleet monitoring and management",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Camera,
      label: "Video Telematics",
      description: "Driver safety and behavior analysis",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Fuel,
      label: "Fuel Sensors",
      description: "Real-time fuel monitoring & theft detection",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: CreditCard,
      label: "FASTag Systems",
      description: "Automated toll payments & compliance",
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
    },
  ];

  const clientLogos = [
    { name: "ONGC", icon: <Globe className="w-5 h-5" />, logo: "/images/clients/ongc.png", website: "https://www.ongcindia.com/" },
    { name: "Maha Cement", icon: <Package className="w-5 h-5" />, logo: "/images/clients/maha-cement.png", website: "https://www.mahacement.com/" },
    { name: "Maersk", icon: <Globe className="w-5 h-5" />, logo: "/images/clients/maersk.png", website: "https://www.maersk.com/" },
    { name: "TS Mining", icon: <Truck className="w-5 h-5" />, logo: "/images/clients/telangana-mining.png", website: "https://tgmdc.telangana.gov.in/" },
    { name: "AP Mining", icon: <Truck className="w-5 h-5" />, logo: "/images/clients/ap-govt.png", website: "https://www.mines.ap.gov.in/miningportal/" },
    { name: "AP Transportation", icon: <Truck className="w-5 h-5" />, logo: "/images/clients/ap-transport.png", website: "https://www.aptransport.org/" },
    { name: "Singareni Mining", icon: <Truck className="w-5 h-5" />, logo: "/images/clients/singareni.png", website: "https://scclmines.com/" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#f8fafc' }}>
      {/* Animated Background Elements */}
      <motion.div
        variants={floatAnimation}
        initial="initial"
        animate="animate"
        className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48"
      />
      <motion.div
        variants={floatAnimation}
        initial="initial"
        animate="animate"
        custom={1}
        className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -ml-48 -mb-48"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" as const,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Header Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          {/* Fixed badge - removed hover animation */}
          <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-wider mb-6">
            Why Choose Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-slate-900">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Garuda OM</span>
          </h2>
          <p className="text-lg text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed">
            A technology-driven logistics and fleet solutions provider with 2000+ active clients
          </p>
        </motion.div>

        {/* Stats Bar - Cards WITHOUT movement, only icon hover */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { value: "2000+", label: "Active Clients", icon: Users },
            { value: "6+", label: "Years Experience", icon: Clock },
            { value: "15K+", label: "Vehicles Tracked", icon: Truck },
            { value: "99.9%", label: "Client Retention", icon: Star },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100 transition-shadow hover:shadow-xl"
              >
                <motion.div 
                  initial="rest"
                  whileHover="hover"
                  variants={iconHover}
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3"
                >
                  <Icon className="w-6 h-6 text-primary" />
                </motion.div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Founder & Company Overview */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Founder Card */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl relative overflow-hidden group"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-16 -mt-16"
            />
            
            <div className="relative z-10">
              <div className="flex items-start gap-8 mb-6">
                {/* Founder Image */}
<div className="w-32 h-36 rounded-2xl flex items-center justify-center shadow-lg shrink-0 overflow-hidden border-2 border-gray-100 bg-gray-50 p-1">
  <Image
    src="/images/founder.png"
    alt="Polimetla Sudhakar - Founder & Business Strategist"
    width={128}
    height={128}
    className="w-full h-full object-contain"
    priority
  />
</div>
                <div>
                  <motion.h3 
                    variants={fadeInUp}
                    className="text-2xl font-black mb-1"
                  >
                    Polimetla Sudhakar
                  </motion.h3>
                  <motion.p 
                    variants={fadeInUp}
                    className="text-primary font-medium mb-2 flex items-center gap-2"
                  >
                    <Rocket className="w-4 h-4" />
                    Founder & Business Strategist
                  </motion.p>
                  <motion.div 
                    variants={fadeInUp}
                    className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200 w-fit"
                  >
                    <GraduationCap className="w-4 h-4" />
                    MBA in Logistics & Supply Chain Management
                  </motion.div>
                </div>
              </div>

              {/* Key Info */}
              <motion.div 
                variants={staggerContainer}
                className="space-y-4 mb-6"
              >
                <motion.div 
                  variants={fadeInUp}
                  className="flex items-center gap-3 text-gray-600"
                >
                  <Briefcase className="w-5 h-5 text-primary shrink-0" />
                  <span>Ex-BlackBuck (Territory Sales Manager) | Ex-Paytm (Senior Manager - Sales)</span>
                </motion.div>
                <motion.p 
                  variants={fadeInUp}
                  className="text-gray-600 leading-relaxed"
                >
                  Experienced in logistics, freight forwarding, and import/export operations including LCL and FCL shipments. Specialized in handling both DG (Dangerous Goods) and Non-DG goods. Strong expertise in transport technology solutions.
                </motion.p>
              </motion.div>

              {/* Contact Icons */}
              <motion.div 
                variants={staggerContainer}
                className="flex gap-3"
              >
                {[
  { icon: Linkedin, href: "", color: "text-blue-600", label: "LinkedIn" },
  { icon: Mail, href: "https://mail.google.com/mail/?view=cm&to=omimportandexport1994@gmail.com", color: "text-red-500", label: "Email" },
  { icon: Phone, href: "https://wa.me/917780274792", color: "text-green-500", label: "WhatsApp" },
].map((item, index) => {
  const Icon = item.icon;
  return (
    <motion.a
  key={index}
  initial="rest"
  whileHover="hover"
  variants={iconHover}
  href={item.href || undefined}
  target={item.href ? "_blank" : undefined}
  rel={item.href ? "noopener noreferrer" : undefined}
  onClick={!item.href ? (e: React.MouseEvent) => e.preventDefault() : undefined}
  className={`w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center ${item.color} hover:bg-primary hover:text-white transition-colors border border-gray-200 ${!item.href ? "cursor-default opacity-50" : "cursor-pointer"}`}
  aria-label={item.label}
>
      {item.label === "WhatsApp" ? (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
) : (
  <Icon className="w-4 h-4" />
)}
    </motion.a>
  );
})}
              </motion.div>
            </div>
          </motion.div>

          {/* Company Overview Card */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl"
          >
            <motion.div 
              variants={fadeInUp}
              className="flex items-start gap-4 mb-6"
            >
              <motion.div 
                initial="rest"
                whileHover="hover"
                variants={iconHover}
                className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center"
              >
                <Target className="w-6 h-6 text-primary" />
              </motion.div>
              <div>
                <h4 className="text-xl font-bold mb-1">Company Overview</h4>
                <p className="text-sm text-gray-600">Leading fleet technology solutions provider</p>
              </div>
            </motion.div>

            <motion.p 
              variants={fadeInUp}
              className="text-gray-600 leading-relaxed mb-6"
            >
              Garuda OM provides comprehensive logistics technology solutions designed to empower modern transportation businesses through GPS tracking, video telematics, fuel monitoring, and FASTag management systems. We emphasize improving fleet visibility, operational transparency, and efficiency.
            </motion.p>

            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-2 gap-3 mb-6"
            >
              {expertiseAreas.slice(0, 2).map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200 group hover:border-primary/30 hover:bg-primary/5 transition-all"
                >
                  <motion.div
                    initial="rest"
                    whileHover="hover"
                    variants={iconHover}
                    className={`w-8 h-8 ${item.bgColor} rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors`}
                  >
                    <item.icon className={`w-4 h-4 ${item.color} group-hover:text-white transition-colors`} />
                  </motion.div>
                  <span className="text-xs font-semibold text-gray-700">{item.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.button
              onClick={() => setShowMore(!showMore)}
              initial="rest"
              whileHover="hover"
              variants={iconHover}
              className="w-full flex items-center justify-center gap-2 py-3 bg-primary/5 hover:bg-primary/10 rounded-xl text-primary font-medium transition-colors border border-primary/20"
            >
              <span>{showMore ? "Show Less" : "Read More About Us"}</span>
              <motion.div
                animate={{ rotate: showMore ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {showMore ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </motion.div>
            </motion.button>
          </motion.div>
        </div>

        {/* Expandable More Details Section */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="overflow-hidden mb-12"
            >
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl"
              >
                {/* Vision & Mission */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div 
                    className="p-6 bg-blue-500/5 rounded-2xl border border-blue-500/20 hover:shadow-lg transition-all"
                  >
                    <motion.div 
                      initial="rest"
                      whileHover="hover"
                      variants={iconHover}
                      className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center mb-4"
                    >
                      <Eye className="w-5 h-5 text-white" />
                    </motion.div>
                    <h5 className="font-bold mb-2">Our Vision</h5>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      To build a reliable and technology-driven logistics and freight forwarding business that connects global markets efficiently while ensuring transparency, safety, and customer satisfaction.
                    </p>
                  </div>
                  <div 
                    className="p-6 bg-green-500/5 rounded-2xl border border-green-500/20 hover:shadow-lg transition-all"
                  >
                    <motion.div 
                      initial="rest"
                      whileHover="hover"
                      variants={iconHover}
                      className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center mb-4"
                    >
                      <Target className="w-5 h-5 text-white" />
                    </motion.div>
                    <h5 className="font-bold mb-2">Our Mission</h5>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      To provide innovative logistics and transportation solutions by integrating modern tracking technologies, efficient supply chain management, and strong customer support to deliver goods safely and on time across domestic and international markets.
                    </p>
                  </div>
                </div>

                {/* Achievements */}
                <motion.div variants={fadeInUp} className="mb-8">
                  <h5 className="font-bold mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Key Achievements
                  </h5>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      "Developed strong expertise in GPS, video telematics, fuel sensors, and FASTag integration",
                      "Successfully handled freight forwarding operations including LCL and FCL import/export shipments",
                      "Built high-performing sales teams and achieved strong market growth during tenure at Paytm and BlackBuck",
                    ].map((item, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start gap-2 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-primary/30 hover:bg-primary/5 transition-all"
                      >
                        <motion.div
                          initial="rest"
                          whileHover="hover"
                          variants={iconHover}
                        >
                          <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        </motion.div>
                        <span className="text-sm text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Full Expertise Grid */}
                <motion.div variants={fadeInUp}>
                  <h5 className="font-bold mb-4">Core Expertise</h5>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {expertiseAreas.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="p-4 bg-gray-50 rounded-xl border border-gray-200 group hover:border-primary/30 hover:shadow-md transition-all"
                      >
                        <motion.div 
                          initial="rest"
                          whileHover="hover"
                          variants={iconHover}
                          className={`w-10 h-10 ${item.bgColor} rounded-lg flex items-center justify-center mb-2 group-hover:bg-primary transition-colors`}
                        >
                          <item.icon className={`w-5 h-5 ${item.color} group-hover:text-white transition-colors`} />
                        </motion.div>
                        <p className="font-semibold text-sm mb-1 text-gray-800">{item.label}</p>
                        <p className="text-xs text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Client Organizations */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900">Trusted By Industry Leaders</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {clientLogos.map((client, idx) => {
              const Wrapper = client.website ? motion.a : motion.div;
              const wrapperProps = client.website
                ? { href: client.website, target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
                <Wrapper
                  key={idx}
                  initial="rest"
                  whileHover="hover"
                  variants={iconHover}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:border-primary/30 hover:shadow-md transition-all cursor-pointer overflow-hidden flex flex-col items-center justify-center min-h-[120px] min-w-[160px] px-6 py-5"
                  {...wrapperProps}
                >
                  {client.logo ? (
                    <div className="relative w-full min-h-[72px] flex items-center justify-center flex-1">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={280}
                        height={80}
                        loading="lazy"
                        className="object-contain object-center w-full max-w-[200px] h-14 sm:h-16"
                      />
                    </div>
                  ) : (
                    <motion.div
                      initial="rest"
                      whileHover="hover"
                      variants={iconHover}
                      className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0 mb-1"
                    >
                      {client.icon}
                    </motion.div>
                  )}
                  <span className="font-semibold text-gray-800 text-sm text-center mt-2 leading-tight">{client.name}</span>
                </Wrapper>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}