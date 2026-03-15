import FastagSection from "@/sections/fastag/FastagSection";
import Navbar from "@/components/Layout/Navbar";
import HeroSection from "@/sections/hero/HeroSection";
import GPSTrackingSection from "@/sections/gps/GPSTrackingSection";
import FeaturesSection from "@/sections/features/FeaturesSection";
import IndustriesSection from "@/sections/industries/IndustriesSection";
import AboutSection from "@/sections/about/AboutSection";
import VideosSection from "@/sections/videos/VideosSection";
import ClientsSection from "@/sections/clients/ClientsSection";
import ContactSection from "@/sections/contact/ContactSection";
import Footer from "@/components/Layout/Footer";
import FastagDetails from "@/sections/fastag/FastagDetails";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FastagSection />
        <GPSTrackingSection />
        <FastagDetails />
        <FeaturesSection />
        <IndustriesSection />
        <AboutSection />
        <VideosSection />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
