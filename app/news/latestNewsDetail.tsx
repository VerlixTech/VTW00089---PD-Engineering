"use client";

import { useState } from "react";
import Image from "next/image";
import { newsData } from "@/data/newsData";

const INITIAL_COUNT = 2;

const LatestNewsList = () => {
  const [expandedSlugs, setExpandedSlugs] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const toggleExpand = (slug: string) => {
    setExpandedSlugs((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const latestNews = [...newsData].reverse();
  const visibleNews = latestNews.slice(0, visibleCount);
  const hasMore = visibleCount < latestNews.length;

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-14">
          {visibleNews.map((news) => {
            const isExpanded = expandedSlugs.includes(news.slug);

            return (
              <article key={news.slug}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#195DE6] text-xs md:text-sm ">
                    {news.category}
                  </span>
                  <span className="text-[#94A3B8] text-xs md:text-sm">·</span>
                  <span className="text-[#64748B] text-xs md:text-sm">{news.date}</span>
                </div>

                <h2 className="text-2xl md:text-5xl font-bold text-[#0F172A] max-w-3xl leading-tight mb-5">
                  {news.title}
                </h2>

                <div className="relative w-full h-[200px] md:h-[375px] lg:h-[450px] overflow-hidden mb-4">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                  />
                  {news.imageCaption && (
                    <div className="absolute bottom-[4%] right-[2%] rounded-lg bg-black/60 transparent text-white text-[10px] md:text-xs px-3 py-1 uppercase tracking-wider">
                      {news.imageCaption}
                    </div>
                  )}
                </div>

                <p className="text-[#475569] text-sm md:text-base leading-relaxed mb-2">
                  {news.excerpt}
                </p>

                {isExpanded && (
                  <p className="text-[#475569] text-sm md:text-base leading-relaxed mb-2 mt-3">
                    {news.fullContent}
                  </p>
                )}

                {/* Read More / Read Less */}
                <div className="mt-4">
                  <button
                    onClick={() => toggleExpand(news.slug)}
                    className="border border-gray-900 px-5 py-1.5 text-sm md:text-base font-semibold hover:bg-gray-900 hover:text-white transition duration-300"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Load More Articles */}
        {hasMore && (
          <div className="flex justify-center mt-14">
            <button
              onClick={() => setVisibleCount(latestNews.length)}
              className="border border-gray-900 px-8 py-2 text-sm font-medium hover:bg-gray-900 hover:text-white transition duration-300"
            >
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestNewsList;