import React from "react";

export default function Industries() {
  return (
    <section id="industries" aria-label="Industries We Serve">
      <section id="industries" className="section-padding bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Industries We <span className="text-gradient">Serve</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Garuda Technology provides specialized GPS tracking solutions
              across diverse industries, delivering tailored technology to meet
              unique operational requirements and challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a className="" href="/industries/logistics">
              <div className="card-glass p-8 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
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
                      className="lucide lucide-truck w-8 h-8 text-white"
                    >
                      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                      <path d="M15 18H9"></path>
                      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                      <circle cx="17" cy="18" r="2"></circle>
                      <circle cx="7" cy="18" r="2"></circle>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    Logistics
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Optimize your supply chain with real-time GPS tracking for
                  delivery vehicles, cargo monitoring, and route optimization.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Fleet management
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Route optimization
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Delivery tracking
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Cargo security
                    </span>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-border/50">
                  <button className="justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-primary font-medium text-sm group flex items-center">
                    Learn More{" "}
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </a>
            <a className="" href="/industries/school-transportation">
              <div className="card-glass p-8 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
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
                      className="lucide lucide-graduation-cap w-8 h-8 text-white"
                    >
                      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                      <path d="M22 10v6"></path>
                      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    School Transportation
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Ensure student safety with comprehensive school bus tracking,
                  parent notifications, and driver monitoring systems.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Student safety
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Parent notifications
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Driver monitoring
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Route compliance
                    </span>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-border/50">
                  <button className="justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-primary font-medium text-sm group flex items-center">
                    Learn More{" "}
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </a>
            <a className="" href="/industries/mining">
              <div className="card-glass p-8 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
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
                      className="lucide lucide-pickaxe w-8 h-8 text-white"
                    >
                      <path d="M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912"></path>
                      <path d="M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393"></path>
                      <path d="M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z"></path>
                      <path d="M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    Mining
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Track heavy mining equipment, monitor operations in remote
                  locations, and ensure safety compliance in harsh environments.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Equipment tracking
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Safety monitoring
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Operational efficiency
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">Remote access</span>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-border/50">
                  <button className="justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-primary font-medium text-sm group flex items-center">
                    Learn More{" "}
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </a>
            <a className="" href="/industries/rmc">
              <div className="card-glass p-8 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
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
                      className="lucide lucide-factory w-8 h-8 text-white"
                    >
                      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                      <path d="M17 18h1"></path>
                      <path d="M12 18h1"></path>
                      <path d="M7 18h1"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    RMC (Ready Mix Concrete)
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Monitor concrete mixer trucks, optimize delivery schedules,
                  and ensure timely concrete delivery with temperature tracking.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Mixer tracking
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Delivery optimization
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Temperature monitoring
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Quality control
                    </span>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-border/50">
                  <button className="justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-primary font-medium text-sm group flex items-center">
                    Learn More{" "}
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </a>
            <a className="" href="/industries/pharma">
              <div className="card-glass p-8 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
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
                      className="lucide lucide-pill w-8 h-8 text-white"
                    >
                      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path>
                      <path d="m8.5 8.5 7 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    Pharma
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Maintain cold chain integrity with temperature-controlled GPS
                  tracking for pharmaceutical transportation and storage.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Cold chain monitoring
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Temperature alerts
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Compliance tracking
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">Audit trails</span>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-border/50">
                  <button className="justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-primary font-medium text-sm group flex items-center">
                    Learn More{" "}
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </a>
            <a className="" href="/industries/asset-telematics">
              <div className="card-glass p-8 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
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
                      className="lucide lucide-radio w-8 h-8 text-white"
                    >
                      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
                      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
                      <circle cx="12" cy="12" r="2"></circle>
                      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
                      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    Asset Telematics
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Comprehensive asset management with IoT integration, equipment
                  monitoring, and predictive maintenance capabilities.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Asset monitoring
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      IoT integration
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Predictive maintenance
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Usage analytics
                    </span>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-border/50">
                  <button className="justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-primary font-medium text-sm group flex items-center">
                    Learn More{" "}
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </a>
            <a className="" href="/industries/personal-vehicle-tracking">
              <div className="card-glass p-8 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
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
                      className="lucide lucide-car w-8 h-8 text-white"
                    >
                      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                      <circle cx="7" cy="17" r="2"></circle>
                      <path d="M9 17h6"></path>
                      <circle cx="17" cy="17" r="2"></circle>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    Personal Vehicle Tracking
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Personal GPS tracking solutions for individual vehicles,
                  family cars, and personal asset protection.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Vehicle security
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Family tracking
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Theft protection
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Usage monitoring
                    </span>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-border/50">
                  <button className="justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-primary font-medium text-sm group flex items-center">
                    Learn More{" "}
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </a>
            <a className="" href="/industries/municipalities">
              <div className="card-glass p-8 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
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
                      className="lucide lucide-building w-8 h-8 text-white"
                    >
                      <rect
                        width="16"
                        height="20"
                        x="4"
                        y="2"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M9 22v-4h6v4"></path>
                      <path d="M8 6h.01"></path>
                      <path d="M16 6h.01"></path>
                      <path d="M12 6h.01"></path>
                      <path d="M12 10h.01"></path>
                      <path d="M12 14h.01"></path>
                      <path d="M16 10h.01"></path>
                      <path d="M16 14h.01"></path>
                      <path d="M8 10h.01"></path>
                      <path d="M8 14h.01"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    Municipalities
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Comprehensive tracking solutions for municipal vehicles, waste
                  management, public transportation, and city services
                  optimization.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Municipal fleet tracking
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Waste management
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Public services
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      City operations
                    </span>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-border/50">
                  <button className="justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-primary font-medium text-sm group flex items-center">
                    Learn More{" "}
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </a>
            <a className="" href="/industries/high-value-cargo">
              <div className="card-glass p-8 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
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
                      className="lucide lucide-shield w-8 h-8 text-white"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    High Value Cargo Tracking using Pad Locks
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Secure high-value cargo transportation with smart padlock GPS
                  tracking, real-time monitoring, and tamper alerts.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Smart padlock tracking
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Cargo security
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Tamper detection
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      High-value protection
                    </span>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-border/50">
                  <button className="justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-primary font-medium text-sm group flex items-center">
                    Learn More{" "}
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </a>
          </div>
          <div className="text-center mt-16">
            <div className="card-glass p-8 lg:p-12 inline-block">
              <h3 className="text-2xl font-bold mb-4">
                Don't See Your Industry?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                We specialize in creating custom GPS tracking solutions for any
                industry. Contact us to discuss your specific requirements and
                challenges.
              </p>
              <button className="btn-primary">Discuss Custom Solutions</button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
