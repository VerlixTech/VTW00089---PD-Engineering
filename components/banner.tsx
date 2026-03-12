interface BannerProps {
  heading: string;
  description: string;
}

const Banner = ({ heading, description }: BannerProps) => {
  return (
    <section className="px-6 pt-8 pb-16">
      <div
        className="max-w-7xl mx-auto rounded-2xl px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-8"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(26,26,46,0.92) 0%, rgba(22,33,62,0.92) 50%, rgba(26,42,26,0.92) 100%), url('/successProject02.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left Content */}
        <div className="flex-1 max-w-lg">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 leading-tight">
            {heading}
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {description}
          </p>
        </div>
          {/* Right Content */}
        <div className="flex-shrink-0">
          <button
            className="px-10 py-3 rounded-full text-white font-medium text-sm transition duration-300 hover:opacity-90"
            style={{
              background: "linear-gradient(to right, #5fa8d3, #89CA29)",
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;