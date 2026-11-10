import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Dentists from "@/components/sections/Dentists";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Website Navigation */}
      <Navbar />

      {/* Homepage Hero Section */}
      <Hero />

      {/* Homepage Services Section */}
      <Services />

      {/* Why Choose BrightDental Section */}
      <WhyChooseUs />

      {/* Meet Our Dentists Section */}
      <Dentists />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}