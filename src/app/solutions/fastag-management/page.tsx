import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FASTagSolutionsGrid from "@/components/solutions/FASTagSolutionsGrid";

export const metadata = {
  title: "FASTag Management Solutions | Garuda OM",
  description:
    "Comprehensive FASTag management for fleet operators. Automate recharges, track transactions, and manage your entire fleet from one dashboard.",
};

export default function FASTagManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#eef6ff] to-white -z-10"></div>
          <div className="container-padding max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-wider mb-6">
              Garuda Toll Hub
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight text-slate-900">
              FASTag <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Management Solutions</span>
            </h1>
            <p className="text-lg text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed">
              Our advanced platform simplifies FASTag management for fleets of all sizes. Automate your toll payments, reduce administrative overhead, and gain full visibility into your toll expenditures.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <FASTagSolutionsGrid />

        {/* Call to Action */}
        <section className="py-20 bg-[#eef6ff]">
          <div className="container-padding max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Ready to streamline your toll management?</h2>
            <p className="text-slate-600 mb-10 text-lg">
              Contact our sales team today for a personalized demo and see how Garuda can transform your fleet operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Request a Demo
              </button>
              <button className="px-8 py-4 bg-white text-primary border border-primary/20 rounded-xl font-bold hover:bg-primary/5 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
