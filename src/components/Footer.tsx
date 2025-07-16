import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Kapes</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Sustainable school uniforms that don't compromise on quality, comfort, or style. 
              Leading the fashion revolution in education.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="/our-mission" className="block text-primary-foreground/80 hover:text-white transition-colors">Our Mission</a>
              <a href="/sustainability-ethics" className="block text-primary-foreground/80 hover:text-white transition-colors">Sustainability & Ethics</a>
              <a href="/partnership-tiers" className="block text-primary-foreground/80 hover:text-white transition-colors">Partnership Tiers</a>
              <a href="/uniform-solutions" className="block text-primary-foreground/80 hover:text-white transition-colors">Uniform Solutions</a>
              <a href="/kapes-impact-platform" className="block text-primary-foreground/80 hover:text-white transition-colors">KapesImpact™ Platform</a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <div className="space-y-2">
              <a href="/school-shops-lockers" className="block text-primary-foreground/80 hover:text-white transition-colors">School Shops & Lockers</a>
              <a href="/delivery-packaging" className="block text-primary-foreground/80 hover:text-white transition-colors">Delivery & Packaging</a>
              <a href="/educational-resources" className="block text-primary-foreground/80 hover:text-white transition-colors">Educational Resources</a>
              <a href="/factory-visits" className="block text-primary-foreground/80 hover:text-white transition-colors">Factory Visits</a>
              <a href="/student-governance" className="block text-primary-foreground/80 hover:text-white transition-colors">Student Governance</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-foreground/80 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">hello@kapes.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-foreground/80 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">+44 20 1234 5678</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-foreground/80 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">
                    123 Sustainability Street<br />
                    London, SW1A 1AA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 Kapes. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy-policy" className="text-primary-foreground/80 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-primary-foreground/80 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-primary-foreground/80 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};