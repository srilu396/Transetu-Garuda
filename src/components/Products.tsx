import React from "react";

export default function Products() {
  return (
    <section id="products" aria-label="GPS Products">
      <section id="products" className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-primary/10 text-primary border-primary/20 mb-4">
              Our Products
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Complete GPS Tracking Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive range of GPS tracking products designed
              for various industries. From fleet management to mining
              operations, we have the right solution for your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            <a className="block" href="/products/fastag">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col space-y-1.5 p-6 pb-4">
                  <div className="flex items-start justify-between mb-2">
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
                      className="lucide lucide-tag w-8 h-8 text-primary"
                    >
                      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path>
                      <path d="M7 7h.01"></path>
                    </svg>
                    <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs p-1">
                      Toll Payments
                    </div>
                  </div>
                  <h3 className="font-semibold tracking-tight text-lg">
                    FASTag Solutions
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Recharge and manage your fleet's FASTag with integrated
                    banking and automated toll payment tracking.
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-medium text-muted-foreground">
                      Key Features:
                    </p>
                    <ul className="space-y-1">
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        Automated recharge
                      </li>
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        Transaction history
                      </li>
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        Fleet-wide management
                      </li>
                    </ul>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </a>
            <a className="block" href="/products/dash-cam-system">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col space-y-1.5 p-6 pb-4">
                  <div className="flex items-start justify-between mb-2">
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
                      className="lucide lucide-camera w-8 h-8 text-primary"
                    >
                      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                      <circle cx="12" cy="13" r="3"></circle>
                    </svg>
                    <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs p-1">
                      Video Safety
                    </div>
                  </div>
                  <h3 className="font-semibold tracking-tight text-lg">
                    Dash Cam System
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    High-definition dual-camera system with ADAS features and
                    live streaming for driver safety monitoring.
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-medium text-muted-foreground">
                      Key Features:
                    </p>
                    <ul className="space-y-1">
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        Dual-channel recording
                      </li>
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        ADAS alerts
                      </li>
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        Cloud integration
                      </li>
                    </ul>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </a>
            <a className="block" href="/products/advanced-fleet-tracker">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col space-y-1.5 p-6 pb-4">
                  <div className="flex items-start justify-between mb-2">
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
                      className="lucide lucide-truck w-8 h-8 text-primary"
                    >
                      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                      <path d="M15 18H9"></path>
                      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                      <circle cx="17" cy="18" r="2"></circle>
                      <circle cx="7" cy="18" r="2"></circle>
                    </svg>
                    <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs p-1">
                      Fleet Management
                    </div>
                  </div>
                  <h3 className="font-semibold tracking-tight text-lg">
                    Advanced Fleet Tracker
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive GPS tracking system with real-time monitoring,
                    route optimization, and driver behavior analysis.
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-medium text-muted-foreground">
                      Key Features:
                    </p>
                    <ul className="space-y-1">
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        Real-time GPS tracking
                      </li>
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        Route optimization
                      </li>
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        Driver scoring
                      </li>
                    </ul>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </a>
            <a className="block" href="/products/iot-for-mining">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col space-y-1.5 p-6 pb-4">
                  <div className="flex items-start justify-between mb-2">
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
                      className="lucide lucide-satellite w-8 h-8 text-primary"
                    >
                      <path d="M13 7 9 3 5 7l4 4"></path>
                      <path d="m17 11 4 4-4 4-4-4"></path>
                      <path d="m8 12 4 4 6-6-4-4Z"></path>
                      <path d="m16 8 3-3"></path>
                      <path d="M9 21a6 6 0 0 0-6-6"></path>
                    </svg>
                    <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs p-1">
                      Mining Solutions
                    </div>
                  </div>
                  <h3 className="font-semibold tracking-tight text-lg">
                    IOT for Mining{" "}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Specialized GPS tracking for heavy mining equipment with
                    rugged hardware designed for harsh environments.
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-medium text-muted-foreground">
                      Key Features:
                    </p>
                    <ul className="space-y-1">
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        Heavy-duty GPS units
                      </li>
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        Equipment monitoring
                      </li>
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        Geofencing
                      </li>
                    </ul>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </a>
            <a className="block" href="/products/fuel-level-sensors">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col space-y-1.5 p-6 pb-4">
                  <div className="flex items-start justify-between mb-2">
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
                      className="lucide lucide-fuel w-8 h-8 text-primary"
                    >
                      <line x1="3" x2="15" y1="22" y2="22"></line>
                      <line x1="4" x2="14" y1="9" y2="9"></line>
                      <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"></path>
                      <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"></path>
                    </svg>
                    <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs p-1">
                      Fuel Management
                    </div>
                  </div>
                  <h3 className="font-semibold tracking-tight text-lg">
                    Fuel Level Sensors
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Advanced fuel monitoring system with GPS integration to
                    prevent theft and optimize consumption.
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-medium text-muted-foreground">
                      Key Features:
                    </p>
                    <ul className="space-y-1">
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        Fuel level monitoring
                      </li>
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        Theft detection
                      </li>
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        Consumption analytics
                      </li>
                    </ul>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </a>
            <a className="block" href="/products/video-telematics">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col space-y-1.5 p-6 pb-4">
                  <div className="flex items-start justify-between mb-2">
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
                      className="lucide lucide-camera w-8 h-8 text-primary"
                    >
                      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                      <circle cx="12" cy="13" r="3"></circle>
                    </svg>
                    <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs p-1">
                      Security Solutions
                    </div>
                  </div>
                  <h3 className="font-semibold tracking-tight text-lg">
                    Video Telematics
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    GPS tracking system integrated with video surveillance for
                    enhanced security and monitoring.
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-medium text-muted-foreground">
                      Key Features:
                    </p>
                    <ul className="space-y-1">
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        Live video streaming
                      </li>
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        GPS coordination
                      </li>
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        Motion detection
                      </li>
                    </ul>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </a>
            <a className="block" href="/products/temperature-monitor">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col space-y-1.5 p-6 pb-4">
                  <div className="flex items-start justify-between mb-2">
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
                      className="lucide lucide-thermometer w-8 h-8 text-primary"
                    >
                      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path>
                    </svg>
                    <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs p-1">
                      Cold Chain
                    </div>
                  </div>
                  <h3 className="font-semibold tracking-tight text-lg">
                    Temperature Monitor
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Temperature-controlled GPS tracking for cold chain
                    management and sensitive cargo monitoring.
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-medium text-muted-foreground">
                      Key Features:
                    </p>
                    <ul className="space-y-1">
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        Temperature logging
                      </li>
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        Alert notifications
                      </li>
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        Compliance reports
                      </li>
                    </ul>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </a>
            <a className="block" href="/products/padlock-gps">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col space-y-1.5 p-6 pb-4">
                  <div className="flex items-start justify-between mb-2">
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
                      className="lucide lucide-lock w-8 h-8 text-primary"
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
                    <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs p-1">
                      Asset Security
                    </div>
                  </div>
                  <h3 className="font-semibold tracking-tight text-lg">
                    Padlock GPS
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Intelligent padlock system with GPS tracking for securing
                    valuable assets and cargo containers.
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-medium text-muted-foreground">
                      Key Features:
                    </p>
                    <ul className="space-y-1">
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        Remote locking
                      </li>
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        GPS location
                      </li>
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        Tamper alerts
                      </li>
                    </ul>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </a>
            <a className="block" href="/products/photogrammetry-services">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col space-y-1.5 p-6 pb-4">
                  <div className="flex items-start justify-between mb-2">
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
                      className="lucide lucide-map-pin w-8 h-8 text-primary"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs p-1">
                      Mapping Services
                    </div>
                  </div>
                  <h3 className="font-semibold tracking-tight text-lg">
                    Photogrammetry Services
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Professional GIS and photogrammetry mapping services with
                    high-precision GPS integration.
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-medium text-muted-foreground">
                      Key Features:
                    </p>
                    <ul className="space-y-1">
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        High-precision mapping
                      </li>
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        3D modeling
                      </li>
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        Survey data collection
                      </li>
                    </ul>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </a>
            <a className="block" href="/products/ais-140-tracker">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col space-y-1.5 p-6 pb-4">
                  <div className="flex items-start justify-between mb-2">
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
                      className="lucide lucide-shield w-8 h-8 text-primary"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    </svg>
                    <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs p-1">
                      Compliance
                    </div>
                  </div>
                  <h3 className="font-semibold tracking-tight text-lg">
                    AIS 140 Tracker
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Government-approved GPS tracking device compliant with AIS
                    140 standards for commercial vehicles and fleet management.
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-medium text-muted-foreground">
                      Key Features:
                    </p>
                    <ul className="space-y-1">
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        AIS 140 certified
                      </li>
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        Emergency button
                      </li>
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        Vehicle diagnostics
                      </li>
                    </ul>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </a>
            <a className="block" href="/products/analytics-dashboard">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col space-y-1.5 p-6 pb-4">
                  <div className="flex items-start justify-between mb-2">
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
                      className="lucide lucide-chart-no-axes-column-increasing w-8 h-8 text-primary"
                    >
                      <line x1="12" x2="12" y1="20" y2="10"></line>
                      <line x1="18" x2="18" y1="20" y2="4"></line>
                      <line x1="6" x2="6" y1="20" y2="16"></line>
                    </svg>
                    <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs p-1">
                      Analytics
                    </div>
                  </div>
                  <h3 className="font-semibold tracking-tight text-lg">
                    Analytics Dashboard
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive data analytics platform for all GPS tracking
                    systems with customizable reports.
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-medium text-muted-foreground">
                      Key Features:
                    </p>
                    <ul className="space-y-1">
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        Custom dashboards
                      </li>
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        Advanced analytics
                      </li>
                      <li className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        Report generation
                      </li>
                    </ul>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </a>
          </div>
          <div className="text-center bg-card rounded-lg p-8 border">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our team can design and implement custom GPS tracking solutions
              tailored to your specific requirements. Contact our sales team to
              discuss your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 btn-hero">
                Contact Sales
              </button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
