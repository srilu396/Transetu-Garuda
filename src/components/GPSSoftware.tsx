import React from "react";
import { CheckCircle2, Layout, Shield, Zap } from "lucide-react";

const features = [
  {
    title: "Real-Time Tracking",
    description: "Instantly locate your fleet anywhere in the world with sub-second latency.",
    icon: Zap,
  },
  {
    title: "Advanced Analytics",
    description: "Deep insights into fuel consumption, driver behavior, and route efficiency.",
    icon: Layout,
  },
  {
    title: "Enterprise Security",
    description: "Military-grade encryption and multi-user access control for your data.",
    icon: Shield,
  },
];

export default function GPSSoftware() {
  return (
    <section id="software" className="py-24 bg-background">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6">The Garuda GPS Platform</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our enterprise-grade software is designed for scalability and precision. Whether you manage ten vehicles or ten thousand, Garuda provides the tools you need to optimize operations.
              </p>
            </div>
            
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Explore Software Features
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden border shadow-2xl">
              <div className="absolute inset-4 bg-card rounded-xl border shadow-sm p-6 overflow-hidden">
                <div className="w-full h-8 bg-muted rounded mb-4 flex items-center px-4 gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
                <div className="space-y-4">
                  <div className="h-32 bg-muted/50 rounded-lg animate-pulse" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-muted/50 rounded-lg animate-pulse" />
                    <div className="h-24 bg-muted/50 rounded-lg animate-pulse" />
                  </div>
                  <div className="h-20 bg-muted/50 rounded-lg animate-pulse" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
