"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, ShieldCheck } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      // YOUR LIVE FORMSPREE ENDPOINT
      const response = await fetch("https://formspree.io/f/maqdpzno", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Formspree Error:", error);
      alert("Something went wrong. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-950 text-white py-32 px-8 md:px-20 relative overflow-hidden">
      {/* Background Tech Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Copy & Authority */}
          <div className="flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[12px] mb-6 flex items-center gap-2">
                <ShieldCheck size={16} /> Secure Intake Portal
              </div>
              <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-8">
                Initiate Your <br /> <span className="font-bold italic">Audit.</span>
              </h2>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-md">
                Enter your details below. Our team will review your current digital presence and reach out via Signal or email to schedule your scaling blueprint session.
              </p>
            </motion.div>
          </div>

          {/* Right Side: The Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl relative"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                  <ShieldCheck size={40} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Request Received</h3>
                <p className="text-slate-400">We will review your data and contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Full Name</label>
                    <input required type="text" name="name" className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Ian Evans" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                    <input required type="email" name="email" className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="ian@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Phone Number</label>
                    <input required type="tel" name="phone" className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="(555) 123-4567" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Business Name</label>
                    <input required type="text" name="business" className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="San Diego Dance..." />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Current Monthly Ad Spend</label>
                  <select required name="ad_spend" className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer [&>option]:text-slate-900">
                    <option value="">Select an option...</option>
                    <option value="$0 - $1,000">$0 - $1,000</option>
                    <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                    <option value="$5,000+">$5,000+</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="mt-4 bg-blue-600 text-white px-8 py-5 rounded-xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-blue-500 transition-all shadow-lg active:scale-95 disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? "Processing..." : "Submit Request"}
                  {!isSubmitting && <Send size={18} />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}