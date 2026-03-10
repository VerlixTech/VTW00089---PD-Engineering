import Banner from "@/components/banner";
import PageHero from "@/components/pageHero";
import ProjectsGrid from "@/app/projects/projectsGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - PD Engineering & Academy",
  description: "Explore our successful projects.",
}

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