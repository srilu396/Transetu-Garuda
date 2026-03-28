import dynamic from "next/dynamic";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { pageMetadata, SITE_BRAND } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `${SITE_BRAND} — GPS Tracking, Fleet Management & FASTag India`,
  description:
    "Garuda OM (GarudaOM): real-time GPS vehicle tracking, fleet management, FASTag buy & partner programs, dash cams, fuel sensors, and video telematics for Indian enterprises.",
  path: "/",
  absoluteTitle: true,
  keywords: [
    "Garuda OM GPS tracking",
    "GarudaOM FASTag",
    "buy FASTag India",
    "fleet GPS India",
  ],
});
import HeroSection from "@/sections/hero/Hero";

const SectionPlaceholder = () => (
  <div className="py-24 animate-pulse bg-slate-50" />
);

const FastagSection = dynamic(
  () => import("@/sections/fastag/FastagSection"),
  { ssr: false, loading: () => <SectionPlaceholder /> }
);

const ProductsSection = dynamic(
  () => import("@/sections/gps/GPSTrackingSolutionsGrid"),
  { ssr: false, loading: () => <SectionPlaceholder /> }
);

const FASTagManagement = dynamic(
  () => import("@/sections/fastag/FASTagManagementSection"),
  { ssr: false, loading: () => <SectionPlaceholder /> }
);

const FeaturesSection = dynamic(
  () => import("@/sections/features/PowerfulFeatures"),
  { ssr: false, loading: () => <SectionPlaceholder /> }
);

const IndustriesSection = dynamic(
  () => import("@/sections/industries/IndustriesSection"),
  { ssr: false, loading: () => <SectionPlaceholder /> }
);

const AboutSection = dynamic(
  () => import("@/sections/about/AboutSection"),
  { ssr: false, loading: () => <SectionPlaceholder /> }
);

const VideosSection = dynamic(
  () => import("@/sections/videos/Videos"),
  { ssr: false, loading: () => <SectionPlaceholder /> }
);

const ContactSection = dynamic(
  () => import("@/sections/contact/ContactSection"),
  { ssr: false, loading: () => <SectionPlaceholder /> }
);

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