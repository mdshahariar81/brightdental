
"use client";

import Image from "next/image";
import {
  Sparkles,
  CalendarDays,
  Phone,
  Star,
  Users,
  Trophy,
  ShieldCheck,
} from "lucide-react";

// ==========================================
// HERO STATISTICS
// ==========================================
const stats = [
  { icon: Star, value: "4.9/5", label: "Patient Rating" },
  { icon: Users, value: "5,000+", label: "Patients Treated" },
  { icon: Trophy, value: "15+ Years", label: "Experience" },
  { icon: ShieldCheck, value: "Qualified", label: "Dentists" },
];

// ==========================================
// HERO SECTION
// ==========================================
export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-white"
    >
      {/* Desktop reference frame: 1441 x 758 */}
      <div className="relative grid w-full grid-cols-1 lg:h-[758px] lg:grid-cols-[56%_44%]">

        {/* ======================================
            LEFT CONTENT
        ====================================== */}
        <div className="relative z-10 flex flex-col justify-center px-5 py-14 sm:px-10 md:px-12 lg:px-0 lg:pl-[6.8vw] lg:pr-0">

          {/* Intro badge */}
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#EEF5FF] px-3.5 py-2 text-sm font-medium text-[#1673E8]">
            <Sparkles size={17} />
            Comprehensive Dental Care
          </div>

          {/* Heading */}
          <h1 className="max-w-[590px] text-[36px] font-bold leading-[1.16] tracking-[-1.5px] text-[#111827] sm:text-[44px] md:text-[48px] lg:text-[40px] xl:text-[54px]">
            Modern Dental Care
            <br />
            For a Healthier, More
            <br />
            <span className="text-[#1673E8]">
              Confident Smile
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-[570px] text-[15px] leading-[1.65] text-[#64748B] sm:text-base">
            Personalized dental care from experienced professionals, using
            modern technology in a comfortable, caring environment.
          </p>

          {/* Action buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-[11px] bg-[#0969E8] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#0758C7] sm:px-6 sm:text-base"
            >
              <CalendarDays size={19} />
              Book An Appointment
            </a>

            <a
              href="tel:+10000000000"
              className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-[11px] border-2 border-[#1673E8] px-5 text-sm font-semibold text-[#1673E8] transition-colors hover:bg-[#EEF5FF] sm:text-base"
            >
              <Phone size={19} />
              Call Us
            </a>
          </div>

          {/* Trust statistics */}
          <div className="mt-9 grid max-w-[620px] grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-4 sm:gap-x-2">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className={`flex min-w-0 items-center gap-2 ${
                    index !== 0
                      ? "sm:border-l sm:border-[#E5EAF2] sm:pl-2"
                      : ""
                  }`}
                >
                  {/* Statistic icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF5FF] text-[#1673E8]">
                    <Icon size={20} strokeWidth={2} />
                  </div>

                  {/* Statistic text */}
                  <div className="min-w-0">
                    <p className="whitespace-nowrap text-sm font-bold text-[#172554] sm:text-[15px]">
                      {stat.value}
                    </p>
                    <p className="whitespace-nowrap text-[10px] leading-5 text-[#64748B] sm:text-[11px]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ======================================
            RIGHT: DESKTOP IMAGE
        ====================================== */}
        <div className="relative hidden h-full lg:block">

          {/* Blue background accent */}
          <div
            className="absolute inset-0 bg-[#EEF5FF]"
            style={{
              clipPath: "ellipse(88% 100% at 88% 50%)",
            }}
          />

          {/* Curved image */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath: "ellipse(88% 100% at 88% 50%)",
            }}
          >
            <Image
              src="/hero%20image.png"
              alt="Dentist providing professional dental care to a patient"
              fill
              priority
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* ======================================
            TABLET / MOBILE IMAGE
        ====================================== */}
        <div className="relative mx-auto mb-10 h-[380px] w-[calc(100%-40px)] max-w-[700px] overflow-hidden rounded-[28px] sm:h-[430px] lg:hidden">
          <Image
            src="/hero%20image.png"
            alt="Professional dental care"
            fill
            priority
            sizes="(min-width: 768px) 90vw, 100vw"
            className="object-cover object-center"
          />
        </div>

      </div>
    </section>
  );
}
