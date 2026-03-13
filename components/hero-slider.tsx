"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image: "heroSlider/hero1.svg",
    title: "EMPOWERING THE NEXT GENERATION OF ENGINEERS",
    subtitle:
      "Industry-Focused HVAC Training & Professional Development Programs.",
  },
  {
    image: "heroSlider/hero3.svg",
    title: "Quality. Accuracy. Performance worldwide.",
    subtitle: "We deliver world-class engineering solutions built on quality workmanship, precise execution, and high-performance results.",
  },
  {
    image: "heroSlider/hero2.svg",
    title: "Engineering Excellence in HVAC & MEP Solutions",
    subtitle:
      "Professional contracting, installation, and technical expertise you can trust.",
  },
   {
    image: "heroSlider/hero4.svg",
    title: "ASPEN Drain Pump Now Available at PD Engineers",
    subtitle:
      "The world’s slimmest condensate removal pump is designed to fit where other’s can’t!",
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

              <div className="relative z-10 text-center text-white px-6 max-w-4xl ">
                <h1 className="text-[26px] md:text-5xl font-bold leading-tight">
                  {slide.title}
                </h1>

                <p className="mt-6 text-base md:text-lg text-gray-200">
                  {slide.subtitle}
                </p>

                {/* Stats Card */}

                <div className="mt-12 max-w-3xl mx-auto">
                  {/* Mobile: stacked individual cards */}
                  <div className="flex flex-col items-center gap-3 md:hidden  ">
                    <div className="backdrop-blur-lg bg-white/30 rounded-2xl py-4 px-8 text-center  w-[70%] ">
                      <h3 className="font-bold text-lg">100%</h3>
                      <p className="text-gray-200 text-sm ">Trusted</p>
                    </div>
                    <div className="backdrop-blur-lg bg-white/30 rounded-2xl py-4 px-8 text-center  w-[70%]">
                      <h3 className=" font-bold text-lg">18+</h3>
                      <p className="text-gray-200 text-sm">Years Experience</p>
                    </div>
                    <div className="backdrop-blur-lg bg-white/30 rounded-2xl py-4 px-8 text-center  w-[70%]">
                      <h3 className=" font-bold text-white text-lg">100+</h3>
                      <p className="text-gray-200 text-sm">Projects Completed</p>
                    </div>
                  </div>

                  {/* Desktop: single card with grid */}
                  <div className="hidden md:grid backdrop-blur-lg bg-white/30 rounded-2xl p-8 grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-3xl font-bold">100%</h3>
                      <p className="text-gray-200">Trusted</p>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">18+</h3>
                      <p className="text-gray-200">Years Experiences</p>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">100+</h3>
                      <p className="text-gray-200">Projects Completed</p>
                    </div>
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
