

const Partners = () => {
  return (
    <section
      className="pt-20 max-md:pt-12 pb-10 mt-20 max-md:mt-12 px-6 bg-no-repeat bg-cover bg-center"
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

          <p className="text-gray-600 text:base md:text-xl">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
