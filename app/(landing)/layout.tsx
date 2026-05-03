/**
 * layout.tsx
 * ----------
 * Layout utama untuk halaman landing website RPL SMKN 4 Kendal.
 * ----------------------------------------------------------------
 * 
 * Format: React TypeScript
 */

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </>
  );
}
