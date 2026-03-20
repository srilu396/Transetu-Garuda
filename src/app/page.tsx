import dynamic from "next/dynamic";
import Navbar from "@/components/Layout/Navbar";
import HeroSection from "@/sections/hero/Hero";
import ProductsSection from "@/sections/gps/GPSTrackingSolutionsGrid";
import FeaturesSection from "@/sections/features/PowerfulFeatures";

// Lazy load heavy sections
const IndustriesSection = dynamic(() => import("@/sections/industries/IndustriesSection"), {
  loading: () => <div className="py-24 animate-pulse bg-slate-50" />,
});
const VideosSection = dynamic(() => import("@/sections/videos/Videos"), {
  loading: () => <div className="py-24 animate-pulse bg-slate-50" />,
});
const ContactSection = dynamic(() => import("@/sections/contact/ContactSection"), {
  loading: () => <div className="py-24 animate-pulse bg-slate-50" />,
});
const FASTagManagement = dynamic(() => import("@/sections/fastag/FASTagManagementSection"));
const AboutSection = dynamic(() => import("@/sections/about/AboutSection"));
const FastagSection = dynamic(() => import("@/sections/fastag/FastagSection"));
import Footer from "@/components/Layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FastagSection />
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
