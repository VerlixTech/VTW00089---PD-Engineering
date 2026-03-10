"use client";

// import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const galleryImages = [
    { src: "/Gallery01.svg", alt: "HVAC duct installation on ceiling" },
    { src: "/Gallery02.svg", alt: "Air conditioning unit internal components" },
    { src: "/Gallery03.svg", alt: "HVAC technicians on site" },
    { src: "/Gallery04.svg", alt: "Pipe and duct installation" },
    { src: "/Gallery05.svg", alt: "Industrial pump system installation" },
    { src: "/Gallery06.svg", alt: "HVAC academy training session" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(timer);
  }, [galleryImages.length]);

  // const goToNext = () => {
  //   setCurrentIndex((prevIndex) => 
  //     prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  // const goToPrev = () => {
  //   setCurrentIndex((prevIndex) => 
  //     prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
  //   );
  // };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section 
      className="pt-20 max-md:pt-12 pb-10 px-6 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg-Net.svg')",
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 lg:text-lg text-base">
          Explore our portfolio showcasing completed projects, installations, and
          hands-on training sessions.
        </p>

        {/* Desktop Grid */}
        <div className="hidden md:block">
          {/* Row 1 */}
          <div className="flex gap-3 mb-3">
            {/* Image 1 - largest */}
            <div className="relative overflow-hidden" style={{ flex: "0 0 45%", height: "300px" }}>
              <Image src="/Gallery01.svg" alt="HVAC duct installation on ceiling" fill className="object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            {/* Image 2 - medium */}
            <div className="relative overflow-hidden" style={{ flex: "0 0 33%", height: "300px" }}>
              <Image src="/Gallery02.svg" alt="Air conditioning unit internal components" fill className="object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            {/* Image 3 - smallest */}
            <div className="relative overflow-hidden" style={{ flex: "1", height: "300px" }}>
              <Image src="/Gallery03.svg" alt="HVAC technicians on site" fill className="object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex gap-3">
            {/* Image 4 - smallest */}
            <div className="relative overflow-hidden" style={{ flex: "0 0 25%", height: "300px" }}>
              <Image src="/Gallery04.svg" alt="Pipe and duct installation" fill className="object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            {/* Image 5 - medium */}
            <div className="relative overflow-hidden" style={{ flex: "0 0 23%", height: "300px" }}>
              <Image src="/Gallery05.svg" alt="Industrial pump system installation" fill className="object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            {/* Image 6 - largest */}
            <div className="relative overflow-hidden" style={{ flex: "1", height: "300px" }}>
              <Image src="/Gallery06.svg" alt="HVAC academy training session" fill className="object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <div className="relative w-full h-[220px] overflow-hidden rounded-lg">
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              fill
              className="object-cover"
            />
            
            {/* Navigation Arrows */}
            {/* <button
              onClick={goToPrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition duration-300"
              aria-label="Next image"
            >
               <ChevronRight />
            </button> */}
          </div>

          {/* Thumbnail/Dots Navigation */}
          <div className="flex justify-center gap-2 mt-4">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-8 bg-black" 
                    : "w-2 bg-gray-400 hover:bg-gray-600"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Image Counter */}
          {/* <p className="text-gray-600 mt-2 text-sm">
            {currentIndex + 1} / {galleryImages.length}
          </p> */}
        </div>
        
        <div className="flex justify-center">
          <button className=" mt-10 md:mt-14 border border-black px-8 py-2 hover:bg-black hover:text-white transition duration-300 text-base font-semibold tracking-wider">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;