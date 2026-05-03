"use client";

/**
 * not-found.tsx
 * ----------
 * Halaman 404 Not Found (custom) untuk halaman web profil RPL SMKN 4 Kendal.
 * 
 * Format: TypeScript
 */

import { motion } from "framer-motion";
import { ArrowLeft, Terminal } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Icon/Illustration Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-12"
        >
          <div className="text-[12rem] md:text-[15rem] font-black text-[#395886]/10 leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative z-10"
            >
              <Terminal className="w-20 h-20 text-[#395886]" />
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#243a5e] mb-4">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-slate-600 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Sepertinya Anda tersesat di direktori yang salah. Halaman yang Anda cari tidak tersedia atau telah dipindahkan.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/"
              className="px-8 items-center gap-2 group"
            >
              <span>Kembali ke Beranda</span>
            </Button>
            
            <button
              onClick={() => window.history.back()}
              className="px-8 py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-bold hover:bg-slate-100 hover:border-slate-300 transition-all flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Halaman Sebelumnya
            </button>
          </div>
        </motion.div>

        {/* Footer Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 text-slate-400 text-sm font-mono"
        >
          {`// error_code: 404_PAGE_NOT_FOUND`}
        </motion.div>
      </div>
    </div>
  );
}
