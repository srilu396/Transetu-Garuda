import SolutionsOverview from "@/components/SolutionsOverview";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Features from "@/components/Features";
import Industries from "@/components/Industries";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import FASTagManagement from "@/components/FASTagManagement";
import Innovation from "@/components/Innovation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <SolutionsOverview />
        <Products />
        <FASTagManagement />
        <Features />
        <Industries />
        <About />
        <Clients />
        <Innovation />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
