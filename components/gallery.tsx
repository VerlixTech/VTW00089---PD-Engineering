import Image from "next/image";

const Gallery = () => {
  return (
    <section 
      className="pt-20 max-md:pt-12 pb-10 px-6 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg-Net.svg')",
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 lg:text-lg text-base">
          Explore our portfolio showcasing completed projects, installations, and
          hands-on training sessions.
        </p>

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
      
      {/* Button */}
        <div className="flex justify-center mt-4">
          <button className="mt-14 border border-black px-8 py-2 hover:bg-black hover:text-white transition duration-300 text-base font-semibold tracking-wider">
            View More
          </button>
        </div>
        
    </section>
  );
};

export default Gallery;