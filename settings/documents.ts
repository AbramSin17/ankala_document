import { Paths } from "@/lib/pageroutes";

export const Documents: Paths[] = [
  {
    title: "Bussines Document",
    href: "/introduction",
    heading: "Ankala Document",
    items: [
      {
        title: "Fungsional & Kebutuhan Bisnis",
        href: "/fungsional",
      },
      {
        title: "Usability & Performance Requirement",
        href: "/usability",
      },
    ],
  },
  {
    spacer: true,
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