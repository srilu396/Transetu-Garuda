import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Industries from "@/components/Industries";
import About from "@/components/About";
import Videos from "@/components/Videos";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Services />
        <Features />
        <Industries />
        <About />
        <Videos />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
