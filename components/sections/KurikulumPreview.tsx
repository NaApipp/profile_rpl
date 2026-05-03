/**
 * KurikulumPreview.tsx
 * --------------------
 * Preview teknologi yang dipelajari di jurusan RPL.
 */
"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { teknologi } from "@/data/techKurikulum";

export default function KurikulumPreview() {
  return (
    <SectionWrapper id="kurikulum-preview" className="bg-white">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        
        {/* Kolom Teks */}
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold text-[#243a5e] mb-4">
            Apa yang Akan Kamu Pelajari?
          </h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Dari dasar pemrograman hingga pengembangan aplikasi full-stack modern. 
            Kami menggunakan teknologi standar industri yang sering digunakan oleh perusahaan.
          </p>
          <div className="hidden md:block">
            <Button href="/kurikulum" variant="primary">
              Lihat Kurikulum Lengkap
            </Button>
          </div>
        </div>

        {/* Kolom Grid Teknologi */}
        <div className="w-full md:w-2/3">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {teknologi.map((tech, index) => (
              <motion.div
                key={tech.id}
                className="bg-blue-50/50 border border-slate-100 rounded-xl p-5 flex flex-col items-center text-center hover:bg-white transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(57, 88, 134, 0.1)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <img src={tech.icon} alt={tech.name} className="w-10 h-10 mb-3" />
                <h4 className="font-bold text-slate-800 text-sm mb-1">{tech.name}</h4>
                <p className="text-xs text-slate-500 line-clamp-2">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Tombol Mobile */}
        <div className="w-full mt-4 md:hidden flex justify-center">
          <Button href="/kurikulum" variant="primary" className="w-full sm:w-auto">
            Lihat Kurikulum Lengkap
          </Button>
        </div>

      </div>
    </SectionWrapper>
  );
}
