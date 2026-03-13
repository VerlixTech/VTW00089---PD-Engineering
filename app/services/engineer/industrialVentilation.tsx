import Image from "next/image";
import { Fan } from "lucide-react";

const IndustrialVentilation = () => {
  return (
    <section className="px-6">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl p-10 shadow-sm border border-gray-100 bg-[#F8FAFC]">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{
                  background: "linear-gradient(135deg, #5fa8d3, #89CA29)",
                }}
              >
                <Fan className="w-6 h-6 text-white" />
              </div>

              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Industrial Ventilation &amp; Cooling Solutions
              </h2>

              <div className="space-y-4 text-[#374151] text-sm leading-relaxed">
                <p>
                  We provide comprehensive industrial ventilation and cooling
                  solutions, including evaporative cooling systems, large
                  warehouse ventilation, industrial kitchen ventilation, car
                  park ventilation, and toilet exhaust ventilation systems. Our
                  services cover the complete process from engineering design to
                  supply, installation, and final commissioning.
                </p>
                <p>
                  Our experienced engineering team ensures that each project is
                  carried out with systematic planning, professional
                  installation, and methodical testing and commissioning,
                  ensuring optimum performance, energy efficiency, and
                  compliance with relevant industry standards.
                </p>
                <p>
                  We are committed to delivering reliable, cost-effective, and
                  high-quality ventilation solutions tailored to meet the
                  specific requirements of industrial, commercial, and
                  institutional facilities.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center h-full">
              <div className="relative w-full h-[260px] rounded-xl overflow-hidden">
                <Image
                  src="/Industrial Ventilation & Cooling Solutions_02.svg"
                  alt="Industrial Ventilation & Cooling Solutions"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default IndustrialVentilation;
