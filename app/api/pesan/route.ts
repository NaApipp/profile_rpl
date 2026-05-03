import { NextResponse } from "next/server";
import db from "@/lib/db";
import { ResultSetHeader } from "mysql2";

// Format date to "DD/MM/YYYY HH:MM:SS"  For Message Date
function formatDateWIB(date: Date) {
  const fmt = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Jakarta",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const parts = fmt.formatToParts(date);
  const map: Record<string, string> = {};
  for (const p of parts) map[p.type] = p.value;

  return `${map.day}/${map.month}/${map.year} ${map.hour}:${map.minute}:${map.second}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nama_lengkap, email, subjek_pesan, pesan } = body;

    // 1. Validasi input
    if (!nama_lengkap || !email || !subjek_pesan || !pesan) {
      return NextResponse.json(
        { message: "Semua field harus diisi" },
        { status: 400 },
      );
    }

    // 3. Simpan ke database (tb_user) menggunakan MySQL
    // id_user biasanya AUTO_INCREMENT di MySQL, jadi tidak perlu dikirim
    const [result] = await db.execute<ResultSetHeader>(
      "INSERT INTO tb_pesan (nama_lengkap, email, subjek_pesan, pesan, created_at) VALUES (?, ?, ?, ?, ?)",
      [nama_lengkap, email, subjek_pesan, pesan, formatDateWIB(new Date())]
    );
    
    return NextResponse.json(
      { 
        message: "Pesan terkirim!",
      },
      { status: 201 },
    );
  } catch (error: any) {

    console.error("Registration API Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}


export async function GET() {
  try {
    const [rows] = await db.execute("SELECT * FROM tb_pesan");
    return NextResponse.json(rows);
  } catch (error: any) {
    console.error("Error fetching messages:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
