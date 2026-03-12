import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { projectData } from "@/data/projectData";

const ProjectsGrid = () => {
  return (
    <section className="py-12 px-4 md:py-16 md:px-6 min-h-screen">
      <div className="max-w-7xl mx-auto bg-[#F8FAFC] md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full sm:w-[200px] md:w-[220px] lg:w-[230px] h-[200px] sm:h-[280px] md:h-[300px] lg:h-[325px] flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 200px, (max-width: 1024px) 220px, 230px"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-4 md:p-5 gap-1.5 md:gap-2">
                <h3 className="text-base md:text-xl font-bold text-gray-900 leading-snug uppercase">
                  {project.title}
                </h3>

                <p className="text-[#475569] text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-none">
                  {project.description}
                </p>

                <ul className="space-y-1 mt-1 md:mt-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-[#1E293B]">
                      <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#89CA29] flex-shrink-0 mt-0.5" />
                      <span className="flex-1">{highlight}</span>
                    </li>
                  ))}
                </ul>


                {project.status && (
                  <p className="text-[10px] md:text-xs text-[#94A3B8] font-medium tracking-wide mt-1 md:mt-2 uppercase">
                    Status: {project.status}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;