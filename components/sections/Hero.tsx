/**
 * Hero.tsx
 * --------
 * Section paling atas di beranda. Menampilkan judul besar, badge, 
 * dan tombol Call to Action (CTA).
 */
"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20"
      style={{ background: 'linear-gradient(135deg, #395886 0%, #243a5e 100%)' }}
    >
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8)_1px,_transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8 flex justify-center"
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 text-white text-sm font-medium border border-white/20 backdrop-blur-sm">
              SMKN 4 Kendal
            </span>
          </motion.div>

          {/* Judul Besar */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
          >
            Rekayasa Perangkat Lunak
          </motion.h1>

          {/* Subjudul */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Mencetak software engineer tangguh yang siap menghadapi tantangan industri digital. 
            Belajar coding dari nol hingga mahir dengan kurikulum standar industri.
          </motion.p>

          {/* Tombol CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="/tentang" size="lg" className="w-full sm:w-auto bg-[#243a5e] hover:bg-slate-100 hover:text-[#395886] text-[#395886] shadow-lg">
              <span className="flex items-center justify-center gap-2">
                Pelajari Lebih Lanjut
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Button>
            <Button href="/kurikulum" size="lg" className="w-full sm:w-auto bg-[#243a5e] hover:bg-slate-100 hover:text-[#395886] text-[#395886] shadow-lg">
              Lihat Kurikulum
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Wave divider bawah */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[50px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C-5.1,95.8,50.7,93.4,110.1,81.8,179.8,68.2,253.5,74.5,321.39,56.44Z" className="fill-[#f0f4fb]"></path>
        </svg>
      </div>
    </section>
  );
}
