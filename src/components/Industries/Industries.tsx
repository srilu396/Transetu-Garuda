"use client";
import React, { useState } from "react";
import Link from "next/link";
import { industries } from "@/content/industries";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function IndustriesSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(industries.map((ind) => ind.category))),
  ];

  const filteredIndustries =
    selectedCategory === "All"
      ? industries
      : industries.filter((ind) => ind.category === selectedCategory);

  return (
    <section
      id="industries"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block">
            Custom Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Industries <span className="text-gradient-primary">We Serve</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From logistics to healthcare, our specialized GPS and FASTag
            solutions are designed to meet the unique challenges of every
            sector.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredIndustries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Link
                href={`/industries/${industry.slug}`}
                key={index}
                className="group relative"
              >
                <div className="h-full card-glass p-8 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 flex flex-col">
                  {/* Icon & Category */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-gradient-primary group-hover:text-white transition-all duration-500">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold text-primary/60 uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-full">
                      {industry.category}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                    {industry.description}
                  </p>

                  {/* Highlights/Features */}
                  <div className="space-y-3 mb-8">
                    {industry.features.slice(0, 2).map((feature, fIndex) => (
                      <div
                        key={fIndex}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Stats Preview */}
                  {industry.stats && industry.stats[1] && (
                    <div className="flex items-center gap-2 text-primary font-bold mb-6 bg-primary/5 p-3 rounded-lg border border-primary/10">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm">
                        {industry.stats[1].label}: {industry.stats[1].value}
                      </span>
                    </div>
                  )}

                  {/* Call to Action */}
                  <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300 mt-auto">
                    View Industry Details
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center p-12 rounded-3xl bg-muted/30 border border-dashed border-border">
          <h3 className="text-2xl font-bold mb-4">
            Don't see your industry listed?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Our technology is highly adaptable. Contact us to discuss how we can
            build a custom tracking solution for your specific business needs.
          </p>
          <button className="btn-primary px-10 py-4">
            Consult Our Experts
          </button>
        </div>
      </div>
    </section>
  );
}
