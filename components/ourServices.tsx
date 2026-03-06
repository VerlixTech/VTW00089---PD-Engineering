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

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col w-[348px]">
              {/* Cards with image on top, description on bottom (cards 1 & 3) */}
              {service.position === "bottom" && (
                <>
                  {/* Image Container */}
                  <div className="relative w-full h-[404px] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Title - pinned to bottom of image */}
                    <div className="absolute bottom-[10%] left-0 right-0 flex items-end justify-center pb-4">
                      <h3 className="text-white text-3xl font-bold text-center px-4">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description Box with Gradient */}
                  <div className="p-10 text-base text-black text-center bg-gradient-to-r from-[#5fa8d3] via-[#7bc76a] to-[#89CA29] h-[184px] flex items-center justify-center">
                    <p className="leading-relaxed">{service.description}</p>
                  </div>
                </>
              )}

              {/* Card with description on top, image on bottom (card 2) */}
              {service.position === "top" && (
                <>
                  {/* Description Box with Gradient */}
                  <div className="p-10 text-base text-black text-center bg-gradient-to-r from-[#5fa8d3] via-[#7bc76a] to-[#89CA29] h-[180px] flex items-center justify-center">
                    <p className="leading-relaxed">{service.description}</p>
                  </div>

                  {/* Image Container */}
                  <div className="relative w-full h-[404px] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Title - pinned to top of image */}
                    <div className="absolute top-[10%] left-0 right-0 flex items-start justify-center pt-4">
                      <h3 className="text-white text-3xl font-bold text-center px-4">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <button className="mt-14 border border-black px-8 py-2 hover:bg-black hover:text-white transition duration-300 text-base font-semibold tracking-wider">
          View More
        </button>
      </div>
    </section>
  );
};

export default OurServices;