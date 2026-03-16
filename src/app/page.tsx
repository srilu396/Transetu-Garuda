import Navbar from "@/components/Layout/Navbar";
import HeroSection from "@/sections/hero/Hero";
import ProductsSection from "@/sections/gps/GPSTrackingSolutionsGrid";
import FeaturesSection from "@/sections/features/PowerfulFeatures";
import IndustriesSection from "@/sections/industries/IndustriesSection";
import AboutSection from "@/sections/about/AboutSection";
import VideosSection from "@/sections/videos/Videos";
import Footer from "@/components/Layout/Footer";
import FASTagManagement from "@/sections/fastag/FASTagManagementSection";
import ContactSection from "@/sections/contact/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <FASTagManagement />
        <FeaturesSection />
        <IndustriesSection />
        <AboutSection />
        <VideosSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
