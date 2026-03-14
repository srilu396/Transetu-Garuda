"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

const socialLinks = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/0000000000",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:info@example.com",
  },
  {
    name: "Phone",
    icon: Phone,
    href: "tel:+910000000000",
  },
];

export default function FloatingSocialBar() {
  return (
    <div className="fixed right-2 md:right-4 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-3 md:gap-4">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: index * 0.1,
            duration: 0.6,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.15,
            x: -5,
          }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full shadow-[0_8px_20px_rgba(var(--primary-rgb),0.3)] hover:shadow-[0_12px_30px_rgba(var(--primary-rgb),0.5)] transition-all duration-300 border border-white/10"
          title={social.name}
        >
          {/* Subtle overlay for hover depth */}
          <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />

          <social.icon
            className="w-5 h-5 md:w-6 md:h-6 relative z-10"
            strokeWidth={2.5}
          />
        </motion.a>
      ))}
    </div>
  );
}
