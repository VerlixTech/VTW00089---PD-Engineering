import Banner from "@/components/banner";
import PageHero from "@/components/pageHero";
import ProjectsGrid from "@/app/projects/projectsGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - PD Engineering & Academy",
  description:
    "Explore PD Engineering & Academy's successful HVAC, MEP, and specialized engineering projects across Qatar, Sri Lanka, and beyond.",
  keywords:
    "PD Engineering projects, HVAC projects, MEP engineering, industrial engineering solutions, Sri Lanka projects, Qatar engineering projects, PD Engineering portfolio, specialized engineering",
  openGraph: {
    title: "Projects - PD Engineering & Academy",
    description:
      "Discover our portfolio showcasing successful HVAC, MEP, and specialized engineering projects completed in Qatar, Sri Lanka, and international locations.",
    url: "https://www.pdengineeringacademy.com/projects",
    type: "website",
    siteName: "PD Engineering & Academy",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - PD Engineering & Academy",
    description:
      "Explore PD Engineering & Academy's portfolio of successful HVAC, MEP, and specialized engineering projects.",
  },
  alternates: {
    canonical: "https://www.pdengineeringacademy.com/projects",
  },
};


export default function ProjectsPage() {
  return (
    <main className="min-h-screen ">
        <PageHero
            title="Projects"
            heading="Our Projects Portfolio"
            subHeading="Showing our international MEP, HAVC and specialized engineering achievements across Quatar, Sri Lanka and beyond."
        />

        <ProjectsGrid />

        <Banner
        heading="Let's Build Something Great Together"
        description="Reach out to our team today to discuss your project, explore solutions, 
        and turn your ideas into reality with expert guidance and support."
      />
    </main>
  );
}