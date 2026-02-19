"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Timer, ShieldCheck, TrendingUp } from 'lucide-react';

export default function Results() {
  const benchmarks = [
    {
      title: "Response Speed",
      target: "60 Seconds",
      label: "The Golden Window",
      description: "Our protocol is engineered to engage leads instantly, capturing intent the moment it's generated.",
      icon: <Timer className="w-6 h-6" />
    },
    {
      title: "Lead Quality",
      target: "95%+",
      label: "Target Accuracy",
      description: "We deploy automated qualification filters to ensure your time is only spent with high-intent prospects.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Growth Scaling",
      target: "Predictable",
      label: "Scaling Protocol",
      description: "The Blue Dove engine is built for stability, allowing for consistent growth without the market guesswork.",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  return (
    <section id="results" className="bg-white py-24 px-8 md:px-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-slate-900"
          >
            Performance <span className="font-bold italic">Benchmarks</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-slate-600 text-lg max-w-xl mx-auto font-medium leading-relaxed"
          >
            Every system is built to meet rigorous efficiency standards, ensuring ad spend translates into a predictable growth engine.
          </motion.p>
        </div>

        {/* Cards with Permanent Blue Outline */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6">
          {benchmarks.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="will-change-transform bg-slate-50 p-8 rounded-[2.5rem] flex flex-col items-center text-center w-full max-w-[360px] transition-all duration-300 cursor-pointer group 
              /* Permanent Blue Border */
              border border-blue-200 
              /* Hover Effect */
              hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)]"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 border border-slate-200 shadow-sm transition-all duration-300 group-hover:border-blue-400">
                <div className="text-slate-400 group-hover:text-blue-600 transition-colors">
                  {item.icon}
                </div>
              </div>

              {/* Data Point */}
              <div className="mb-4">
                <div className="text-4xl font-black tracking-tighter mb-1 text-blue-600">
                  {item.target}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-blue-400 transition-colors">
                  {item.label}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold mb-3 tracking-tight text-slate-900">
                {item.title}
              </h3>
              {/* Mobile text enlarged, Desktop text original */}
              <p className="text-slate-500 text-[17px] md:text-[15px] leading-relaxed font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}