"use client";

const features = [
  "Industry-Standard Installation Practices",
  "Experienced Engineering Team",
  "Quality-Tested Materials",
  "On-time project completion",
  "Strong After-Sales Support",
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-[#07131a] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-7 gap-12 items-center">
        {/* Left Side */}
        <div className="col-span-3">
          <p className=" uppercase font-bold text-2xl max-lg:text-[10px] tracking-widest text-text-[#FFFFFF] mb-4">
            Why Choose Us?
          </p>

          <h2 className="lg:text-3xl md:text-2xl text-xl font-bold leading-snug">
            <span className="bg-gradient-to-r from-[#89CA29] via-[#7bc76a] to-[#5fa8d3] bg-clip-text text-transparent">
              Redefining Engineering <br /> Excellence With PD <br />
              Engineering & <br />
              Academy
            </span>
          </h2>
        </div>

        {/* Right Side */}
        <div className="col-span-4 space-y-6 text-[#FFFFFFA1] lg:text-lg md:text-sm text-xs text-justify">
          <p>
            Where precision meets performance in MEP and HVAC solutions. With
            extensive industry experience and technical expertise, PD
            Engineering & Academy stands as a trusted name in engineering
            contracting and professional training. Our commitment goes beyond
            delivering systems.
          </p>

          <p>
            we provide dependable solutions tailored to your specific needs.
            Every project is handled with care, technical accuracy, and a focus
            on long-term efficiency. We believe in building lasting partnerships
            based on trust, quality, and measurable results. ensuring our
            clients receive not just a service, but a complete engineering
            experience.
          </p>

          {/* Features */}
          <div className="space-y-3 pt-4">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-[4px] h-5 bg-[#89CA29]" />
                <p className="text-white text-base max-md:text-[9px] font-bold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
