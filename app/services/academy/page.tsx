import AcademyAccordion from "@/app/services/academy/academyAccordion";
import Banner from "@/components/banner";
import PageHero from "@/components/pageHero";
import WhoShouldAttend from "@/components/whoShouldAttend";
import { Metadata } from "next";
import AcademyHVACDesignRoom from "./academyHVACDesignRoom";

export const metadata: Metadata = {
  title: "Academy Services - PD Engineering & Academy",
  description: "Academy Services",
}

export default function AcademyServicesPage() {
  return (
    <main className="min-h-screen ">
        <PageHero 
            title="Academy"
            heading="delivering practical, industry-oriented HVAC design education"
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