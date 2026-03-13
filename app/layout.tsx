import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Marck_Script } from 'next/font/google';
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import AOSProvider from '@/app/AOSProvider';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const markScript = Marck_Script({
  variable: "--font-markScript",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "PD Engineering & Academy",
  other: {
    site_name: "PD Engineering & Academy"
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
  description:
    "PD Engineering & Academy (Pvt) Ltd provides specialized HVAC & MEP engineering solutions and professional training programs, delivering excellence locally and internationally.",
  keywords:
    "HVAC, MEP, engineering, air conditioning, ducting, electromechanical, professional training, industrial solutions, Sri Lanka, Qatar, PD Engineering, HVAC training, tender preparation, chilled water systems, ventilation, procurement, trading",
  authors: [{ name: "PD Engineering & Academy" }],
  creator: "PD Engineering & Academy",
  publisher: "PD Engineering & Academy",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.pdengineeringacademy.com/",
    title: "PD Engineering & Academy",
    description:
      "Specialized HVAC & MEP solutions provider delivering engineering excellence and professional training.",
    siteName: "PD Engineering & Academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "PD Engineering & Academy",
    description:
      "Specialized HVAC & MEP solutions provider delivering engineering excellence and professional training.",
  },
  verification: {
    google: "",
  },
  alternates: {
    canonical: "https://www.pdengineeringacademy.com/",
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 function addOrganizationJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "PD Engineering & Academy",
        "alternateName": "PD Engineering",
        "description": "Specialized HVAC & MEP engineering solutions provider and professional training academy.",
        "url": "https://www.pdengineeringacademy.com/",
        "logo": "https://www.pdengineeringacademy.com/Logo.svg",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+94 11 218 3349",
          "contactType": "customer service",
          "availableLanguage": "English"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No. 310, Dehiwala Road, Bataketthara, Piliyandala",
          "addressLocality": "Piliyandala",
          "addressCountry": "LK",
          "postalCode": "10300"
        }
      }`,
    };
  }

   function addWebsiteJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "PD Engineering & Academy",
        "alternateName": "PD Engineering",
        "url": "https://www.pdengineeringacademy.com/",
        "description": "PD Engineering & Academy provides specialized HVAC & MEP engineering solutions and professional technical training.",
        "publisher": {
          "@type": "Organization",
          "name": "PD Engineering & Academy",
          "logo": "https://www.pdengineeringacademy.com/Logo.svg"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.pdengineeringacademy.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      }`,
    };

  }
  return (
    <html lang="en">
       <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta property="og:site_name" content="PD Engineering & Academy" />
        <meta property="og:url" content="https://www.pdengineeringacademy.com/" />
        <meta property="og:title" content="PD Engineering & Academy" />
        <meta property="og:description" content="Specialized HVAC & MEP engineering solutions provider and professional training academy." />
        <meta property="og:image" content="https://www.pdengineeringacademy.com/Logo.svg" />
        <link rel="canonical" href="https://www.pdengineeringacademy.com/" />
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="icon" href="/favicon-32x32.png?v=2" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png?v=2" sizes="16x16" />
        <link rel="alternate" hrefLang="en" href="https://www.pdengineeringacademy.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.pdengineeringacademy.com/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addOrganizationJsonLd()}
          key="organization-jsonld"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addWebsiteJsonLd()}
          key="website-jsonld"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PD Engineering & Academy",
              alternateName: "PD Engineering & Academy",
              description:
                "PD Engineering & Academy provides specialized HVAC & MEP engineering solutions and professional technical training.",
              url: "https://www.pdengineeringacademy.com/",
              logo: "https://www.pdengineeringacademy.com/Logo.svg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+94 11 218 3349",
                contactType: "customer service",
                availableLanguage: "English",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "No. 310, Dehiwala Road, Bataketthara, Piliyandala",
                addressLocality: "Piliyandala",
                addressCountry: "LK",
                postalCode: "10300",
              },
              // sameAs: ["https://linkedin.com/company/saga-engineering", "https://facebook.com/sagaengineering"],
            }),
          }}
        />

          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "PD Engineering & Academy",
              alternateName: "PD Engineering & Academy",
              url: "https://www.pdengineeringacademy.com/",
              description: "PD Engineering & Academy provides specialized HVAC & MEP engineering solutions and professional technical training.",
              publisher: {
                "@type": "Organization",
                name: "PD Engineering & Academy",
                logo: "https://www.pdengineeringacademy.com/Logo.svg"
              },
              
              // Search functionality
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://www.pdengineeringacademy.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              },
              
              // Main pages for sitelinks - Critical for Google understanding
              mainEntity: [
                {
                  "@type": "WebPage",
                  "@id": "https://www.pdengineeringacademy.com/contact",
                  name: "Contact Us",
                  description: "Address: No. 310, Dehiwala Road, Bataketthara, Piliyandala Email: info@pdengineeringacademy.com, Phone: +94 11 218 3349",
                  url: "https://www.pdengineeringacademy.com/contact"
                },
               
                {
                  "@type": "WebPage",
                  "@id": "https://www.pdengineeringacademy.com/aboutus",
                  name: "Company Profile", 
                  description: "PD Engineering & Academy expertise in innovation, products and technology to provide comprehensive engineering solutions",
                  url: "https://www.pdengineeringacademy.com/aboutus"
                },
                {
                  "@type": "WebPage",
                  "@id": "https://www.pdengineeringacademy.com/services",
                  name: "Our Services",
                  description: "PD Engineering & Academy offers specialized HVAC & MEP engineering solutions and professional training programs, delivering excellence locally and internationally.",
                  url: "https://www.pdengineeringacademy.com/services"
                }
              ]
            }),
          }}
        />
        
        {/* Breadcrumb Schema for navigation structure */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.pdengineeringacademy.com/"
                },
               
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "About Us",
                  item: "https://www.pdengineeringacademy.com/aboutUs"
                },
                 {
                  "@type": "ListItem", 
                  position: 3,
                  name: "Contact Us",
                  item: "https://www.pdengineeringacademy.com/contact"
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Engineering Services", 
                  item: "https://www.pdengineeringacademy.com/services/engineer"
                },
                     {
                  "@type": "ListItem",
                  position: 5,
                  name: "Academic Services", 
                  item: "https://www.pdengineeringacademy.com/services/academy"
                },
                                {
                  "@type": "ListItem",
                  position: 6,
                  name: "Projects",
                  item: "https://www.pdengineeringacademy.com/projects"
                },
              ]
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${markScript.variable} antialiased`}
      >
        <Header />

            <AOSProvider>{children}</AOSProvider>  
        
        <Footer />
      </body>
    </html>
  );
}
