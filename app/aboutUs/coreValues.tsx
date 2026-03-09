import { ShieldCheck, Bot, Lightbulb } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Honesty and transparency are the foundations of our professional engineering consultancy.",
  },
  {
    icon: Bot,
    title: "Quality",
    description:
      "We never compromise on the technical precision of our systems or educational content.",
  },
  {
    icon: Lightbulb,
    title: "Technical Quality",
    description: "Embracing the latest digital tools and green technologies",
  },
];

const CoreValues = () => {
  return (
    <section className=" px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-14">
          <div>
            <div className="inline-flex items-center gap-2 border border-gray-300 rounded-full bg-gray-100 px-4 py-1 mb-5 w-fit font-semibold">
              <span className="text-[#3B82F6] text-xs uppercase tracking-widest">
                core values
              </span>
            </div>
            <h2 className="text-4xl md:text-[40px] font-bold text-gray-900 leading-tight">
              Delivering excellence <br /> through innovation and <br />{" "}
              reliable engineering.
            </h2>
          </div>
          <div className="md:flex md:items-center md:justify-end">
            <p className="text-base leading-relaxed max-w-sm">
              We specialize in high-performance MEP designs that maximize energy
              efficiency while ensuring optimal human comfort.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="rounded-2xl p-8 flex flex-col gap-6 bg-[#00070D]"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[#137FEC1A]">
                  <Icon className="w-6 h-6 text-[#89CA29]" />
                </div>
                <h3 className="text-white text-xl font-bold">{value.title}</h3>
                <p className="text-[#E4E4E4] text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
