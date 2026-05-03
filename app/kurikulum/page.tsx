/**
 * page.tsx (Kurikulum)
 * --------------------
 * Menampilkan struktur kurikulum per tingkat kelas (X, XI, XII).
 */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { teknologi } from "@/data/techKurikulum";

export default function KurikulumPage() {

  // Kurikulum (Data Statis)
  const kurikulum = [
    {
      kelas: "Kelas X",
      fokus: "Dasar-dasar Kejuruan RPL",
      mapel: [
        "Sistem Komputer",
        "Komputer dan Jaringan Dasar",
        "Pemrograman PBO",
        "Pemrograman Visual Lanjut"
      ]
    },
    {
      kelas: "Kelas XI",
      fokus: "Pemrograman Web & Basis Data Dasar",
      mapel: [
        "Pemodelan Perangkat Lunak (UML)",
        "Basis Data (MySQL/MariaDB)",
        "Pemrograman Web Tstatik (HTML, CSS, JS)",
        "Basis Data Lanjutan"
      ]
    },
    {
      kelas: "Kelas XII",
      fokus: "Aplikasi Terintegrasi & Project Akhir",
      mapel: [
        "Pemrograman Web Dinamis (PHP/Laravel/Node.js)",
        "Pemrograman Perangkat Bergerak (Android)",
        "Produk Kreatif dan Kewirausahaan",
        "Tugas Akhir / UKK (Uji Kompetensi Keahlian)"
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block py-1 px-4 rounded-full bg-[#395886]/10 text-[#395886] text-sm font-bold mb-4">
            PEMBELAJARAN
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#243a5e] mb-6">
            Kurikulum RPL
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Kurikulum disusun secara bertahap dari pemahaman dasar logika algoritma hingga pembuatan aplikasi nyata yang siap dipakai industri.
          </p>
        </motion.div>

        {/* Kurikulum Timeline */}
        <div className="space-y-8 mb-20">
          {kurikulum.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Dekorasi Nomor Kelas */}
              <div className="absolute -right-6 -top-6 text-9xl font-black text-blue-50 opacity-50 select-none pointer-events-none">
                {item.kelas.split(' ')[1]}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-2">
                  <h2 className="text-2xl font-bold text-[#243a5e]">{item.kelas}</h2>
                  <div className="h-px bg-slate-200 flex-grow"></div>
                </div>
                <h3 className="text-[#395886] font-medium mb-6">{item.fokus}</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {item.mapel.map((m, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-blue-50/50 border border-slate-50">
                      <div className="w-6 h-6 rounded-full bg-[#395886] text-white flex items-center justify-center text-xs shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <span className="text-slate-700 font-medium">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Teknologi Badge Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-8">Teknologi yang Dipelajari</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {teknologi.map((tech) => (
              <div 
                key={tech.id} 
                className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm hover:border-[#395886] hover:text-[#395886] transition-colors cursor-default"
              >
                <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                <span className="font-medium text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
