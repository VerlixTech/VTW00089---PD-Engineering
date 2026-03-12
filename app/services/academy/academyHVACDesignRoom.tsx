const features = [
  "Practical and calculation-based learning",
  "Manual and software-based design methods",
  "Real sample drawings and tenders",
  "Industry-standard practices",
];

const AcademyHVACDesignRoom = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* left */}
          <div>
            <p className=" text-4xl mb-1 ">About</p>
            <h2 className="text-2xl md:text-[40px] font-bold leading-tight mb-8">
              HAVC <br className="max-md:hidden" /> Design Room
            </h2>
            <div className="space-y-5  text-base md:text-lg leading-relaxed">
              <p>
                PD Engineering & Academy is a professional training institute
                focused on delivering practical, industry-oriented HVAC design
                education.
              </p>
              <p>
                Our HVAC Design Room is developed to bridge the gap between
                academic knowledge and real-world engineering practice, covering
                calculations, system design, drawings, and tender preparation.
              </p>
              <p>
                We prepare engineers to confidently handle HVAC projects from
                concept design to execution-level documentation.
              </p>
            </div>
          </div>

          {/* Right */}
          <div
            className="rounded-3xl p-10 flex flex-col justify-center gap-8"
            style={{ background: "#0d0f0e" }}
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div
                  className="flex-shrink-0 w-1 rounded-full"
                  style={{ height: "28px", background: "#89CA29" }}
                />
                <span className="text-white font-semibold text-sm md:text-base">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademyHVACDesignRoom;
