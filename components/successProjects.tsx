import Image from "next/image";
import Link from "next/link";
import { projectData } from "@/data/projectData";

export default function SuccessProjects() {
  const displayedProjects = projectData.slice(0, 3);

  return (
    <section
      className="pt-20 max-md:pt-12 pb-10 px-6 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('/Servives_bg.svg')",
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Title Section */}
        <div className="grid md:grid-cols-2 mb-12 items-center">
          <h2 className="text-2xl md:text-[40px] font-bold">SUCCESS PROJECTS</h2>
          <p className="text-gray-600 text-base md:text-xl border-l-4 pl-4 border-[#1A1A1A] max-md:mt-4">
            From steam systems to complete industrial solutions, we deliver results that meet client expectations and industry standards.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-md:gap-6">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="relative h-[325px] max-md:h-[220px] rounded-[30px] overflow-hidden group"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-center group-hover:scale-110 transition duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 200px, (max-width: 1024px) 220px, 230px"
              />

              {/* Gradient overlay - only bottom for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Text */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-xl max-md:text-base font-bold leading-snug">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-4">
          <Link
            href="/projects"
            className="mt-14 border inline-block text-center border-black px-8 py-2 hover:bg-black hover:text-white transition duration-300 text-base font-semibold tracking-wider"
          >
            View More
          </Link>
        </div>

      </div>
    </section>
  );
}