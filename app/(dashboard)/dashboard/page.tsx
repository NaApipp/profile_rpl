"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/app/(dashboard)/authProvider";
import { Mail, User, Calendar, MessageSquare } from "lucide-react";

interface Pesan {
  id_pesan: number;
  nama_lengkap: string;
  email: string;
  subjek_pesan: string;
  pesan: string;
  created_at: string;
}

export default function DashboardPage() {
  const { user } = useAuth();
  const [pesan, setPesan] = useState<Pesan[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPesan = async () => {
      try {
        const res = await fetch("/api/pesan");
        if (res.ok) {
          const data = await res.json();
          setPesan(data);
        }
      } catch (error) {
        console.error("Gagal mengambil pesan:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPesan();
  }, []);

  return (
    <div className="p-6 lg:p-10 space-y-8 min-h-screen bg-gray-600">
      {/* Header Welcome */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Dashboard Admin</h1>
          <p className="text-slate-500 mt-2">
            Selamat datang kembali, <span className="font-semibold text-[#395886]">{user?.username}</span>! Kelola pesan masuk dari pengunjung website.
          </p>
        </div>
        <div className="bg-blue-50 px-6 py-3 rounded-2xl border border-blue-100">
          <p className="text-sm text-blue-600 font-medium text-center">Total Pesan</p>
          <p className="text-2xl font-bold text-[#395886] text-center">{pesan.length}</p>
        </div>
      </div>

      {/* Daftar Pesan */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Mail className="w-5 h-5 text-blue-700" />
          Pesan Masuk
        </h2>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-slate-100 border-dashed">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#395886]"></div>
            <p className="text-slate-400 mt-4 font-medium italic">Memuat pesan...</p>
          </div>
        ) : pesan.length > 0 ? (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {pesan.map((item) => (
              <div key={item.id_pesan} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group relative flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#395886]">
                      <User className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 leading-tight"><span className="text-blue-600">Nama Pengirim: </span> {item.nama_lengkap}</h3>
                      <p className="text-sm text-slate-500"><span className="text-blue-600">Email Pengirim: </span> {item.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      <Calendar className="w-3 h-3" />
                      {item.created_at.split(' ')[0]}
                    </div>
                    <div className="text-[10px] text-slate-400">{item.created_at.split(' ')[1]}</div>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-2 flex-grow">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#395886] mb-2 uppercase tracking-tight">
                    <MessageSquare className="w-3.5 h-3.5" />
                    {item.subjek_pesan}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-wrap">
                    {item.pesan}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-slate-100 border-dashed text-center px-6">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-8 h-8 text-slate-300" />
            </div>
            <h3 className="font-bold text-slate-700">Belum Ada Pesan</h3>
            <p className="text-slate-400 text-sm mt-1">Saat ini belum ada pesan masuk dari pengunjung website.</p>
          </div>
        )}
      </div>
    </div>
  );
}