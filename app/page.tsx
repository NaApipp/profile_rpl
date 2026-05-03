/**
 * page.tsx (Beranda)
 * ------------------
 * Halaman utama website profil jurusan RPL.
 * Menggabungkan semua section menjadi satu halaman utuh.
 */
import React from "react";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import KurikulumPreview from "@/components/sections/KurikulumPreview";
import Galeri from "@/components/sections/Galeri";
import Guru from "@/components/sections/Guru";
import Berita from "@/components/sections/Berita";
import Kontak from "@/components/sections/Kontak";

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <KurikulumPreview />
      <Galeri />
      <Guru />
      <Berita />
      <Kontak />
    </>
  );
}
