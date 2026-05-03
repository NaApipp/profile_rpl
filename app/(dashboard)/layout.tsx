
/**
 * layout.tsx
 * ----------
 * Layout utama untuk halaman private dashboard RPL SMKN 4 Kendal.
 * ----------------------------------------------------------------
 * 
 * Format: React TypeScript
 */

import { AuthProvider } from "./authProvider";

import type { Metadata } from "next";

// Import Component
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

export const metadata: Metadata = {
  title: "RPL Dashboard",
  description: "Access Dashboard RPL (Private)",
};

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="flex h-screen bg-gray-50/50 dark:bg-gray-950">
        <Sidebar />
        <main className="flex-1 overflow-y-auto pt-16 lg:pt-0">
          {children}
        </main>
      </div>
    </AuthProvider>
  );
}
