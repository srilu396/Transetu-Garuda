"use client";

import React from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { SolutionData, solutions } from "@/sections/gps/data/gpsData";
import { CheckCircle, ArrowLeft, Satellite, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface GPSDetailWrapperProps {
  slug?: string;
  data?: SolutionData;
  showNavbarFooter?: boolean;
  onBack?: () => void;
  category?: string;
  icon?: React.ElementType;
}

export default function GPSDetailWrapper({
  slug,
  data: propData,
  showNavbarFooter = true,
  onBack,
  category = "Fleet Solution",
  icon: PropIcon,
}: GPSDetailWrapperProps) {
  const router = useRouter();

  // Find data if slug is provided, otherwise use propData
  const data = propData || (slug ? solutions[slug] : undefined);

  if (!data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search size={40} className="text-slate-400" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            Solution Not Found
          </h1>
          <p className="text-slate-600 mb-8 font-medium">
            The solution details you're looking for aren't available at the moment.
          </p>
          <button
            onClick={() => router.push("/#products")}
            className="bg-primary text-white px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            Explore Solutions
          </button>
        </div>
      </div>
    );
  }

  const Icon = PropIcon || data.icon || Satellite;

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
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
                <Icon size={48} className="text-white drop-shadow-md" />
              </div>
              <div>
                <span className="text-sm font-medium text-primary bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 rounded-full inline-block mb-3">
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
            <img
              src={
                data.imageUrl ||
                "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              }
              alt={data.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="max-w-3xl">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  Overview
                </h3>
                <p className="text-black font-medium text-lg leading-relaxed line-clamp-3 md:line-clamp-none">
                  {data.overview}
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Description Sections */}
          {data.detailedDescription && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    What is {data.title}?
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {data.detailedDescription.what}
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    How it Works
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {data.detailedDescription.how}
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    Who is it for?
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {data.detailedDescription.who}
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    Why choose this solution?
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {data.detailedDescription.why}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Benefits Cards (Mimicking Stats) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {data.benefits.slice(0, 3).map((benefit, index) => {
              return (
                <div
                  key={index}
                  className="card-glass p-8 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="flex justify-start mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/15 to-accent/15 rounded-2xl flex items-center justify-center text-primary shadow-inner">
                      {benefit.icon}
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
                  {data.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-3 p-5 rounded-xl bg-muted/30 border border-border hover:border-primary/30 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center shrink-0 group-hover:bg-gradient-primary group-hover:text-white transition-colors">
                        {feature.icon}
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
                  ))}
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
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/15 to-accent/15 text-primary flex items-center justify-center shrink-0 font-bold text-sm mt-1">
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

          {/* Secondary Image Section */}
          {data.secondaryImageUrl && (
            <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden mb-24 shadow-2xl border border-border/50">
              <img
                src={data.secondaryImageUrl}
                alt={`${data.title} technology`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          )}
        </div>
      </main>

      {showNavbarFooter && <Footer />}
    </div>
  );
}