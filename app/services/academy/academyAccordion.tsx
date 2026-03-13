"use client";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Typography from "@mui/material/Typography";
import { Check } from "lucide-react";
import Image from "next/image";

const accordionData = [
  {
    title: "Water Cooled Package Systems",
    lessons: "Lessons 1-3",
    image: "/Courses & Training Modules03.svg",
    description:
      "This module provides in-depth knowledge of water-cooled package air conditioning systems, focusing on both design and application.",
    bulletTitle: "What You Will Learn:",
    bullets: [
      "Equipment selection: Package Units, Pumps, Cooling Towers",
      "Pipe sizing (manual and software-based)",
      "Valve arrangements and system configuration",
    ],
  },
  {
    title: "Chilled Water Air Conditioning Systems",
    lessons: "Lessons 4-5",
    image: "/Courses & Training Modules02.svg",
    description:
      "Explore chilled water systems used in large-scale commercial and industrial air conditioning projects.",
    bulletTitle: "What You Will Learn:",
    bullets: [
      "Chiller types and selection criteria",
      "Chilled water piping design and layout",
    ],
  },
  {
    title: "Air Side Design",
    lessons: "Lessons 6-7",
    image: "/Courses & Training Modules03.svg",
    description:
      "Learn airflow distribution, duct layouts, and ventilation system design principles.",
    bulletTitle: "What You Will Learn:",
    bullets: [
      "Duct sizing methods (equal friction, velocity reduction)",
      "Air distribution devices: grilles, diffusers, registers",
      "Fresh air and exhaust system design",
    ],
  },
  {
    title: "Heat Load Calculation",
    lessons: "Lessons 8",
    image: "/Courses & Training Modules04.svg",
    description:
      "Understand manual and software-based heat load calculation for HVAC system sizing.",
    bulletTitle: "What You Will Learn:",
    bullets: [
      "Cooling load components (solar, internal, ventilation)",
      "Manual heat load calculation methods",
    ],
  },
  {
    title: "Special Application System Design",
    lessons: "Lessons 9-10",
    image: "/Courses & Training Modules05.svg",
    description:
      "Study HVAC designs for specialized environments including data centers, hospitals, and industrial facilities.",
    bulletTitle: "What You Will Learn:",
    bullets: [
      "Data center cooling strategies",
      "Clean room and hospital HVAC requirements",
    ],
  },
];

export default function CoursesAccordion() {
  const [expanded, setExpanded] = React.useState<string | false>("");

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <section
      className="pt-20 max-md:pt-12 pb-10 px-4 sm:px-6 bg-no-repeat bg-cover bg-center"
      style={{
        background: "#0a0d12",
        backgroundImage: "url('/Servives_bg.svg')",
      }}
    >
      <div className="max-w-6xl mx-auto px-2">
        <h3
          className="text-2xl md:text-[40px] font-bold mb-3 sm:mb-4"
          style={{
            background: "linear-gradient(to right, #89CA29, #66C5FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Courses &amp; Training Modules
        </h3>

        <p className="text-[#CFCFCF] text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
          Master modern industrial and residential HVAC engineering through our
          comprehensive modular training framework designed by industry experts.
        </p>

        {/* Accordion */}
        <div className="space-y-3 ">
          {accordionData.map((item, index) => {
            const panel = `panel${index}`;
            const isExpanded = expanded === panel;

            return (
              <Accordion
                key={index}
                expanded={isExpanded}
                onChange={handleChange(panel)}
                disableGutters
                elevation={0}
                sx={{
                  background: "transparent",
                  borderRadius: "12px !important",
                  border: "1px solid #FFFFFF",
                  overflow: "hidden",
                  "&:before": { display: "none" },
                  "&.Mui-expanded": { marginBottom: 2 },
                }}
              >
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  // sx={{
                  //   px: {xs:1, md:0},
                  //   py: {xs:1, md:0},
                  //   minHeight: "unset",
                  //   "& .MuiAccordionSummary-content": {
                  //     margin: 0,
                  //     alignItems: "center",
                  //   },
                  //   "& .MuiAccordionSummary-expandIconWrapper": {
                  //     pr: {xs:1 , sm:2},
                  //     flexShrink: 0,
                  //   },
                  // }}

                  expandIcon={
                    isExpanded ? (
                      <ExpandLessIcon sx={{ color: "white" }} /> 
                    ) : (
                      <ExpandMoreIcon sx={{ color: "white" }} /> 
                    )
                  }
                  sx={{
                    px: { xs: 1, md: 0 },
                    py: { xs: 1, md: 0 },
                    minHeight: "unset",
                    "& .MuiAccordionSummary-content": {
                      margin: 0,
                      alignItems: "center",
                    },
                    "& .MuiAccordionSummary-expandIconWrapper": {
                      pr: { xs: 0, sm: 2 },
                      flexShrink: 0,
                      transform: "none !important",
                      transition: "none !important",
                    },
                    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                      transform: "none !important",
                    },
                  }}
                >

                  {/* Always horizontal: image left, text right */}
                  <div className="flex flex-row items-center w-full">
                    {/* Thumbnail */}
                    <div
                      className="relative flex-shrink-0"
                      style={{
                        width: "clamp(8px, 25vw, 200px)",
                        height: "clamp(80px, 16vw, 110px)",
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover max-md:rounded-lg "
                        sizes="(max-width: 640px) 80px, 200px"
                      />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col justify-center px-3 md:pl-12 min-w-0">
                      <Typography
                        sx={{
                          color: "white",
                          fontWeight: 600,
                          fontSize: { xs: "12px", sm: "18px", md: "24px" },
                          lineHeight: 1.3,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#CECECE",
                          fontSize: { xs: "10px", sm: "14px", md: "20px" },
                          mt: 0.5,
                        }}
                      >
                        {item.lessons}
                      </Typography>
                    </div>
                  </div>
                </AccordionSummary>

                <AccordionDetails
                  sx={{
                    background: "transparent",
                    px: { xs: 2, sm: 3 },
                    pb: { xs: 2, sm: 3 },
                    pt: 2,
                    borderTop: "1px solid #2a2a2a",
                  }}
                >
                  <p className="text-gray-400 text-xs md:text-sm  leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <p className="text-gray-300 text-xs md:text-sm font-semibold mb-2">
                    {item.bulletTitle}
                  </p>
                  <ul className="space-y-2 sm:space-y-1">
                    {item.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-400 text-xs md:text-sm"
                      >
                        <Check className="w-4 h-4 text-[#89CA29] mt-0.5 flex-shrink-0" />
                        <span className="flex-1">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
    </section>
  );
}