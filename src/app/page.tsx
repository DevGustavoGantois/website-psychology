'use client';
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { HomeHero } from "./s-hero";
import { HomeAbout } from "./s-about";
import { HomeHistory } from "./s-history";
import { HomeTestimonials } from "./s-testimonials";
import { HomeFAQ } from "./s-faq";
import { HomeLocation } from "./s-location";
import { HomeContact } from "./s-contact";
import { Footer } from "@/components/global/footer";


export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, [])

  return (
    <>
      <HomeHero />
      <HomeHistory />
      <HomeAbout />
      <HomeTestimonials />
      <HomeFAQ />
      <HomeLocation />
      <HomeContact />
      <Footer />
    </>
  );
}
