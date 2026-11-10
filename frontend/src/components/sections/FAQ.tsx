
"use client";

import { useState } from "react";
import {
  CircleHelp,
  Phone,
  Mail,
  Plus,
  Minus,
} from "lucide-react";

// ==========================================
// FAQ DATA
// ==========================================
const faqItems = [
  {
    question: "How often should I visit the dentist?",
    answer:
      "We recommend visiting every six months for a routine check-up and cleaning to maintain optimal oral health and catch any issues early.",
  },
  {
    question: "Do you accept dental insurance?",
    answer:
      "We work with a range of dental insurance providers. Please contact our friendly team to confirm whether your insurance plan is accepted.",
  },
  {
    question: "What should I do in a dental emergency?",
    answer:
      "Contact our clinic as soon as possible. Our team will help assess your situation and arrange an appointment for urgent dental care.",
  },
  {
    question: "Are your treatments safe for kids?",
    answer:
      "Yes. We provide gentle dental care for children in a comfortable and friendly environment, with treatments suited to their individual needs.",
  },
  {
    question: "Do you offer teeth whitening?",
    answer:
      "Yes. We offer professional teeth whitening treatments. Contact our team to learn about the available options and find the right treatment for you.",
  },
  {
    question: "How long does a teeth cleaning take?",
    answer:
      "A routine professional teeth cleaning usually takes around 30 to 60 minutes, depending on your individual dental needs.",
  },
];

// ==========================================
// FAQ SECTION
// ==========================================
export default function FAQ() {
  // First question is open by default
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  // Toggle accordion
  const toggleFAQ = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#F8FBFF] to-[#EEF5FF] px-5 py-20 sm:px-8 lg:px-10 lg:py-[90px]"
    >
      {/* ======================================
          SECTION HEADER
      ====================================== */}
      <div className="mx-auto mb-16 max-w-[700px] text-center">

        {/* FAQ Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#EAF3FF] px-4 py-2 text-sm font-medium text-[#1673E8]">
          <CircleHelp size={20} />
          Faq
        </div>

        {/* Heading */}
        <h2 className="text-[30px] font-semibold leading-[1.25] tracking-[-0.6px] text-[#17346B] sm:text-[36px] lg:text-[38px]">
          Frequently Asked Questions
          <br />
          <span className="text-[#1673E8]">
            We’re Here to Help
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-[500px] text-sm leading-[1.7] text-[#64748B] sm:text-base">
          Find answers to common questions about our services,
          appointments, insurance, and more.
        </p>
      </div>

      {/* ======================================
          MAIN FAQ CONTENT
      ====================================== */}
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-[60px]">

        {/* ======================================
            LEFT SIDE: CONTACT INFORMATION
        ====================================== */}
        <div className="pt-0 lg:pt-0">

          {/* Contact Heading */}
          <h3 className="text-[24px] font-semibold leading-[1.4] text-[#172033] sm:text-[26px]">
            Still Have Questions?
            <br />
            <span className="text-[#1673E8]">
              We’re Here for You!
            </span>
          </h3>

          {/* Contact Description */}
          <p className="mt-5 max-w-[350px] text-[15px] leading-[1.6] text-[#17346B]">
            If you can’t find the answer you’re looking for,
            feel free to reach out to our friendly team.
          </p>

          {/* Divider */}
          <div className="my-6 h-px w-full max-w-[450px] bg-[#DCE5F0]" />

          {/* Phone Contact */}
          <a
            href="tel:+14075550198"
            className="group mb-7 flex items-center gap-4"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#0875E8] text-[#0875E8] transition-colors group-hover:bg-[#0875E8] group-hover:text-white">
              <Phone size={22} strokeWidth={1.7} />
            </div>

            <div>
              <p className="text-[15px] font-semibold text-[#17346B]">
                Call Us
              </p>
              <p className="mt-1 text-[15px] text-[#0875E8]">
                (407) 555 0198
              </p>
            </div>
          </a>

          {/* Email Contact */}
          <a
            href="mailto:hello@brightdentalcare.com"
            className="group flex items-center gap-4"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#0875E8] text-[#0875E8] transition-colors group-hover:bg-[#0875E8] group-hover:text-white">
              <Mail size={22} strokeWidth={1.7} />
            </div>

            <div>
              <p className="text-[15px] font-semibold text-[#17346B]">
                Email Us
              </p>
              <p className="mt-1 break-all text-[15px] text-[#0875E8]">
                hello@brightdentalcare.com
              </p>
            </div>
          </a>
        </div>

        {/* ======================================
            RIGHT SIDE: FAQ ACCORDION
        ====================================== */}
        <div className="flex flex-col gap-4">

          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <article
                key={item.question}
                className="overflow-hidden rounded-xl bg-white transition-all duration-300"
              >
                {/* Question Button */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex min-h-[76px] w-full items-center justify-between gap-5 px-6 py-5 text-left sm:px-6"
                >
                  <span className="text-[17px] font-semibold leading-[1.4] text-[#17346B] sm:text-[20px]">
                    {item.question}
                  </span>

                  {/* Plus / Minus Icon */}
                  <span className="flex shrink-0 items-center justify-center text-[#0875E8]">
                    {isOpen ? (
                      <Minus size={23} strokeWidth={1.8} />
                    ) : (
                      <Plus size={23} strokeWidth={1.8} />
                    )}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[15px] leading-[1.65] text-[#64748B] sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
}
