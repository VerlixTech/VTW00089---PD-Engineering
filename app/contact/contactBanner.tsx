import Link from "next/link";

const ContactBanner = () => {
  return (
    <section className="px-6 py-6 md:py-12">
      <div
        className="max-w-7xl mx-auto rounded-2xl px-12 py-8 md:py-16 flex flex-col items-center justify-center text-center gap-6"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(26,26,46,0.92) 0%, rgba(22,33,62,0.92) 50%, rgba(26,42,26,0.92) 100%), url('/successProject02.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <h2 className="text-white text-4xl md:text-7xl font-semibold leading-tight">
          Let&apos;s Connect.
        </h2>

        <p className="text-[#9CA3AF] text-sm md:text-xl leading-relaxed max-w-lg">
          Follow our journey and stay updated with the latest in engineering innovation and
corporate milestones.
        </p>

        <div className="flex items-center gap-8 mt-2">
          {[
            { label: "LINKEDIN", href: "#" },
            { label: "YOUTUBE", href: "#" },
            { label: "FACEBOOK", href: "#" },
          ].map((social) => (
            <Link
              key={social.label}
              href={social.href}
              className="text-white text-sm font-semibold tracking-widest uppercase border-b border-white/40 pb-1 hover:border-white transition duration-200"
            >
              {social.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;