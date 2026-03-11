import { ContactSection } from "@/components/contact-section";
import ContactHero from "./contactHero";
import ContactBanner from "./contactBanner";

// export const metadata: Metadata = {
//   title: "Contact Us - SAGA Engineering | Get In Touch",
//   description:
//     "Contact SAGA Engineering for industrial equipment solutions, machinery import & supply services. Located in Colombo, Sri Lanka. Call +94 71 70 70 30 or email us today.",
//   keywords:
//     "contact saga engineering, industrial equipment contact, machinery supply contact, engineering services sri lanka, colombo engineering company",
//   openGraph: {
//     title: "Contact SAGA Engineering",
//     description:
//       "Get in touch with SAGA Engineering for all your industrial equipment and machinery needs. Professional engineering services in Sri Lanka.",
//     url: "https://www.sagaengineering.lk/contact",
//     type: "website",
//   },
//   alternates: {
//     canonical: "https://www.sagaengineering.lk/contact",
//   },
// }

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactHero />

      <ContactSection />

      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mt-10 mb-[5%]">
        <div className="w-full bg-gray-100  overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.398093173135!2d79.90953097499579!3d6.842786293155382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a9bb80b2123%3A0xd7e800e860fdd283!2s310%20Dehiwala%20Rd%2C%20Boralesgamuwa!5e0!3m2!1sen!2slk!4v1773144164668!5m2!1sen!2slk"
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

     <ContactBanner/>
     
    </main>
  );
}
