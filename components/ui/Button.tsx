/**
 * Button.tsx
 * ----------
 * Komponen tombol reusable. Bisa dirender sebagai <button> atau <Link> (jika ada href).
 * Mendukung beberapa varian dan ukuran.
 */
"use client";

import React from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  // Base classes
  const baseClass = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#395886] focus:ring-offset-2";
  
  // Varian warna
  const variants = {
    primary: "bg-[#395886] text-white hover:bg-[#243a5e]",
    outline: "border-2 border-[#395886] text-[#395886] hover:bg-[#395886] hover:text-white",
    ghost: "text-[#395886] hover:bg-[#395886]/10",
  };
  
  // Ukuran
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  const combinedClasses = `${baseClass} ${variants[variant]} ${sizes[size]} ${className}`;
  
  // Jika ada href, render sebagai Link
  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          {children}
        </motion.div>
      </Link>
    );
  }
  
  // Jika tidak, render sebagai button standar
  return (
    <motion.button 
      whileHover={{ scale: 1.02 }} 
      whileTap={{ scale: 0.98 }}
      className={combinedClasses}
      {...props}
    >
      {children}
    </motion.button>
  );
}
