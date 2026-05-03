/**
 * Footer.tsx
 * ----------
 * Komponen footer website RPL SMKN 4 Kendal. Berisi informasi kontak singkat,
 * link navigasi cepat, dan tautan sosial media sekolah.
 * 
 * Digunakan pada main route seperti /, /tentang, /kurikulum, dan /kontak.
 * 
 * Format: React TypeScript
 */
import React from "react";
import Link from "next/link";
import { infoKontak, menuNavbar } from "@/data/dummy";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#243a5e] text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Kolom 1: Info Sekolah */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded flex items-center justify-center text-white font-bold">
                <img src="/asset/image/logo/logo-skanifo.png" alt="Logo Skanifo" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                RPL SMKN 4 Kendal
              </span>
            </div>
            <p className="mb-4 text-sm leading-relaxed">
              Mencetak generasi developer muda yang kompeten, kreatif, dan siap bersaing di industri teknologi digital global.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <p className="flex items-start gap-2">
                <span className="mt-1">📍</span> {infoKontak.alamat}
              </p>
              <p className="flex items-center gap-2">
                <span>📧</span> {infoKontak.email}
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span> {infoKontak.telepon}
              </p>
            </div>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Navigasi Cepat
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#5b7fb8] rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              {menuNavbar.map((item) => (
                <li key={item.path}>
                  <Link 
                    href={item.path}
                    className="hover:text-white hover:translate-x-2 transition-all inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Sosial Media */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Media Sosial
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#5b7fb8] rounded-full"></span>
            </h3>
            <p className="text-sm mb-4">
              Ikuti kegiatan kami dan dapatkan informasi terbaru seputar jurusan RPL.
            </p>
            <div className="flex gap-4">
              {/* Instagram Link  */}
              <a 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 cursor-pointer h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#5b7fb8] hover:text-white transition-colors overflow-hidden p-2.5"
                  title="Instagram"
                >
                  <img src="asset/icon-sosmed/instagram-icon.png" alt="Instargram Logo" className="w-full h-full object-contain" />
                </a>

                {/* Youtube Link */}
                <a 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 cursor-pointer h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#5b7fb8] hover:text-white transition-colors overflow-hidden p-2.5"
                  title="Youtube"
                >
                  <img src="asset/icon-sosmed/youtube-icon.png" alt="Youtube Logo" className="w-full h-full object-contain" />
                </a>

                {/* Facebook Link */}
                <a 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 cursor-pointer h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#5b7fb8] hover:text-white transition-colors overflow-hidden p-2.5"
                  title="Facebook"
                >
                  <img src="asset/icon-sosmed/facebook-icon.png" alt="Facebook Logo" className="w-full h-full object-contain" />
                </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} Jurusan RPL SMKN 4 Kendal. All rights reserved.</p>
          <p>
            Dibuat dengan ❤️ oleh Alumni RPL
          </p>
        </div>
      </div>
    </footer>
  );
}
