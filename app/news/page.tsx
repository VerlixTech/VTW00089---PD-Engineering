import PageHero from "@/components/pageHero";
import { Metadata } from "next";
import LatestNewsDetail from "./latestNewsDetail";

export const metadata: Metadata = {
  title: "News - PD Engineering & Academy",
  description:
    "Stay updated with PD Engineering & Academy's latest news, industry insights, project updates, and professional engineering developments.",
  keywords:
    "PD Engineering news, HVAC news, MEP industry updates, engineering news Sri Lanka, PD Engineering & Academy updates, project news, training updates",
  openGraph: {
    title: "News - PD Engineering & Academy",
    description:
      "Explore the latest news, updates, and industry insights from PD Engineering & Academy, covering HVAC, MEP, and professional training developments.",
    url: "https://www.pdengineeringacademy.com/news",
    type: "website",
    siteName: "PD Engineering & Academy",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "News - PD Engineering & Academy",
    description:
      "Get the latest updates, news, and industry insights from PD Engineering & Academy.",
  },
  alternates: {
    canonical: "https://www.pdengineeringacademy.com/news",
  },
};


export default function NewsPage() {
  return (
    <main className="min-h-screen ">
        <PageHero 
            title="News"
            heading="Latest Industry News & Updates"
            subHeading="Stay informed with the latest trends and updates"
        />

        <LatestNewsDetail />
    </main>
  )
}