"use client";
import ContactUs from "@/components/ContactUs";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { useRef } from "react";

export default function Landing() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Hero />
      jsx
      <div id="about">
        <AboutUs />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}
