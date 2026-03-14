"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Target,
  Eye,
  Briefcase,
  GraduationCap,
  Truck,
  Shield,
  Users,
  Globe,
  Package,
  Clock,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  BarChart3,
  Fuel,
  Camera,
  CreditCard,
  Rocket,
  TrendingUp,
  Compass,
} from "lucide-react";

export default function AboutSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for smoothness
      },
    },
    hover: {
      y: -5,
      transition: { duration: 0.3 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const iconVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "backOut" },
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  };

  const statVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -5,
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const expertiseAreas = [
    {
      icon: Truck,
      label: "GPS Tracking",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      iconColor: "text-blue-500",
    },
    {
      icon: Camera,
      label: "Video Telematics",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      iconColor: "text-purple-500",
    },
    {
      icon: Fuel,
      label: "Fuel Sensors",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      iconColor: "text-green-500",
    },
    {
      icon: CreditCard,
      label: "FASTag Systems",
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
      iconColor: "text-amber-500",
    },
    {
      icon: Package,
      label: "LCL/FCL Operations",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      iconColor: "text-orange-500",
    },
    {
      icon: Globe,
      label: "Import/Export",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
      iconColor: "text-cyan-500",
    },
    {
      icon: BarChart3,
      label: "Sales Leadership",
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
      iconColor: "text-indigo-500",
    },
    {
      icon: Shield,
      label: "DG Cargo",
      color: "text-rose-500",
      bgColor: "bg-rose-500/10",
      iconColor: "text-rose-500",
    },
  ];

  const achievements = [
    {
      value: "2000+",
      label: "Active Clients",
      icon: Users,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      value: "24+",
      label: "Years Experience",
      icon: Clock,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      value: "15K+",
      label: "Vehicles Tracked",
      icon: Truck,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      value: "99.9%",
      label: "Uptime",
      icon: Shield,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
    },
  ];

  const logisticsAchievements = [
    {
      text: "Expert in LCL/FCL freight forwarding",
      icon: Package,
      color: "text-orange-500",
    },
    {
      text: "DG & Non-DG shipment handling",
      icon: Shield,
      color: "text-rose-500",
    },
    {
      text: "Import/Export operations specialist",
      icon: Globe,
      color: "text-cyan-500",
    },
  ];

  const salesAchievements = [
    {
      text: "Built high-performing sales teams at Paytm",
      icon: Users,
      color: "text-blue-500",
    },
    {
      text: "Achieved market growth at BlackBuck",
      icon: TrendingUp,
      color: "text-green-500",
    },
    {
      text: "GPS & telematics industry pioneer",
      icon: Rocket,
      color: "text-purple-500",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 0.6 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-wider mb-6"
          >
            Our Legacy
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight"
          >
            About <span className="text-gradient">Garuda OM</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Pioneering GPS tracking and logistics technology since 2001,
            delivering intelligent solutions for modern fleet management.
          </motion.p>
        </motion.div>

        {/* Company Overview & Founder - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Company Overview */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold mb-6 flex items-center gap-2"
            >
              <span>Company Overview</span>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Compass className="w-6 h-6 text-primary" />
              </motion.div>
            </motion.h3>

            <motion.div
              variants={itemVariants}
              className="space-y-4 text-muted-foreground"
            >
              <p>
                <span className="font-bold text-foreground">Garuda OM</span> has
                been at the forefront of GPS tracking innovation, providing
                comprehensive fleet management solutions across logistics,
                mining, and industrial sectors.
              </p>
              <p>
                Our integrated platform combines real-time tracking, video
                telematics, fuel monitoring, and FASTag management to deliver
                complete operational visibility.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {achievements.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={statVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover="hover"
                    className={`${item.bgColor} p-6 rounded-xl border border-border/50 text-center backdrop-blur-sm group`}
                  >
                    <motion.div variants={iconVariants} whileHover="hover">
                      <Icon
                        className={`w-6 h-6 ${item.color} mx-auto mb-2 group-hover:scale-110 transition-transform`}
                      />
                    </motion.div>
                    <p className="text-2xl font-bold">{item.value}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.label}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Founder Profile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -5 }}
            className="bg-card rounded-2xl border border-border/50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
          >
            {/* Profile Header */}
            <motion.div
              className="bg-gradient-to-r from-primary to-accent p-8 text-white relative overflow-hidden"
              whileHover="hover"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"
              />

              <div className="relative z-10 flex items-center gap-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-20 h-20 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center text-3xl font-bold border-2 border-white/30"
                >
                  PS
                </motion.div>
                <div>
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold mb-1"
                  >
                    Polimetla Sudhakar
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-white/80 text-sm flex items-center gap-1"
                  >
                    <Rocket className="w-3 h-3" />
                    Founder & Business Strategist
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Profile Details */}
            <motion.div
              className="p-8 space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Education */}
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-4 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 transition-colors"
                >
                  <GraduationCap className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors" />
                </motion.div>
                <div>
                  <p className="font-semibold mb-1 flex items-center gap-2">
                    Education
                    <span className="text-xs">🎓</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    MBA in Logistics and Supply Chain Management
                  </p>
                </div>
              </motion.div>

              {/* Experience */}
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-4 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 transition-colors"
                >
                  <Briefcase className="w-5 h-5 text-green-500 group-hover:text-white transition-colors" />
                </motion.div>
                <div>
                  <p className="font-semibold mb-2 flex items-center gap-2">
                    Professional Experience
                    <span className="text-xs">💼</span>
                  </p>
                  <ul className="space-y-2">
                    <motion.li
                      whileHover={{ x: 5 }}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      BlackBuck (TSM)
                    </motion.li>
                    <motion.li
                      whileHover={{ x: 5 }}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      Paytm (Senior Manager - Sales)
                    </motion.li>
                  </ul>
                </div>
              </motion.div>

              {/* Contact Icons */}
              <motion.div
                variants={itemVariants}
                className="flex gap-3 pt-4 border-t border-border"
              >
                {[
                  {
                    icon: Linkedin,
                    color: "text-blue-600",
                    bg: "bg-blue-500/10",
                  },
                  { icon: Mail, color: "text-red-500", bg: "bg-red-500/10" },
                  {
                    icon: Phone,
                    color: "text-green-500",
                    bg: "bg-green-500/10",
                  },
                  {
                    icon: MapPin,
                    color: "text-purple-500",
                    bg: "bg-purple-500/10",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      href="#"
                      className={`w-10 h-10 ${item.bg} rounded-lg flex items-center justify-center ${item.color} hover:bg-primary hover:text-white transition-all duration-300`}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {[
            {
              icon: Eye,
              title: "Our Vision",
              text: "Build a reliable, tech-driven logistics business connecting global markets efficiently through cutting-edge GPS tracking and telematics solutions.",
              color: "text-blue-500",
              bgColor: "bg-blue-500/10",
              emoji: "🚀",
              delay: 0.1,
            },
            {
              icon: Target,
              title: "Our Mission",
              text: "Provide innovative logistics solutions with modern tracking technologies, AI-driven insights, and exceptional customer support for complete operational control.",
              color: "text-green-500",
              bgColor: "bg-green-500/10",
              emoji: "🎯",
              delay: 0.2,
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: item.delay,
                  ease: "easeOut",
                }}
                whileHover="hover"
                variants={cardVariants}
                className="bg-card p-8 rounded-2xl border border-border/50 hover:border-primary/30 relative overflow-hidden group"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.5,
                  }}
                  className={`absolute top-0 right-0 w-64 h-64 ${item.bgColor} rounded-full blur-3xl -mr-32 -mt-32`}
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 ${item.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-primary group-hover:text-white transition-all duration-500`}
                  >
                    <Icon
                      className={`w-7 h-7 ${item.color} group-hover:text-white transition-colors`}
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    {item.title}
                    <span className="text-lg">{item.emoji}</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Expertise & Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-card rounded-2xl border border-border/50 p-10 relative overflow-hidden"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"
          />

          <div className="relative z-10">
            <motion.h3
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl font-bold text-center mb-10"
            >
              Core Expertise
            </motion.h3>

            {/* Expertise Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            >
              {expertiseAreas.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover="hover"
                    className="text-center group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className={`w-16 h-16 ${item.bgColor} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-gradient-primary transition-all duration-300`}
                    >
                      <Icon
                        className={`w-7 h-7 ${item.iconColor} group-hover:text-white transition-colors`}
                      />
                    </motion.div>
                    <p className="text-sm font-medium group-hover:text-primary transition-colors">
                      {item.label}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Achievements List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Logistics Expertise */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <h4 className="font-semibold mb-4 flex items-center gap-2 text-lg">
                  <Package className="w-5 h-5 text-orange-500" />
                  Logistics Expertise
                  <span className="text-sm">📦</span>
                </h4>
                {logisticsAchievements.map((item, index) => {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3 group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex-shrink-0"
                      >
                        <CheckCircle
                          className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform`}
                        />
                      </motion.div>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {item.text}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Sales Achievements */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <h4 className="font-semibold mb-4 flex items-center gap-2 text-lg">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  Sales Achievements
                  <span className="text-sm">📈</span>
                </h4>
                {salesAchievements.map((item, index) => {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3 group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex-shrink-0"
                      >
                        <CheckCircle
                          className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform`}
                        />
                      </motion.div>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {item.text}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
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
              Ready to transform your{" "}
              <span className="text-primary">fleet operations?</span>
            </h3>
            <p className="text-lg text-slate-600 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
              Connect with our team to discuss how Garuda OM can help you
              achieve complete visibility and control.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 30px -5px rgba(var(--primary-rgb), 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white font-bold h-12 px-8 transition-all shadow-xl shadow-primary/30 w-auto"
              >
                Consult Our Experts
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
