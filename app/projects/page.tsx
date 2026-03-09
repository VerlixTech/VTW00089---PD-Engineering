import { Header } from "@/components/header";
import PageHero from "@/components/pageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - PD Engineering & Academy",
  description: "Explore our successful projects.",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen ">
        <Header />
        <PageHero
            title="Projects"
            heading="Our Projects Portfolio"
            subHeading="Showing our international MEP, HAVC and specialized engineering achievements across Quatar, Sri Lanka and beyond."
        />
    </main>
  );
}