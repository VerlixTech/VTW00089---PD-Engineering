import PageHero from "@/components/pageHero";
import { Metadata } from "next";
import GalleryGrid from "./galleryGrid";

export const metadata: Metadata = {
    title: "Gallery - PD Engineering & Academy",
    description: "Explore our gallery of projects and achievements."
};

export default function GalleryPage() {
    return (
        <main className="min-h-screen">
             <PageHero 
            title="Gallery"
            heading="Explore our portfolio showcasing completed projects, installations, and hands-on training sessions."
            subHeading=""
        />

        <GalleryGrid />
        </main>
    )
}