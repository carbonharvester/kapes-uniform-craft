
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      title: "Why Kapes",
      items: [
        { name: "Our Mission", path: "/our-mission" },
        { name: "Sustainability & Ethics", path: "/sustainability-ethics" },
        { name: "Circular Economy & Takeback", path: "/circular-economy" },
        { name: "Social Impact in Africa", path: "/social-impact" },
        { name: "Testimonials & Case Studies", path: "/case-studies" },
      ]
    },
    {
      title: "Solutions",
      items: [
        { name: "Uniform Solutions", path: "/uniform-solutions" },
        { name: "KapesImpact™ Platform", path: "/kapes-impact-platform" },
        { name: "School Shops & Lockers", path: "/school-shops-lockers" },
        { name: "Delivery & Packaging", path: "/delivery-packaging" },
      ]
    },
    {
      title: "How It Works",
      items: [
        { name: "Our Process", path: "/our-process" },
        { name: "Implementation Timeline", path: "/implementation-timeline" },
        { name: "FAQs", path: "/faqs" },
      ]
    },
    {
      title: "Partnerships",
      items: [
        { name: "Partnership Tiers", path: "/partnership-tiers" },
        { name: "Base (Impact Aware)", path: "/partnership-base" },
        { name: "Core (Sustainability Standard)", path: "/partnership-core" },
        { name: "Impact (Flagship Program)", path: "/partnership-impact" },
      ]
    },
    {
      title: "Resources",
      items: [
        { name: "Educational Resources", path: "/educational-resources" },
        { name: "Factory Visits", path: "/factory-visits" },
        { name: "Student Governance", path: "/student-governance" },
        { name: "Blog & Articles", path: "/blog" },
      ]
    },
    {
      title: "Contact",
      items: [
        { name: "Request Audit/Demo", path: "/request-demo" },
        { name: "General Inquiries", path: "/contact" },
        { name: "Parent & School Support", path: "/support" },
      ]
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b font-inter relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-primary">Kapes</div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navigationItems.map((section) => (
                <NavigationMenuItem key={section.title} value={section.title}>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    {section.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[200px] gap-1 p-2">
                      {section.items.map((item) => (
                        <NavigationMenuLink key={item.name} asChild>
                          <Link
                            to={item.path}
                            className="block px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                          >
                            {item.name}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button size="sm" className="bg-primary hover:bg-primary/90 font-semibold">
              Shop
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg max-h-96 overflow-y-auto z-50">
            <nav className="px-4 py-4 space-y-4">
              {navigationItems.map((section) => (
                <div key={section.title} className="space-y-2">
                  <h3 className="font-semibold text-primary text-sm">{section.title}</h3>
                  <div className="pl-3 space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`block text-sm font-medium transition-colors hover:text-primary ${
                          isActive(item.path) ? "text-primary font-semibold" : "text-gray-600"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-4">
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90 font-semibold">
                  Shop
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
