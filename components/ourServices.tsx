import Image from "next/image";

const services = [
  {
    title: "Contracting and Trading",
    image: "/Engine-neatly-shelved-800x450-1 1.svg",
    description:
      "Contracting and Trading Specializing in HVAC installation, pre-insulated and G.I. duct installation as per DW-142 specifications, and insulation of G.I. ducts according to industry standards.",
    position: "bottom",
  },
  {
    title: "Air Conditioning Solutions",
    image: "/Engine-neatly-shelved-800x450-1 1 (1).svg",
    description:
      "Supplying and installing a variety of air conditioning systems tailored to diverse projects across Qatar and Sri Lanka.",
    position: "top",
  },
  {
    title: "Academy",
    image: "/Engine-neatly-shelved-800x450-1 1 (2).svg",
    description:
      "Master modern industrial and residential HVAC engineering through our comprehensive modular training framework designed by industry experts.",
    position: "bottom",
  },
];

const OurServices = () => {
  return (
    <section className="py-20 px-6 max-md:pt-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14 lg:text-lg text-base  text-justify">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        {/* Desktop Cards y */}
        <div className="hidden md:flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col w-[348px]">
              {service.position === "bottom" && (
                <>
                  <div className="relative w-full h-[404px] overflow-hidden">
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute bottom-[15%] left-0 right-0 flex items-end justify-center pb-4">
                      <h3 className="text-white text-3xl font-semibold text-center px-4">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-10 text-base text-black text-center bg-gradient-to-r from-[#5fa8d3] via-[#7bc76a] to-[#89CA29] h-[180px] flex items-center justify-center">
                    <p className="leading-relaxed">{service.description}</p>
                  </div>
                </>
              )}
              {service.position === "top" && (
                <>
                  <div className="p-10 text-base text-black text-center bg-gradient-to-r from-[#5fa8d3] via-[#7bc76a] to-[#89CA29] h-[180px] flex items-center justify-center">
                    <p className="leading-relaxed">{service.description}</p>
                  </div>
                  <div className="relative w-full h-[404px] overflow-hidden">
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute top-[15%] left-0 right-0 flex items-start justify-center pt-4">
                      <h3 className="text-white text-3xl font-semibold text-center px-4">{service.title}</h3>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="flex md:hidden flex-col gap-6 justify-center items-center">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col w-full max-w-[358px] px-auto">
              <div className="relative w-full h-[220px] overflow-hidden">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pb-4">
                  <h3 className="text-white text-xl font-bold text-center px-4">{service.title}</h3>
                </div>
              </div>
              <div className="p-6 text-sm text-black text-center bg-gradient-to-r from-[#5fa8d3] via-[#7bc76a] to-[#89CA29] flex items-center justify-center min-h-[110px]">
                <p className="leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <button className="mt-14 border border-black px-10 py-3 hover:bg-black hover:text-white transition duration-300 text-sm uppercase tracking-wider">
          View More
        </button>
      </div>
    </section>
  );
};

export default OurServices;