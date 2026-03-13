import React from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import SolutionHero from "./SolutionHero";
import FeaturesSection from "./FeaturesSection";
import UseCasesSection from "./UseCasesSection";
import BenefitsSection from "./BenefitsSection";
import HowItWorksSection from "./HowItWorksSection";
import CTASection from "./CTASection";
import { SolutionData } from "@/content/solutions";

interface ProductDetailWrapperProps {
  data: SolutionData;
  showNavbarFooter?: boolean;
}

export default function ProductDetailWrapper({
  data,
  showNavbarFooter = true,
}: ProductDetailWrapperProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {showNavbarFooter && <Navbar />}

      <main className="flex-grow">
        <SolutionHero
          title={data.title}
          tagline={data.tagline}
          overview={data.overview}
          features={data.features}
          bgColor={data.bgColor}
        />

        <FeaturesSection features={data.features} overview={data.overview} />

        <HowItWorksSection steps={data.steps} />

        <UseCasesSection useCases={data.useCases} />

        <BenefitsSection benefits={data.benefits} />

        <CTASection title={data.title} />
      </main>

      {showNavbarFooter && <Footer />}
    </div>
  );
}
