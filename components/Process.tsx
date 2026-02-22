"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SearchCode, Cpu, BarChart, ArrowRight } from 'lucide-react';

export default function Process() {
  const steps = [
    { title: "The Audit", icon: <SearchCode className="w-6 h-6" />, description: "We perform a deep-dive analysis of your current market presence to identify the precise 'leak' in your scaling funnel." },
    { title: "The Build", icon: <Cpu className="w-6 h-6" />, description: "We deploy the Blue Dove Messenger Protocol and custom Meta creative designed to capture and nurture leads instantly." },
    { title: "The Scale", icon: <BarChart className="w-6 h-6" />, description: "We identify the winning variables and reallocate budget into high-performing patterns to maximize your ROI." }
  ];

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      window.scrollTo({ top: element.getBoundingClientRect().top + window.pageYOffset - 100, behavior: "smooth" });
    }
  };

  return (
    <section id="process" className="bg-slate-50 py-24 px-8 md:px-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-200 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-slate-900"
          >
            The Scaling <span className="font-bold italic">Roadmap</span>
          </motion.h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto font-medium opacity-80">
            A streamlined three-phase transition from manual chasing to automated growth.
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row justify-center items-stretch gap-12">
          <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-12 w-2/3 h-[2px] bg-slate-200" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="will-change-transform relative bg-white border border-slate-200 p-8 rounded-[2.5rem] flex flex-col items-center text-center w-full max-w-[360px] shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all duration-300 group cursor-pointer"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-[0.2em] uppercase shadow-lg shadow-blue-200">
                Phase 0{i + 1}
              </div>
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 transition-colors duration-300 group-hover:bg-blue-50 group-hover:border-blue-100">
                <div className="text-slate-400 group-hover:text-blue-600 transition-colors">{step.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight text-slate-900">{step.title}</h3>
              <p className="text-slate-500 text-[17px] md:text-[15px] leading-relaxed font-medium">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em] mb-6">Ready to initiate phase 01?</p>
          <motion.a 
            href="#contact"
            onClick={scrollToContact}
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all cursor-pointer group"
          >
            Request your custom audit
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}