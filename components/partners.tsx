import PartnersMarquees from "./partnersMarquees";


const Partners = () => {
  return (
    <section
      className=" max-md:pt-12 pb-10 md:mt-20  px-6 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-Net.svg')" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 mb-12 items">
          <div>
            <div className="text-lg md:text-[36px] ">Our Partners</div>
            <p className="text-2xl md:text-[40px] font-bold ">
              Trusted by Top Partners & Supporters
            </p>
          </div>

          <p className="text-gray-600 text:base md:text-xl mt-4">
            We collaborate with trusted industry partners to deliver high-quality solutions and ensure project excellence.
          </p>
        </div>
      </div>

        {/* Marquees */}
        <PartnersMarquees/>
    </section>
  );
};

export default Partners;


