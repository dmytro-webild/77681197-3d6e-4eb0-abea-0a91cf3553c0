"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
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
      title="Our History"
      description="Founded to provide world-class education."
      bulletPoints={[
        {
          title: "Mission",
          description: "Empowering students.",
        },
        {
          title: "Vision",
          description: "Global leaders.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/teacher-writing-board_23-2148635377.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="metric" data-section="metric">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Key Statistics"
      description="Our impact across the years."
      metrics={[
        {
          id: "m1",
          value: "1500+",
          title: "Students",
          description: "Enrollment",
          imageSrc: "http://img.b2bpic.net/free-vector/designer-logo_1057-593.jpg",
        },
        {
          id: "m2",
          value: "98%",
          title: "Graduation",
          description: "Success rate",
          imageSrc: "http://img.b2bpic.net/free-vector/back-school-label-collection-chalk-style_23-2147849486.jpg",
        },
      ]}
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
