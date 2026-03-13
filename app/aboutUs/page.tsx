
import PageHero from "@/components/pageHero";
import { Metadata } from "next";
import CompanyOverview from "./companyOverview";
import CoreValues from "./coreValues";

export const metadata: Metadata = {
  title: "About Us - PD Engineering & Academy",
  description:
    "Learn about PD Engineering & Academy provides specialized HVAC & MEP engineering solutions and professional technical training.",
  keywords:
    "About PD Engineering, HVAC contact, MEP solutions contact, engineering services sri lanka, Piliyandala engineering company, professional training contact",
  openGraph: {
    title: "About PD Engineering & Academy",
    description:
      "Discover PD Engineering & Academy's comprehensive mechanical engineering services and expertise in industrial equipment solutions.",
    url: "https://www.pdengineeringacademy.com/aboutUs",
    type: "website",
  },
  alternates: {
    canonical: "https://www.pdengineeringacademy.com/aboutUs",
  },
}

export default function AboutUsPage () {    
    return (
        <main className="min-h-screen ">
            <PageHero 
                title="About Us"
                heading="PD Engineering & Academy "
                subHeading="Powering Performance & Developing Professionals"
            />
            <CompanyOverview/>
            <CoreValues/>
        </main>
    )
}