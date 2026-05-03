/**
 * Kontak.tsx
 * ----------
 * Preview kontak (versi ringkas) untuk ditampilkan di halaman beranda.
 */
"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { infoKontak } from "@/data/dummy";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Kontak() {
  return (
    <SectionWrapper id="kontak-preview" className="bg-white">
      <div className="bg-gradient-to-br from-[#243a5e] to-[#395886] rounded-3xl overflow-hidden shadow-xl">
        <div className="flex flex-col md:flex-row">
          
          {/* Bagian Teks & Info */}
          <div className="w-full md:w-3/5 p-10 md:p-16 text-white">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Punya Pertanyaan?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-lg">
                Jangan ragu untuk menghubungi kami. Tim kami siap membantu 
                menjawab pertanyaan seputar pendaftaran, kurikulum, atau kerja sama industri.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-white w-8 h-8" />
                  </div>
                  <p className="text-sm md:text-base">{infoKontak.alamat}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="text-white w-8 h-8" />
                  </div>
                  <p className="text-sm md:text-base">{infoKontak.email}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="text-white w-8 h-8" />
                  </div>
                  <p className="text-sm md:text-base">{infoKontak.telepon}</p>
                </div>
              </div>

              <Button href="/kontak" className="border-2 border-white text-white hover:bg-white hover:text-[#243a5e]">
                Hubungi Kami Sekarang
              </Button>
            </motion.div>
          </div>

          {/* Bagian Ilustrasi/Visual */}
          <div className="w-full md:w-2/5 relative min-h-[300px] bg-[#395886]/20 flex items-center justify-center p-8 overflow-hidden">
            {/* Dekorasi Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/20 rounded-full translate-y-1/3 -translate-x-1/4 blur-lg"></div>
            
            <motion.div
              className="relative z-10 w-full max-w-[250px] aspect-square rounded-full bg-gradient-to-tr from-blue-400 to-white/20 p-1 flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-full h-full rounded-full bg-[#243a5e] flex items-center justify-center text-6xl">
                <Mail className="text-white w-32 h-32" />
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </SectionWrapper>
  );
}
