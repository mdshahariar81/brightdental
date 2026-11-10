
"use client";

import Image from "next/image";
import {
  BadgeCheck,
  UserRound,
  Heart,
  ShieldCheck,
  Sparkles,
  MonitorCog,
} from "lucide-react";

// ==========================================
// WHY CHOOSE US - FEATURES DATA
// ==========================================
const features = [
  {
    icon: UserRound,
    title: "Experienced Professionals",
    description:
      "Our dentists bring years of expertise to deliver the best care for you.",
  },
  {
    icon: MonitorCog,
    title: "Modern Technology",
    description:
      "Advanced equipment for accurate diagnosis and effective treatment.",
  },
  {
    icon: Heart,
    title: "Comfortable Environment",
    description:
      "A relaxing and friendly space designed for your comfort.",
  },
  {
    icon: ShieldCheck,
    title: "Comprehensive Care",
    description:
      "From preventive care to complex treatments, we've got you covered.",
  },
];

// ==========================================
// WHY CHOOSE US SECTION
// ==========================================
export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative w-full overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-[90px]"
    >
      {/* ======================================
          SECTION HEADER
      ====================================== */}
      <div className="relative z-10 mx-auto mb-12 max-w-[760px] text-center">

        {/* Section Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#EEF5FF] px-4 py-2 text-sm font-medium text-[#1673E8]">
          <BadgeCheck size={19} />
          Why choose BrightDental care
        </div>

        {/* Section Heading */}
        <h2 className="text-[30px] font-semibold leading-[1.2] tracking-[-0.8px] text-[#17346B] sm:text-[36px] lg:text-[38px]">
          Modern care, Experienced Professionals,
          <br className="hidden sm:block" />
          <span className="text-[#1673E8]">
            Comfortable Experience
          </span>
        </h2>

        {/* Section Description */}
        <p className="mx-auto mt-6 max-w-[560px] text-sm leading-[1.7] text-[#64748B] sm:text-base">
          We combine experienced dental professionals, modern technology,
          and patient-focused care to make every visit more comfortable.
        </p>
      </div>

      {/* ======================================
          MAIN CONTENT
          LEFT: CLINIC IMAGE
          RIGHT: FEATURE CARDS
      ====================================== */}
      <div className="relative z-10 mx-auto grid max-w-[1144px] grid-cols-1 items-center gap-7 lg:grid-cols-[1.05fr_1.1fr] lg:gap-6">

        {/* ======================================
            LEFT SIDE - CLINIC IMAGE
        ====================================== */}
        <div className="relative h-[380px] overflow-hidden rounded-[22px] sm:h-[460px] lg:h-[534px]">

          <Image
            src="/image%208.png"
            alt="Modern BrightDental clinic interior"
            fill
            priority={false}
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover object-center"
          />

        </div>

        {/* ======================================
            RIGHT SIDE - FEATURE CARDS
        ====================================== */}
        <div className="relative rounded-[24px] p-3 sm:p-4 lg:p-2">

          {/* Decorative dotted border */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[24px] border-2 border-dashed border-[#BFD9FF]"
          />

          {/* Feature Grid */}
          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="flex min-h-[230px] flex-col rounded-[18px] bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.09)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(15,23,42,0.13)] sm:min-h-[255px] sm:p-6"
                >
                  {/* Feature Icon */}
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#EEF5FF] text-[#1673E8]">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  {/* Feature Title */}
                  <h3 className="max-w-[220px] text-[19px] font-semibold leading-[1.3] text-[#17346B]">
                    {feature.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="mt-3 text-[15px] leading-[1.6] text-[#64748B]">
                    {feature.description}
                  </p>
                </article>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}
