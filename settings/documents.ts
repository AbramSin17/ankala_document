import { Paths } from "@/lib/pageroutes";

export const Documents: Paths[] = [
  {
    title: "Pendahuluan",
    href: "/pendahuluan",
    heading: "Ankala Document",
  },
  {
    spacer: true,
  },
  {
    title: "Analisis Kebutuhan",
    href: "/analisis",
    heading: "Analisis dan Desain Perangkat Lunak",
    items: [
      {
        title: "Bussines Requirement",
        href: "/bussiness",
      },
      {
        title: "Stakeholder Requirement",
        href: "/stakeholder",
      },
      {
        title: "System requirement",
        href: "/system",
      },
      {
        title: "Software requirement",
        href: "/software",
      },
    ],
  },
  {
    title: "Diagram",
    href: "/diagram",
    items: [
      {
        title: "Usecase Diagram",
        href: "/usecase",
      },
      {
        title: "Class Diagram",
        href: "/class",
      },
      {
        title: "Flowchart",
        href: "/flowchart",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Dokumen Desain",
    href: "/desain",
    heading: "Perancangan Desain Antarmuka",
    items: [
      {
        title: "Sketsa Awal",
        href: "/sketsa",
      },
      {
        title: "Wireframe",
        href: "/wireframe",
      },
      {
        title: "Userflow",
        href: "/userflow",
      },
      {
        title: "Prototipe",
        href: "/prototipe",
      },
    ],
  },
  {
    title: "Implementasi Desain",
    href: "/implementasi",
  },
  {
    spacer: true,
  },
  {
    title: "Fitur Utama",
    href: "/fitur",
    heading: "Pengembangan Aplikasi",
  },
  {
    title: "Struktur Basis Data",
    href: "/basis",
  },
  {
    title: "Metode SDLC",
    href: "/metode",
  },
  {
    spacer: true,
  },
  {
    title: "Dokumentasi Penggunaan Website",
    href: "/penggunaan",
  },
  {
    spacer: true,
  },
  {
    title: "Metode Pengembangan Perangkat Lunak",
    href: "/pengembangan",
  },
  {
    spacer: true,
  },
  {
    title: "Kesimpulan dan Saran",
    href: "/kesimpulan",
    heading: "Kesimpulan dan Saran",
    items: [
      {
        title: "Evaluasi Proyek",
        href: "/evaluasi",
      },
      {
        title: "Rekomendasi Pengembangan Selanjutnya",
        href: "/berkelanjutan",
      },
    ],
  },
];