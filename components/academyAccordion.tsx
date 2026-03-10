"use client";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
      "Cooling tower make-up water calculation",
      "Pump head calculation for open-loop condenser water circuits",
      "Electrical wiring selection, control philosophy, and starting panels",
      "Sample drawings, design examples, and tender preparation",
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
      "Cooling coil selection and performance",
      "System balancing and commissioning",
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
      "Fan selection and performance curves",
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
      "Software tools for load estimation",
      "Psychrometric analysis",
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
      "Industrial ventilation design",
      "Energy recovery systems",
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
      className="pt-20 max-md:pt-12 pb-10 px-6 bg-no-repeat bg-cover bg-center "
      style={{
        background: "#0a0d12",
        backgroundImage: "url('/Servives_bg.svg')",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h3
          className="text-3xl font-bold mb-4"
          style={{
            background: "linear-gradient(to right, #89CA29, #66C5FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Courses &amp; Training Modules
        </h3>

        <p className="text-[#CFCFCF] text-lg leading-relaxed mb-8">
          Master modern industrial and residential HVAC engineering through our
          comprehensive modular training framework designed by industry experts.
        </p>

        {/* Accordion */}
        <div className="space-y-3">
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
                  "&.Mui-expanded": { margin: 0 },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  sx={{
                    px: 0,
                    py: 0,
                    minHeight: "unset",
                    "& .MuiAccordionSummary-content": { margin: 0 },
                    "& .MuiAccordionSummary-expandIconWrapper": { pr: 2 },
                  }}
                >
                  <div className="flex items-center gap-4 w-full ">
                    {/* Image */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={144}
                      height={80}
                      className="w-[328px] h-[150px] object-cover flex-shrink-0 mr-[5%]"
                    />
                    {/* Title & lessons */}
                    <div>
                      <Typography
                        sx={{
                          color: "white",
                          fontWeight: 700,
                          fontSize: {
                            xs: "20px",
                            md: "28px", 
                          },
                          lineHeight: 1.4,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#CECECE",
                          fontSize: {
                            xs: "16px",
                            md: "20px", 
                          },
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
                    px: 3,
                    pb: 3,
                    pt: 2,
                    borderTop: "1px solid #2a2a2a",
                  }}
                >
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <p className="text-gray-300 text-sm font-semibold mb-2">
                    {item.bulletTitle}
                  </p>
                  <ul className="space-y-1">
                    {item.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-400 text-sm"
                      >
                        <Check className="w-4 h-4 text-[#89CA29] mt-0.5 flex-shrink-0" />
                        {bullet}
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
