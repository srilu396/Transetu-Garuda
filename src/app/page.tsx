import SolutionsOverviewSection from "@/components/Solutions/SolutionsOverviewSection";
import Navbar from "@/components/Layout/Navbar";
import HeroSection from "@/components/Hero/Hero";
import ProductsSection from "@/components/Solutions/GPSTrackingSolutionsGrid";
import FeaturesSection from "@/components/PowerfulFeatures/PowerfulFeatures";
import IndustriesSection from "@/components/Industries/IndustriesSection";
import AboutSection from "@/components/About/AboutSection";
import VideosSection from "@/components/Videos/Videos";
import ClientsSection from "@/components/Clients/ClientsSection";
import Footer from "@/components/Layout/Footer";
import FASTagManagement from "@/components/FASTag/FASTagManagementSection";

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
        <VideosSection />
        <ClientsSection />
      </main>
      <Footer />
    </div>
  );
}
