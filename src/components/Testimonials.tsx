"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, Users, Truck, Shield, Clock } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Government Agency",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    quote: "Garuda OM has revolutionized our fleet management. The GPS tracking with fuel monitoring has helped us reduce fuel theft by 85% and improve our delivery efficiency significantly.",
    rating: 5
  },
  {
    name: "Anil Mehta",
    role: "Mining Owner",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    quote: "The mining GPS solutions from Garuda OM have been game-changing for our operations. Real-time equipment tracking in harsh environments has improved our productivity by 40%.",
    rating: 5
  },
  {
    name: "Amit Patel",
    role: "International School",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    quote: "Student safety is our top priority. Garuda OM's school bus tracking system gives parents peace of mind and helps us ensure every child reaches safely. Excellent service!",
    rating: 5
  },
  {
    name: "Dr. Meera Singh",
    role: "Pharma Company",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    quote: "Cold chain monitoring for our pharmaceutical products is critical. The temperature tracking with GPS has helped us maintain product integrity and comply with regulatory requirements.",
    rating: 5
  },
  {
    name: "Suresh Reddy",
    role: "Government Agency",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    quote: "Managing our municipal vehicle fleet was challenging until we implemented Garuda OM's solutions. Now we have complete visibility and have optimized our city services remarkably.",
    rating: 5
  },
  {
    name: "Kavita Joshi",
    role: "Logistics Company",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    quote: "For our high-value cargo transportation, the padlock GPS tracking system provides unmatched security. Real-time tamper alerts have prevented multiple theft attempts.",
    rating: 5
  }
];

const stats = [
  { label: "Happy Clients", value: "10,000+", icon: Users },
  { label: "Vehicles Tracked", value: "50,000+", icon: Truck },
  { label: "Uptime", value: "99.9%", icon: Shield },
  { label: "Support", value: "24/7", icon: Clock }
];

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden" aria-label="Customer Testimonials">
      {/* Decorative blurs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 rounded-full"
          >
            Testimonials
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight"
          >
            What Our <span className="text-gradient">Clients Say</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Trusted by businesses across India and beyond. Here's how Garuda OM
            is redefining operational efficiency through intelligent GPS Tracking.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/10 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-slate-50 group-hover:bg-primary/10 rounded-2xl transition-colors">
                  <Quote className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors" />
                </div>
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              
              <p className="text-slate-600 leading-relaxed mb-8 flex-grow italic">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-0 group-hover:opacity-40 transition duration-300" />
                  <img
                    src={t.image}
                    alt={t.name}
                    className="relative w-14 h-14 rounded-full object-cover border-2 border-white"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors">{t.name}</h4>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-slate-100"
        >
          {stats.map((s, i) => (
            <div key={i} className="text-center group">
              <div className="inline-flex p-3 bg-slate-50 group-hover:bg-primary/10 rounded-2xl mb-4 transition-colors">
                <s.icon className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors" />
              </div>
              <div className="text-3xl font-black text-slate-900 mb-1">{s.value}</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-12 lg:p-16 rounded-[3rem] overflow-hidden group">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                Experience the precision of India's most trusted GPS tracking platform. 
                Deploy cloud-native fleet intelligence in minutes.
              </p>
              <button className="px-10 py-5 bg-gradient-to-r from-primary to-accent text-white font-black rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 text-lg">
                Get Started Today
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
