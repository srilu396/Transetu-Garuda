import React from "react";

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      <div className="max-w-7xl mx-auto container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="text-2xl font-black tracking-wider text-primary">
                GARUDA
              </div>
              <span className="text-xl font-bold text-gradient hidden sm:block">
                Garuda Technology
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Leading provider of advanced GPS tracking solutions and fleet
              management technologies. We help businesses monitor, protect, and
              optimize their valuable assets worldwide.
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
                  className="lucide lucide-phone w-4 h-4 text-primary"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a
                  href="tel:+919849252434"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +91-9849252434 / 9866479962
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
                  className="lucide lucide-mail w-4 h-4 text-primary"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span className="text-sm text-muted-foreground">
                  info@garudatechnology.com
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
                  className="lucide lucide-map-pin w-4 h-4 text-primary"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-sm text-muted-foreground">
                  Hyderabad, India
                </span>
              </div>
              <div className="flex items-center gap-4 mt-4 pt-2">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
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
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
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
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
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
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
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
                    className="lucide lucide-youtube"
                  >
                    <path d="M2.5 7.17C2.5 5.96 3.49 4.97 4.71 4.92c4.86-.2 9.72-.2 14.58 0 1.22.05 2.21 1.04 2.21 2.25v9.66c0 1.21-.99 2.2-2.21 2.25-4.86.2-9.72.2-14.58 0-1.22-.05-2.21-1.04-2.21-2.25V7.17Z"></path>
                    <path d="M10 15l5-3-5-3v6z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  href="/#about"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  href="/#industries"
                >
                  Industries
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  href="/blog"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  href="/events"
                >
                  Events
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  href="/services/gps-tracking"
                >
                  GPS Tracking
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  href="/services/gps-fuel"
                >
                  Fuel Monitoring
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  href="/services/gps-temperature"
                >
                  Temperature Control
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  href="/services/gps-video"
                >
                  Video Surveillance
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  href="/services/gps-padlock"
                >
                  Padlock Security
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  href="/services/gps-mining"
                >
                  Mining Tracking
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  href="/#contact"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="https://gpsreports.in/api_document/api/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  API Reference
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/50">
          <div className="text-sm text-muted-foreground">
            © 2025 Garuda Technology. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="https://merchant.razorpay.com/policy/MYJHJgIWIOwmEz/terms"
              target="_self"
              rel=""
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Terms &amp; Conditions
            </a>
            <a
              href="https://merchant.razorpay.com/policy/MYJHJgIWIOwmEz/refund"
              target="_self"
              rel=""
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Cancellation &amp; Refund Policy
            </a>
            <a
              href="https://merchant.razorpay.com/policy/MYJHJgIWIOwmEz/shipping"
              target="_self"
              rel=""
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Shipping &amp; Delivery Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
