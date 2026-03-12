import Image from "next/image";
import Link from "next/link";
import { newsData } from "@/data/newsData";

const News = () => {
  const latestNews = [...newsData].reverse().slice(0, 3);
  // const latestNews = newsData.slice(-3);

  return (
    <section className="py-10 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-lg md:text-[40px] font-bold mb-4">Latest News</h2>
        <p className="text-gray-600 text-lg md:text-[20px] max-w-2xl mx-auto mb-14">
          Stay updated with our recent projects, workshops, and professional
          training programs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestNews.map((item, index) => (
            <div key={index} className="flex flex-col text-left">
              <div className="relative w-full h-[348px] overflow-hidden mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              <h3 className="text-lg font-bold mb-2 mt-4 line-clamp-2">{item.title}</h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                {item.excerpt}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link 
            href="/news" 
            className="mt-14 border inline-block text-center border-black px-8 py-2 hover:bg-black hover:text-white transition duration-300 text-base font-semibold tracking-wider"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;