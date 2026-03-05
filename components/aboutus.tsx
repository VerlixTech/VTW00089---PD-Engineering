"use client";

import Image from "next/image";

export function AboutUs() {
  return (
    <section className="relative bg-white  text-black ">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-16 items-center">
        {/* Right Content */}
        <div>
          <h4 className="text-4xl md:text-4xl mb-2">About</h4>
          <h4 className="text-3xl md:text-5xl font-semibold mb-4">
            PD Engineering & Academy
          </h4>

          <p className="text-gray-300 leading-relaxed">
            PD Engineering & Academy provides professional HVAC design
            training and engineering solutions. Our programs are designed
            to bridge the gap between academic knowledge and real-world
            engineering practices.
          </p>

          <p className="text-gray-400 mt-4">
            With years of industry experience, we empower engineers with
            practical design knowledge, consultancy exposure, and hands-on
            engineering tools.
          </p>
        </div>

        {/* Left Image */}
        <div className="relative">
          <Image
            src="/havc.svg"
            alt="Engineering Training"
            width={600}
            height={500}
            className="rounded-xl"
          />
        </div>
      </div>
<div className="relative mb-10 max-w-7xl mx-auto rounded-2xl bg-linear-to-r from-[#89CA29] via-[#7bc76a] to-[#5fa8d3] p-10 flex items-center justify-center">
  <h2 className="text-black text-4xl font-markScript text-center">
    Powering Performance & Developing Professionals
  </h2>
</div>

    </section>
  );
}