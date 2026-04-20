"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';

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
          name: "Home",          id: "/"},
        {
          name: "About Us",          id: "/about"},
        {
          name: "Academics",          id: "/academics"},
        {
          name: "Admissions",          id: "/admissions"},
        {
          name: "News",          id: "/news"},
        {
          name: "Gallery",          id: "/gallery"},
        {
          name: "Contact",          id: "/contact"},
      ]}
      brandName="Elite Academy"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars"}}
      title="Excellence in Education"
      description="Nurturing the future leaders of tomorrow through holistic learning and innovation."
      testimonials={[
        {
          name: "John Doe",          handle: "Parent",          testimonial: "Class of 2024",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-feminine-tender-young-woman-curlyhaired-chubby-smiling-silly-look-camera-blue-eyes-girlfriend-attend-first-date-liking-spend-time-together-boyfriend-have-fun-look-happy-white-background_176420-50549.jpg"},
        {
          name: "Jane Smith",          handle: "Student",          testimonial: "Science Club",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/lifestyle-portrait-young-smiling-woman-student-office-employee-standing-street-blue_1258-205568.jpg"},
        {
          name: "Mark Wilson",          handle: "Alumni",          testimonial: "University of Tech",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-portrait-smiling-enthusiastic-hispanic-male-student-searching-job-consider-career-opportu_1258-113382.jpg"},
        {
          name: "Sarah Lee",          handle: "Parent",          testimonial: "Class of 2025",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/confident-businesswoman-with-coworkers_1139-204.jpg"},
        {
          name: "David Brown",          handle: "Faculty",          testimonial: "Math Dept",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-father-daughter-looking-photographer_23-2148349736.jpg"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/group-international-students-sitting-grass-together-park-university-african-caucasian-girls-indian-boy-talking-outdoors_1157-50065.jpg"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/back-school-university-concept-portrait-cheerful-handsome-male-student-describe-his-summer-vac_1258-109327.jpg",          alt: "student"},
        {
          src: "http://img.b2bpic.net/free-photo/young-beautiful-cheerful-african-woman-student-smiling-laughing-sitting-cafe-books-magazines-lying-table-learning-education_176420-12412.jpg",          alt: "student"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-woman-library_641386-223.jpg",          alt: "student"},
        {
          src: "http://img.b2bpic.net/free-photo/friendly-confident-pleasant-redhead-woman-helpfully-look-camera-smiling-joyfully-have-conversation-c_1258-142216.jpg",          alt: "faculty"},
        {
          src: "http://img.b2bpic.net/free-photo/closeup-portrait-cheerful-smiling-man-looking-happy-express-enthusiastic-optimistic-emotions-seei_1258-113416.jpg",          alt: "faculty"},
      ]}
      marqueeItems={[
        {
          type: "text",          text: "Innovation"},
        {
          type: "text",          text: "Integrity"},
        {
          type: "text",          text: "Excellence"},
        {
          type: "text",          text: "Community"},
        {
          type: "text",          text: "Leadership"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Message from the Principal"
      description="We believe that every child is unique and has the potential to excel given the right environment."
      imageSrc="http://img.b2bpic.net/free-photo/female-teacher-holding-online-class-computer_637285-9390.jpg"
    />
  </div>

  <div id="highlights" data-section="highlights">
      <FeatureCardNineteen
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          tag: "Academics",          title: "World Class Curriculum",          subtitle: "Innovative",          description: "Rigorous academic standards.",          imageSrc: "http://img.b2bpic.net/free-vector/20-modern-education-knowledge-power-solid-glyph-icon-pack-like-van-education-learining-growth-knowledge-growth_1142-15516.jpg"},
        {
          tag: "Sports",          title: "Athletic Excellence",          subtitle: "Dynamic",          description: "State of the art training.",          imageSrc: "http://img.b2bpic.net/free-photo/cartoon-vector-illustration-yellow-sticky-notes-pencil_1308-186781.jpg"},
        {
          tag: "Culture",          title: "Creative Arts",          subtitle: "Inclusive",          description: "Fostering creative minds.",          imageSrc: "http://img.b2bpic.net/free-vector/illustration-education-concept_53876-20589.jpg"},
      ]}
      title="Institutional Highlights"
      description="Our curriculum fosters growth across Academics, Sports, and Cultural disciplines."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      title="Frequently Asked Questions"
      description="Get quick answers to common questions about our programs."
      faqs={[
        {
          id: "1",          title: "What is the admission process?",          content: "Our process involves an online application followed by an interview."},
        {
          id: "2",          title: "Do you offer financial aid?",          content: "Yes, we provide merit-based scholarships and need-based aid."},
        {
          id: "3",          title: "What are the school hours?",          content: "Our school operates from 8:00 AM to 3:30 PM."},
        {
          id: "4",          title: "Is transport available?",          content: "We offer extensive bus services across the city."},
        {
          id: "5",          title: "How can I contact the administration?",          content: "You can reach us through the contact page."},
      ]}
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Join Us"
      title="Ready to Enroll?"
      description="Start your journey with Elite Academy today."
      buttons={[
        {
          text: "Apply Now",          href: "/admissions"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Elite Academy"
      columns={[
        {
          title: "Quick Links",          items: [
            {
              label: "About",              href: "/about"},
            {
              label: "Academics",              href: "/academics"},
          ],
        },
        {
          title: "Contact",          items: [
            {
              label: "Admissions",              href: "/admissions"},
            {
              label: "Email Support",              href: "/contact"},
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
