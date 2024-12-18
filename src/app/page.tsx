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
import { CTASection } from "./s-cta";
import { HomeServices } from "./s-services";


export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, [])

  return (
    <main>
      <div>
      <meta name="google-site-verification" content="o2JJ1DRujT5xKDGKCVAO7MQfcluQmJ8zDDf7L80pO5o" />
      </div>
      <HomeHero />
      <HomeHistory />
      <HomeAbout />
      <HomeServices />
      <HomeTestimonials />
      <CTASection />
      <HomeFAQ />
      <HomeLocation />
      <HomeContact />
      <Footer />
    </main>
  );
}
