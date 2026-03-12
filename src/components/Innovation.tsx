import React from "react";
import { Cpu, Globe, Rocket } from "lucide-react";

const items = [
  {
    icon: Cpu,
    title: "Edge Computing",
    description: "Our devices process data locally for faster response times and reduced bandwidth usage.",
  },
  {
    icon: Globe,
    title: "Global Connectivity",
    description: "Multi-network SIMs ensure your fleet stays connected even in the most remote locations.",
  },
  {
    icon: Rocket,
    title: "Future-Ready",
    description: "Regular over-the-air updates mean your hardware always has the latest features and security.",
  },
];

export default function Innovation() {
  return (
    <section id="innovation" className="py-24 bg-muted/20">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Innovation & Technology</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            We don't just track fleets; we build the future of logistics technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {items.map((item, index) => (
            <div key={index} className="space-y-4 p-8 bg-card border rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-12 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl border text-center">
          <h3 className="text-2xl font-bold mb-4">Empanelled with ISRO</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Garuda Technology is proud to be empanelled with the Indian Space Research Organisation (ISRO), leveraging elite satellite data for unmatched tracking precision.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 border border-primary/20 rounded-full bg-background text-primary font-medium">
            <Rocket className="w-4 h-4" />
            ISRO Verified Partner
          </div>
        </div>
      </div>
    </section>
  );
}
