import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-100">
          <img
            src="https://trackmyindia.in/tgg_cms/uploads/banners/260113065319.webp"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-0">
          <img
            src="https://trackmyindia.in/tgg_cms/uploads/banners/260111132432.webp"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-0">
          <img
            src="https://trackmyindia.in/tgg_cms/uploads/banners/251230094441.webp"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-0">
          <img
            src="https://trackmyindia.in/tgg_cms/uploads/banners/251227130442.webp"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-0">
          <img
            src="https://trackmyindia.in/tgg_cms/uploads/banners/251226071057.webp"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-0">
          <img
            src="https://trackmyindia.in/tgg_cms/uploads/banners/251226070824.webp"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-0">
          <img
            src="https://trackmyindia.in/tgg_cms/uploads/banners/251226070732.webp"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-0">
          <img
            src="https://trackmyindia.in/tgg_cms/uploads/banners/260111134947.webp"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-background/65 to-background/40"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto container-padding text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/80 border border-primary/30 rounded-lg text-primary text-sm font-medium mb-6 mx-4">
            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
            Empanelled with ISRO
          </div>
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            Advanced GPS Tracking Solutions
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Garuda - </span>
            <span className="text-primary">Smart Fleet Management</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Revolutionizing the future of logistics with AI-powered tracking, fuel monitoring, and integrated safety systems.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2 btn-hero group">
              Get Started
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
                className="lucide lucide-arrow-right w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
            <a
              href="https://drive.google.com/file/d/1Ll8JurCrSrr9OETh-j0FBb2bF0O1K9X5/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-primary bg-background text-primary hover:bg-primary/10 h-10 px-6 py-2 btn-outline-hero group"
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
                className="lucide lucide-play w-4 h-4 mr-2"
              >
                <polygon points="6 3 20 12 6 21 6 3"></polygon>
              </svg>
              Watch Demo
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>GPS tracking for mining</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Fuel monitoring systems</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Video surveillance tracking</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Industrial IOT solutions</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
