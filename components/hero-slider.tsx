"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image: "/hero1.svg",
    title: "EMPOWERING THE NEXT GENERATION OF ENGINEERS",
    subtitle:
      "Industry-Focused HVAC Training & Professional Development Programs.",
  },
  {
    image: "/hero2.svg",
    title: "ADVANCED HVAC DESIGN TRAINING",
    subtitle: "Hands-on engineering programs for future professionals.",
  },
    {
    image: "/hero3.svg",
    title: "Engineering Excellence in HVAC & MEP Solutions",
    subtitle: "Professional contracting, installation, and technical expertise you can trust.",
  },
];

export function HeroSlider() {
  return (
    <section className="relative w-full h-[100vh]">

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[100vh] bg-cover bg-center relative flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-black to-transparent"></div>
              {/* Dark overlay */}

              <div className="absolute inset-0 bg-black/60"></div>

              {/* Content */}

              <div className="relative z-10 text-center text-white px-6 max-w-4xl">

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {slide.title}
                </h1>

                <p className="mt-6 text-lg md:text-xl text-gray-200">
                  {slide.subtitle}
                </p>

                {/* Stats Card */}

                <div className="mt-12 backdrop-blur-lg bg-white/30  rounded-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">

                  <div>
                    <h3 className="text-3xl font-bold">100%</h3>
                    <p className="text-gray-200">Trusted</p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold">18+</h3>
                    <p className="text-gray-200">Years Experiences</p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-white">
                      100+
                    </h3>
                    <p className="text-gray-200">Projects Completed</p>
                  </div>

                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
{/* Bottom Gradient Bar */}
<div className="absolute bottom-0 left-0 w-full h-[2vh] bg-gradient-to-r from-[#66C5FF] to-[#89CA29] z-10"></div>
    </section>
  );
}