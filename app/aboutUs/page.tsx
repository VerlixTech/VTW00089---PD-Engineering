import { Header } from "@/components/header";
import PageHero from "@/components/pageHero";
import { Metadata } from "next";
import CompanyOverview from "./companyOverview";


export const metadata: Metadata = {
    title: "About Us - PD Engineering & Academy",
    description: "Learn more about us.",
}

export default function AboutUsPage () {    
    return (
        <main className="min-h-screen ">
            <Header />
            <PageHero 
                title="About Us"
                heading="PD Engineering & Academy "
                subHeading="Powering Performance & Developing Professionals"
            />
            <CompanyOverview/>
        </main>
    )
}