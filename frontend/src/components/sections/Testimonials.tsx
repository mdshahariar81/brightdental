
"use client";

import Image from "next/image";
import { useState } from "react";
import {
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
} from "lucide-react";

// ==========================================
// TESTIMONIAL DATA
// ==========================================
const testimonials = [
  {
    name: "John Kobir",
    role: "Homeowner",
    image: "/Rectangle 13.png",
    review:
      "I had an amazing experience at BrightDental Care. The team is professional, friendly, and made me feel completely comfortable. My teeth have never felt cleaner!",
  },
  {
    name: "Jelly Jamin",
    role: "Homemaker",
    image: "/Rectangle 14.png",
    review:
      "After years of avoiding the dentist, I finally found a place I trust. The care I received was gentle, thorough, and truly life-changing. Thank you, BrightDental Care!",
  },
  {
    name: "Anderson James",
    role: "Homeowner",
    image: "/Rectangle 14 (1).png",
    review:
      "Dr. Sarah and her team are incredible! They explained every step and gave me the perfect smile I always wanted. Highly recommend! I love this BrightDental care services.",
  },
  {
    name: "Emily Carter",
    role: "Teacher",
    image: "/Frame 54.png",
    review:
      "The staff were welcoming and professional. My appointment was smooth, and I felt comfortable throughout the entire treatment.",
  },
  {
    name: "Michael Brown",
    role: "Business Owner",
    image: "/dr james.png",
    review:
      "Excellent service and modern facilities. The dentists explained everything clearly. I would definitely recommend BrightDental.",
  },
];

// ==========================================
// TESTIMONIALS SECTION
// ==========================================
export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Show three cards at a time on desktop
  const visibleTestimonials = Array.from(
    { length: 3 },
    (_, index) => testimonials[(activeIndex + index) % testimonials.length]
  );

  // Previous slide
  const handlePrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  // Next slide
  const handleNext = () => {
    setActiveIndex((current) =>
      (current + 1) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-[90px]"
    >
      {/* ======================================
          DECORATIVE TOOTH SHAPE
      ====================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-5 top-16 hidden text-[#F5F8FD] sm:block"
      >
        <svg
          width="190"
          height="220"
          viewBox="0 0 190 220"
          fill="none"
        >
          <path
            d="M95 12C66 12 60 42 35 43C10 44 9 78 29 105C45 127 54 145 66 184C74 211 91 206 91 175C91 143 104 126 119 126C134 126 145 154 151 181C157 209 175 201 174 172C173 137 160 106 143 81C129 61 130 12 95 12Z"
            stroke="currentColor"
            strokeWidth="6"
          />
        </svg>
      </div>

      {/* ======================================
          SECTION HEADER
      ====================================== */}
      <div className="relative z-10 mx-auto mb-20 max-w-[720px] text-center">

        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#EEF5FF] px-4 py-2 text-sm font-medium text-[#1673E8]">
          <MessageSquare size={19} />
          What Our Patients Say
        </div>

        {/* Heading */}
        <h2 className="text-[30px] font-semibold leading-[1.2] tracking-[-0.7px] text-[#17346B] sm:text-[36px] lg:text-[38px]">
          Real Smiles. Real Stories.
          <br />
          <span className="text-[#1673E8]">
            Real Satisfaction.
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-[540px] text-sm leading-[1.7] text-[#64748B] sm:text-base">
          We're proud to have earned the trust of our patients through
          compassionate care and outstanding results.
        </p>
      </div>

      {/* ======================================
          TESTIMONIAL CAROUSEL
      ====================================== */}
      <div className="relative mx-auto max-w-[1140px]">

        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrevious}
          aria-label="Previous testimonials"
          className="absolute -left-2 top-1/2 z-20 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#E5EAF2] bg-white text-[#1673E8] shadow-md transition-all hover:bg-[#EEF5FF] sm:flex"
        >
          <ChevronLeft size={25} />
        </button>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {visibleTestimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${activeIndex}`}
              className="flex min-h-[389px] flex-col rounded-[17px] border border-[#E5EDF5] bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF2FF] text-[#111827]">
                <Quote
                  size={23}
                  fill="currentColor"
                  strokeWidth={1.5}
                />
              </div>

              {/* Review Text */}
              <p className="flex-1 text-[15px] leading-[1.85] text-[#172554]">
                {testimonial.review}
              </p>

              {/* Star Rating */}
              <div className="mt-5 flex items-center gap-0.5 text-[#0875E8]">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={20}
                    fill="currentColor"
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              {/* Patient Profile */}
              <div className="mt-6 flex items-center gap-3">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-[#EEF2F7]">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="64px"
                    className="object-cover object-top"
                  />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#172033]">
                    {testimonial.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#64748B]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}

        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next testimonials"
          className="absolute -right-2 top-1/2 z-20 hidden h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#E5EAF2] bg-white text-[#1673E8] shadow-md transition-all hover:bg-[#EEF5FF] sm:flex"
        >
          <ChevronRight size={25} />
        </button>
      </div>

      {/* ======================================
          MOBILE / TABLET NAVIGATION
      ====================================== */}
      <div className="mt-8 flex items-center justify-center gap-5 sm:hidden">
        <button
          type="button"
          onClick={handlePrevious}
          aria-label="Previous testimonials"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5EAF2] text-[#1673E8]"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next testimonials"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5EAF2] text-[#1673E8]"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* ======================================
          PAGINATION DOTS
      ====================================== */}
      <div className="mt-12 flex items-center justify-center gap-3">
        {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to testimonial slide ${index + 1}`}
            aria-current={activeIndex === index ? "true" : undefined}
            className={`h-3.5 w-3.5 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "bg-[#0875E8]"
                : "bg-[#D5E1F2] hover:bg-[#AFC8EB]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
