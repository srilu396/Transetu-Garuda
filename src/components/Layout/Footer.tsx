import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="border-t border-white/20"
      style={{ backgroundColor: "#6467f2" }}
    >
      <div className="max-w-7xl mx-auto container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Link href="/" className="flex items-center">
                <div className="relative w-28 h-20 flex items-center justify-center">
                  <img
                    src="/assets/logos/footer.png"
                    alt="Garuda OM logo"
                    className="w-full h-full object-contain brightness-0 invert"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-2xl font-black tracking-wider text-white leading-none">
                    Garuda OM
                  </div>
                  <span className="text-sm font-bold text-white mt-1 italic">
                    Integrated GPS & FASTag Solutions
                  </span>
                </div>
              </Link>
            </div>
            <p className="text-white mb-6 leading-relaxed text-sm">
              Track, monitor, and manage your fleet with real-time GPS, fuel
              sensors, dash cams, and FASTag integration — everything you need
              on one powerful platform for complete operational control.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
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
                  className="lucide lucide-phone w-4 h-4 text-white"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a
                  href="tel:+917780274792"
                  className="text-sm text-white hover:text-white/80 transition-colors"
                >
                  +91 7780274792
                </a>
              </div>
              <div className="flex items-center gap-3">
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
                  className="lucide lucide-mail w-4 h-4 text-white"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span className="text-sm text-white">
                  omimportandexport1994@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3">
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
                  className="lucide lucide-map-pin w-4 h-4 text-white"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-sm text-white">Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-4 mt-4 pt-2">
                {/* Facebook - No action */}
                <span className="text-white cursor-default">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </span>
                
                {/* Instagram - No action */}
                <span className="text-white cursor-default">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </span>
                
                {/* LinkedIn - No action */}
                <span className="text-white cursor-default">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </span>
                
                {/* YouTube - No action */}
                <span className="text-white cursor-default">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-youtube"
                  >
                    <path d="M2.5 7.17C2.5 5.96 3.49 4.97 4.71 4.92c4.86-.2 9.72-.2 14.58 0 1.22.05 2.21 1.04 2.21 2.25v9.66c0 1.21-.99 2.2-2.21 2.25-4.86.2-9.72.2-14.58 0-1.22-.05-2.21-1.04-2.21-2.25V7.17Z"></path>
                    <path d="M10 15l5-3-5-3v6z"></path>
                  </svg>
                </span>
                
                {/* WhatsApp - Keeps the functionality */}
                <a
                  href="https://wa.me/919849252434"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-message-circle"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.31 8.31 0 0 1 3.8.9L22 4l-2.1 4.7Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white font-black uppercase tracking-tight">
              Our Industries
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                  href="/industries/logistics-transportation"
                >
                  Logistics & Transport
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                  href="/industries/mining-operations"
                >
                  Mining Operations
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                  href="/industries/school-fleet-safety"
                >
                  School Fleet Safety
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                  href="/industries/oil-gas-operations"
                >
                  Oil & Gas Operations
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                  href="/industries/ready-mix-concrete"
                >
                  Ready Mix Concrete
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                  href="/industries/pharmaceutical-logistics"
                >
                  Healthcare Logistics
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white font-black uppercase tracking-tight">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                  href="/#contact"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                  href="/#contact"
                >
                  Request Demo
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white font-black uppercase tracking-tight">
              Important Solutions
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                  href="/solutions/gps-tracking-solutions"
                >
                  Fleet GPS Tracking
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                  href="/solutions/fuel-level-sensors"
                >
                  Fuel Monitoring
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                  href="/solutions/dash-cam-system"
                >
                  Dash Cam System
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                  href="/industries/fastag-fleet-management"
                >
                  FASTag Management
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                  href="/industries/ais-140-compliance"
                >
                  AIS 140 Compliance
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                  href="/solutions/temperature-monitor"
                >
                  Temperature Monitoring
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/20">
          <div className="text-sm text-white">
            © 2026 Garuda OM. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}