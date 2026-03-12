"use client";

// import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const GalleryGrid = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleGrids, setVisibleGrids] = useState(1); // Start with 1 grid visible

  const galleryImages = [
    { src: "/Gallery01.svg", alt: "HVAC duct installation on ceiling" },
    { src: "/Gallery02.svg", alt: "Air conditioning unit internal components" },
    { src: "/Gallery03.svg", alt: "HVAC technicians on site" },
    { src: "/Gallery04.svg", alt: "Pipe and duct installation" },
    { src: "/Gallery05.svg", alt: "Industrial pump system installation" },
    { src: "/Gallery06.svg", alt: "HVAC academy training session" },
    // images for second grid
    { src: "/Gallery01.svg", alt: "HVAC duct installation on ceiling" },
    { src: "/Gallery02.svg", alt: "Air conditioning unit internal components" },
    { src: "/Gallery03.svg", alt: "HVAC technicians on site" },
    { src: "/Gallery04.svg", alt: "Pipe and duct installation" },
    { src: "/Gallery05.svg", alt: "Industrial pump system installation" },
    { src: "/Gallery06.svg", alt: "HVAC academy training session" },
    // images for third grid
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
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleViewMore = () => {
    setVisibleGrids((prev) => prev + 1);
  };

  const shouldShowButton = visibleGrids < 3; 

  // Helper function to render a grid with specific images
  const renderGrid = (startIndex: number, gridNumber: number) => {
    const gridImages = galleryImages.slice(startIndex, startIndex + 6);

    return (
      <div key={gridNumber} className={gridNumber > 1 ? "mt-6" : ""}>
        {/* Desktop Grid */}
        <div className="hidden md:block">
          {/* Row 1 */}
          <div className="flex gap-3 mb-3">
            {/* Image 1 - largest */}
            <div
              className="relative overflow-hidden"
              style={{ flex: "0 0 45%", height: "300px" }}
            >
              <Image
                src={gridImages[0].src}
                alt={gridImages[0].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Image 2 - medium */}
            <div
              className="relative overflow-hidden"
              style={{ flex: "0 0 33%", height: "300px" }}
            >
              <Image
                src={gridImages[1].src}
                alt={gridImages[1].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Image 3 - smallest */}
            <div
              className="relative overflow-hidden"
              style={{ flex: "1", height: "300px" }}
            >
              <Image
                src={gridImages[2].src}
                alt={gridImages[2].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex gap-3">
            {/* Image 4 - smallest */}
            <div
              className="relative overflow-hidden"
              style={{ flex: "0 0 25%", height: "300px" }}
            >
              <Image
                src={gridImages[3].src}
                alt={gridImages[3].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Image 5 - medium */}
            <div
              className="relative overflow-hidden"
              style={{ flex: "0 0 23%", height: "300px" }}
            >
              <Image
                src={gridImages[4].src}
                alt={gridImages[4].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Image 6 - largest */}
            <div
              className="relative overflow-hidden"
              style={{ flex: "1", height: "300px" }}
            >
              <Image
                src={gridImages[5].src}
                alt={gridImages[5].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      className="pt-20 max-md:pt-12 pb-10 px-6 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg-Net.svg')",
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Render visible grids */}
        <div className="space-y-6">
          {Array.from({ length: visibleGrids }).map((_, index) =>
            renderGrid(index * 6, index + 1),
          )}
        </div>

        {/* Mobile  */}
        <div className="block md:hidden">
          <div className="relative w-full h-[220px] overflow-hidden rounded-lg">
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              fill
              className="object-cover"
            />
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
        </div>

        {shouldShowButton && (
          <div className="hidden md:flex justify-center">
            <button
              onClick={handleViewMore}
              className="mt-10 md:mt-14 border border-black px-8 py-2 hover:bg-black hover:text-white transition duration-300 text-base font-semibold tracking-wider"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid;
