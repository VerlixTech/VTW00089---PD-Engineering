import Image from "next/image";
import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <HeroSlider />
    </main>
  );
}
