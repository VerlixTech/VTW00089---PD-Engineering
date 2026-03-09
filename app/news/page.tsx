import { Header } from "@/components/header";
import PageHero from "@/components/pageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News - PD Engineering & Academy",
  description: "Latest news.",
}

export default function NewsPage() {
  return (
    <main className="min-h-screen ">
        <Header />
        <PageHero 
            title="News"
            heading="Latest Industry News & Updates"
            subHeading="Stay informed with the latest trends and updates"
        />
    </main>
  )
}