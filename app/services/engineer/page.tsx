import PageHero from "@/components/pageHero";
import CoreEngineeringServices from "./coreServices";
import Banner from "@/components/banner";
import IndustrialVentilation from "./industrialVentilation";

export const metadata = {
  title: "Engineer Services - PD Engineering & Academy",
  description: "Engineering services.",
};

export default function EngineerServicesPage() {
  return (
    <main className="min-h-screen ">
      <PageHero
        title="Engineering"
        heading="Redefining Engineering Excellence"
        subHeading="PD ENGINEERING & ACADEMY (Pvt) Ltd offers a robust range of services and expertise in the MEP sector"
      />

      <CoreEngineeringServices />

      <IndustrialVentilation />

      <Banner
        heading="Let's Build Something Great Together"
        description="Reach out to our team today to discuss your project, explore solutions, 
        and turn your ideas into reality with expert guidance and support."
      />
    </main>
  );
}
