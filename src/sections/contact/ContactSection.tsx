"use client";

import React, { useState, useRef } from "react"; // Added useRef
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91-9849252434 / 9866479962",
    description: "Call us directly",
    iconBg: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@transglobalgeomatics.com",
    description: "Send us an email",
    iconBg: "bg-indigo-50 text-indigo-600 border-indigo-100",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "409, SVSS Nivas, Czech Colony, Sanath Nagar",
    subValue: "Hyderabad – 500018, India",
    iconBg: "bg-cyan-50 text-cyan-600 border-cyan-100",
  },
  {
    icon: Clock,
    title: "Support",
    value: "+91-9515131500",
    description: "Monday – Saturday, 10:00 AM – 6:00 PM",
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  }
};

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Create a ref for the form
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Reset states
    setIsSubmitting(true);
    setShowSuccess(false);
    setShowError(false);
    
    // Get form data
    const formData = {
      name: (e.currentTarget.elements.namedItem('name') as HTMLInputElement).value,
      email: (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value,
      company: (e.currentTarget.elements.namedItem('company') as HTMLInputElement).value,
      phone: (e.currentTarget.elements.namedItem('phone') as HTMLInputElement).value,
      service: (e.currentTarget.elements.namedItem('service') as HTMLSelectElement).value,
      location: (e.currentTarget.elements.namedItem('location') as HTMLInputElement).value,
      message: (e.currentTarget.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // SUCCESS - Email was sent
        setShowSuccess(true);
        
        // THIS IS THE FIX - Reset the form to clear all fields
        if (formRef.current) {
          formRef.current.reset();
        }
        
        // Hide success message after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        // ERROR from server
        setShowError(true);
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
        
        // Hide error after 5 seconds
        setTimeout(() => setShowError(false), 5000);
      }
    } catch (error) {
      // NETWORK ERROR - silently fail (no message shown)
      console.log('Network error occurred but not showing to user');
      // Do nothing - no error message shown to user
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#f8fafc' }}>
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
        className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -ml-48 -mb-48"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-[120px] pointer-events-none"
      />
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6"
          >
            Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-slate-900"
          >
            Get In <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Ready to transform your tracking capabilities? Contact our experts today for a personalized consultation.
          </motion.p>
        </div>

        {/* Section Titles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-slate-900"
          >
            Contact Information
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-slate-900"
          >
            Send Us a Message
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Information Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white border border-slate-200 rounded-2xl p-6 flex items-start gap-5 transition-all duration-300 hover:shadow-md group"
              >
                <div className={`w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center border ${info.iconBg} transition-colors duration-300`}>
                  <info.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{info.title}</h4>
                  <p className="text-slate-900 font-semibold">{info.value}</p>
                  {info.subValue && <p className="text-slate-900 font-semibold">{info.subValue}</p>}
                  {info.description && <p className="text-sm text-slate-500 font-medium">{info.description}</p>}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 shadow-sm"
          >
            {/* Added ref to the form */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 placeholder:text-slate-400 text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 placeholder:text-slate-400 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="company" className="text-sm font-semibold text-slate-700">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Company Name"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 placeholder:text-slate-400 text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="+91-0000000000"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 placeholder:text-slate-400 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="service" className="text-sm font-semibold text-slate-700">Select a Service</label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%2364748b%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22m19%209-7%207-7-7%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_1rem_center] bg-no-repeat text-sm"
                  >
                    <option value="">Select a service</option>
                    <option value="fleet">Fleet Management</option>
                    <option value="gps">GPS Tracking</option>
                    <option value="fastag">FASTag Solutions</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label htmlFor="location" className="text-sm font-semibold text-slate-700">Location *</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    placeholder="City, State"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 placeholder:text-slate-400 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Your message here..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 placeholder:text-slate-400 text-sm resize-none"
                ></textarea>
              </div>

              {/* Success Message */}
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl text-sm bg-green-50 text-green-700 border border-green-200"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              {/* Error Message - Only shows for server errors, NOT for network errors */}
              {showError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl text-sm bg-red-50 text-red-700 border border-red-200"
                >
                  {errorMessage}
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3.5 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group transition-all duration-300 text-sm ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span>Sending...</span>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}