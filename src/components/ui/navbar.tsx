import React from "react";
import { Book, Menu, Sunset, Trees, Zap, GraduationCap, Building, Users, Package, Phone, Recycle, Heart, Award, Calculator, Factory, Leaf } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: JSX.Element;
  items?: MenuItem[];
}

interface NavbarProps {
  logo?: {
    url: string;
    src?: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
  auth?: {
    login: {
      text: string;
      url: string;
    };
    signup: {
      text: string;
      url: string;
    };
  };
}

const Navbar = ({
  logo = {
    url: "/",
    src: "/lovable-uploads/9ac843b9-dfa5-4ffa-9138-fba60284a971.png",
    alt: "Kapes",
    title: "",
  },
  menu = [
    {
      title: "Why Kapes",
      url: "#",
      items: [
        {
          title: "Our Mission",
          description: "Learn about our commitment to sustainability",
          icon: <GraduationCap className="size-5 shrink-0" />,
          url: "/our-mission",
        },
        {
          title: "Sustainability & Ethics",
          description: "Our commitment to ethical and sustainable practices",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/sustainability-ethics",
        },
        {
          title: "Social Impact in Africa",
          description: "Our positive impact on African communities",
          icon: <Heart className="size-5 shrink-0" />,
          url: "/social-impact-africa",
        },
        {
          title: "Educational Resources",
          description: "Teaching materials about sustainability",
          icon: <Book className="size-5 shrink-0" />,
          url: "/educational-resources",
        },
        {
          title: "Student Leadership",
          description: "Student involvement in sustainability",
          icon: <Users className="size-5 shrink-0" />,
          url: "/student-leadership",
        },
      ],
    },
    {
      title: "Solutions",
      url: "#",
      items: [
        {
          title: "Uniform Solutions",
          description: "Complete uniform programs for schools",
          icon: <Package className="size-5 shrink-0" />,
          url: "/uniform-solutions",
        },
        {
          title: "Circular Economy & Takeback",
          description: "Our circular economy and product takeback programs",
          icon: <Recycle className="size-5 shrink-0" />,
          url: "/circular-economy-takeback",
        },
        {
          title: "KapesImpact™ Platform",
          description: "Track your sustainability impact",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/kapes-impact-platform",
        },
        {
          title: "School Shops & Lockers",
          description: "Convenient on-campus uniform access",
          icon: <Book className="size-5 shrink-0" />,
          url: "/school-shops-lockers",
        },
        {
          title: "Delivery & Packaging",
          description: "Sustainable delivery and packaging solutions",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/delivery-packaging",
        },
        {
          title: "Factory Visits",
          description: "Tour our manufacturing facilities",
          icon: <Building className="size-5 shrink-0" />,
          url: "/factory-visits",
        },
      ],
    },
    {
      title: "How It Works",
      url: "#",
      items: [
        {
          title: "Our Process",
          description: "Step-by-step guide to working with Kapes",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/our-process",
        },
        {
          title: "Implementation Timeline",
          description: "From onboarding to full implementation",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/implementation-timeline",
        },
      ],
    },
    {
      title: "Partnerships",
      url: "#",
      items: [
        {
          title: "Partnership Tiers",
          description: "Choose the right partnership level",
          icon: <Users className="size-5 shrink-0" />,
          url: "/partnership-tiers",
        },
        {
          title: "EcoLaunch",
          description: "Basic sustainable uniform solutions",
          icon: <Package className="size-5 shrink-0" />,
          url: "/ecolaunch-tier",
        },
        {
          title: "SustainPro",
          description: "Enhanced sustainability features",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/sustainpro-tier",
        },
        {
          title: "LegacyImpact",
          description: "Full flagship sustainability program",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/legacyimpact-tier",
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      items: [
        {
          title: "Blog",
          description: "Latest sustainability insights and updates",
          icon: <Book className="size-5 shrink-0" />,
          url: "/blog",
        },
        {
          title: "FAQ",
          description: "Frequently asked questions and AI chat",
          icon: <Book className="size-5 shrink-0" />,
          url: "/faq",
        },
        {
          title: "Sustainability Scorecard",
          description: "Assess your school's uniform sustainability",
          icon: <Calculator className="size-5 shrink-0" />,
          url: "/sustainability-scorecard",
        },
        {
          title: "Resources & Tools",
          description: "Guides, calculators, and assessment tools",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/resources",
        },
      ],
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ],
  mobileExtraLinks = [
    { name: "Resources & Tools", url: "/resources" },
  ],
  auth = {
    login: { text: "KapesImpact", url: "/kapes-impact-platform" },
    signup: { text: "Get Started", url: "/contact" },
  },
}: NavbarProps) => {
  return (
    <section className="py-6 sticky top-0 z-50 glass border-b border-border/50">
      <div className="container">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-8">
            <a href={logo.url} className="flex items-center gap-2 group transition-all duration-300">
              {logo.src ? (
                <img 
                  src={logo.src} 
                  className="h-8 w-auto object-contain group-hover:scale-110 transition-transform duration-300" 
                  alt={logo.alt}
                  onLoad={() => console.log('Logo loaded successfully')}
                  onError={(e) => {
                    console.error('Logo failed to load:', (e.target as HTMLImageElement).src);
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                  style={{ minWidth: '32px', maxWidth: '200px' }}
                />
              ) : null}
              {logo.title && <span className="text-xl font-semibold tracking-tight text-heading">{logo.title}</span>}
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList className="gap-2">
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-3">
            <Button asChild variant="outline" size="sm" className="rounded-xl font-medium px-6 transition-all duration-300 hover:scale-105">
              <a href="/shop">Shop</a>
            </Button>
            <Button asChild size="sm" className="rounded-xl font-medium px-6 transition-all duration-300 hover:scale-105">
              <a href="/sustainability-scorecard">Take Audit</a>
            </Button>
          </div>
        </nav>

        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <a href={logo.url} className="flex items-center gap-2">
              {logo.src ? (
                <img 
                  src={logo.src} 
                  className="h-8 w-auto object-contain" 
                  alt={logo.alt}
                  onLoad={() => console.log('Mobile logo loaded successfully')}
                  onError={(e) => {
                    console.error('Mobile logo failed to load:', (e.target as HTMLImageElement).src);
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                  style={{ minWidth: '32px', maxWidth: '160px' }}
                />
              ) : null}
              {logo.title && <span className="text-lg font-semibold text-heading">{logo.title}</span>}
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      {logo.src && <img src={logo.src} className="h-8" alt={logo.alt} />}
                      {logo.title && (
                        <span className="text-lg font-semibold">
                          {logo.title}
                        </span>
                      )}
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  <div className="border-t py-4">
                    <div className="grid grid-cols-2 justify-start">
                      {mobileExtraLinks.map((link, idx) => (
                        <a
                          key={idx}
                          className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
                          href={link.url}
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <a href={auth.login.url}>{auth.login.text}</a>
                    </Button>
                    <Button asChild>
                      <a href={auth.signup.url}>{auth.signup.text}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="relative">
        <NavigationMenuTrigger className="text-foreground font-medium hover:text-primary transition-colors duration-300 rounded-xl">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="absolute left-0 top-full mt-2">
          <ul className="w-96 p-4 glass border border-border/50 rounded-2xl shadow-glass bg-popover/95 backdrop-blur-md">
            {item.items.map((subItem) => (
              <li key={subItem.title}>
                <NavigationMenuLink asChild>
                  <a
                    className="flex select-none gap-4 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent/50 hover:text-accent-foreground group"
                    href={subItem.url}
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {subItem.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground mb-1">
                        {subItem.title}
                      </div>
                      {subItem.description && (
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {subItem.description}
                        </p>
                      )}
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <a
      key={item.title}
      className="group inline-flex h-10 w-max items-center justify-center rounded-xl px-4 py-2 font-medium text-foreground transition-all duration-300 hover:bg-accent/50 hover:text-primary"
      href={item.url}
    >
      {item.title}
    </a>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <a
              key={subItem.title}
              className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
              href={subItem.url}
            >
              {subItem.icon}
              <div>
                <div className="text-sm font-semibold">{subItem.title}</div>
                {subItem.description && (
                  <p className="text-sm leading-snug text-muted-foreground">
                    {subItem.description}
                  </p>
                )}
              </div>
            </a>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="font-semibold">
      {item.title}
    </a>
  );
};

export { Navbar };
