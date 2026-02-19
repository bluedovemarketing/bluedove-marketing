"use client";
import React from 'react';
import { motion } from 'framer-motion';

// --- LOCKED LOGO: DESIGN 56 (THE MONOLITH PLUME) ---
export const Logo = () => (
  <motion.div 
    className="flex items-center cursor-pointer group" 
    whileHover="hover"
  >
    <div className="relative w-11 h-11 flex items-center justify-center mr-1">
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        <path d="M40,80 V20 L60,40 V80 Z" fill="#2563EB"/>
        <path d="M60,40 L80,60 V80 H60 Z" fill="#3B82F6"/>
        <path d="M40,80 H20 V60 L40,40 Z" fill="#1E293B"/>
      </svg>
    </div>
    
    <div className="text-[22px] tracking-tighter flex items-center leading-none">
      <span className="text-[#2563EB] font-bold">Blue</span>
      <span className="text-[#3B82F6] font-bold">Dove</span>
      <span className="text-[#1E293B] font-medium">Marketing</span>
    </div>
  </motion.div>
);

// --- NAV LINK COMPONENT (18PX + SQUARE TRACE) ---
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className="relative px-5 py-2 text-[18px] font-semibold tracking-tight text-slate-800 hover:text-blue-600 transition-colors cursor-pointer group"
      whileHover="hover"
      initial="initial"
    >
      <span className="relative z-10">{children}</span>
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" preserveAspectRatio="none">
        <motion.rect
          x="0" y="0" width="100%" height="100%"
          fill="transparent"
          stroke="#2563EB"
          strokeWidth="1.5"
          variants={{
            initial: { pathLength: 0, opacity: 0 },
            hover: { pathLength: 1, opacity: 1 }
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </svg>
    </motion.a>
  );
};

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-full px-8 py-3 flex justify-between items-center shadow-2xl">
        
        <Logo />

        <div className="hidden md:flex gap-4 items-center">
          <NavLink href="#strategy">Strategy</NavLink>
          <NavLink href="#results">Results</NavLink>
          <NavLink href="#process">Process</NavLink>
        </div>

        {/* --- REFINED CONTACT CTA --- */}
        <motion.a
          href="mailto:sean@bluedovemarketing.com"
          whileHover="hover"
          whileTap={{ scale: 0.96 }}
          initial="initial"
          className="relative overflow-hidden bg-[#2563EB] text-white px-8 py-2.5 rounded-full text-[13px] font-bold uppercase tracking-widest cursor-pointer shadow-lg transition-all"
        >
          {/* Shimmer Streak Animation */}
          <motion.div
            variants={{
              initial: { x: "-100%" },
              hover: { x: "100%" }
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none"
          />
          
          {/* Static Text Position */}
          <span className="relative z-10 block">
            Contact
          </span>
          
          {/* Outer Glow Effect */}
          <motion.div 
            variants={{
              initial: { opacity: 0, scale: 0.9 },
              hover: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.6)] pointer-events-none"
          />
        </motion.a>
      </div>
    </nav>
  );
}