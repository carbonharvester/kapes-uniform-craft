import { Footer7 } from "@/components/ui/footer-7";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  const kapesFooterProps = {
    logo: {
      url: "/",
      src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=32&h=32&fit=crop&crop=center",
      alt: "Kapes Logo",
      title: "Kapes",
    },
    sections: [
      {
        title: "Solutions",
        links: [
          { name: "Uniform Solutions", href: "/uniform-solutions" },
          { name: "Partnership Tiers", href: "/partnership-tiers" },
          { name: "Impact Dashboard", href: "/kapes-impact-platform" },
          { name: "School Shop Lockers", href: "/school-shops-lockers" },
        ],
      },
      {
        title: "Company",
        links: [
          { name: "About Us", href: "/about" },
          { name: "Our Mission", href: "/our-mission" },
          { name: "Our Factories", href: "/our-factories" },
          { name: "Case Studies", href: "/case-studies" },
        ],
      },
      {
        title: "Resources",
        links: [
          { name: "Materials", href: "/materials" },
          { name: "Educational Resources", href: "/educational-resources" },
          { name: "Contact", href: "/contact" },
          { name: "Partner With Us", href: "/partner-with-us" },
        ],
      },
    ],
    description: "Sustainable school uniforms that don't compromise on quality, comfort, or style. Leading the fashion revolution in education.",
    socialLinks: [
      { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
      { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
      { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
      { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
    ],
    copyright: "© 2024 Kapes. All rights reserved.",
    legalLinks: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  };

  return <Footer7 {...kapesFooterProps} />;
};