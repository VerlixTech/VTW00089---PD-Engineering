import { Header } from "@/components/header";
import { HeroSlider } from "@/components/hero-slider";
import { AboutUs } from "@/components/aboutus";
import WhyChooseUs from "@/components/why-chooseUs";
import OurServices from "@/components/ourServices";
import SuccessProjects from "@/components/successProjects";
import Gallery from "@/components/gallery";
import Partners from "@/components/partners";
import News from "@/components/news";
import OurQualification from "@/components/ourQualification";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Header />
      <HeroSlider />
      <AboutUs />
      <WhyChooseUs />
      <OurServices />
      <SuccessProjects />
      <Gallery />
      <Partners />
      <News />
      <OurQualification />
      <Banner
        heading="Let's Build Something Great Together"
        description="Reach out to our team today to discuss your project, explore solutions, 
        and turn your ideas into reality with expert guidance and support."
      />
    </main>
  );
}
