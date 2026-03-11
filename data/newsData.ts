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
    category: "Company Updates",
    date: "October 24, 2023",
    title: "PD Engineering & Academy Expands Operations in Qatar-01",
    image: "/News01.svg",
    imageCaption: "PROJECT: DOHA TOWER PHASE II",
    excerpt:
      "The new expansion includes a dedicated regional support center and an enhanced technical training wing under our PD Academy division. With Qatar's infrastructure growing at an exponential rate, our presence ensures that local projects receive the high-precision engineering standards PD is known for.",
    fullContent:
      "Our Qatar operations now include a fully equipped training facility capable of hosting over 50 engineers simultaneously. The regional support center provides rapid on-site technical assistance to clients across Doha and surrounding areas, reducing project downtime and ensuring compliance with Qatar's stringent MEP regulations. This expansion reinforces our long-term commitment to the region.",
    slug: "pd-engineering-expands-qatar",
  },
  {
    category: "Training Programs",
    date: "November 10, 2023",
    title: "PD Engineering & Academy Expands Operations in Qatar-02",
    image: "/News01.svg",
    excerpt:
      "PD Academy introduces a new modular HVAC training framework designed by industry experts to meet the growing demand for certified HVAC professionals across the region.",
    fullContent:
      "The 2024 curriculum spans ten comprehensive modules covering everything from fundamental thermodynamics to advanced VRF system design. Participants who complete the program will receive internationally recognized certifications, opening doors to opportunities in Qatar, the UAE, and Sri Lanka's rapidly expanding construction sector.",
    slug: "new-hvac-training-module-2024",
  },
  {
    category: "Projects",
    date: "December 5, 2023",
    title: "PD Engineering & Academy Expands Operations in Qatar-03",
    image: "/News01.svg",
    imageCaption: "PROJECT: SAYURA BEACH HOTEL",
    excerpt:
      "PD Engineering successfully completed the full MEP fit-out for Sayura Beach Hotel, delivering high-efficiency chiller systems and industrial kitchen ventilation solutions tailored for coastal environments.",
    fullContent:
      "The project presented unique engineering challenges due to its proximity to the ocean, requiring corrosion-resistant materials and specialized installation techniques. Our team delivered the project ahead of schedule, and the hotel has since reported a 22% reduction in energy consumption compared to similar properties, a testament to our commitment to sustainable engineering.",
    slug: "sayura-beach-hotel-completion",
  },
  {
    category: "Projects",
    date: "December 5, 2023",
    title: "PD Engineering & Academy Expands Operations in Qatar-04",
    image: "/News01.svg",
    imageCaption: "PROJECT: SAYURA BEACH HOTEL",
    excerpt:
      "PD Engineering successfully completed the full MEP fit-out for Sayura Beach Hotel, delivering high-efficiency chiller systems and industrial kitchen ventilation solutions tailored for coastal environments.",
    fullContent:
      "The project presented unique engineering challenges due to its proximity to the ocean, requiring corrosion-resistant materials and specialized installation techniques. Our team delivered the project ahead of schedule, and the hotel has since reported a 22% reduction in energy consumption compared to similar properties, a testament to our commitment to sustainable engineering.",
    slug: "sayura-beach-hotel-completion",
  },
];