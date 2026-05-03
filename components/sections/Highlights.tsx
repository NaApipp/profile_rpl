/**
 * Highlights.tsx
 * --------------
 * Section "Mengapa Pilih RPL?". Menampilkan grid card keunggulan jurusan.
 */
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { highlights } from "@/data/dummy";

export default function Highlights() {
  return (
    <SectionWrapper id="highlights" className="bg-blue-50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#243a5e] mb-4">
          Mengapa Pilih RPL?
        </h2>
        <p className="text-slate-600 text-lg">
          Jurusan Rekayasa Perangkat Lunak menawarkan berbagai keunggulan 
          yang mempersiapkan kamu menjadi profesional IT di masa depan.
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.15 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        {highlights.map((item) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-[#395886]/20 group"
          >
            <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#395886] transition-all duration-300 relative">
              <img src={item.icon} alt={item.title} width={32} height={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[#395886] transition-colors">
              {item.title}
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
