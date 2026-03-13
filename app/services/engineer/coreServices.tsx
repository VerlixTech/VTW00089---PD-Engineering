import Image from "next/image";
import { Wrench,ChartCandlestick, ShoppingCart, AirVent, Pickaxe, BadgeDollarSign } from "lucide-react";

const topServices = [
  {
    icon: Pickaxe,
    title: "Contracting & Trading",
    description:
      "Specializing in HVAC installation, pre-insulated and G.I. duct installation as per DW-142 specifications, and insulation of G.I. ducts according to industry standards.",
    tags: [],
  },
  {
    icon: AirVent,
    title: "Air Conditioning Solutions",
    description:
      "Supplying and installing a variety of air conditioning systems tailored to diverse projects across Qatar and Sri Lanka.",
    tags: [],
  },
  {
    icon: Wrench,
    title: "Fit-Out Jobs",
    description:
      "Supply, installation and modification of all civil electro-mechanical fit out projects",
    tags: ["CCC", "Arcade"],
  },
];

const iconGradientStyle = {
  background: "linear-gradient(135deg, #5fa8d3, #89CA29)",
};

type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
  tags: string[];
};

const ServiceCard = ({ service }: { service: Service }) => {
  const Icon = service.icon;
  return (
    <div className="flex flex-col gap-3 p-6 border border-gray-200 rounded-xl bg-white shadow-sm">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-2" style={iconGradientStyle}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-base font-semibold text-[#1E3A8A]">{service.title}</h3>
      <p className="text-[#374151] text-sm leading-relaxed">{service.description}</p>
      {service.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-1">
          {service.tags.map((tag, i) => (
            <span key={i} className="border border-gray-300 text-[#1E3A8A] text-xs px-3 py-1 rounded-sm">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

const CoreEngineeringServices = () => {
  return (
    <section className="pt-16 pb-6 lg:pt-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-[40px] font-bold text-[#1E3A8A] mb-2">
          Core Engineering Services
        </h2>
        <p className="text-gray-500 text-sm max-w-md mb-12">
          Our services are built on rigorous international benchmarks including SMACNA
          and DW-142 specifications.
        </p>

        {/* Top Row — mapped */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {topServices.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Procurement card */}
          <div className="flex flex-col gap-3 p-6 border border-gray-200 rounded-xl bg-white shadow-sm">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-2" style={iconGradientStyle}>
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-base font-semibold text-[#1E3A8A]">Procurement</h3>
            <p className="text-[#374151] text-sm leading-relaxed">
              fully furbished to import spare parts and equipment&apos;s from anywhere in the globe to meet the urgent requirements of the industries.
            </p>
            <div className="flex flex-wrap gap-2 mt-1">
              {["PCBs", "Fan Motors", "Sensors", "Condensers"].map((tag, i) => (
                <span key={i} className="border border-gray-300 text-[#1E3A8A] text-xs px-3 py-1 rounded-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

<div className="md:col-span-2 flex flex-col md:flex-row border border-gray-200 rounded-xl bg-[#F8FAFC] shadow-sm overflow-hidden">
  <div className="flex flex-col gap-3 p-6 md:w-3/5">
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center mb-2"
      style={iconGradientStyle}
    >
      <BadgeDollarSign className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-base font-semibold text-[#1E3A8A]">Trading</h3>
    <p className="text-[#374151] text-sm leading-relaxed">
      Providing a wide range of air conditioning accessories, including Climate Cool products and other air conditioning essentials.
    </p>
    <div className="flex flex-wrap gap-2 mt-1">
      {["Climate Cool", "ASPEN Drain Pump"].map((tag, i) => (
        <span
          key={i}
          className="border border-gray-300 text-[#1E3A8A] text-xs px-3 py-1 rounded-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>

  <div className="relative w-full md:w-2/5 h-[180px] md:h-[200px] flex-shrink-0 self-center">
    <Image
      src="/Industrial Ventilation & Cooling Solutions.svg"
      alt="Trading Solutions"
      fill
      className="object-contain p-3"
      sizes="(max-width: 768px) 100vw, 40vw"
    />
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default CoreEngineeringServices;