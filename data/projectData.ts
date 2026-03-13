export type Project = {
  title: string;
  image: string;
  description: string;
  highlights: string[];
  status?: string;
};

export const projectData: Project[] = [
  {
    title: "COMPLETED AC DUCTING WORKS AL BIDDA TOWER - QATAR",
    image: "/projectIMG01.svg",
    description:
      "Comprehensive MEP solutions for a luxury resort, featuring high-efficiency chillers designed for saline coastal environments.",
    highlights: ["200+ Guest Rooms MEP", "Industrial Kitchen Ventilation"],
  },
  {
    title: "Sayura Beach Hotel",
    image: "/Sayura Beach Hotel.svg",
    description:
      "Comprehensive MEP solutions for a luxury resort, featuring high-efficiency chillers designed for saline coastal environments.",
    highlights: ["200+ Guest Rooms MEP", "Industrial Kitchen Ventilation"],
    status: "HANDED OVER",
  },
   {
    title: "Hayleys Nature Next",
    image: "/projectIMG01.svg",
    description:
      "Ventilation system including evaporative cooling system was designed, supplied, and is being installed at the proposed factory building for Hayleys Agriculture located in the Bingiriya Free Trade Zone.",
    highlights: ["Engineering Design", "Equipment Supply","Professional Installation","Systematic Testing and Commissioning"],
  },
  {
    title: "Sayura Beach Hotel",
    image: "/Sayura Beach Hotel.svg",
    description:
      "Comprehensive MEP solutions for a luxury resort, featuring high-efficiency chillers designed for saline coastal environments.",
    highlights: ["200+ Guest Rooms MEP", "Industrial Kitchen Ventilation"],
    status: "HANDED OVER",
  },
];