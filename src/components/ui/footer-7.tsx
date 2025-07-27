import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
  { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

export const Footer7 = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://www.shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  sections = defaultSections,
  description = "A collection of components for your startup business or side project.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2024 Shadcnblocks.com. All rights reserved.",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <footer className="bg-gradient-to-footer text-white">
      {/* Main Footer Content */}
      <div className="py-16 lg:py-20">
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Logo and Description Section */}
            <div className="lg:col-span-4">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <a href={logo.url}>
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      title={logo.title}
                      className="h-8"
                    />
                  </a>
                </div>
                <p className="text-sm text-white/80 leading-relaxed max-w-sm">
                  {description}
                </p>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      aria-label={social.label}
                      className="text-white/80 hover:text-white transition-colors duration-200"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Sections */}
            <div className="lg:col-span-8">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {sections.map((section, sectionIdx) => (
                  <div key={sectionIdx}>
                    <h3 className="mb-4 font-semibold text-white text-sm tracking-wide">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIdx) => (
                        <li key={linkIdx}>
                          <a
                            href={link.href}
                            className="text-sm text-white/80 hover:text-white transition-colors duration-200 block"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10">
        <div className="container mx-auto py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/80">{copyright}</p>
            <div className="flex gap-6">
              {legalLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-sm text-white/80 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};