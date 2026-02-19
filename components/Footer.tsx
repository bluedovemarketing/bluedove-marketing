"use client";
import React from 'react';

export default function Footer() {
  const navLinks = [
    { name: "Strategy", href: "#strategy" },
    { name: "Results", href: "#results" },
    { name: "Process", href: "#process" },
  ];

  return (
    <footer className="bg-blue-600 text-white py-12 px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo & Copyright Section */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold tracking-tighter">
                Blue Dove <span className="opacity-70">Marketing</span>
              </span>
            </div>
            <p className="text-[12px] font-bold uppercase tracking-[0.4em] text-blue-200/50">
              © 2026 Blue Dove Marketing
            </p>
          </div>

          {/* Navigation & CTA */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-blue-100">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* The Real CTA Button - Changed to "Contact" */}
            <a 
              href="mailto:sean@bluedovemarketing.com" 
              className="bg-white text-blue-600 px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest cursor-pointer hover:bg-blue-50 transition-all shadow-lg active:scale-95"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}