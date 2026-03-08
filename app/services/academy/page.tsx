import { Header } from "@/components/header";
import PageHero from "@/components/pageHero";
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
    </main>
  )
}