import { Wrench } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Contracting & Trading",
    description:
      "Specializing in HVAC installation, pre-insulated and G.I. duct installation as per  DW-142 specifications, and insulation of G.I. ducts according to industry  standards.",
    tags: [],
  },
  {
    icon: Wrench ,
    title: "Air Conditioning Solutions",
    description:
      "Supplying and installing a variety of air conditioning systems tailored to diverse  projects across Qatar and Sri Lanka.",
    tags: [],
  },
  {
    icon: Wrench,
    title: "Fit-Out Jobs",
    description:
      "Supply, installation and modification of all civil electro-mechanical  fit  out projects ",
    tags: ["CCC", "Arcade"],
  },
  {
    icon: Wrench,
    title: "Chemical Treatment",
    description:
      'Directly supplying and executing chemical treatment ("Kimberlite") solutions for  various projects in Qatar.',
    tags: [],
  },
  {
    icon: Wrench,
    title: "Trading",
    description:
      "Providing a wide range of air conditioning accessories, including Climate Cool  products and other air conditioning essentials.",
    tags: ["Climate Cool"],
  },
  {
    icon: Wrench,
    title: "Procurement",
    description:
      "fully furbished to import spare parts and equipment’s from anywhere in the globe to meet  the urgent requirements of the industries.",
    tags: ["PCBs", "Fan Motors", "Sensors", "Condensers"],
    bordered: true,
  },
];

const iconGradientStyle = {
  background: "linear-gradient(135deg, #5fa8d3, #89CA29)",
};

const CoreEngineeringServices = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A8A] mb-2">
          Core Engineering Services
        </h2>
        <p className="text-gray-500 text-sm max-w-md mb-12">
          Our services are built on rigorous international benchmarks including SMACNA
and DW-142 specifications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={"flex flex-col gap-3 p-6 border border-gray-200 rounded-xl bg-white shadow-sm"
                    }
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-2" style={iconGradientStyle} >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#1E3A8A]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#374151] text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Tags */}
                {service.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-1">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="border border-gray-300 text-[#1E3A8A] text-xs px-3 py-1 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreEngineeringServices;
