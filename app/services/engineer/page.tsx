import PageHero from "@/components/pageHero";
import CoreEngineeringServices from "./coreServices";
import Banner from "@/components/banner";
import IndustrialVentilation from "./industrialVentilation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Services - PD Engineering & Academy",
  description:
    "PD Engineering & Academy provides expert MEP and HVAC engineering services, industrial ventilation solutions, and project management for commercial, industrial, and hospitality sectors.",
  keywords:
    "PD Engineering services, MEP engineering, HVAC engineering, industrial ventilation, mechanical engineering services, Sri Lanka engineering company, PD Engineering portfolio, engineering solutions",
  openGraph: {
    title: "Engineering Services - PD Engineering & Academy",
    description:
      "Discover PD Engineering & Academy's comprehensive engineering services including MEP, HVAC, and industrial ventilation solutions for projects across Sri Lanka and international locations.",
    url: "https://www.pdengineeringacademy.com/services/engineer",
    type: "website",
    siteName: "PD Engineering & Academy",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Services - PD Engineering & Academy",
    description:
      "Expert MEP, HVAC, and industrial ventilation engineering services offered by PD Engineering & Academy in Sri Lanka.",
  },
  alternates: {
    canonical: "https://www.pdengineeringacademy.com/services/engineer",
  },
};

export default function EngineerServicesPage() {
  return (
    <main className="min-h-screen ">
      <PageHero
        title="Engineering"
        heading="Redefining Engineering Excellence"
        subHeading="PD ENGINEERING & ACADEMY (Pvt) Ltd offers a robust range of services and expertise in the MEP sector"
      />

      <CoreEngineeringServices />

      <IndustrialVentilation />

      <Banner
        heading="Let's Build Something Great Together"
        description="Reach out to our team today to discuss your project, explore solutions, 
        and turn your ideas into reality with expert guidance and support."
      />
    </main>
  );
}
