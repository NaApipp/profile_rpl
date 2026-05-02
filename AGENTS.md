# 🤖 AGENTS.md — Panduan untuk AI Coding Agent

> File ini adalah panduan resmi untuk AI coding agent (seperti Cursor, GitHub Copilot,
> Claude Code, dll) yang bekerja di project ini.
> Baca seluruh file ini sebelum membuat, mengedit, atau menghapus kode apapun.

---

## 📌 Tentang Project

| Info                     | Detail                                   |
| ------------------------ | ---------------------------------------- |
| **Nama Project**         | Website Profil Jurusan RPL SMKN 4 Kendal |
| **Framework**            | Next.js 14+ (App Router)                 |
| **Bahasa**               | TypeScript                               |
| **Styling**              | Tailwind CSS                             |
| **Animasi**              | Framer Motion                            |
| **Target pengguna kode** | Siswa & guru yang masih belajar          |

---

## 🎨 Desain System (WAJIB DIIKUTI)

### Font

- Font yang digunakan: **Inter** atau **Poppins** (Google Fonts via `next/font`)
- Font didefinisikan di `app/layout.tsx` dan disebarkan lewat CSS variable
- **Jangan** import Google Fonts lewat `<link>` di HTML — gunakan `next/font/google`

### Animasi (Framer Motion)

Gunakan pola animasi yang konsisten di seluruh project:

```tsx
// ✅ Pola animasi fade-in dari bawah (standar project ini)
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ✅ Untuk animasi bertahap (stagger children)
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
```

- Gunakan `useInView` dari Framer Motion untuk trigger animasi saat elemen masuk viewport
- Semua animasi harus **halus dan tidak mengganggu** — duration antara 0.4s–0.6s
- Jangan membuat animasi yang terlalu cepat (< 0.3s) atau terlalu lambat (> 1s)

---

## 📋 Aturan Penulisan Kode

### 1. Komentar Wajib

Setiap file WAJIB memiliki komentar header di baris pertama:

```tsx
/**
 * NamaFile.tsx
 * -----------
 * Penjelasan singkat apa fungsi komponen/file ini.
 * Contoh: Komponen ini menampilkan grid foto galeri dengan lightbox modal.
 *
 * Cara pakai: <NamaFile propA="..." propB={...} />
 */
```

Tambahkan komentar inline untuk bagian logika yang tidak langsung jelas:

```tsx
// Simpan index foto yang sedang dibuka di lightbox (null = lightbox tertutup)
const [activeIndex, setActiveIndex] = useState<number | null>(null);
```

### 2. TypeScript — Jangan Gunakan `any`

Selalu definisikan tipe data secara eksplisit:

```tsx
// ❌ JANGAN
const handleClick = (data: any) => { ... }

// ✅ BENAR — definisikan interface-nya
interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}
const handleClick = (item: GalleryItem) => { ... }
```

Semua interface/type untuk data → definisikan di `data/dummy.ts` lalu export.

### 3. `"use client"` — Gunakan Seperlunya

Tambahkan `"use client"` HANYA jika komponen membutuhkan:

- `useState` atau `useEffect`
- Event handler (onClick, onChange, dll)
- Framer Motion hooks (`useInView`, `useAnimation`)
- `usePathname` dari `next/navigation`

Komponen yang hanya menampilkan data statis → **tidak perlu** `"use client"`.

### 4. Penamaan

| Yang dinamai      | Konvensi   | Contoh                      |
| ----------------- | ---------- | --------------------------- |
| Komponen React    | PascalCase | `HeroSection`, `GuruCard`   |
| File komponen     | PascalCase | `Hero.tsx`, `Navbar.tsx`    |
| Fungsi & variabel | camelCase  | `handleClick`, `isMenuOpen` |
| Interface/Type    | PascalCase | `GalleryItem`, `GuruData`   |
| CSS class custom  | kebab-case | `hero-pattern`, `nav-link`  |

---

## 📦 Data & Konten

### Sumber Kebenaran Tunggal: `data/dummy.ts`

**SEMUA konten teks dan data** yang ditampilkan di website harus bersumber dari
`data/dummy.ts`. Jangan hardcode string konten langsung di dalam komponen.

```tsx
// ❌ JANGAN — hardcode konten di komponen
<h2>Budi Santoso, S.Kom</h2>
<p>Guru Pemrograman Web</p>

// ✅ BENAR — ambil dari data/dummy.ts
import { daftarGuru } from "@/data/dummy";
<h2>{guru.nama}</h2>
<p>{guru.mapel}</p>
```

### Struktur Data di `dummy.ts`

File ini harus mengekspor data-data berikut:

```ts
export const highlights: HighlightItem[]; // 4 keunggulan jurusan
export const teknologi: TeknologiItem[]; // 8 teknologi yang dipelajari
export const galeri: GaleriItem[]; // 6 foto kegiatan
export const daftarGuru: GuruItem[]; // 4 profil guru
export const berita: BeritaItem[]; // kosong, siap diisi nanti
export const infoKontak: InfoKontak; // alamat, email, telp, sosmed
export const menuNavbar: MenuItem[]; // item navigasi
```

---

## 🧩 Panduan Per Komponen

### Navbar

- Sticky (`position: sticky`, `top: 0`) dengan `z-index` tinggi
- Tambah shadow saat user scroll ke bawah (gunakan `useEffect` + `scroll` event)
- Menu mobile: toggle dengan `useState`, animasi dengan Framer Motion
- Link yang aktif (sesuai path saat ini): gunakan `usePathname` dari `next/navigation`
- Smooth scroll hanya untuk link anchor (`#section`) di halaman Beranda

### SectionWrapper

- Komponen ini adalah **wrapper wajib** untuk semua section
- Berikan `id` prop untuk target anchor link dari navbar
- Animasi fade-in sudah built-in — tidak perlu tambahkan animasi lagi di section child

### Galeri + Lightbox

- State lightbox: `useState<number | null>(null)` — menyimpan index foto aktif
- Saat lightbox terbuka: `overflow-hidden` di body agar tidak bisa scroll
- Navigasi prev/next: hitung index dengan modulo agar memutar balik
- Tutup lightbox saat klik overlay (bukan saat klik foto)
- Gunakan `AnimatePresence` dari Framer Motion untuk animasi buka/tutup modal

### Button

- Komponen `Button` mendukung dua mode: sebagai `<button>` dan sebagai `<a>`/`Link`
- Jika prop `href` diisi → render sebagai `next/link`
- Jika tidak ada `href` → render sebagai `<button>` biasa

---

## ⛔ Hal yang Dilarang

| ❌ Dilarang                                | ✅ Gantinya                        |
| ------------------------------------------ | ---------------------------------- |
| `<img src="...">`                          | `<Image>` dari `next/image`        |
| `import ... from 'react'` untuk hooks saja | `import { useState } from 'react'` |
| Hardcode warna hex di className            | Gunakan class Tailwind dari config |
| Hardcode konten teks di komponen           | Ambil dari `data/dummy.ts`         |
| `type X = any`                             | Definisikan interface yang proper  |
| Library UI eksternal (MUI, Shadcn, dll)    | Tailwind CSS + komponen custom     |
| `<link>` Google Fonts di HTML              | `next/font/google`                 |
| Animasi durasi < 0.3s atau > 1s            | Duration 0.4s–0.6s                 |

---

## 🚀 Cara Menjalankan Project

```bash
# 1. Install semua dependencies
npm install

# 2. Jalankan development server
npm run dev

# 3. Buka di browser
# http://localhost:3000
```

---

## ✏️ Cara Mengganti Konten Dummy

1. Buka file `data/dummy.ts`
2. Cari array atau objek yang ingin diubah (nama sudah deskriptif)
3. Ganti nilai string/URL sesuai data asli
4. Simpan — website otomatis update (hot reload saat dev)

Untuk mengganti foto galeri, ubah URL `src` di array `galeri`.
Untuk mengganti foto guru, ubah URL di field `foto` di array `daftarGuru`.

---

## 📞 Kontak & Kontribusi

Project ini dikelola oleh jurusan **Rekayasa Perangkat Lunak SMKN 4 Kendal**.
Jika ada pertanyaan teknis, hubungi guru pembimbing jurusan RPL.

---

_File ini dibuat sebagai panduan pengembangan. Update file ini jika ada perubahan
arsitektur atau konvensi yang disepakati bersama._
