// "use client"

// import { useState, useEffect } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { cn } from "@/lib/utils"
// import { useRouter } from "next/navigation"
// import Image from "next/image"

// const slides = [
//    {
//     id: 0,
//     title: "Design, installation & maintenance",
//     description:
//       "Our expert team provides comprehensive installation and commissioning services for all industrial equipment, ensuring optimal performance and safety.",
//     image: "/design-installation-maintenance.jpeg",
//     cta: "See More",
//   }
// ]

// export function HeroSlider() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true)
//   const router = useRouter()

//   useEffect(() => {
//     if (!isAutoPlaying) return

//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length)
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [isAutoPlaying])

//   const goToSlide = (index: number) => {

//     setCurrentSlide(index)
//     setIsAutoPlaying(false)
//     setTimeout(() => setIsAutoPlaying(true), 10000)
//   }

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length)
//     setIsAutoPlaying(false)
//     setTimeout(() => setIsAutoPlaying(true), 10000)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
//     setIsAutoPlaying(false)
//     setTimeout(() => setIsAutoPlaying(true), 10000)
//   }

//   return (
//     <section id="home" className=" h-[80vh]">
//   {slides.map((slide, index) => (
//     <div
//       key={slide.id}
//       className={cn(
//         "absolute inset-0 transition-opacity duration-1000",
//         index === currentSlide ? "opacity-100" : "opacity-0"
//       )}
//     >
//       <div className="absolute inset-0 bg-black/70 z-10" />

//       <Image
//         src="/slide1.jpeg"
//         alt={slide.title}
//         className="w-full h-[100vh] object-cover"
//         width={1920}
//         height={1080}
//       />

//       <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
// <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
//   <div className=" text-center items-center flex flex-col ">
//     <h1 className="text-3xl max-w-[80%] sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-7xl sm:text-5xl lg:text-7xl font-semibold text-white mb-6 leading-tight">
//       {slide.title}
//     </h1>
//     <div className="flex flex-col items-center">
//       <p className="text-base max-w-[90%] sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl sm:text-lg lg:text-xl text-white/90 mb-8 leading-relaxed text-center ">
//         {slide.description}
//       </p>
//     </div>

//     <button
//       className="text-lg px-10 py-2 bg-[#000094] rounded-full font-medium text-white cursor-pointer transition"

//       onClick={() => router.push(`/services?service=${index}`)}
      
//     >
//       {slide.cta}
//     </button>
//   </div>
// </div>

//       </div>
//     </div>
//   ))}

//   <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
//     {slides.map((_, index) => (
//       <button
//         key={index}
//         onClick={() => goToSlide(index)}
//         className={cn(
//           "w-3 h-3 rounded-full transition-all duration-200",
//           index === currentSlide
//             ? "bg-white scale-125"
//             : "bg-white/50 hover:bg-white/75"
//         )}
//         aria-label={`Go to slide ${index + 1}`}
//       />
//     ))}
//   </div>
// </section>

//   )
// }

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  // {
  //   image: "/hero1.svg",
  //   title: "EMPOWERING THE NEXT GENERATION OF ENGINEERS",
  //   subtitle:
  //     "Industry-Focused HVAC Training & Professional Development Programs.",
  // },
  // {
  //   image: "/hero2.svg",
  //   title: "ADVANCED HVAC DESIGN TRAINING",
  //   subtitle: "Hands-on engineering programs for future professionals.",
  // },
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