import Image from "next/image";
import Link from "next/link";

const capabilities = [
  "Contracting & Trading",
  "Air Conditioning Solutions",
  "Fit-Out Jobs",
  "Procurement",
  "Industrial Ventilation & Cooling Solutions",
  "HAVC Design Room"
];

const companyLinks = [
  { label: "About Us", href: "/aboutUs" },
  { label: "Engineering Services", href: "/services/engineer" },
  { label: "Academic Services", href: "/services/academy" },
  { label: "Projects", href: "/projects" },
  { label: "News & Events", href: "/news" },
  { label: "Contact Us", href: "/contact" },
];

const Footer = () => {
  return (
    <div className="relative">
    <div className="absolute top-0 left-0 w-full h-[2vh] bg-gradient-to-r from-[#66C5FF] to-[#89CA29] z-10"></div>
    
    <footer style={{ background: "#0a0a0a" }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/Logo.svg"
                alt="PD Engineering & Academy"
                width={40}
                height={40}
              />
              <span className="text-[#81B154] font-semibold text-xl">
                PD Engineering &amp; Academy
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              An international leader in MEP and HVAC engineering, providing end-to-end
              contracting, trading, and technical solutions across the globe.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-6">
              Capabilities
            </h4>
            <ul className="space-y-4">
              {capabilities.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-400 text-sm">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "#89CA29" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[#EFEFEFCC] text-sm hover:text-white transition duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-gray-800" />

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
        <div className="flex items-center gap-6">
          <Link href="https://www.linkedin.com/company/pd-engineering-academy" className="text-white hover:text-gray-300 transition duration-200">LinkedIn</Link>
          <Link href="https://web.facebook.com/profile.php?id=61586239766177" className="text-white hover:text-gray-300 transition duration-200">Facebook</Link>
        </div>

        <div>
          <a href="mailto:info@pdengineeringacademy.com" className="text-white hover:text-gray-300 transition duration-200">
            info@pdengineeringacademy.com
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:+94112183349" className="text-white hover:text-gray-300 transition duration-200">
            +94 11 218 3349 
          </a>
          <a href="tel:+94710625942" className="text-white hover:text-gray-300 transition duration-200">
            +94 71 062 5942
          </a>
        </div>

        <div className="text-right text-[10px] uppercase tracking-wider text-[#D1D5DB] ">
         <Link href="https://www.verlixtech.com" className="text-white hover:text-gray-300 transition duration-200">
            © 2026 VERLIXTECH (PVT) LTD.
          </Link>
          <p>ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;