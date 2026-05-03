/**
 * Galeri.tsx
 * ----------
 * Menampilkan grid foto kegiatan dengan fitur lightbox saat foto diklik.
 */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { galeri } from "@/data/galleryData";

export default function Galeri() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Fungsi navigasi lightbox
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex !== null) {
      setActiveIndex(activeIndex === 0 ? galeri.length - 1 : activeIndex - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex !== null) {
      setActiveIndex((activeIndex + 1) % galeri.length);
    }
  };

  // Efek cegah scroll saat lightbox terbuka
  React.useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeIndex]);

  return (
    <SectionWrapper id="galeri" className="bg-blue-50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#243a5e] mb-4">
          Galeri Kegiatan
        </h2>
        <p className="text-slate-600 text-lg">
          Intip keseruan aktivitas belajar mengajar, praktikum, dan kegiatan 
          siswa siswi RPL SMKN 4 Kendal.
        </p>
      </div>

      {/* Grid Galeri */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galeri.map((foto, index) => (
          <motion.div
            key={foto.id}
            className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={foto.src}
              alt={foto.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#243a5e]/80 via-[#243a5e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                Lihat Foto
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4"
            onClick={() => setActiveIndex(null)}
          >
            <motion.div 
              className="relative w-full max-w-5xl aspect-[4/3] md:aspect-video rounded-xl overflow-hidden bg-slate-900 shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Cegah tutup saat klik konten
            >
              <Image
                src={galeri[activeIndex].src}
                alt={galeri[activeIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
              
              {/* Keterangan Bawah */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 pt-12 text-white">
                <p className="text-lg font-medium">{galeri[activeIndex].caption}</p>
                <p className="text-sm text-slate-300 mt-1">
                  Foto {activeIndex + 1} dari {galeri.length}
                </p>
              </div>

              {/* Tombol Close */}
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-[#395886] transition-colors z-10"
                onClick={() => setActiveIndex(null)}
                aria-label="Tutup lightbox"
              >
                ✕
              </button>

              {/* Navigasi Prev/Next */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-[#395886] transition-colors z-10"
                onClick={handlePrev}
                aria-label="Foto sebelumnya"
              >
                ←
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-[#395886] transition-colors z-10"
                onClick={handleNext}
                aria-label="Foto selanjutnya"
              >
                →
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
