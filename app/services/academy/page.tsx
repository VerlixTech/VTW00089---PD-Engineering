import AcademyAccordion from "@/app/services/academy/academyAccordion";
import Banner from "@/components/banner";
import PageHero from "@/components/pageHero";
import WhoShouldAttend from "@/components/whoShouldAttend";
import { Metadata } from "next";
import AcademyHVACDesignRoom from "./academyHVACDesignRoom";

export const metadata: Metadata = {
  title: "Academy Services - PD Engineering & Academy",
  description:
    "Explore PD Engineering & Academy’s HVAC and MEP professional training programs, designed to equip engineers with practical, industry-ready skills.",
  keywords:
    "PD Engineering Academy, HVAC training, MEP training, professional engineering courses, HVAC design education, practical HVAC training, engineering workshops, technical training Sri Lanka",
  openGraph: {
    title: "Academy Services - PD Engineering & Academy",
    description:
      "Discover our comprehensive HVAC and MEP training programs, focusing on practical, industry-oriented skills for engineers and technicians.",
    url: "https://www.pdengineeringacademy.com/services/academy",
    type: "website",
    siteName: "PD Engineering & Academy",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Academy Services - PD Engineering & Academy",
    description:
      "Practical HVAC and MEP training programs for engineers and technicians provided by PD Engineering & Academy in Sri Lanka.",
  },
  alternates: {
    canonical: "https://www.pdengineeringacademy.com/services/academy",
  },
};


export default function AcademyServicesPage() {
  return (
    <main className="min-h-screen ">
        <PageHero 
            title="Academy"
            heading="Delivering Practical, Industry-Oriented HVAC Design Education"
            subHeading="PD Engineering & Academy is a professional training platform dedicated to developing practical, industry-ready HVAC engineers."
        />

         <AcademyHVACDesignRoom/>
     
        <AcademyAccordion />

        <WhoShouldAttend  />

        <Banner
        heading="Empowering engineers with practical HVAC design expertise."
        description="For course schedules, enrollment details, and customized corporate training programs, please contact PD Engineering & Academy."
      />  
      
    </main>
  )
}