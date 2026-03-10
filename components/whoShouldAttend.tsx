import { Users, GraduationCap, Building2, Wrench, BadgeCheck, Check } from "lucide-react";

const attendees = [
  {
    icon: Users,
    title: "Mechanical & HVAC Engineers",
    description: "Experienced professionals seeking advanced skills in modern system design.",
  },
  {
    icon: GraduationCap,
    title: "Engineering Students",
    description: "Fresh graduates looking for specialized technical training for job readiness.",
  },
  {
    icon: Building2,
    title: "Facility Managers",
    description: "Professionals managing complex building systems and operations.",
  },
  {
    icon: Wrench,
    title: "Technicians",
    description: "Technical staff aiming for career growth through theoretical expertise.",
  },
];

const benefits = [
  {
    title: "Industry-Ready Knowledge",
    description:
      "Follow global standards including ASHRAE, SMACNA, and local building codes for immediate workplace application.",
  },
  {
    title: "Practical Exposure",
    description:
      "Work with real-world project case studies, including high-rise residential and commercial HVAC design scenarios.",
  },
  {
    title: "Design Confidence",
    description:
      "Gain mastery over load calculations, equipment selection, and duct routing through expert-led technical guidance.",
  },
  {
    title: "Career Opportunities",
    description:
      "Unlock access to senior roles in top-tier engineering firms and international consultancy groups.",
  },
];

const WhoShouldAttend = () => {
  return (
    <section className="pt-16 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* Left — Who Should Attend */}
          <div>
            {/* Heading */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-gray-700" />
              </div>
              <h2 className="text-2xl font-bold text-[#0F172A]">Who Should Attend</h2>
            </div>

            {/* 2x2 Grid of cards */}
            <div className="grid  md:grid-cols-2 gap-4">
              {attendees.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl p-5 bg-white"
                  >
                    <Icon className="w-6 h-6 text-[#021323] mb-4" />
                    <h3 className="text-base font-bold text-[#0F172A] mb-2">{item.title}</h3>
                    <p className="text-[#64748B] text-base leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — Course Benefits */}
          <div className="border border-gray-200 rounded-2xl p-4 md:p-8 bg-gray-50 md:max-w-md justify-self-end">
            {/* Heading */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center">
                <BadgeCheck className="w-5 h-5 text-[#89CA29]" />
              </div>
              <h2 className="text-2xl font-bold text-[#0F172A]">Course Benefits</h2>
            </div>

            {/* Benefits list */}
            <div className="space-y-6 ">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3 items-start ">
                  <Check className="w-5 h-5 text-[#89CA29] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A] mb-1">{benefit.title}</h3>
                    <p className="text-[#475569] text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoShouldAttend;