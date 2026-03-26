"use client";

import React, { useState, useRef, useEffect, memo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, MapPin, CreditCard, X, Menu } from "lucide-react";

const productLinks = [
  {
    label: "GPS Tracking",
    href: "/#products",
    icon: <MapPin className="w-4 h-4 text-primary" />,
  },
  {
    label: "FastTag",
    href: "/#fastag-management",
    icon: <CreditCard className="w-4 h-4 text-primary" />,
  }
];

const Navbar = memo(function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const openMobileMenu = useCallback(() => setMobileMenuOpen(true), []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
  }, []);

  const toggleDropdown = useCallback(() => setDropdownOpen((prev) => !prev), []);

  return (
    <header>
      {/* ── Main navbar ── */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border/50 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">

            {/* Logo + Title */}
            <Link href="/" className="flex items-center" prefetch={false}>
              <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center mr-[-8px]">
                <Image
                  src="/assets/logos/logo.png"
                  alt="Garuda OM logo"
                  fill
                  sizes="64px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col items-start -mt-3">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-none">
                  Garuda OM
                </span>
                <span className="text-[10px] sm:text-xs font-medium text-gray-500 leading-tight mt-0.5">
                  Integrated GPS & FASTag Solutions
                </span>
              </div>
            </Link>

            {/* ── Desktop nav links ── */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
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
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border/60 rounded-xl shadow-lg py-1 z-50">
                    {productLinks.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-foreground hover:bg-primary/8 hover:text-primary transition-colors"
                        prefetch={false}
                      >
                        {item.icon}
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link className="nav-link text-sm font-medium" href="/#features" prefetch={false}>Why Us</Link>
              <Link className="nav-link text-sm font-medium" href="/#industries" prefetch={false}>Industries</Link>
              <Link className="nav-link text-sm font-medium" href="/#about" prefetch={false}>About Us</Link>
              <Link className="nav-link text-sm font-medium" href="/#contact" prefetch={false}>
                Contact
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-4 py-1.5 btn-hero"
                prefetch={false}
              >
                Get Started
              </Link>
            </div>

            {/* ── Hamburger button ── */}
            <button
              onClick={openMobileMenu}
              className="lg:hidden flex items-center justify-center w-10 h-10 text-foreground hover:text-primary transition-colors rounded-md"
              aria-label="Open navigation menu"
              type="button"
            >
              <Menu className="w-6 h-6" />
            </button>

          </div>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}

      <div
        onClick={closeMobileMenu}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 60,
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
        className="lg:hidden"
      />

      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%",
          width: "288px",
          zIndex: 70,
          transform: mobileMenuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
        }}
        className="lg:hidden bg-background shadow-2xl flex flex-col"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border/50">
          <Link href="/" onClick={closeMobileMenu} className="flex items-center" prefetch={false}>
            <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
             <Image
                src="/assets/logos/logo.png"
                alt="Garuda OM logo"
                fill
                sizes="64px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-start ml-1 mt-3">
              <span className="text-base font-extrabold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-none">
                Garuda OM
              </span>
              <span className="text-[9px] font-medium text-gray-500 leading-none mt-0.5">
                Integrated GPS & FASTag Solutions
              </span>
            </div>
          </Link>
          <button
            onClick={closeMobileMenu}
            className="flex items-center justify-center w-8 h-8 text-foreground hover:text-primary transition-colors rounded-md"
            aria-label="Close navigation menu"
            type="button"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          <div>
            <button
              type="button"
              onClick={() => setMobileProductsOpen((prev) => !prev)}
              className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <span>Products</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileProductsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              style={{
                maxHeight: mobileProductsOpen ? "200px" : "0px",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
              }}
            >
              <div className="ml-3 mt-1 space-y-1 border-l-2 border-primary/20 pl-3 pb-1">
                {productLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    prefetch={false}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/#features" onClick={closeMobileMenu}
            className="flex items-center px-3 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors" prefetch={false}>
            Why Us
          </Link>
          <Link href="/#industries" onClick={closeMobileMenu}
            className="flex items-center px-3 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors" prefetch={false}>
            Industries
          </Link>
          <Link href="/#about" onClick={closeMobileMenu}
            className="flex items-center px-3 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors" prefetch={false}>
            About Us
          </Link>
          <Link href="#contact" onClick={closeMobileMenu}
            className="flex items-center px-3 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors" prefetch={false}>
            Contact
          </Link>
        </nav>

        {/* Get Started pinned at bottom */}
        <div className="px-4 py-4 border-t border-border/50">
          <Link
            href="/#contact"
            onClick={closeMobileMenu}
            className="flex items-center justify-center w-full rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 text-sm font-medium transition-colors btn-hero"
            prefetch={false}
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* ── Breadcrumb bar ── */}
      <nav
        aria-label="Breadcrumb Navigation"
        className="bg-background/80 backdrop-blur-sm border-b border-border/50 py-1.5 sticky top-16 z-40"
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
});

export default Navbar;