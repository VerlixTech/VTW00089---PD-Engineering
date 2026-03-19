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
    date: "January 24, 2026",
    title: "Eng. Preemal Kumara Marks Over 18 Years of Professional Excellence ",
    image: "/NewsImage02.svg",
    imageCaption: "Eng. Preemal Kumara",
    excerpt:
      "PD Engineering & Academy proudly recognizes the remarkable professional journey of Preemal Kumara, who has successfully completed over 18 years of experience in the Mechanical and HVAC engineering industry, working across Sri Lanka and the Middle East, particularly Qatar. Throughout his career, Eng. Kumara has played a significant role in HVAC system design, installation, optimization, and electromechanical services, contributing to numerous complex engineering projects in both local and international markets. His expertise also extends to cooling water treatment systems and advanced VRF air-conditioning technologies, where he is recognized as a certified specialist.",
    fullContent:
      "Eng. Kumara holds a Master of Energy Management from the Open University of Sri Lanka, an MBA from the University of Wolverhampton (UK), and a Bachelor of Engineering from the University of Bolton (UK), along with a Higher National Diploma in Mechanical Engineering. He is an Incorporated Engineer and a Fellow Member of the Institution of Incorporated Engineers Sri Lanka (FIIESL), as well as a member of the Mechanical Engineers Group of Sri Lanka (MEGSL). His professional leadership has been demonstrated through his previous role as Head of Engineering at Abans PLC, where he contributed to the development and management of major HVAC engineering projects. Beyond industry work, Eng. Kumara actively contributes to engineering education and professional development. He serves as a part-time instructor and lecturer in the HVAC field, delivering lectures and Continuing Professional Development (CPD) programs for institutions such as German Tech Sri Lanka, Korean Tech Sri Lanka, and other professional training platforms. In addition to his technical and academic contributions, he is also an active member of Toastmasters International, where he promotes leadership development, communication skills, and professional growth among engineers and young professionals. With more than 18 years of dedicated service to the engineering industry, Eng. Preemal Kumara continues to guide PD Engineering & Academy toward innovation, sustainable engineering practices, and the advancement of HVAC knowledge and professional standards.",
    slug: "Eng. Preemal Kumara Marks Over 18 Years of Professional Excellence ",
  },
  {
    category: "Company Updates",
    date: "February 12, 2026",
    title: "Successful Overseas Project Completions in Qatar ",
    image: "/heroSlider/hero3.svg",
    imageCaption: "Project: Doha Tower Phase II",
    excerpt:
      "PD Engineering & Academy proudly highlights the successful completion of two major overseas HVAC ducting projects in Qatar, demonstrating the organization’s capability in delivering high-quality mechanical engineering solutions in international markets.",
    fullContent:
      " One of the key projects involved the complete air-conditioning ducting works at Al Bidda Tower. The project included the full installation and commissioning of the building’s AC ducting system, ensuring efficient air distribution and compliance with international HVAC standards. The project was completed successfully with a focus on quality, precision, and timely delivery. In addition, the team successfully carried out the complete fire-rated duct works and cold air duct installation for the Anglican Church. This project required specialized ducting systems designed to meet strict fire safety regulations while ensuring reliable airflow and ventilation performance within the facility. Both projects were executed under the leadership and technical expertise of Preemal Kumara, whose extensive experience in HVAC engineering and international project management played a vital role in their successful completion. These achievements further strengthen the organization’s reputation for delivering professional HVAC engineering services, high-quality ducting installations, and reliable project execution in overseas markets. PD Engineering & Academy remains committed to expanding its international presence while continuing to provide innovative and sustainable HVAC engineering solutions for modern infrastructure projects.",
    slug: "Successful Overseas Project Completions in Qatar",
  },
  {
    category: "Projects",
    date: "March 09, 2026",
    title: "Hayleys nature next (PVT) LTD ",
    image: "/News01.svg",
    imageCaption: "PROJECT: Hayleys Nature Next (PVT) LTD",
    excerpt:
      "he complete ventilation system including evaporative cooling system was designed, supplied, and is being installed at the proposed factory building for Hayleys Agriculture located in the Bingiriya Free Trade Zone.",
    fullContent:
      "The project included comprehensive engineering design, equipment supply, professional installation, and systematic testing and commissioning to ensure optimal airflow, thermal comfort, and compliance with industrial ventilation standards.",
    slug: "Hayleys nature next (PVT) LTD",
  },

];