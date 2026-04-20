"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SplitAbout from '@/components/sections/about/SplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeLargeTitles"
        background="fluid"
        cardStyle="gradient-radial"
        primaryButtonStyle="flat"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "About Us",
          id: "/about",
        },
        {
          name: "Academics",
          id: "/academics",
        },
        {
          name: "Admissions",
          id: "/admissions",
        },
        {
          name: "News",
          id: "/news",
        },
        {
          name: "Gallery",
          id: "/gallery",
        },
        {
          name: "Contact",
          id: "/contact",
        },
      ]}
      brandName="Elite Academy"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      title="Admissions Policy"
      description="Open and transparent guidelines."
      bulletPoints={[
        {
          title: "Application",
          description: "Submit online.",
        },
        {
          title: "Evaluation",
          description: "Review process.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/portrait-young-woman-library_641386-223.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      title="Admissions FAQs"
      description="Frequently asked questions."
      faqs={[
        {
          id: "q1",
          title: "Eligibility?",
          content: "Review website.",
        },
        {
          id: "q2",
          title: "Required Docs?",
          content: "Academic records.",
        },
      ]}
      faqsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Elite Academy"
      columns={[
        {
          title: "Quick Links",
          items: [
            {
              label: "About",
              href: "/about",
            },
            {
              label: "Academics",
              href: "/academics",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Admissions",
              href: "/admissions",
            },
            {
              label: "Email Support",
              href: "/contact",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
