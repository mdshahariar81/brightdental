
"use client";

import Image from "next/image";
import { ArrowRight, UsersRound } from "lucide-react";

// ==========================================
// DENTISTS DATA
// ==========================================
const dentists = [
  {
    name: "Dr. James Smith",
    specialty: "General Dentist",
    image: "/dr james.png",
  },
  {
    name: "Dr. Sarah Johnson",
    specialty: "Orthodontist",
    image: "/Rectangle 14.png",
  },
  {
    name: "Dr. Michael Lee",
    specialty: "Implant Specialist",
    image: "/Rectangle 14 (1).png",
  },
  {
    name: "Dr. Emily Davis",
    specialty: "Cosmetic Dentist",
    image: "/image 27.png",
  },
];

// ==========================================
// DENTISTS SECTION
// ==========================================
export default function Dentists() {
  return (
    <section
      id="dentists"
      className="relative w-full overflow-hidden bg-[#F5F9FC] px-5 py-20 sm:px-8 lg:px-10 lg:py-[90px]"
    >
      {/* ======================================
          SECTION HEADER
      ====================================== */}
      <div className="mx-auto mb-16 max-w-[720px] text-center">

        {/* Section Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#EEF5FF] px-4 py-2 text-sm font-medium text-[#1673E8]">
          <UsersRound size={19} />
          Meet Our Dentists
        </div>

        {/* Section Heading */}
        <h2 className="text-[30px] font-semibold leading-[1.2] tracking-[-0.7px] text-[#17346B] sm:text-[36px] lg:text-[38px]">
          Expert Dental Care,
          <br />
          <span className="text-[#1673E8]">
            Delivered with a Personal Touch
          </span>
        </h2>

        {/* Section Description */}
        <p className="mx-auto mt-6 max-w-[560px] text-sm leading-[1.7] text-[#64748B] sm:text-base">
          Our skilled and compassionate dentists are dedicated to providing
          the highest quality care for you and your family.
        </p>
      </div>

      {/* ======================================
          DENTIST PROFILE CARDS
      ====================================== */}
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">

        {dentists.map((dentist) => (
          <article
            key={dentist.name}
            className="group rounded-[20px] bg-white p-4 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(15,23,42,0.11)]"
          >
            {/* Dentist Image */}
            <div className="relative aspect-[1/1] w-full overflow-hidden rounded-[12px] bg-[#EAF0F6]">
              <Image
                src={dentist.image}
                alt={dentist.name}
                fill
                sizes="(min-width: 1024px) 250px, (min-width: 640px) 45vw, 90vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>

            {/* Dentist Information */}
            <div className="pt-4">
              <h3 className="text-[18px] font-semibold leading-tight text-[#17346B]">
                {dentist.name}
              </h3>

              <p className="mt-2 text-[15px] text-[#64748B]">
                {dentist.specialty}
              </p>
            </div>
          </article>
        ))}

      </div>

      {/* ======================================
          VIEW ALL DENTISTS
      ====================================== */}
      <div className="mt-20 flex justify-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-3 text-[15px] font-medium text-[#0969E8] underline underline-offset-4 transition-all duration-300 hover:gap-4"
        >
          View All Dentists
          <ArrowRight size={19} />
        </a>
      </div>
    </section>
  );
}
