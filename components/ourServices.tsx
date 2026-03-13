"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Contracting and Trading",
    image: "/Engine-neatly-shelved-800x450-1 1.svg",
    description:
      "Contracting and Trading Specializing in HVAC installation, pre-insulated and G.I. duct installation as per DW-142 specifications, and insulation of G.I. ducts according to industry standards.",
    position: "bottom",
    link: "/services/engineer",
  },
  {
    title: "Air Conditioning Solutions",
    image: "/Engine-neatly-shelved-800x450-1 1 (1).svg",
    description:
      "Supplying and installing a variety of air conditioning systems tailored to diverse projects across Qatar and Sri Lanka.",
    position: "top",
    link: "/services/engineer",
  },
  {
    title: "Academy",
    image: "/Engine-neatly-shelved-800x450-1 1 (2).svg",
    description:
      "Master modern industrial and residential HVAC engineering through our comprehensive modular training framework designed by industry experts.",
    position: "bottom",
    link: "/services/academy",
  },
];

const OurServices = () => {
  return (
    <section className="py-20 px-6 max-md:pt-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-[40px] font-bold mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14 lg:text-lg text-base text-center">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        {/* Desktop Cards */}
        <div className="hidden md:flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col w-[348px]">
              {service.position === "bottom" && (
                <>
                  <div className="relative w-full h-[330px] overflow-hidden group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300"></div>
                    <div className="absolute bottom-[15%] left-0 right-0 flex items-end justify-center pb-4">
                      <h3 className="text-white text-3xl font-semibold text-center px-4">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-8 text-base text-black text-center bg-gradient-to-r from-[#5fa8d3] via-[#7bc76a] to-[#89CA29] h-[180px] flex items-center justify-center">
                    <p className="leading-relaxed">{service.description}</p>
                  </div>
                </>
              )}

              {service.position === "top" && (
                <>
                  <div className="p-8 text-base text-black text-center bg-gradient-to-r from-[#5fa8d3] via-[#7bc76a] to-[#89CA29] h-[180px] flex items-center justify-center">
                    <p className="leading-relaxed">{service.description}</p>
                  </div>
                  <div className="relative w-full h-[330px] overflow-hidden group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                    <div className="absolute top-[15%] left-0 right-0 flex items-start justify-center pt-4">
                      <h3 className="text-white text-3xl font-semibold text-center px-4">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </>
              )}

              <div className="mt-6 flex justify-center">
                <Link
                  href={service.link}
                  className="border border-black px-6 py-2 hover:bg-black hover:text-white transition duration-300 text-sm font-semibold tracking-wider inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="flex md:hidden flex-col gap-8 justify-center items-center">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col w-full max-w-[358px]">
              <div className="relative w-full h-[180px] overflow-hidden group">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pb-4">
                  <h3 className="text-white text-xl font-bold text-center px-4">
                    {service.title}
                  </h3>
                </div>
              </div>
              <div className="p-6 text-sm text-black text-center bg-gradient-to-r from-[#5fa8d3] via-[#7bc76a] to-[#89CA29] min-h-[110px] flex items-center justify-center">
                <p className="leading-relaxed">{service.description}</p>
              </div>

              <div className="md:mt-4 flex justify-center">
                <Link
                  href={service.link}
                  className="mt-6 md:mt-14 border inline-block text-center border-black px-8 py-2 hover:bg-black hover:text-white transition duration-300 text-base font-semibold tracking-wider"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
