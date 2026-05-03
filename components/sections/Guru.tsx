/**
 * Guru.tsx
 * --------
 * Menampilkan profil guru pengajar RPL dalam bentuk card responsif.
 */
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { daftarGuru } from "@/data/guruData";

export default function Guru() {
  return (
    <SectionWrapper id="guru" className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#243a5e] mb-4">
          Tim Pengajar RPL
        </h2>
        <p className="text-slate-600 text-lg">
          Dibimbing langsung oleh praktisi dan pendidik profesional yang 
          berdedikasi di bidang teknologi informasi.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {daftarGuru.map((guru, index) => (
          <motion.div
            key={guru.id}
            className="group h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="relative h-full overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-300 group-hover:border-[#395886]/30 group-hover:shadow-xl flex flex-col items-center text-center">
              {/* Banner Background */}
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-br from-[#f0f4fb] to-[#e0eaf5] group-hover:from-[#395886] group-hover:to-[#243a5e] transition-colors duration-500"></div>
              
              {/* Avatar/Foto */}
              <div className="relative mt-10 w-28 h-28 rounded-full overflow-hidden mb-5 border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-500 bg-white z-10 shrink-0">
                <Image
                  src={guru.foto}
                  alt={`Foto ${guru.nama}`}
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </div>
              
              {/* Info Guru */}
              <div className="px-6 pb-6 flex flex-col flex-grow w-full items-center">
                <h3 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-[#395886] transition-colors line-clamp-2">
                  {guru.nama}
                </h3>
                <p className="text-xs font-semibold text-[#395886] mb-4 bg-[#395886]/10 px-3 py-1.5 rounded-full inline-block tracking-wide">
                  {guru.jabatan}
                </p>
                
                <div className="mt-auto w-full pt-4">
                  <div className="w-full h-px bg-slate-100 mb-3"></div>
                  <span className="block text-[11px] text-slate-400 mb-1 uppercase tracking-wider font-bold">Mata Pelajaran</span>
                  <p className="text-sm font-medium text-slate-600 line-clamp-2">
                    {guru.mapel === "-" || guru.mapel === "=" ? "Produktif RPL" : guru.mapel}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
