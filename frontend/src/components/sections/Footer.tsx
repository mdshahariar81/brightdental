
import Link from "next/link";
import { CalendarDays, Phone } from "lucide-react";

// ==========================================
// FOOTER DATA
// ==========================================

const services = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Teeth Whitening",
  "Dental Implants",
  "Orthodontics",
  "Preventive Care",
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Dentists", href: "#dentists" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

// ==========================================
// SOCIAL ICON COMPONENTS
// Inline SVG: No external icon dependency
// ==========================================

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="21" height="21" fill="currentColor">
      <path d="M13.4 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.8-.1-1.7-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.2H7.2V13H10v8h3.4z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="21"
      height="21"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="21" height="21" fill="currentColor">
      <path d="M23 7.1a3 3 0 0 0-2.1-2.1C19 4.5 12 4.5 12 4.5s-7 0-8.9.5A3 3 0 0 0 1 7.1 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.9 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.9 31 31 0 0 0-.5-4.9zM9.8 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor">
      <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-5-8.1L4.8 22H1.6l7.3-8.4L1 2h6.5l4.5 7.5L18.9 2zm-1.1 18h1.7L6.4 3.9H4.6L17.8 20z" />
    </svg>
  );
}

// ==========================================
// MAIN FOOTER COMPONENT
// ==========================================

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative mt-[265px] bg-[#0965D8] text-white max-lg:mt-[220px]"
    >
      {/* ======================================
          CTA CARD
      ====================================== */}

      <div className="absolute left-1/2 top-0 z-10 w-[calc(100%-32px)] max-w-[1086px] -translate-x-1/2 -translate-y-1/2 rounded-[24px] bg-gradient-to-br from-[#EAF3FF] via-white to-[#EDF5FF] px-6 py-14 text-center sm:px-12 sm:py-16 lg:px-20 lg:py-[88px]">

        <h2 className="mx-auto max-w-[760px] text-[30px] font-medium leading-[1.2] tracking-[-1px] text-[#17346B] sm:text-[38px] lg:text-[44px]">
          Ready to Take the Next Step
          <br />
          <span className="text-[#0969E8]">
            Toward a Healthier Smile?
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-[760px] text-[15px] leading-[1.7] text-[#17346B] sm:text-[17px] lg:text-[19px]">
          Whether you need a routine check-up or specialized dental treatment,
          our caring team is here to provide comfortable, personalized care
          for you and your family.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            href="#contact"
            className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-xl bg-[#0969E8] px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0758C7] sm:text-base"
          >
            <CalendarDays size={20} />
            Book An Appointment
          </Link>

          <a
            href="tel:+14075550198"
            className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-xl border-2 border-[#1673E8] bg-white px-5 text-sm font-semibold text-[#1673E8] transition-all duration-300 hover:bg-[#EEF5FF] sm:text-base"
          >
            <Phone size={20} />
            Call Us
          </a>

        </div>
      </div>

      {/* ======================================
          FOOTER CONTENT
      ====================================== */}

      <div className="mx-auto max-w-[1086px] px-5 pb-8 pt-[310px] sm:px-8 sm:pt-[300px] lg:px-0 lg:pt-[280px]">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.75fr_0.75fr_1fr] lg:gap-[55px]">

          {/* BRAND COLUMN */}

          <div>
            <Link
              href="#home"
              className="inline-flex items-center gap-2 text-[21px] font-semibold tracking-tight text-white"
            >
              <svg
                viewBox="0 0 24 24"
                width="25"
                height="25"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3C8 1 3 3 3 9c0 5 3 12 6 12 2 0 2-7 3-7s1 7 3 7c3 0 6-7 6-12 0-6-5-8-9-6z" />
              </svg>
              BrightDental
            </Link>

            <p className="mt-5 max-w-[300px] text-[15px] leading-[1.65] text-white">
              We provide comprehensive dental care in a comfortable,
              modern environment. Your smile is our priority.
            </p>

            {/* SOCIAL ICONS */}

            <div className="mt-6 flex items-center gap-[15px]">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-[#172033] transition-all hover:-translate-y-1 hover:bg-[#EAF3FF]"
              >
                <FacebookIcon />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-[#172033] transition-all hover:-translate-y-1 hover:bg-[#EAF3FF]"
              >
                <InstagramIcon />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-[#172033] transition-all hover:-translate-y-1 hover:bg-[#EAF3FF]"
              >
                <YoutubeIcon />
              </a>

              <a
                href="#"
                aria-label="X"
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-[#172033] transition-all hover:-translate-y-1 hover:bg-[#EAF3FF]"
              >
                <XIcon />
              </a>

            </div>
          </div>

          {/* SERVICES COLUMN */}

          <div>
            <h3 className="mb-5 text-[17px] font-semibold">
              Our Services
            </h3>

            <ul className="flex flex-col gap-[17px]">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-[15px] text-white transition-colors hover:text-white/75"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS COLUMN */}

          <div>
            <h3 className="mb-5 text-[17px] font-semibold">
              Quick Link
            </h3>

            <ul className="flex flex-col gap-[17px]">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-white transition-colors hover:text-white/75"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LOCATION COLUMN */}

          <div>
            <h3 className="mb-5 text-[17px] font-semibold">
              Location
            </h3>

            <div className="flex flex-col gap-4 text-[15px] leading-[1.7] text-white">

              <p>
                1234 Westwood Boulevard, Los Angeles, CA 90024
              </p>

              <a
                href="tel:+14075550198"
                className="transition-colors hover:text-white/75"
              >
                (407) 555-0198
              </a>

              <a
                href="mailto:hello@brightdentalcare.com"
                className="break-words transition-colors hover:text-white/75"
              >
                hello@brightdentalcare.com
              </a>

              <p>
                Mon — Fri: 8AM — 6PM
                <br />
                Sat: 9AM — 2PM
              </p>

            </div>
          </div>

        </div>

        {/* ======================================
            COPYRIGHT
        ====================================== */}

        <div className="mt-[72px] border-t border-white/40 pt-7 text-center">
          <p className="text-sm text-white sm:text-base">
            @Brightdental Care all right reserved 2026
          </p>
        </div>

      </div>
    </footer>
  );
}
