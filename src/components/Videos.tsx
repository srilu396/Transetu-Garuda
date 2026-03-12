import React from "react";

export default function Videos() {
  return (
    <section id="videos" aria-label="Demo Videos">
      <section id="videos" className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Watch Our <span className="text-gradient">Solutions</span> in
              Action
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how Trans Global IOT's GPS tracking solutions work in
              real-world scenarios. See our technology in action across
              different industries and applications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-glass overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="https://img.youtube.com/vi/hL0lz9FS5R8/hqdefault.jpg"
                  alt="Tracks Monitoring through Our Cloud Platform"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors cursor-pointer">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="white"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-play w-8 h-8 text-white ml-1"
                    >
                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-1 bg-red-600 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-medium">
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
                      className="lucide lucide-play w-3 h-3"
                    >
                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                    <span>YouTube</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  Tracks Monitoring through Our Cloud Platform
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Experience comprehensive vehicle tracking through our advanced
                  cloud-based platform. Monitor your entire fleet in real-time
                  with detailed analytics, route optimization, and instant
                  alerts. See how our intuitive dashboard provides complete
                  visibility into vehicle locations, driver behavior, and
                  operational efficiency across all your assets.
                </p>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <button className="text-primary hover:text-primary-light font-medium text-sm group flex items-center">
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
                      className="lucide lucide-play w-4 h-4 mr-2"
                    >
                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                    Watch Video
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="card-glass overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="https://img.youtube.com/vi/dVBscmoieDg/hqdefault.jpg"
                  alt="Monitoring the Vehicles"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors cursor-pointer">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="white"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-play w-8 h-8 text-white ml-1"
                    >
                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-1 bg-red-600 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-medium">
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
                      className="lucide lucide-play w-3 h-3"
                    >
                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                    <span>YouTube</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  Monitoring the Vehicles
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Discover advanced vehicle monitoring capabilities that go
                  beyond basic tracking. Our comprehensive system provides
                  real-time insights into vehicle performance, driver behavior
                  analysis, maintenance alerts, and fuel consumption patterns.
                  Watch how businesses optimize their fleet operations with our
                  intelligent monitoring solutions.
                </p>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <button className="text-primary hover:text-primary-light font-medium text-sm group flex items-center">
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
                      className="lucide lucide-play w-4 h-4 mr-2"
                    >
                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                    Watch Video
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="card-glass overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="https://img.youtube.com/vi/JAfhk9CKOtc/hqdefault.jpg"
                  alt="Geofences"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors cursor-pointer">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="white"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-play w-8 h-8 text-white ml-1"
                    >
                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-1 bg-red-600 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-medium">
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
                      className="lucide lucide-play w-3 h-3"
                    >
                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                    <span>YouTube</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  Geofences
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Learn about our powerful geofencing technology that creates
                  virtual boundaries for enhanced security and operational
                  control. Set up custom zones, receive instant notifications
                  when vehicles enter or exit designated areas, and improve
                  compliance with automated reporting. Perfect for construction
                  sites, mining operations, and restricted zones.
                </p>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <button className="text-primary hover:text-primary-light font-medium text-sm group flex items-center">
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
                      className="lucide lucide-play w-4 h-4 mr-2"
                    >
                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                    Watch Video
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="card-glass overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="https://img.youtube.com/vi/4CPrdveVpp4/hqdefault.jpg"
                  alt="Engine Hours Location"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors cursor-pointer">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="white"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-play w-8 h-8 text-white ml-1"
                    >
                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-1 bg-red-600 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-medium">
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
                      className="lucide lucide-play w-3 h-3"
                    >
                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                    <span>YouTube</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  Engine Hours Location
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Explore our engine hour tracking and location monitoring
                  system designed for heavy machinery and industrial equipment.
                  Track engine usage, schedule preventive maintenance, monitor
                  equipment utilization, and optimize operational costs.
                  Essential for mining, construction, and agricultural
                  operations where engine hours directly impact profitability.
                </p>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <button className="text-primary hover:text-primary-light font-medium text-sm group flex items-center">
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
                      className="lucide lucide-play w-4 h-4 mr-2"
                    >
                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                    Watch Video
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-16">
            <div className="card-glass p-8 lg:p-12 inline-block">
              <h3 className="text-2xl font-bold mb-4">
                Want to See a Live Demo?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Schedule a personalized demonstration of our GPS tracking
                solutions. See how our technology can transform your operations.
              </p>
              <button className="btn-primary">Schedule Live Demo</button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
