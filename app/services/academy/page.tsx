import AcademyAccordion from "@/components/academyAccordion";
import Banner from "@/components/banner";
import { Header } from "@/components/header";
import PageHero from "@/components/pageHero";
import WhoShouldAttend from "@/components/whoShouldAttend";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academy Services - PD Engineering & Academy",
  description: "Academy Services",
}

export default function AcademyServicesPage() {
  return (
    <main className="min-h-screen ">
        <Header />
        <PageHero 
            title="Academy"
            heading="delivering practical, industry-oriented HVAC design education"
            subHeading="PD Engineering & Academy is a professional training platform dedicated to developing practical, industry-ready HVAC engineers."
        />

         {/* Accordion Section */}
     
        <AcademyAccordion />

        <WhoShouldAttend  />

        <Banner
        heading="Empowering engineers with practical HVAC design expertise."
        description="For course schedules, enrollment details, and customized corporate training programs, please contact PD Engineering & Academy."
      />  
      
    </main>
  )
}