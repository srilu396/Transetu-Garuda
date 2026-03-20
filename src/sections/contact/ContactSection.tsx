"use client";

import React, { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, ChevronDown } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 77802 74792",
    description: "Call us directly",
    iconBg: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    icon: Mail,
    title: "Email",
    value: "omimportandexport1994@gmail.com",
    description: "Send us an email",
    iconBg: "bg-indigo-50 text-indigo-600 border-indigo-100",
  },
  {
    icon: MapPin,
    title: "Office",
    // First address
    address1: "12-1-8, Vijawada, Benz Circle, Parameta",
    address1Sub: "Andhra Pradesh – 520010, India",
    // Second address with line space
    address2: "Vaswani Presidio, 83/2, 2nd Floor, Panathur Main Road",
    address2Sub1: "Off Outer Ring Road, Kadubeesanahalli, Bengaluru",
    address2Sub2: "Karnataka – 560103, India",
    iconBg: "bg-cyan-50 text-cyan-600 border-cyan-100",
  },
  {
    icon: Clock,
    title: "Support",
    value: "+91 77802 74792",
    description: "Sudhakar - 10:00 AM – 5:00 PM (Monday – Saturday)",
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
];

// ── All 4 service options ─────────────────────────────────────────────────
const services = [
  { value: "gps",     label: "GPS Tracking" },
  { value: "fastag",  label: "FASTag Solutions" },
  { value: "fleet",   label: "GPS with Video Surveillance" },
  { value: "other",   label: "Custom Solution" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

const floatAnimation: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting]   = useState(false);
  const [showSuccess, setShowSuccess]     = useState(false);
  const [showError, setShowError]         = useState(false);
  const [errorMessage, setErrorMessage]   = useState('');

  // ── Custom dropdown state ─────────────────────────────────────────────
  const [serviceOpen, setServiceOpen]         = useState(false);
  const [selectedService, setSelectedService] = useState<{ value: string; label: string } | null>(null);
  const serviceRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (serviceRef.current && !serviceRef.current.contains(e.target as Node)) {
        setServiceOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccess(false);
    setShowError(false);

    const formData = {
      name:     (e.currentTarget.elements.namedItem('name')     as HTMLInputElement).value,
      email:    (e.currentTarget.elements.namedItem('email')    as HTMLInputElement).value,
      company:  (e.currentTarget.elements.namedItem('company')  as HTMLInputElement).value,
      phone:    (e.currentTarget.elements.namedItem('phone')    as HTMLInputElement).value,
      service:  selectedService?.label || '',
      location: (e.currentTarget.elements.namedItem('location') as HTMLInputElement).value,
      message:  (e.currentTarget.elements.namedItem('message')  as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setShowSuccess(true);
        setSelectedService(null);
        if (formRef.current) formRef.current.reset();
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        setShowError(true);
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
        setTimeout(() => setShowError(false), 5000);
      }
    } catch {
      console.log('Network error — not shown to user');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#f8fafc' }}>
      {/* Animated background blobs */}
      <motion.div variants={floatAnimation} initial="initial" animate="animate"
        className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <motion.div variants={floatAnimation} initial="initial" animate="animate"
        className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -ml-48 -mb-48" />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6">
            Get In Touch
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-slate-900">
            Get In <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed">
            Ready to transform your tracking capabilities? Contact our experts today for a personalized consultation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left — Contact Information Card with title inside */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
            className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              {/* Phone Section */}
              <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex items-start gap-5 transition-all duration-300 group">
                <div className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center border bg-blue-50 text-blue-600 border-blue-100">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                  <p className="text-slate-900 font-semibold">+91 77802 74792</p>
                  <p className="text-sm text-slate-500 font-medium mt-2">Call us directly</p>
                </div>
              </motion.div>

              {/* Email Section */}
              <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex items-start gap-5 transition-all duration-300 group">
                <div className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center border bg-indigo-50 text-indigo-600 border-indigo-100">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                  <p className="text-slate-900 font-semibold">omimportandexport1994@gmail.com</p>
                  <p className="text-sm text-slate-500 font-medium mt-2">Send us an email</p>
                </div>
              </motion.div>

              {/* Office Section */}
              <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex items-start gap-5 transition-all duration-300 group">
                <div className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center border bg-cyan-50 text-cyan-600 border-cyan-100">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Office</h4>
                  {/* First address */}
                  <p className="text-slate-900 font-semibold">12-1-8, Vijawada, Benz Circle, Parameta</p>
                  <p className="text-slate-900 font-semibold">Andhra Pradesh – 520010, India</p>
                  
                  {/* Line space and second address */}
                  <div className="mt-4 space-y-0.5">
                    <p className="text-slate-900 font-semibold">Vaswani Presidio, 83/2, 2nd Floor, Panathur Main Road</p>
                    <p className="text-slate-900 font-semibold">Off Outer Ring Road, Kadubeesanahalli, Bengaluru</p>
                    <p className="text-slate-900 font-semibold">Karnataka – 560103, India</p>
                  </div>
                </div>
              </motion.div>

              {/* Support Section */}
              <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex items-start gap-5 transition-all duration-300 group">
                <div className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center border bg-emerald-50 text-emerald-600 border-emerald-100">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Support</h4>
                  <p className="text-slate-900 font-semibold">+91 77802 74792</p>
                  <p className="text-sm text-slate-500 font-medium mt-2">Satish - 10:00 AM – 5:00 PM (Monday – Saturday)</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Send Us a Message Card with title inside */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
            className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Send Us a Message</h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name *</label>
                  <input type="text" id="name" name="name" required placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 placeholder:text-slate-400 text-sm" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 placeholder:text-slate-400 text-sm" />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="company" className="text-sm font-semibold text-slate-700">Company</label>
                  <input type="text" id="company" name="company" placeholder="Company Name"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 placeholder:text-slate-400 text-sm" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" required placeholder="+91-0000000000"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 placeholder:text-slate-400 text-sm" />
                </div>
              </div>

              {/* Row 3 — Service dropdown + Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* ── Custom "Select a Service" dropdown ── */}
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Select a Service</label>
                  <div className="relative" ref={serviceRef}>
                    {/* Trigger */}
                    <button
                      type="button"
                      onClick={() => setServiceOpen((p) => !p)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-sm flex items-center justify-between"
                    >
                      <span className={selectedService ? "text-slate-800" : "text-slate-400"}>
                        {selectedService ? selectedService.label : "Select a service"}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${serviceOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Options panel */}
                    <div
                      style={{
                        position: "absolute",
                        top: "calc(100% + 4px)",
                        left: 0,
                        right: 0,
                        zIndex: 50,
                        opacity: serviceOpen ? 1 : 0,
                        pointerEvents: serviceOpen ? "auto" : "none",
                        transform: serviceOpen ? "translateY(0)" : "translateY(-6px)",
                        transition: "opacity 0.2s ease, transform 0.2s ease",
                      }}
                      className="bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden"
                    >
                      {services.map((service) => (
                        <button
                          key={service.value}
                          type="button"
                          onClick={() => {
                            setSelectedService(service);
                            setServiceOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-2.5 transition-colors duration-150 ${
                            selectedService?.value === service.value
                              ? "bg-primary/10 text-primary font-semibold"
                              : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                          }`}
                        >
                          {/* Active dot indicator */}
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors"
                            style={{
                              background: selectedService?.value === service.value
                                ? "linear-gradient(to right, #ec39b0, #7E60F4)"
                                : "transparent",
                              border: selectedService?.value === service.value
                                ? "none"
                                : "1.5px solid #cbd5e1",
                            }}
                          />
                          {service.label}
                        </button>
                      ))}
                    </div>

                    {/* Hidden input */}
                    <input type="hidden" name="service" value={selectedService?.value || ""} />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="location" className="text-sm font-semibold text-slate-700">Location *</label>
                  <input type="text" id="location" name="location" required placeholder="City, State"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 placeholder:text-slate-400 text-sm" />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message</label>
                <textarea id="message" name="message" rows={3} placeholder="Your message here..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 placeholder:text-slate-400 text-sm resize-none" />
              </div>

              {/* Success */}
              {showSuccess && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl text-sm bg-green-50 text-green-700 border border-green-200">
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              {/* Error */}
              {showError && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl text-sm bg-red-50 text-red-700 border border-red-200">
                  {errorMessage}
                </motion.div>
              )}

              {/* Submit */}
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                type="submit" disabled={isSubmitting}
                className={`w-full py-3.5 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group transition-all duration-300 text-sm ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                {isSubmitting ? (
                  <><span>Sending...</span><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /></>
                ) : (
                  <><span>Send Message</span><Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" /></>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}