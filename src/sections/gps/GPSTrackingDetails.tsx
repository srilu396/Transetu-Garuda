"use client";

import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import { SolutionData } from "./data/gpsData";
import Image from "next/image";
import { 
  CheckCircle, 
  ArrowLeft, 
  Satellite,
  Camera,
  Bell,
  Shield,
  Truck,
  MapPin,
  BarChart3,
  Zap,
  Fuel,
  Layers,
  Thermometer,
  Lock,
  ShieldCheck,
  Search
} from "lucide-react";
import { useRouter } from "next/navigation";

// Icon mapping to handle dynamic icon rendering from strings
const IconMap: Record<string, React.ElementType> = {
  Satellite,
  Camera,
  Bell,
  Shield,
  Truck,
  MapPin,
  BarChart3,
  Zap,
  Fuel,
  Layers,
  Thermometer,
  Lock,
  ShieldCheck,
  Search
};

interface GPSDetailWrapperProps {
  data: SolutionData;
  showNavbarFooter?: boolean;
  onBack?: () => void;
  category?: string;
  icon?: string; // Changed from React.ElementType to string
}

export default function GPSTrackingDetails({
  data,
  showNavbarFooter = true,
  onBack,
  category = "Fleet Solution",
  icon = "Satellite",
}: GPSDetailWrapperProps) {
  const router = useRouter();
  const HeaderIcon = IconMap[icon] || Satellite;

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  // Function to handle navigation to homepage contact section
  const handleContactNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Navigate to homepage with contact hash
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {showNavbarFooter && <Navbar />}

      <main className={showNavbarFooter ? "pt-24" : ""}>
        <div className="max-w-7xl mx-auto container-padding py-12">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>Back to Solutions</span>
          </button>

          {/* Header with Icon and Title */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                <HeaderIcon size={48} className="text-white drop-shadow-md" />
              </div>
              <div>
                <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full inline-block mb-3">
                  {category}
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold">{data.title}</h1>
              </div>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {data.tagline}
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden mb-16 shadow-xl">
            <Image
  src={
    data.imageUrl ||
    "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  }
  alt={data.title}
  fill
  className="object-cover"
  loading="lazy"
  sizes="(max-width: 768px) 100vw, 1200px"
/>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="max-w-3xl">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-md">
                  Overview
                </h3>
                <p className="text-white/90 font-medium text-lg leading-relaxed drop-shadow-sm line-clamp-3 md:line-clamp-none">
                  {data.overview}
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Cards (Mimicking Stats) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {data.benefits.slice(0, 3).map((benefit, index) => {
              const BenefitIcon = IconMap[benefit.icon] || Shield;
              return (
                <div
                  key={index}
                  className="card-glass p-8 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="flex justify-start mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-inner">
                      <BenefitIcon size={24} />
                    </div>
                  </div>
                  <div className="text-xl font-bold text-slate-900 mb-3">
                    {benefit.title}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-32">
            {/* Core Features */}
            <div className="lg:col-span-2">
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-primary rounded-full" />
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.features.map((feature, index) => {
                    const FeatureIcon = IconMap[feature.icon] || Zap;
                    return (
                      <div
                        key={index}
                        className="flex flex-col gap-3 p-5 rounded-xl bg-muted/30 border border-border hover:border-primary/30 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                          <FeatureIcon size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Use Cases */}
              <section>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-primary rounded-full" />
                  Benefits & Use Cases
                </h2>
                <div className="space-y-4">
                  {data.useCases.map((useCase, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-5 rounded-xl bg-muted/30 border border-border hover:border-primary/30 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold text-sm mt-1">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">
                          {useCase.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {useCase.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Features & Benefits (Sidebar) */}
            <div className="space-y-8">
              {data.steps && data.steps.length > 0 && (
                <div className="card-glass p-8 bg-gradient-to-br from-primary/5 to-transparent">
                  <h3 className="text-2xl font-bold mb-6">How It Works</h3>
                  <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[1.1rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
                    {data.steps.map((step, index) => (
                      <div
                        key={index}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                      >
                        <div className="flex items-center justify-center w-9 h-9 rounded-full border-4 border-background bg-primary/10 text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                          <span className="font-bold text-xs">{index + 1}</span>
                        </div>
                        <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-border bg-card shadow-sm hover:border-primary/20 transition-colors">
                          <div className="flex items-center justify-between mb-1">
                            <div className="font-bold">{step.title}</div>
                          </div>
                          <div className="text-muted-foreground text-xs font-medium">
                            {step.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="card-glass p-8 border-primary/20">
                <h3 className="text-2xl font-bold mb-6">Why Choose Garuda?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span className="text-muted-foreground">
                      Enterprise-grade reliability and 99.9% uptime validation.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span className="text-muted-foreground">
                      Seamless integration with existing fleet management
                      workflows.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span className="text-muted-foreground">
                      Dedicated 24/7 technical support and rapid incident
                      response.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact CTA - Fixed navigation to go to homepage first then contact */}
          <div className="rounded-3xl bg-gradient-primary p-12 text-center text-white relative overflow-hidden mt-16">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
              Ready to deploy {data.title}?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto relative z-10">
              Transform your fleet operations with our industry-leading GPS
              tracking hardware and intuitive software platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a
                href="/#contact"
                onClick={handleContactNavigation}
                className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-xl cursor-pointer inline-block"
              >
                Contact Sales
              </a>
              <a
                href="/#contact"
                onClick={handleContactNavigation}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center justify-center cursor-pointer inline-block"
              >
                Request a Demo
              </a>
            </div>
          </div>
        </div>
      </main>

      {showNavbarFooter && <Footer />}
    </div>
  );
}