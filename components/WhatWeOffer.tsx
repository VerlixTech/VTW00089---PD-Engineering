'use client'
import Head from "next/head";
import { Settings, Truck, Wrench } from "lucide-react";
import { useRouter } from "next/navigation";
export default function Services() {
  // Services array
  const router = useRouter();
  const services = [
    {
      icon: Settings,
      title: "Design, Installation & Maintenance",
      description:
        "Our vision is to redefine engineering excellence by delivering smart, sustainable solutions that drive innovation and efficiency.",
        
    },
    {
      icon: Truck,
      title: "Machinery Import & Supply",
      description:
        "Comprehensive import and supply services for industrial equipment, ensuring quality and reliability in every delivery.",
    },
    {
      icon: Wrench,
      title: "General Maintenance & Support",
      description:
        "Ongoing technical support and maintenance services to ensure optimal performance and minimize operational downtime."
    },
  ];

  return (
    <>
      <Head>
        <title>Our Services | Mechanical Engineering Solutions</title>
        <meta
          name="description"
          content="Explore our mechanical engineering services including design, installation, maintenance, machinery import, and general support. We deliver smart and sustainable solutions for optimized performance."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="bg-white font-poppins">
        
      </main>
    </>
  );
}
