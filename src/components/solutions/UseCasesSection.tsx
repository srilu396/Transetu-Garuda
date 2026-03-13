"use client";

import React from "react";
import { motion } from "framer-motion";
import { UseCase } from "@/data/solutions";

interface UseCasesSectionProps {
  useCases: UseCase[];
}

export default function UseCasesSection({ useCases }: UseCasesSectionProps) {
  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-100 relative overflow-hidden">
      {/* Subtle organic background shape */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="absolute w-full h-full text-slate-50" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0,0 Q50,100 100,0 L100,100 L0,100 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">
              Who Uses This <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative inline-block">
                Solution?
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
              Our technology empowers diverse industries to optimize their operations and secure their assets.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Subtle connecting line behind cards */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-px bg-slate-200 border-b border-dashed border-slate-300 z-0"></div>
          
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl p-10 border border-slate-200 shadow-sm hover:shadow-2xl transition-all relative overflow-hidden h-full flex flex-col z-10"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.03] rounded-bl-[100px] -z-10 group-hover:bg-primary/[0.08] transition-colors"></div>
              
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 border border-accent/20 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
                 <span className="text-accent group-hover:text-white font-black text-xl">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors">{useCase.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium flex-grow">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
