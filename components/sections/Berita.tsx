/**
 * Berita.tsx
 * ----------
 * Section Berita (Coming Soon). Menampilkan placeholder menarik.
 * ----------------------------------------------------------------
 * 
 * 
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Berita() {
  return (
    <SectionWrapper id="berita" className="bg-slate-50 relative overflow-hidden">
      {/* Dekorasi Background */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-[#395886]/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-300/10 blur-3xl"></div>

      <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#243a5e] mb-4">
          Berita & Pengumuman
        </h2>
        <p className="text-slate-600 text-lg">
          Kabar terbaru seputar jurusan, prestasi siswa, dan event mendatang.
        </p>
      </div>

      <motion.div 
        className="max-w-4xl mx-auto bg-white rounded-3xl p-10 md:p-16 text-center shadow-sm border border-slate-100 relative z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12 text-[#395886]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14" />
          </svg>
        </div>
        
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#395886]/10 text-[#395886] font-bold text-sm uppercase tracking-widest mb-4">
          Coming Soon
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Fitur Berita Sedang Disiapkan!
        </h3>
        
        <p className="text-slate-600 max-w-lg mx-auto">
          Pantau terus, berita seru dan inspiratif dari karya-karya siswa RPL 
          akan segera hadir di sini. Jangan sampai ketinggalan!
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
