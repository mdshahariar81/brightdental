
"use client";

import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Toothbrush,
} from "lucide-react";

// ==========================================
// SERVICES DATA
// ==========================================
const services = [
  {
    title: "Teeth Cleaning",
    description:
      "Professional cleaning to help maintain healthy teeth and gums.",
    image: "/Frame 54.png",
  },
  {
    title: "Braces",
    description:
      "Traditional orthodontic treatment to gradually straighten teeth.",
    image: "/Rectangle 13.png",
  },
  {
    title: "Clear Aligners",
    description:
      "A discreet way to improve tooth alignment with removable clear trays.",
    image: "/01_teeth_cleaning 2 (1).png",
  },
  {
    title: "Root Canal Treatment",
    description:
      "Treatment designed to address infection or damage inside a tooth.",
    image: "/01_teeth_cleaning 2 (2).png",
  },
  {
    title: "Dental Implants",
    description:
      "A long-term tooth replacement option designed to restore function and appearance.",
    image: "/01_teeth_cleaning 2.png",
  },
  {
    title: "Tooth Removal",
    description:
      "Safe and comfortable extraction for damaged, problematic, or impacted teeth.",
    image: "/01_teeth_cleaning 2 (3).png",
  },
];

// ==========================================
// SERVICES SECTION
// ==========================================
export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-[#F8FAFD] px-5 py-20 sm:px-8 lg:min-h-[900px] lg:px-10 lg:py-[82px]"
    >
      {/* Decorative top-left background shape */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[105px] -top-[115px] h-[300px] w-[250px] rounded-br-full bg-[#EEF5FF]"
      />

      {/* Decorative bottom-left background shape and dots */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -left-5 h-36 w-36 rounded-tr-full bg-[#EEF5FF]"
      >
        <div
          className="absolute bottom-8 left-5 h-20 w-20 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(#93C5FD 1.5px, transparent 1.5px)",
            backgroundSize: "15px 15px",
          }}
        />
      </div>

      {/* Main content container */}
      <div className="relative z-10 mx-auto max-w-[960px]">

        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-[650px] text-center">

          {/* Section badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#EEF5FF] px-3.5 py-2 text-sm font-medium text-[#1673E8]">
            <Toothbrush size={17} />
            Our Services
          </div>

          {/* Section title */}
          <h2 className="text-[30px] font-semibold leading-[1.2] tracking-[-0.8px] text-[#111827] sm:text-[38px] lg:text-[40px]">
            Dental Care For Every Stage
            <br />
            of <span className="text-[#1673E8]">Your Smile</span>
          </h2>

          {/* Section description */}
          <p className="mx-auto mt-5 max-w-[560px] text-sm leading-[1.65] text-[#64748B] sm:text-base">
            From preventive care to restorative and cosmetic treatments, our
            team provides personalized dental care in one comfortable clinic.
          </p>
        </div>

        {/* Services cards grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          {services.map((service) => (
            <article
              key={service.title}
              className="group flex min-h-[214px] gap-5 rounded-xl bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(15,23,42,0.11)]"
            >
              {/* Service image */}
              <div className="relative h-[172px] w-[38%] shrink-0 overflow-hidden rounded-xl bg-[#F1F5F9]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 768px) 170px, 40vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Service details */}
              <div className="flex min-w-0 flex-1 flex-col items-start">

                {/* Service title */}
                <h3 className="text-[17px] font-semibold leading-tight text-[#17346B] sm:text-lg">
                  {service.title}
                </h3>

                {/* Service description */}
                <p className="mt-3 text-[13px] leading-[1.6] text-[#64748B] sm:text-sm">
                  {service.description}
                </p>

                {/* Learn more link */}
                <a
                  href="#contact"
                  aria-label={`Learn more about ${service.title}`}
                  className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-medium text-[#0969E8] transition-all duration-300 hover:gap-3"
                >
                  Learn More
                  <ArrowRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View all services */}
        <div className="mt-16 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#0969E8] underline underline-offset-4 transition-all hover:gap-3"
          >
            View All Services
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
