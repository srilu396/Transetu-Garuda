import React from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { IndustryData } from "./data/industriesData";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface IndustryDetailWrapperProps {
  industry: IndustryData;
  showNavbarFooter?: boolean;
  onBack?: () => void;
}

export default function IndustryDetails({
  industry,
  showNavbarFooter = true,
  onBack,
}: IndustryDetailWrapperProps) {
  const router = useRouter();
  const Icon = industry.icon;

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  // Function to navigate to industries section then to contact
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // First navigate to homepage with industries hash
    window.location.href = "/#industries";
    
    // After a brief delay, redirect to contact section
    setTimeout(() => {
      window.location.href = "/#contact";
    }, 100);
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
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to {industry.category}</span>
          </button>

          {/* Header with Industry Icon and Title */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shrink-0">
                <Icon size={48} className="text-white" />
              </div>
              <div>
                <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full inline-block mb-3">
                  {industry.category}
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold">
                  {industry.title}
                </h1>
              </div>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {industry.description}
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden mb-16 shadow-xl">
            <img
              src={industry.imageUrl}
              alt={industry.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {industry.stats?.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <div key={index} className="card-glass p-8 text-center hover:border-primary/30 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <StatIcon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Main Content Grid - Increased bottom margin */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-32">
            {/* Overview & Solutions */}
            <div className="lg:col-span-2">
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-primary rounded-full" />
                  Industry Overview
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed text-lg italic mb-8 border-l-4 border-primary/20 pl-6">
                    Professional tracking and management solutions tailored for {industry.title.toLowerCase()} sector.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {industry.detailedDescription}
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-primary rounded-full" />
                  Key Solutions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {industry.solutions.map((solution, index) => (
                    <div key={index} className="flex items-center gap-4 p-5 rounded-xl bg-muted/30 border border-border hover:border-primary/30 transition-colors group">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="font-bold">{index + 1}</span>
                      </div>
                      <span className="font-medium">{solution}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Features & Benefits */}
            <div className="space-y-8">
              <div className="card-glass p-8 bg-gradient-to-br from-primary/5 to-transparent">
                <h3 className="text-2xl font-bold mb-6">Core Features</h3>
                <ul className="space-y-4">
                  {industry.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-glass p-8 border-primary/20">
                <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {industry.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full shrink-0 mt-2.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact CTA - Updated with two-step navigation */}
          <div className="rounded-3xl bg-gradient-primary p-12 text-center text-white relative overflow-hidden mt-16">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
              Ready to optimize your {industry.title.toLowerCase()} operations?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto relative z-10">
              Contact our experts today for a tailored demonstration of our GPS tracking and management platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a
                href="/#industries"
                onClick={handleNavigation}
                className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-xl cursor-pointer inline-block"
              >
                Get Started Now
              </a>
              <a
                href="/#industries"
                onClick={handleNavigation}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all cursor-pointer inline-block"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </main>

      {showNavbarFooter && <Footer />}
    </div>
  );
}