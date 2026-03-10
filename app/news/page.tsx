import { Header } from "@/components/header";
import PageHero from "@/components/pageHero";
import { Metadata } from "next";
import LatestNewsDetail from "./latestNewsDetail";

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

        <LatestNewsDetail />
    </main>
  )
}