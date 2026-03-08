import { BadgeCheck } from "lucide-react";


interface PageHeroProps {
    title?: string;
    heading: string;
    subHeading?: string;
}

const PageHero = ({ title, heading, subHeading }: PageHeroProps) => {
  return (
    <section
      className="relative w-full flex items-center justify-center mt-20"
      style={{ background: "#000", minHeight: "340px" }}
    >
      {/* background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/bg-Net.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />

      <div className="relative z-10 text-center px-6 max-md:py-12">
        {/* Badge */}
        {title && (
          <div className="inline-flex items-center gap-2 border border-blue-500 rounded-full px-5 py-2 mb-6 bg-[#0a0f1e]">
            <BadgeCheck className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
              {title}
            </span>
          </div>
        )}

        {/* Main heading with gradient */}
        {heading && (
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              background: "linear-gradient(to right, #5fa8d3, #7bc76a, #89CA29)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {heading}
          </h1>
        )}

        {subHeading && (
          <div>
            <h2 className={`text-white text-[32px] text-center ${title === 'About Us' ? 'font-markScript' : ''}`}>
              {subHeading}
            </h2>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[2vh] bg-gradient-to-r from-[#66C5FF] to-[#89CA29] z-10"></div>
    </section>
  );
};

export default PageHero;
