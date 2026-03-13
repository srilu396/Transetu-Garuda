import SolutionsOverviewSection from "@/components/Products/SolutionsOverview";
import Navbar from "@/components/Layout/Navbar";
import HeroSection from "@/components/Hero/Hero";
import ProductsSection from "@/components/Products/Products";
import FeaturesSection from "@/components/PowerfulFeatures/PowerfulFeatures";
import IndustriesSection from "@/components/Industries/Industries";
import AboutSection from "@/components/About/About";
import TestimonialsSection from "@/components/Testimonials/Testimonials";
import Footer from "@/components/Layout/Footer";
import ClientsSection from "@/components/Clients/Clients";
import FASTagManagement from "@/components/UI/FASTagManagement";
import InnovationSection from "@/components/PowerfulFeatures/Innovation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <SolutionsOverviewSection />
        <ProductsSection />
        <FASTagManagement />
        <FeaturesSection />
        <IndustriesSection />
        <AboutSection />
        <ClientsSection />
        <InnovationSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
