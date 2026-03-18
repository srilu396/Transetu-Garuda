"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, MapPin, Monitor, CreditCard } from "lucide-react";

const productLinks = [
  {
    label: "GPS Tracking",
    href: "/#products",
    icon: <MapPin className="w-4 h-4 text-primary" />,
  },
  {
    label: "Monitoring",
    href: "/#videos",
    icon: <Monitor className="w-4 h-4 text-primary" />,
  },
  {
    label: "FastTag",
    href: "/#fastag-management",
    icon: <CreditCard className="w-4 h-4 text-primary" />,
  },
];

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header>
      {/* ── Main navbar — reduced from h-16 to h-12 ── */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border/50 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer">
              <div className="relative w-10 h-8 overflow-hidden flex items-center justify-center">
                <Image
                  src="/assets/logos/logo.png"
                  alt="Garuda OM logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-gradient leading-none">
                Garuda OM
              </span>
            </div>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center space-x-8">

              {/* Products dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="nav-link text-sm font-medium flex items-center gap-1 focus:outline-none"
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  Products
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown menu */}
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border/60 rounded-xl shadow-lg py-1 z-50">
                    {productLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-foreground hover:bg-primary/8 hover:text-primary transition-colors"
                      >
                        {item.icon}
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a className="nav-link text-sm font-medium" href="/#features">
                Why Us
              </a>
              <a className="nav-link text-sm font-medium" href="/#industries">
                Industries
              </a>
              <a className="nav-link text-sm font-medium" href="/#about">
                About Us
              </a>
              <a className="nav-link text-sm font-medium" href="#contact">
                Contact
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-4 py-1.5 btn-hero"
              >
                Get Started
              </a>
            </div>

            {/* Mobile hamburger */}
            <div className="lg:hidden">
              <button className="text-foreground hover:text-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu w-6 h-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Breadcrumb bar — sticky just below main nav (top-12 to match new h-12) ── */}
      <nav
        aria-label="Breadcrumb Navigation"
        className="bg-background/80 backdrop-blur-sm border-b border-border/50 py-1.5 sticky top-14 z-40"
      >
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li className="flex items-center">
              <button
                className="flex items-center gap-1 px-2 py-1 rounded transition-colors text-primary font-medium bg-primary/10"
                aria-current="page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-house w-3 h-3"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                Home
              </button>
            </li>
          </ol>
        </div>
      </nav>
    </header>
  );
}