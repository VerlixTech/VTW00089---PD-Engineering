import { Header } from "@/components/header";
import PageHero from "@/components/pageHero";

export const metadata = {
  title: "Engineer Services - PD Engineering & Academy",
  description: "Engineering services.",
}


export default function EngineerServicesPage() {
  return (
    <main className="min-h-screen ">
      <Header />
      <PageHero 
        title="Engineering"
        heading="Redefining Engineering Excellence"
        subHeading="PD ENGINEERING & ACADEMY (Pvt) Ltd offers a robust range of services and expertise in the MEP sector"
      />
    </main>
  )
}