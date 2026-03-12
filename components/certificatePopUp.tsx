"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  certificates: string[];
  onClose: () => void;
}

const CertificatePopUp = ({ certificates, onClose }: Props) => {
  const [current, setCurrent] = useState(0);

  const nextCertificate = () => {
    setCurrent((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrent((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 px-4">
      <div className="relative bg-white/70 backdrop-blur-[2px] rounded-xl p-4 sm:p-6 w-full max-w-4xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          <X size={28} />
        </button>

        {/* Certificate image */}
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          {certificates.length > 1 && (
            <button
              onClick={prevCertificate}
              className="p-1 sm:p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          <div className="relative w-full max-w-3xl h-[400px]  md:h-[500px]">
            <Image
              src={certificates[current]}
              alt="Certificate"
              fill
              className="object-contain rounded-lg"
            />
          </div>

          {certificates.length > 1 && (
            <button
              onClick={nextCertificate}
              className="p-1 sm:p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <ChevronRight size={28} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificatePopUp;
