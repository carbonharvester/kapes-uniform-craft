import { Footer7 } from "@/components/ui/footer-7";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  const kapesFooterProps = {
    logo: {
      url: "/",
      src: "https://res.cloudinary.com/dng12bd0a/image/upload/v1753029943/03_Kapes_Small_Inline_White_4x_lqxjlh.png",
      alt: "Kapes Uniforms Logo",
      title: "Kapes Uniforms",
    },
    sections: [
      {
        title: "Why Kapes Uniforms",
        links: [
          { name: "Our Mission", href: "/our-mission" },
          { name: "Sustainability & Ethics", href: "/sustainability-ethics" },
          { name: "Social Impact in Africa", href: "/social-impact-africa" },
          { name: "Educational Resources", href: "/educational-resources" },
          { name: "Student Leadership", href: "/student-leadership" },
          { name: "Farm & Factory Visits", href: "/factory-visits" },
        ],
      },
      {
        title: "Sustainability",
        links: [
          { name: "Uniform Solutions", href: "/uniform-solutions" },
          { name: "Circular Economy & Takeback", href: "/circular-economy-takeback" },
          { name: "KapesImpact™ Platform", href: "/kapes-impact-platform" },
          { name: "School Shops & Lockers", href: "/school-shops-lockers" },
          { name: "Delivery & Packaging", href: "/delivery-packaging" },
        ],
      },
      {
        title: "Partnership",
        links: [
          { name: "Our Process", href: "/our-process" },
          { name: "Impact Partnership", href: "/impact-partnership" },
          { name: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Resources",
        links: [
          { name: "Blog", href: "/blog" },
          { name: "Sustainability Scorecard", href: "/sustainability-scorecard" },
          { name: "Uniform Policy Maker", href: "/uniform-policy-maker" },
          { name: "Resources & Tools", href: "/resources" },
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
    copyright: "© 2024 Kapes Uniforms. All rights reserved.",
    legalLinks: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  };

  return <Footer7 {...kapesFooterProps} />;
};