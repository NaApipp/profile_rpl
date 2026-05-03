/**
 * layout.tsx
 * ----------
 * Layout utama website. Memuat Navbar, konten halaman, dan Footer.
 * Juga mendefinisikan font global dan metadata SEO dasar.
 */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Menggunakan font Inter dari Google Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Metadata dasar untuk SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://example.sch.id"),
  // Judul default website (dipakai kalau halaman tidak override title)
  title: {
    default: "RPL Skanifo",
    template: "%s | RPL Skanifo", // Format judul untuk tiap halaman
  },

  // Deskripsi website (penting untuk SEO)
  description:
    "Portal resmi Program Keahlian Rekayasa Perangkat Lunak SMKN 4 Kendal. Informasi, berita, dan publikasi karya siswa dan guru RPL.",

  // Keyword untuk SEO (opsional, tidak terlalu berpengaruh di search engine modern)
  keywords: [
    "rekayasa perangkat lunak",
    "rpl smkn 4 kendal",
    "smkn 4 kendal",
    "rpl",
    "rekayasa perangkat lunak smkn 4 kendal",
    "rpl kendal",
    "smkn 4 kendal rpl",
    "rpl smk 4 kendal",
    "smk 4 kendal rpl",
  ],

  category: "schooll",

  // Informasi pembuat
  authors: [{ name: "Nabil Arif", url: "https://appsporto.vercel.app" }],
  creator: "Nabil Arif",

  // Favicon dan icon untuk berbagai device
  icons: {
    icon: [
      { url: "/asset/image/logo/logo-rpl.png" }, // default favicon
      { url: "/asset/image/icon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/asset/image/icon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/asset/image/icon/apple-touch-icon.png", // icon untuk iOS
  },

  // Open Graph (untuk share ke Facebook, LinkedIn, dll)
  openGraph: {
    title: "RPL Skanifo", // Judul saat di-share
    description: "Portal resmi Program Keahlian Rekayasa Perangkat Lunak SMKN 4 Kendal. Informasi, berita, dan publikasi karya siswa dan guru RPL.", // Deskripsi saat di-share
    url: "https://example.sch.id", // URL utama
    siteName: "RPL Skanifo",
    images: [
      {
        url: "/icon/og-image.png", // Gambar preview
        width: 1200,
        height: 630,
        alt: "Preview Image",
      },
    ],
    locale: "id_ID", // Bahasa / region
    type: "website",
  },


  // Robots (mengatur indexing search engine)
  // robots: {
  //   index: true, // boleh di-index
  //   follow: true, // boleh follow link
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     "max-video-preview": -1,
  //     "max-image-preview": "large",
  //     "max-snippet": -1,
  //   },
  // },

  // Metadata untuk verifikasi (Google Search Console, dll)
  // verification: {
  //   google: "google-site-verification-code",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans bg-[#f0f4fb] text-[#243a5e] overflow-x-hidden min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
