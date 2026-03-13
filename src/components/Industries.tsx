"use client";
import React, { useState } from "react";
import SlidePanel from "./SlidePanel";
import {
  Truck,
  GraduationCap,
  Pickaxe,
  Factory,
  Pill,
  Radio,
  Car,
  Building,
  Shield,
} from "lucide-react";

const industriesData = [
  {
    title: "Logistics",
    description:
      "Optimize your supply chain with real-time GPS tracking for delivery vehicles, cargo monitoring, and route optimization.",
    icon: Truck,
    features: [
      "Fleet management",
      "Route optimization",
      "Delivery tracking",
      "Cargo security",
    ],
    category: "Logistics",
  },
  {
    title: "School Transportation",
    description:
      "Ensure student safety with comprehensive school bus tracking, parent notifications, and driver monitoring systems.",
    icon: GraduationCap,
    features: [
      "Student safety",
      "Parent notifications",
      "Driver monitoring",
      "Route compliance",
    ],
    category: "Education",
  },
  {
    title: "Mining",
    description:
      "Track heavy mining equipment, monitor operations in remote locations, and ensure safety compliance in harsh environments.",
    icon: Pickaxe,
    features: [
      "Equipment tracking",
      "Safety monitoring",
      "Operational efficiency",
      "Harsh environment durability",
    ],
    category: "Industrial",
  },
  {
    title: "RMC (Ready Mix Concrete)",
    description:
      "Monitor concrete mixer trucks, optimize delivery schedules, and ensure timely concrete delivery with temperature tracking.",
    icon: Factory,
    features: [
      "Mixer tracking",
      "Delivery optimization",
      "Temperature monitoring",
      "Quality control",
    ],
    category: "Construction",
  },
  {
    title: "Pharma",
    description:
      "Maintain cold chain integrity with temperature-controlled GPS tracking for pharmaceutical transportation and storage.",
    icon: Pill,
    features: [
      "Cold chain monitoring",
      "Temperature alerts",
      "Compliance tracking",
      "Audit trails",
    ],
    category: "Healthcare",
  },
  {
    title: "Asset Telematics",
    description:
      "Comprehensive asset management with IoT integration, equipment monitoring, and predictive maintenance capabilities.",
    icon: Radio,
    features: [
      "Asset monitoring",
      "IoT integration",
      "Predictive maintenance",
      "Usage analytics",
    ],
    category: "IoT",
  },
  {
    title: "Personal Vehicle Tracking",
    description:
      "Personal GPS tracking solutions for individual vehicles, family cars, and personal asset protection.",
    icon: Car,
    features: [
      "Vehicle security",
      "Family tracking",
      "Theft protection",
      "Usage monitoring",
    ],
    category: "Personal",
  },
  {
    title: "Municipalities",
    description:
      "Comprehensive tracking solutions for municipal vehicles, waste management, public transportation, and city services optimization.",
    icon: Building,
    features: [
      "Municipal fleet tracking",
      "Waste management",
      "Public services",
      "City operations",
    ],
    category: "Government",
  },
  {
    title: "High Value Cargo",
    description:
      "Secure high-value cargo transportation with smart padlock GPS tracking, real-time monitoring, and tamper alerts.",
    icon: Shield,
    features: [
      "Smart padlock tracking",
      "Cargo security",
      "Tamper detection",
      "High-value protection",
    ],
    category: "Security",
  },
];

export default function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState<typeof industriesData[0] | null>(null);

  return (
    <section id="industries" aria-label="Industries We Serve">
      <section id="industries" className="section-padding bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Industries We <span className="text-gradient">Serve</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Garuda OM provides specialized GPS tracking solutions across
              diverse industries, delivering tailored technology to meet unique
              operational requirements and challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesData.map((industry, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndustry(industry)}
                className="text-left group"
              >
                <div className="card-glass p-8 group-hover:scale-105 transition-transform duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {(() => {
                        const Icon = industry.icon;
                        return <Icon size={32} className="text-white" />;
                      })()}
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {industry.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {industry.description}
                  </p>
                  <ul className="space-y-3">
                    {industry.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-border/50">
                    <div className="justify-center gap-2 whitespace-nowrap rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-primary font-medium text-sm flex items-center transition-colors">
                      Learn More{" "}
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
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

      <SlidePanel
        isOpen={!!selectedIndustry}
        onClose={() => setSelectedIndustry(null)}
        title={selectedIndustry?.title || ""}
        description={selectedIndustry?.description || ""}
        features={selectedIndustry?.features || []}
        icon={selectedIndustry?.icon || Truck}
        category={selectedIndustry?.category || "Industry Solution"}
      />
    </section>
  );
}
