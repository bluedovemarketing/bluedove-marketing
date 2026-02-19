"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Target, MessageSquare, Zap } from 'lucide-react';

export default function Strategy() {
  const points = [
    {
      title: "Audience Synthesis",
      icon: <Target className="w-6 h-6" />,
      description: "We don't guess. We map local market data to find high-intent customers within minutes of your business location."
    },
    {
      title: "Conversion Logic",
      icon: <MessageSquare className="w-6 h-6" />,
      description: "Every click is funneled into a proprietary bot-nurture sequence designed to solve friction and capture contact data instantly."
    },
    {
      title: "Performance Scaling",
      icon: <Zap className="w-6 h-6" />,
      description: "Our system identifies winning creative patterns early, allowing us to reallocate budget into what actually converts."
    }
  ];

  return (
    <section id="strategy" className="bg-blue-600 text-white py-24 px-8 md:px-20 relative overflow-hidden border-b border-white/10">
      
      {/* Enhanced Background Lighting for "Pop" */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-300/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-medium tracking-tight mb-4"
          >
            The Blue Dove <span className="font-bold italic">Protocol</span>
          </motion.h2>
          <p className="text-blue-100 text-lg opacity-70 max-w-xl mx-auto font-medium">
            Eliminating the 'Ad Spend Leak' through a closed-loop acquisition system.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                backgroundColor: "rgba(255, 255, 255, 0.18)" 
              }}
              className="will-change-transform relative group bg-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] flex flex-col items-center text-center w-full max-w-[360px] cursor-pointer transition-all duration-300 shadow-2xl
              /* THE RIM LIGHTING EFFECT */
              border-t border-l border-white/40 border-b border-r border-white/10"
            >
              {/* Top Glow Point */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Icon Container with Gradient Pop */}
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg border border-white/20 group-hover:scale-110 transition-transform duration-500">
                <div className="text-white drop-shadow-md">
                  {p.icon}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-blue-100 transition-colors">
                {p.title}
              </h3>
              <p className="text-blue-50 text-[15px] leading-relaxed opacity-80 font-medium">
                {p.description}
              </p>

              {/* Bottom Subtle Shadow Pop (Visual Depth) */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-blue-900/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}