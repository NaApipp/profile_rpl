
export interface HighlightItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface InfoKontak {
  alamat: string;
  email: string;
  telepon: string;
  sosmed: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

export interface MenuItem {
  name: string;
  path: string;
}

export const highlights: HighlightItem[] = [
  {
    id: 1,
    icon: "/asset/svg/highlight/building.svg",
    title: "Industri-Ready",
    description:
      "Kurikulum disesuaikan dengan kebutuhan industri teknologi terkini.",
  },
  {
    id: 2,
    icon: "/asset/svg/highlight/square-chart-gantt.svg",
    title: "Project Based Learning",
    description:
      "Belajar langsung dengan mengerjakan proyek nyata dari sekolah.",
  },
  {
    id: 3,
    icon: "/asset/svg/highlight/shield-check.svg",
    title: "Sertifikasi",
    description:
      "Lulusan dibekali sertifikasi kompetensi dari BNSP atau lembaga terkait.",
  },
  {
    id: 4,
    icon: "/asset/svg/highlight/handshake.svg",
    title: "Komunikasi Aktif",
    description:
      "Belajar dengan tekun dan береaksi aktif dalam setiap pembelajaran.",
  },
];


export const infoKontak: InfoKontak = {
  alamat: "Gedung A, Jl. Soekarno-Hatta, Brangsong Utara, Brangsong, Kec. Brangsong, Kabupaten Kendal, Jawa Tengah 51318",
  email: "smkn04kendal@gmail.com",
  telepon: "08112969000",
  sosmed: [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/skanifohits_",
      icon: "/asset/icon-sosmed/instagram-icon.png",
    },
    {
      platform: "YouTube",
      url: "https://www.youtube.com/@smkn4kendalofficial533",
      icon: "/asset/icon-sosmed/youtube-icon.png",
    },
    {
      platform: "Facebook",
      url: "https://www.facebook.com/skanifoofficial",
      icon: "/asset/icon-sosmed/facebook-icon.png",
    }
  ],
};

export const menuNavbar: MenuItem[] = [
  { name: "Beranda", path: "/" },
  { name: "Tentang", path: "/tentang" },
  { name: "Kurikulum", path: "/kurikulum" },
  { name: "Kontak", path: "/kontak" },
];
