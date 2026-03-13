import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionHero from "./SolutionHero";
import FeaturesSection from "./FeaturesSection";
import UseCasesSection from "./UseCasesSection";
import BenefitsSection from "./BenefitsSection";
import CTASection from "./CTASection";
import { SolutionData } from "@/data/solutions";

interface ProductDetailWrapperProps {
  data: SolutionData;
}

export default function ProductDetailWrapper({ data }: ProductDetailWrapperProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20"> {/* PT-20 to account for fixed navbar */}
        <SolutionHero 
          title={data.title}
          tagline={data.tagline}
          bgColor={data.bgColor}
        />
        
        <FeaturesSection 
          features={data.features}
          overview={data.overview}
        />
        
        <UseCasesSection 
          useCases={data.useCases}
        />
        
        <BenefitsSection 
          benefits={data.benefits}
        />
        
        <CTASection 
          title={data.title}
        />
      </main>
      
      <Footer />
    </div>
  );
}
