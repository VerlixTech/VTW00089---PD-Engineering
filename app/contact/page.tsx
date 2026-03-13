import { ContactSection } from "@/app/contact/contact-section";
import ContactHero from "./contactHero";
import ContactBanner from "./contactBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - PD Engineering & Academy | Get In Touch",
  description:
    "Contact PD Engineering & Academy for specialized HVAC & MEP solutions and professional training. Located in Piliyandala, Sri Lanka. Call +94 11 218 3349 or email info@pdengineeringandacademy.com.",
  keywords:
    "contact PD Engineering, HVAC contact, MEP solutions contact, engineering services sri lanka, Piliyandala engineering company, professional training contact",
  openGraph: {
    title: "Contact PD Engineering & Academy",
    description:
      "Get in touch with PD Engineering & Academy for HVAC, MEP engineering solutions and professional training services in Sri Lanka.",
    url: "https://www.pdengineeringacademy.com/contact",
    type: "website",
    siteName: "PD Engineering & Academy",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://www.pdengineeringacademy.com/contact",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactHero />

      <ContactSection />

      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mt-10 mb-[5%]">
        <div className="w-full bg-gray-100  overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.908397040865!2d79.92542627499523!3d6.781002193215999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24f85b9b7c6e5%3A0x982ca29c67904574!2s310%20Dewala%20Rd%2C%20Piliyandala!5e0!3m2!1sen!2slk!4v1773375541189!5m2!1sen!2slk"
            width="100%"
            height="450"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
            title="Our Location"
          ></iframe>
        </div>
      </div>

      <ContactBanner />
    </main>
  );
}
