'use client';
import Image from "next/image";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>About Our Company | SAGA Engineering (Pvt) Ltd</title>
        <meta
          name="description"
          content="We specialize in mechanical engineering services: design, project execution, installation, and maintenance. Delivering reliable, efficient, and sustainable solutions."
        />
        <meta name="keywords" content="Mechanical Engineering, Industrial Solutions, Installation, Maintenance, Project Execution, Engineering Company" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Our Company | SAGA Engineering (Pvt) Ltd" />
        <meta
          property="og:description"
          content="We deliver comprehensive mechanical engineering services with a focus on sustainability, safety, and innovation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sagaengineering.lk/about" />
        <meta property="og:image" content="https://sagaengineering.lk/og-image.jpg" />
      </Head>

      {/* Page Section */}
      <section className="px-8 py-12 md:py-20 bg-white ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
        </div>
      </section>
    </>
  );
}
