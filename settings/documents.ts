import { Paths } from "@/lib/pageroutes";

export const Documents: Paths[] = [
  {
    title: "Pendahuluan",
    href: "/introduction",
    heading: "Ankala Document",
    items: [
      {
        title: "Deskripsi Proyek",
        href: "/deskripsi",
      },
      {
        title: "Teknologi yang digunakan",
        href: "/teknologi",
      },
      {
        title: "Keterkaitan dengan Mata Kuliah",
        href: "/keterkaitan",
      },
    ],
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
    title: "Stakeholder",
    href: "/navigation",
    heading: "Stakeholder Requirement",
  },
  {
    spacer: true,
  },
  {
    title: "System Requirement ",
    href: "/structure",
    items: [
      {
        title: "Deeper",
        href: "/deeper",
        items : [
          {
            title: "Even deeper",
            href: "/even-deeper",
          },
        ]
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Markup",
    href: "/markup",
    heading: "Components",
    items: [
      {
        title: "Cards",
        href: "/cards",
      },
      {
        title: "Diagrams",
        href: "/diagrams",
      },
      {
        title: "Filetree",
        href: "/filetree",
      },
      {
        title: "Lists",
        href: "/lists",
      },
      {
        title: "Maths",
        href: "/maths",
      },
      {
        title: "Notes",
        href: "/notes",
      },
      {
        title: "Steps",
        href: "/steps",
      },
      {
        title: "Table",
        href: "/table",
      },
      {
        title: "Tabs",
        href: "/tabs",
      },
    ],
  },
];