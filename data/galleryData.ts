export interface GaleriItem {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

export const galeri: GaleriItem[] = [
  {
    id: 1,
    src: "/asset/image/gallery/tutor-sebaya-1.JPG",
    alt: "Tutor Sebaya Materi Design Grafis",
    caption: "Kegiatan tutor sebaya materi design grafis bersama alumni RPL",
  },
  {
    id: 2,
    src: "/asset/image/gallery/tutor-sebaya-2.JPG",
    alt: "Sharing Session Materi Peran yang ada di industri IT",
    caption: "Sharing Session Materi Peran yang ada di industri IT bersama alumni RPL",
  },
  {
    id: 3,
    src: "/asset/image/gallery/live-code-porto.JPG",
    alt: "Live Coding Membuat portofolio sederhana",
    caption: "Live Coding Membuat Portofolio sederhana menggunakan html dan css bersama alumni RPL",
  },
];