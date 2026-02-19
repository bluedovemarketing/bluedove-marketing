"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToFirstSection = () => {
    const element = document.getElementById('strategy');
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="flex flex-col lg:flex-row min-h-screen">
      {/* --- LEFT CONTENT --- */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-20 pt-40 pb-20">
        {/* Status Badge - Updated Text to 2026 / No Q1 */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-8 w-fit"
        >
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">
            Accepting New Partners for 2026
          </span>
        </motion.div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-[84px] font-medium leading-[1.05] tracking-tight text-slate-900 mb-8">
          Stop Burning <br /> Your Budget
        </h1>

        {/* Sub-headline - Corrected to text-xl for mobile (1 size up) and md:text-xl for desktop */}
        <p className="text-xl md:text-xl text-slate-500 max-w-md leading-relaxed mb-10 font-medium">
          We turn passive traffic into predictable revenue. Our data-driven Meta Ad frameworks reduce lead costs and scale your business without the guesswork.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-start gap-4">
          {/* Contact Button - Fixed to Email Link */}
          <a 
            href="mailto:sean@bluedovemarketing.com"
            className="group bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 shadow-2xl shadow-blue-200 hover:bg-blue-700 cursor-pointer transition-all hover:translate-y-[-2px] active:scale-95"
          >
            Contact Us
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          {/* Learn More Button - Added Beside Contact */}
          <button 
            onClick={scrollToFirstSection}
            className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-slate-50 transition-all cursor-pointer shadow-sm hover:translate-y-[-2px] active:scale-95"
          >
            Learn More
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* --- RIGHT IMAGE (NO STYLES CHANGED) --- */}
      <div className="w-full lg:w-1/2 relative min-h-[500px] bg-slate-950 overflow-hidden">
        <motion.img 
          initial={{ scale: 1.2, rotate: -2 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 2.5, ease: [0.23, 1, 0.32, 1] }}
          src="https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=2070" 
          alt="Blue Dove Data Engine" 
          className="absolute inset-0 w-full h-full object-cover grayscale-[10%]"
        />
        <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent opacity-90" />
        
        <div className="absolute bottom-10 left-10 bg-white/5 backdrop-blur-xl p-4 rounded-xl border border-white/10 text-white/80 text-[10px] font-bold uppercase tracking-[0.3em]">
          Algorithmically Driven // Meta Specialized
        </div>
      </div>
    </section>
  );
}