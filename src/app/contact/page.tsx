"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
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

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Reach Us"
      title="Get in Touch"
      description="We'd love to hear from you."
      buttons={[
        {
          text: "Call Now",
          href: "tel:000000",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      title="Visit Campus"
      description="We are located in the heart of the city."
      bulletPoints={[
        {
          title: "Address",
          description: "123 Academy Lane",
        },
        {
          title: "Hours",
          description: "Mon-Fri 9-5",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/profile-view-young-brunette-suit-standing-front-flip-board-thinking-what-write_662251-443.jpg"
      mediaAnimation="opacity"
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
