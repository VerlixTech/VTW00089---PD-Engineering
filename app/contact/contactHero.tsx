import { BadgeCheck } from "lucide-react";

const ContactHero = () => {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center mt-20"
      style={{ background: "#000", minHeight: "475px" }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/bg-Net.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />

      <div className="relative z-10 text-center px-6 w-full max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 border border-blue-500 rounded-full px-5 py-2 mb-6 bg-[#0a0f1e]">
          <BadgeCheck className="w-5 h-5 text-blue-400" />
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">
            Get In Touch
          </span>
        </div>

        <h1
          className="text-4xl md:text-5xl font-bold mb-12"
          style={{
            background: "linear-gradient(to right, #5fa8d3, #7bc76a, #89CA29)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Contact Details
        </h1>

        <div className="flex flex-col md:flex-row justify-between max:md:text-center gap-10 px-2">
          <div>
            <p className="text-[#9CA3AF] text-[10px] uppercase tracking-widest mb-3">
              Our Headquarters
            </p>
            <p className="text-white text-base leading-relaxed">
              No. 310, Dehiwala Road,<br />
              Bataketthara, Piliyandala, Sri Lanka
            </p>
          </div>

          <div className="md:text-right">
            <p className="text-[#9CA3AF] text-[10px] uppercase tracking-widest mb-3">
              Communications
            </p>
            <p className="text-white text-lg md:text-xl mb-1">+94 11 218 3349</p>
            <p className="text-white text-lg md:text-xl mb-1">+94 71 062 5942</p>
            <p className="text-[#9CA3AF] text:base md:text-lg">info@pdengineeringandacademy.com</p>
          </div>
        </div>
      </div>

      {/* Bottom gradient bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2vh] bg-gradient-to-r from-[#66C5FF] to-[#89CA29] z-10" />
    </section>
  );
};

export default ContactHero;