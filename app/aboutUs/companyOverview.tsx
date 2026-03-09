"use client";
import { useState } from "react";
import Image from "next/image";
import { BadgeCheck, Eye, Rocket } from "lucide-react";

const iconGradientStyle = {
  background: "linear-gradient(135deg, #5fa8d3, #89CA29)",
};

const CompanyOverview = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-4 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 border border-gray-300 rounded-full bg-gray-100 px-4 py-1 mb-5 w-fit font-semibold">
              <BadgeCheck className="w-4 h-4 text-[#3B82F6]" />
              <span className="text-[#3B82F6] text-xs uppercase tracking-widest">
                Company Overview
              </span>
            </div>

            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              PD Engineering & <br /> Academy
            </h2>

            <p className="text-gray-500 text-base leading-relaxed mb-4">
              PD Engineering & Academy (Pvt) Ltd is a specialized HVAC and MEP
              solutions provider committed to delivering high-quality
              engineering services and professional technical training. With
              operations established overseas in Qatar since January 5, 2012,
              and expanded to Sri Lanka in 2024, the company combines
              international exposure with strong local expertise to serve a
              diverse range of commercial, industrial, and hospitality projects.
            </p>

            <p className="text-gray-500 text-base leading-relaxed mb-6">
              We operate across two core sectors: engineering contracting and
              professional training. On the contracting side, we provide
              comprehensive HVAC and electromechanical services, including
              supply, installation, and maintenance of air conditioning systems,
              chilled water systems, ventilation systems, and complete ducting
              works in compliance with international standards such as DW-142.
              Our experience covers fire-rated duct installations, cold air duct
              systems, chilled water FCUs, and full air conditioning solutions
              tailored to project-specific requirements. We also undertake civil
              and electro-mechanical fit-out works, ensuring integrated and
              coordinated project execution
            </p>

            {expanded && (
              <div>
                <p className="text-gray-500 text-base leading-relaxed mb-6">
                  Our procurement and trading division is structured to support
                  urgent industrial requirements by sourcing and importing spare
                  parts and equipment globally. From PCBs, fan motors, and
                  sensors to condensers and air conditioning accessories, we
                  ensure timely supply and technical reliability. Additionally,
                  we provide chemical treatment solutions for HVAC and cooling
                  water systems, supporting system efficiency and long-term
                  operational performance.
                </p>

                <p className="text-gray-500 text-base leading-relaxed mb-6">
                  PD Engineering & Academy is led by Eng. Preemal Kumara, a
                  Project Manager with over 18 years of experience in local and
                  international markets. His expertise in HVAC systems,
                  electromechanical services, and cooling water treatment
                  strengthens both our technical execution and training
                  standards.
                </p>

                <p className="text-gray-500 text-base leading-relaxed mb-6">
                  Through our HVAC Design Room, we extend our expertise into
                  professional development. Our structured training programs
                  focus on real-world HVAC design practices, including system
                  calculations, equipment selection, duct design, chilled water
                  systems, and tender preparation. The objective is to bridge
                  the gap between academic knowledge and practical industry
                  application, preparing engineers and technicians to
                  confidently handle live projects.
                </p>
              </div>
            )}

            <div>
              <button
                onClick={() => setExpanded(!expanded)}
                className="px-8 py-2 text-sm font-semibold bg-black text-white hover:bg-gray-800 transition duration-300 rounded-md "
              >
                {expanded ? "View Less" : "View More"}
              </button>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-3 h-[420px]">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Image
                src="/Gallery03.svg"
                alt="AboutUsImg01"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-3 h-full">
              <div className="relative w-full flex-1 overflow-hidden rounded-lg">
                <Image
                  src="/Gallery02.svg"
                  alt="AboutUsImg02"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full flex-1 overflow-hidden rounded-lg">
                <Image
                  src="/Gallery04.svg"
                  alt="AboutUsImg03"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <section className="py-16">
          <div>
            <div className="grid md:grid-cols-2 gap-6">
              {/*Vision */}
              <div className="border border-gray-200 rounded-xl p-8 bg-white shadow-sm">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={iconGradientStyle}
                >
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
                  Our Vision
                </h3>
                <p className="text-[#475569] text-base">
                  To become a leading engineering and technical education
                  provider recognized for quality, innovation, and excellence.
                </p>
              </div>

              {/*Mission */}
              <div className="border border-gray-200 rounded-xl p-8 bg-white shadow-sm">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={iconGradientStyle}
                >
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
                  Our Mission
                </h3>
                <p className="text-[#475569] text-base leading-relaxed mb-2">
                  To provide:
                </p>
                <ul className="text-[#475569] text-base leading-relaxed space-y-1">
                  <li>• Comfort in homes,</li>
                  <li>
                    • Controlled environmental conditions in offices for
                    efficient staff performance and maximum productivity,
                  </li>
                  <li>
                    • Enhanced quality of life for residents, both locally and
                    overseas, by leveraging the latest technology available
                  </li>
                  <li>• Developing professionals</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="pb-8 md:pb-16">
          <div>
            <div
              className="rounded-2xl px-10 py-12 flex flex-col md:flex-row gap-10 items-center"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(26,26,46,0.92) 0%, rgba(22,33,62,0.92) 50%, rgba(26,42,26,0.92) 100%), url('/successProject02.svg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Profile Image */}
              <div className="flex-shrink-0 flex items-start justify-center ">
                <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-gray-700">
                  <Image
                    src="/leader.svg"
                    alt="Eng. Preemal Kumara"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <div className="inline-flex items-center gap-2 border border-[#3B82F633] rounded-full bg-[#3B82F61A] px-4 py-1 mb-5 w-fit font-semibold">
                  <span className="text-[#3B82F6] text-xs uppercase tracking-widest">
                    Leadership
                  </span>
                </div>

                <h3
                  className="text-2xl font-bold mb-4"
                  style={{
                    background: "linear-gradient(to right, #89CA29, #66C5FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Eng. Preemal Kumara
                </h3>

                {/* Bio paragraphs */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Eng. Preemal Kumara is a distinguished Mechanical and HVAC
                  professional with over eighteen years of extensive experience
                  in Sri Lanka and the Middle East, particularly in Qatar. He
                  holds a Master of Energy Management from the Open University
                  of Sri Lanka, an MBA from the University of Wolverhampton
                  (UK), a Bachelor of Engineering from the University of Bolton
                  (UK), and a Higher National Diploma in Mechanical
                  Engineering.{" "}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  He is an Incorporated Engineer, a Fellow Member of the
                  Institution of Incorporated Engineers Sri Lanka (FIIESL), and
                  a member of MEGSL. A recognized, certified expert in VRF
                  technology, he has led complex HVAC design, installation, and
                  optimization projects. Formerly Head of Engineering at Abans
                  PLC, he contributes to academia by conducting HVAC lectures at
                  German Tech and Korean Tech and delivering CPD programs for
                  IIESL, the Ministry of Environment, and University Colleges.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  In addition, he is an active member of Toastmasters
                  International, where he promotes leadership, communication
                  excellence, and professional development. He is widely
                  respected for technical excellence, leadership, and commitment
                  to sustainable engineering.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default CompanyOverview;
