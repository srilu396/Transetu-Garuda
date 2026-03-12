import React from "react";

export default function Services() {
  return (
    <section id="services" aria-label="GPS Services">
      <section id="services" className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive <strong>GPS tracking</strong> and{" "}
              <strong>fleet management solutions</strong>, including fuel
              monitoring, video surveillance, mining tracking, GIS mapping, and
              photogrammetry. Tailored for industrial, logistics, and enterprise
              needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a
              className="block text-center border rounded-lg py-2 px-4 hover:bg-primary hover:text-white transition group"
              href="/services/fastag"
            >
              <article
                className="card-service glow-box"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="w-full h-48 bg-gradient-card rounded-lg mb-6 flex items-center justify-center overflow-hidden">
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
                    className="lucide lucide-tag w-16 h-16 text-primary group-hover:scale-110 transition-transform"
                  >
                    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path>
                    <path d="M7 7h.01"></path>
                  </svg>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
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
                      className="lucide lucide-tag w-6 h-6 text-white"
                    >
                      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path>
                      <path d="M7 7h.01"></path>
                    </svg>
                  </div>
                  <h3
                    className="text-xl font-semibold group-hover:text-primary transition-colors"
                    itemProp="name"
                  >
                    FASTag Services
                  </h3>
                </div>
                <p
                  className="text-muted-foreground mb-6 leading-relaxed"
                  itemProp="description"
                >
                  Integrated FASTag management for commercial fleets with
                  automated recharges and simplified toll tracking.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Unified fleet wallet
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Real-time toll alerts
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Automated recharge rules
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Expense reconciliation
                    </span>
                  </li>
                </ul>
              </article>
            </a>
            <a
              className="block text-center border rounded-lg py-2 px-4 hover:bg-primary hover:text-white transition group"
              href="/services/gps-software"
            >
              <article
                className="card-service glow-box"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="w-full h-48 bg-gradient-card rounded-lg mb-6 flex items-center justify-center overflow-hidden">
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
                    className="lucide lucide-monitor-check w-16 h-16 text-primary group-hover:scale-110 transition-transform"
                  >
                    <path d="m9 10 2 2 4-4"></path>
                    <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                    <path d="M12 17v4"></path>
                    <path d="M8 21h8"></path>
                  </svg>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
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
                      className="lucide lucide-layout-dashboard w-6 h-6 text-white"
                    >
                      <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                      <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                      <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                      <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                    </svg>
                  </div>
                  <h3
                    className="text-xl font-semibold group-hover:text-primary transition-colors"
                    itemProp="name"
                  >
                    Garuda GPS Software
                  </h3>
                </div>
                <p
                  className="text-muted-foreground mb-6 leading-relaxed"
                  itemProp="description"
                >
                  Enterprise-grade fleet tracking platform with customizable
                  dashboards, white-label options, and 99.9% uptime.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Custom white-labeling
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Advanced API integration
                      </span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">
                        Multi-user access control
                      </span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">
                        Cloud-native scalability
                      </span>
                    </li>
                  </ul>
                </article>
              </a>
            <a
              className="block text-center border rounded-lg py-2 px-4 hover:bg-primary hover:text-white transition group"
              href="/services/gps-tracking"
            >
              <article
                className="card-service glow-box"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="w-full h-48 bg-gradient-card rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                  <img
                    src="/assets/gpstracking-DjGp1dHF.webp"
                    alt="GPS Tracking"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    itemProp="image"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
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
                      className="lucide lucide-map-pin w-6 h-6 text-white"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <h3
                    className="text-xl font-semibold group-hover:text-primary transition-colors"
                    itemProp="name"
                  >
                    GPS Tracking
                  </h3>
                </div>
                <p
                  className="text-muted-foreground mb-6 leading-relaxed"
                  itemProp="description"
                >
                  Real-time GPS tracking with precise monitoring, historical
                  routes, and instant alerts.
                </p>
                <ul className="space-y-2">
                  <li
                    className="flex items-center gap-2 text-sm"
                    itemProp="serviceType"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      24/7 real-time tracking
                    </span>
                  </li>
                  <li
                    className="flex items-center gap-2 text-sm"
                    itemProp="serviceType"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Complete historical routes
                    </span>
                  </li>
                  <li
                    className="flex items-center gap-2 text-sm"
                    itemProp="serviceType"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Customizable geofencing alerts
                    </span>
                  </li>
                  <li
                    className="flex items-center gap-2 text-sm"
                    itemProp="serviceType"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Mobile app access for fleets
                    </span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border/50">
                  <div>Learn More</div>
                </div>
              </article>
            </a>
            <a
              className="block text-center border rounded-lg py-2 px-4 hover:bg-primary hover:text-white transition group"
              href="/services/gps-fuel"
            >
              <article
                className="card-service glow-box"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="w-full h-48 bg-gradient-card rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                  <img
                    src="/assets/Fuel-level-sensor-DemcMIIi.webp"
                    alt="GPS Tracking with Fuel"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    itemProp="image"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
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
                      className="lucide lucide-fuel w-6 h-6 text-white"
                    >
                      <line x1="3" x2="15" y1="22" y2="22"></line>
                      <line x1="4" x2="14" y1="9" y2="9"></line>
                      <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"></path>
                      <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"></path>
                    </svg>
                  </div>
                  <h3
                    className="text-xl font-semibold group-hover:text-primary transition-colors"
                    itemProp="name"
                  >
                    GPS Tracking with Fuel
                  </h3>
                </div>
                <p
                  className="text-muted-foreground mb-6 leading-relaxed"
                  itemProp="description"
                >
                  Advanced GPS fleet tracking with integrated fuel monitoring to
                  reduce costs and prevent theft.
                </p>
                <ul className="space-y-2">
                  <li
                    className="flex items-center gap-2 text-sm"
                    itemProp="serviceType"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Fuel level monitoring
                    </span>
                  </li>
                  <li
                    className="flex items-center gap-2 text-sm"
                    itemProp="serviceType"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Instant theft alerts
                    </span>
                  </li>
                  <li
                    className="flex items-center gap-2 text-sm"
                    itemProp="serviceType"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Detailed consumption reports
                    </span>
                  </li>
                  <li
                    className="flex items-center gap-2 text-sm"
                    itemProp="serviceType"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Efficiency &amp; cost analytics
                    </span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border/50">
                  <div>Learn More</div>
                </div>
              </article>
            </a>
            <a
              className="block text-center border rounded-lg py-2 px-4 hover:bg-primary hover:text-white transition group"
              href="/services/gps-temperature"
            >
              <article
                className="card-service glow-box"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="w-full h-48 bg-gradient-card rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                  <img
                    src="/assets/gps-temperature-Bin591Xv.webp"
                    alt="GPS Tracking with Temperature"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    itemProp="image"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
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
                      className="lucide lucide-thermometer w-6 h-6 text-white"
                    >
                      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path>
                    </svg>
                  </div>
                  <h3
                    className="text-xl font-semibold group-hover:text-primary transition-colors"
                    itemProp="name"
                  >
                    GPS Tracking with Temperature
                  </h3>
                </div>
                <p
                  className="text-muted-foreground mb-6 leading-relaxed"
                  itemProp="description"
                >
                  Cold chain monitoring with GPS and live temperature tracking
                  for perishable goods.
                </p>
                <ul className="space-y-2">
                  <li
                    className="flex items-center gap-2 text-sm"
                    itemProp="serviceType"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Live temperature alerts
                    </span>
                  </li>
                  <li
                    className="flex items-center gap-2 text-sm"
                    itemProp="serviceType"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Cold chain compliance reports
                    </span>
                  </li>
                  <li
                    className="flex items-center gap-2 text-sm"
                    itemProp="serviceType"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Historical temperature logs
                    </span>
                  </li>
                  <li
                    className="flex items-center gap-2 text-sm"
                    itemProp="serviceType"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Custom threshold settings
                    </span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border/50">
                  <div>Learn More</div>
                </div>
              </article>
            </a>
            <a
              className="block text-center border rounded-lg py-2 px-4 hover:bg-primary hover:text-white transition group"
              href="/services/gps-video"
            >
              <article
                className="card-service glow-box"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="w-full h-48 bg-gradient-card rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                  <img
                    src="/assets/gps-video-Cqu6_IUO.webp"
                    alt="GPS Tracking with Video"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    itemProp="image"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
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
                      className="lucide lucide-video w-6 h-6 text-white"
                    >
                      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                      <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                    </svg>
                  </div>
                  <h3
                    className="text-xl font-semibold group-hover:text-primary transition-colors"
                    itemProp="name"
                  >
                    GPS Tracking with Video
                  </h3>
                </div>
                <p
                  className="text-muted-foreground mb-6 leading-relaxed"
                  itemProp="description"
                >
                  Fleet and cargo safety with GPS-enabled video surveillance and
                  recording.
                </p>
                <ul className="space-y-2">
                  <li
                    className="flex items-center gap-2 text-sm"
                    itemProp="serviceType"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      HD video streaming
                    </span>
                  </li>
                  <li
                    className="flex items-center gap-2 text-sm"
                    itemProp="serviceType"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      On-demand event recording
                    </span>
                  </li>
                  <li
                    className="flex items-center gap-2 text-sm"
                    itemProp="serviceType"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Remote live viewing
                    </span>
                  </li>
                  <li
                    className="flex items-center gap-2 text-sm"
                    itemProp="serviceType"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Motion detection alerts
                    </span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border/50">
                  <div>Learn More</div>
                </div>
              </article>
            </a>
            <a
              className="block text-center border rounded-lg py-2 px-4 hover:bg-primary hover:text-white transition group"
              href="/services/gps-padlock"
            >
              <article
                className="card-service glow-box"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="w-full h-48 bg-gradient-card rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                  <img
                    src="/assets/padlock-BgptCnry.webp"
                    alt="GPS Tracking with Pad Locks"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    itemProp="image"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
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
                      className="lucide lucide-lock w-6 h-6 text-white"
                    >
                      <rect
                        width="18"
                        height="11"
                        x="3"
                        y="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <h3
                    className="text-xl font-semibold group-hover:text-primary transition-colors"
                    itemProp="name"
                  >
                    GPS Tracking with Pad Locks
                  </h3>
                </div>
                <p
                  className="text-muted-foreground mb-6 leading-relaxed"
                  itemProp="description"
                >
                  Smart GPS padlocks for secure cargo with real-time tamper
                  detection.
                </p>
                <ul className="space-y-2">
                  <li
                    className="flex items-center gap-2 text-sm"
                    itemProp="serviceType"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Smart unlock via app
                    </span>
                  </li>
                  <li
                    className="flex items-center gap-2 text-sm"
                    itemProp="serviceType"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Detailed access logs
                    </span>
                  </li>
                  <li
                    className="flex items-center gap-2 text-sm"
                    itemProp="serviceType"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Tamper-proof alerts
                    </span>
                  </li>
                  <li
                    className="flex items-center gap-2 text-sm"
                    itemProp="serviceType"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Remote lock control
                    </span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border/50">
                  <div>Learn More</div>
                </div>
              </article>
            </a>
            <a
              className="block text-center border rounded-lg py-2 px-4 hover:bg-primary hover:text-white transition group"
              href="/services/gps-mining"
            >
              <article
                className="card-service glow-box"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="w-full h-48 bg-gradient-card rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                  <img
                    src="/assets/gps-mining-BswtPZ7Z.webp"
                    alt="GPS Tracking for Mining"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    itemProp="image"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
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
                      className="lucide lucide-lock w-6 h-6 text-white"
                    >
                      <rect
                        width="18"
                        height="11"
                        x="3"
                        y="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <h3
                    className="text-xl font-semibold group-hover:text-primary transition-colors"
                    itemProp="name"
                  >
                    GPS Tracking for Mining
                  </h3>
                </div>
                <p
                  className="text-muted-foreground mb-6 leading-relaxed"
                  itemProp="description"
                >
                  Specialized GPS tracking solutions for mining vehicles and
                  heavy machinery.
                </p>
                <ul className="space-y-2">
                  <li
                    className="flex items-center gap-2 text-sm"
                    itemProp="serviceType"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Heavy equipment tracking
                    </span>
                  </li>
                  <li
                    className="flex items-center gap-2 text-sm"
                    itemProp="serviceType"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Mining fleet management
                    </span>
                  </li>
                  <li
                    className="flex items-center gap-2 text-sm"
                    itemProp="serviceType"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Extreme condition monitoring
                    </span>
                  </li>
                  <li
                    className="flex items-center gap-2 text-sm"
                    itemProp="serviceType"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Utilization &amp; safety reports
                    </span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border/50">
                  <div>Learn More</div>
                </div>
              </article>
            </a>
            <a
              className="block text-center border rounded-lg py-2 px-4 hover:bg-primary hover:text-white transition group"
              href="/services/photogrammetry"
            >
              <article
                className="card-service glow-box"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="w-full h-48 bg-gradient-card rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                  <img
                    src="/assets/photogrammetry-BnhVksiT.webp"
                    alt="Photogrammetry Mapping"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    itemProp="image"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
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
                      className="lucide lucide-camera w-6 h-6 text-white"
                    >
                      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                      <circle cx="12" cy="13" r="3"></circle>
                    </svg>
                  </div>
                  <h3
                    className="text-xl font-semibold group-hover:text-primary transition-colors"
                    itemProp="name"
                  >
                    Photogrammetry Mapping
                  </h3>
                </div>
                <p
                  className="text-muted-foreground mb-6 leading-relaxed"
                  itemProp="description"
                >
                  3D photogrammetry and drone-based aerial mapping for surveying
                  and planning.
                </p>
                <ul className="space-y-2">
                  <li
                    className="flex items-center gap-2 text-sm"
                    itemProp="serviceType"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Accurate 3D terrain models
                    </span>
                  </li>
                  <li
                    className="flex items-center gap-2 text-sm"
                    itemProp="serviceType"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Drone-based aerial mapping
                    </span>
                  </li>
                  <li
                    className="flex items-center gap-2 text-sm"
                    itemProp="serviceType"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      High-resolution imagery
                    </span>
                  </li>
                  <li
                    className="flex items-center gap-2 text-sm"
                    itemProp="serviceType"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Precision measurements
                    </span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border/50">
                  <div>Learn More</div>
                </div>
              </article>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
