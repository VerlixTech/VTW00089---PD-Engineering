export type Project = {
  title: string;
  image: string;
  description: string;
  highlights: string[];
  status?: string;
};

export const projectData: Project[] = [
  {
    title: "AL BIDDA TOWER - QATAR",
    image: "/projectIMG01.svg",
    description:
      "Completed AC Ducting Works at Al Bidda Tower, Qatar.",
    highlights: [],
    status: "HANDED OVER",
  },
  {
    title: "Sayura Beach Hotel",
    image: "/Sayura Beach Hotel.svg",
    description:
      "Completed MEP works for a luxury resort, featuring high-efficiency chillers designed for saline coastal environments.",
    highlights: [],
    status: "HANDED OVER",
  },
   {
    title: "Hayleys Nature Next",
    image: "/Hayleys Nature Next.svg",
    description:
      "Ventilation system including evaporative cooling system was designed, supplied, and is being installed at the proposed factory building for Hayleys Agriculture located in the Bingiriya Free Trade Zone.",
    highlights: [],
    status: "HANDED OVER",
  },
  {
    title: "The Anglican Centre - QATAR",
    image: "/successProject02.svg",
    description:
      "Completed fire rated duct works and cold air duct.",
    highlights: [],
    status: "HANDED OVER",
  },
];