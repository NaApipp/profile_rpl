/**
 * page.tsx (Tentang)
 * ------------------
 * Halaman profil jurusan, visi misi, dan tujuan pembelajaran.
 * ----------------------------------------------------------------
 * Format: React TypeScript
 */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Laptop, LibraryBig, Wifi } from "lucide-react";

export default function TentangPage() {
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
            PROFIL KAMI
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#243a5e] mb-6">
            Tentang Jurusan RPL
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Rekayasa Perangkat Lunak (RPL) adalah salah satu kompetensi keahlian di SMKN 4 Kendal yang mendalami cara pengembangan perangkat lunak, mulai dari pembuatan, pemeliharaan, hingga manajemen kualitas perangkat lunak.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Sejarah / Deskripsi */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-100 text-[#395886] flex items-center justify-center text-sm">📘</span>
              Fokus Pembelajaran
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Di jurusan ini, siswa dibekali dengan keterampilan coding (pemrograman) mulai dari tingkat dasar hingga lanjut. Fokus utama kami meliputi:
            </p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-[#395886] mt-1">✓</span>
                Pemrograman Web (Frontend & Backend)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#395886] mt-1">✓</span>
                Pemrograman Perangkat Bergerak (Mobile/Android)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#395886] mt-1">✓</span>
                Basis Data (Database Management)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#395886] mt-1">✓</span>
                Desain Antarmuka Pengguna (UI/UX)
              </li>
            </ul>
          </motion.div>

          {/* Visi Misi */}
          <motion.div 
            className="bg-gradient-to-br from-[#395886] to-[#243a5e] rounded-2xl p-8 shadow-lg text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-sm">🎯</span>
              Visi & Misi
            </h2>
            
            <div className="mb-6">
              <h3 className="text-blue-200 font-semibold mb-2 uppercase text-sm tracking-wider">Visi</h3>
              <p className="leading-relaxed">
                Menjadi jurusan yang unggul dalam menghasilkan lulusan berkompeten, berkarakter, dan berdaya saing global di bidang Rekayasa Perangkat Lunak.
              </p>
            </div>
            
            <div>
              <h3 className="text-blue-200 font-semibold mb-2 uppercase text-sm tracking-wider">Misi</h3>
              <ul className="space-y-2 text-sm leading-relaxed list-disc list-inside">
                <li>Menyelenggarakan pendidikan berbasis project based learning.</li>
                <li>Meningkatkan kompetensi siswa sesuai standar industri IT.</li>
                <li>Menjalin kerja sama yang kuat dengan dunia usaha dan industri.</li>
                <li>Membentuk karakter profesional yang disiplin dan inovatif.</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Fasilitas */}
        <motion.div 
          className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">Fasilitas Jurusan</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Fasilitas 1 */}
            <div className="flex flex-col items-center p-4">
                <div className="text-4xl mb-3"><Laptop/></div>
                <h3 className="font-medium text-slate-700 text-sm">Lab Komputer Modern</h3>
              </div>
            
            {/* Fasilitas 2 */}
            <div className="flex flex-col items-center p-4">
                <div className="text-4xl mb-3"><Wifi/></div>
                <h3 className="font-medium text-slate-700 text-sm">Internet Berkecepatan Tinggi</h3>
              </div>

            {/* Fasilitas 3 */}
            <div className="flex flex-col items-center p-4">
                <div className="text-4xl mb-3"><LibraryBig/></div>
                <h3 className="font-medium text-slate-700 text-sm">Perpustakaan Digital</h3>
              </div>

            {/* Fasilitas 4 */}
            <div className="flex flex-col items-center p-4">
                <div className="text-4xl mb-3"><BookOpen/></div>
                <h3 className="font-medium text-slate-700 text-sm">Module Lengkap</h3>
              </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
