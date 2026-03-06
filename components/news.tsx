import Image from "next/image";

const news = [
  {
    image: "/Engine-neatly-shelved-800x450-1 1.svg",
    title: "Supply, installation and modification",
    description:
      "Supply, installation and modification of all civil electro-mechanical fit out projects ( CCC, Arcade)...",
  },
  {
    image: "/Engine-neatly-shelved-800x450-1 1.svg",
    title: "Supply, installation and modification",
    description:
      "Supply, installation and modification of all civil electro-mechanical fit out projects ( CCC, Arcade)...",
  },
  {
    image: "/Engine-neatly-shelved-800x450-1 1.svg",
    title: "Supply, installation and modification",
    description:
      "Supply, installation and modification of all civil electro-mechanical fit out projects ( CCC, Arcade)...",
  },
];

const News = () => {
  return (
    <section className="py-10 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-lg md:text-[40px] font-bold mb-4">Latest News</h2>
        <p className="text-gray-600 text-lg md:text-[20px] max-w-2xl mx-auto mb-14">
          Stay updated with our recent projects, workshops, and professional
          training programs.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div key={index} className="flex flex-col text-left">
              {/* Image */}
              <div className="relative w-full h-[348px] overflow-hidden mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>

              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Read More Button */}
              <div>
                <button className="border border-black px-6 py-2 text-sm hover:bg-black hover:text-white transition duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;