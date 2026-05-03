/**
 * page.tsx (Kontak)
 * -----------------
 * Halaman kontak dengan form dan informasi alamat sekolah.
 * 
 * 
 */
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { infoKontak } from "@/data/dummy";
import { Mail, Phone, MapPin } from "lucide-react";

export default function KontakPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Validasi sederhana (hanya UI)
    const errors: Record<string, boolean> = {};
    let hasError = false;

    ["nama", "email", "subjek", "pesan"].forEach((field) => {
      if (!formData.get(field)) {
        errors[field] = true;
        hasError = true;
      }
    });

    setFormErrors(errors);

    if (!hasError) {
      setIsSubmitting(true);

      try {
        const response = await fetch("/api/pesan", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nama_lengkap: formData.get("nama"),
            email: formData.get("email"),
            subjek_pesan: formData.get("subjek"),
            pesan: formData.get("pesan"),
          }),
        });

        const data = await response.json();

        if (response.ok) {
          setMessage({ type: "success", text: "Pesan berhasil terkirim!" });
          form.reset();
        } else {
          setMessage({
            type: "error",
            text:
              "Gagal mengirim pesan: " + (data.message || "Terjadi kesalahan."),
          });
        }
      } catch (error) {
        console.error("Error sending message:", error);
        alert(
          "Gagal mengirim pesan. Silakan periksa koneksi Anda dan coba lagi.",
        );
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block py-1 px-4 rounded-full bg-[#395886]/10 text-[#395886] text-sm font-bold mb-4">
            HUBUNGI KAMI
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#243a5e] mb-6">
            Kontak Jurusan RPL
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Punya pertanyaan seputar pendaftaran, kurikulum, atau ingin menjalin
            kerja sama industri? Silakan hubungi kami melalui form di bawah ini.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Info Kontak & Maps */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Informasi Kontak
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#395886] flex items-center justify-center text-xl shrink-0">
                    <MapPin />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">Alamat</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {infoKontak.alamat}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#395886] flex items-center justify-center text-xl shrink-0">
                    <Mail />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">Email</h3>
                    <p className="text-slate-600">{infoKontak.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#395886] flex items-center justify-center text-xl shrink-0">
                    <Phone />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">Telepon</h3>
                    <p className="text-slate-600">{infoKontak.telepon}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <h3 className="font-bold text-slate-800 mb-4">Media Sosial</h3>
                <div className="flex gap-4">
                  {infoKontak.sosmed.map((s, index) => (
                    <a
                      key={index}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#395886] transition-colors overflow-hidden p-2.5 group"
                      title={s.platform}
                    >
                      <img
                        src={s.icon}
                        alt={s.platform}
                        className="w-full h-full object-contain opacity-60 group-hover:opacity-100 "
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Maps Placeholder */}
            <div className="bg-slate-200 rounded-2xl h-64 overflow-hidden relative shadow-sm border border-slate-100">
              {/* Iframe Google Maps (Menggunakan koordinat dummy untuk preview) */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5298675353133!2d110.22777177442036!3d-6.946648368004416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e705d9c2a3b439b%3A0xcd3827ba60db3c5!2sSMK%20Negeri%204%20Kendal!5e0!3m2!1sid!2sid!4v1777781338806!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="Peta Lokasi SMKN 4 Kendal"
                className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </motion.div>

          {/* Form Kontak */}
          <motion.div
            className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Kirim Pesan
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label
                  htmlFor="nama"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-colors ${formErrors.nama ? "border-red-500 focus:ring-red-200 bg-red-50" : "border-slate-200 focus:border-[#395886] focus:ring-[#395886]/20 bg-slate-50 focus:bg-white"}`}
                  placeholder="Masukkan nama Anda"
                />
                {formErrors.nama && (
                  <p className="text-red-500 text-xs mt-1">Nama wajib diisi</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Alamat Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-colors ${formErrors.email ? "border-red-500 focus:ring-red-200 bg-red-50" : "border-slate-200 focus:border-[#395886] focus:ring-[#395886]/20 bg-slate-50 focus:bg-white"}`}
                  placeholder="contoh@email.com"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-xs mt-1">Email wajib diisi</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="subjek"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Subjek Pesan
                </label>
                <input
                  type="text"
                  id="subjek"
                  name="subjek"
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-colors ${formErrors.subjek ? "border-red-500 focus:ring-red-200 bg-red-50" : "border-slate-200 focus:border-[#395886] focus:ring-[#395886]/20 bg-slate-50 focus:bg-white"}`}
                  placeholder="Tentang apa pesan Anda?"
                />
                {formErrors.subjek && (
                  <p className="text-red-500 text-xs mt-1">
                    Subjek wajib diisi
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="pesan"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Isi Pesan
                </label>
                <textarea
                  id="pesan"
                  name="pesan"
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-colors resize-none ${formErrors.pesan ? "border-red-500 focus:ring-red-200 bg-red-50" : "border-slate-200 focus:border-[#395886] focus:ring-[#395886]/20 bg-slate-50 focus:bg-white"}`}
                  placeholder="Tuliskan pesan Anda di sini..."
                ></textarea>
                {formErrors.pesan && (
                  <p className="text-red-500 text-xs mt-1">Pesan wajib diisi</p>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full relative"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Mengirim...
                  </span>
                ) : (
                  "Kirim Pesan"
                )}
              </Button>

              {/* Message */}
              {message && (
                <div
                  className={`rounded-lg p-4 text-sm ${
                    message.type === "success"
                      ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                  }`}
                >
                  {message.text}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
