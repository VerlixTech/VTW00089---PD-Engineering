export type NewsItem = {
  category: string;
  date: string;
  title: string;
  image: string;
  imageCaption?: string;
  excerpt: string;
  fullContent: string;
  slug: string;
};

export const newsData: NewsItem[] = [
  {
    category: "Projects",
    date: "October 24, 2023",
    title: "Hayleys nature next (PVT) LTD ",
    image: "/News01.svg",
    imageCaption: "PROJECT: Hayleys nature next (PVT) LTD",
    excerpt:
      "he complete ventilation system including evaporative cooling system was designed, supplied, and is being installed at the proposed factory building for Hayleys Agriculture located in the Bingiriya Free Trade Zone.",
    fullContent:
      "The project included comprehensive engineering design, equipment supply, professional installation, and systematic testing and commissioning to ensure optimal airflow, thermal comfort, and compliance with industrial ventilation standards.",
    slug: "Hayleys nature next (PVT) LTD",
  },

];