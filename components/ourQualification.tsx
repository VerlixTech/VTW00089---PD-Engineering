"use client";

import { useState } from "react";
import CertificatePopUp from "./certificatePopUp";

const OurQualification = () => {
  const [open, setOpen] = useState(false);

const certificates = [
  "/certificates/Certificate.svg",
];

  return (
    <section className="md:pt-10 md:mt-15 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid md:grid-cols-2 mb-[2%]">
          <div>
            <div className="text-lg md:text-[36px]">Our Qualifications</div>
            <p className="text-xl md:text-[40px] font-bold">
              Internationally <br className="max-md:hidden"/> Recognized
            </p>
          </div>

          <p className="text-gray-600 text-base md:text-xl max-md:mt-4 ">
            Certified expertise and industry-accredited skills that ensure
            high-quality engineering solutions.
          </p>
        </div>

        <div className="flex justify-center max-md:mt-8 mb-12">
          <button
            onClick={() => setOpen(true)}
            className="bg-[#0A1620] hover:bg-[#0A1620]/90 text-white font-bold py-2 px-6 rounded-lg text-base md:text-xl"
          >
            View Certificates
          </button>
        </div>

        {open && (
          <CertificatePopUp
            certificates={certificates}
            onClose={() => setOpen(false)}
          />
        )}

      </div>
    </section>
  );
};

export default OurQualification;