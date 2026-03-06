import Image from "next/image";

const OurQualification = () => {
  return (
    <section className=" md:pt-20  md:mt-20 px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 mb-[2%]">
          <div>
            <div className="text-[36px]">Our Qualifications</div>
            <p className="text-[40px] font-bold">
              Internationally <br /> Recognized
            </p>
          </div>

          <p className="text-gray-600 text-xl">
            Certified expertise and industry-accredited skills that ensure
            high-quality engineering solutions.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative" style={{ width: "500px", height: "655px" }}>
            <Image
              src="/Certificate.svg"
              alt="LG Electronics Certificate of Qualification - Asia SVC/FE Forum 2018"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurQualification;