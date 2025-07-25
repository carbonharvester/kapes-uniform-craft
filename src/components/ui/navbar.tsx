import React from "react";
import { Link } from "react-router-dom";
import { Book, Menu, Sunset, Trees, Zap, GraduationCap, Building, Users, Package, Phone, Recycle, Heart, Award, Calculator, Factory, Leaf, FileText } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
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
    title: ""
  },
  menu = [{
    title: "Why Kapes",
    url: "#",
    items: [{
      title: "Our Mission",
      description: "Learn about our commitment to sustainability",
      icon: <GraduationCap className="size-5 shrink-0" />,
      url: "/our-mission"
    }, {
      title: "Sustainability & Ethics",
      description: "Our commitment to ethical and sustainable practices",
      icon: <Trees className="size-5 shrink-0" />,
      url: "/sustainability-ethics"
    }, {
      title: "Social Impact in Africa",
      description: "Our positive impact on African communities",
      icon: <Heart className="size-5 shrink-0" />,
      url: "/social-impact-africa"
    }, {
      title: "Educational Resources",
      description: "Teaching materials about sustainability",
      icon: <Book className="size-5 shrink-0" />,
      url: "/educational-resources"
    }, {
      title: "Student Leadership",
      description: "Student involvement in sustainability",
      icon: <Users className="size-5 shrink-0" />,
      url: "/student-leadership"
    }, {
      title: "Farm & Factory Visits",
      description: "Tour our manufacturing facilities",
      icon: <Factory className="size-5 shrink-0" />,
      url: "/factory-visits"
    }]
  }, {
    title: "Sustainability as a Service",
    url: "#",
    items: [{
      title: "Uniform Solutions",
      description: "Complete uniform programs for schools",
      icon: <Package className="size-5 shrink-0" />,
      url: "/uniform-solutions"
    }, {
      title: "Circular Economy & Takeback",
      description: "Our circular economy and product takeback programs",
      icon: <Recycle className="size-5 shrink-0" />,
      url: "/circular-economy-takeback"
    }, {
      title: "KapesImpact™ Platform",
      description: "Track your sustainability impact",
      icon: <Zap className="size-5 shrink-0" />,
      url: "/kapes-impact-platform"
    }, {
      title: "School Shops & Lockers",
      description: "Convenient on-campus uniform access",
      icon: <Book className="size-5 shrink-0" />,
      url: "/school-shops-lockers"
    }, {
      title: "Delivery & Packaging",
      description: "Sustainable delivery and packaging solutions",
      icon: <Sunset className="size-5 shrink-0" />,
      url: "/delivery-packaging"
    }]
  }, {
    title: "Partner with us",
    url: "#",
    items: [{
      title: "Our Process",
      description: "Step-by-step guide to working with Kapes",
      icon: <Zap className="size-5 shrink-0" />,
      url: "/our-process"
    }, {
      title: "Impact Partnership",
      description: "Comprehensive sustainability solutions for maximum impact",
      icon: <Award className="size-5 shrink-0" />,
      url: "/impact-partnership"
    }]
  }, {
    title: "Resources",
    url: "#",
    items: [{
      title: "Blog",
      description: "Latest sustainability insights and updates",
      icon: <Book className="size-5 shrink-0" />,
      url: "/blog"
    }, {
      title: "Sustainability Scorecard",
      description: "Assess your school's uniform sustainability",
      icon: <Calculator className="size-5 shrink-0" />,
      url: "/sustainability-scorecard"
    }, {
      title: "Uniform Policy Maker",
      description: "Create custom sustainable uniform policies",
      icon: <FileText className="size-5 shrink-0" />,
      url: "/uniform-policy-maker"
    }, {
      title: "Resources & Tools",
      description: "Guides, calculators, and assessment tools",
      icon: <Zap className="size-5 shrink-0" />,
      url: "/resources"
    }]
  }],
  mobileExtraLinks = [],
  auth = {
    login: {
      text: "KapesImpact",
      url: "/kapes-impact-platform"
    },
    signup: {
      text: "Get Started",
      url: "/contact"
    }
  }
}: NavbarProps) => {
  return <header className="py-3 md:py-4 lg:py-6 fixed top-0 left-0 right-0 z-50 glass border-b border-border/50 backdrop-blur-md bg-background/95 supports-[backdrop-filter]:bg-background/60 w-full">
      <div className="container px-3 md:px-4 lg:px-6">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6 xl:gap-8">
            <Link to={logo.url} className="flex items-center gap-2 group transition-all duration-300 flex-shrink-0">
              {logo.src ? <img src={logo.src} className="h-7 xl:h-8 w-auto object-contain group-hover:scale-110 transition-transform duration-300" alt={logo.alt} onLoad={() => console.log('Logo loaded successfully')} onError={e => {
              console.error('Logo failed to load:', (e.target as HTMLImageElement).src);
              (e.target as HTMLImageElement).style.display = 'none';
            }} style={{
              minWidth: '28px',
              maxWidth: '180px'
            }} /> : null}
              {logo.title && <span className="text-lg xl:text-xl font-semibold tracking-tight text-heading whitespace-nowrap">{logo.title}</span>}
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList className="gap-1 xl:gap-2">
                  {menu.map(item => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2 xl:gap-3 flex-shrink-0">
            <Button asChild size="sm" className="rounded-xl font-medium px-4 xl:px-6 transition-all duration-300 hover:scale-105 whitespace-nowrap">
              <Link to="/sustainability-scorecard">Start Here</Link>
            </Button>
          </div>
        </nav>

        <div className="block lg:hidden">
          <div className="flex items-center justify-between gap-3">
            <Link to={logo.url} className="flex items-center gap-2 flex-shrink-0 min-w-0">
              {logo.src ? <img src={logo.src} className="h-6 sm:h-7 md:h-8 w-auto object-contain flex-shrink-0" alt={logo.alt} onLoad={() => console.log('Mobile logo loaded successfully')} onError={e => {
              console.error('Mobile logo failed to load:', (e.target as HTMLImageElement).src);
              (e.target as HTMLImageElement).style.display = 'none';
            }} style={{
              minWidth: '24px',
              maxWidth: '140px'
            }} /> : null}
              {logo.title && <span className="text-sm sm:text-base md:text-lg font-semibold text-heading whitespace-nowrap truncate">{logo.title}</span>}
            </Link>
            
            {/* Mobile hamburger menu */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="p-2 flex-shrink-0">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto w-[85vw] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle>
                      <Link to={logo.url} className="flex items-center gap-2">
                        {logo.src && <img src={logo.src} className="h-8" alt={logo.alt} />}
                        {logo.title && <span className="text-lg font-semibold">
                            {logo.title}
                          </span>}
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="my-6 flex flex-col gap-6">
                    <Accordion type="single" collapsible className="flex w-full flex-col gap-4">
                      {menu.map(item => renderMobileMenuItem(item))}
                    </Accordion>
                    <div className="border-t py-4">
                      <div className="grid grid-cols-2 justify-start">
                        {mobileExtraLinks.map((link, idx) => <Link key={idx} className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground" to={link.url}>
                            {link.name}
                          </Link>)}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <Button asChild>
                        <Link to={auth.signup.url}>{auth.signup.text}</Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>;
};
const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return <NavigationMenuItem key={item.title} className="relative">
        <NavigationMenuTrigger className="text-foreground font-medium hover:text-primary transition-colors duration-300 rounded-xl whitespace-nowrap text-sm lg:text-base">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="absolute left-0 top-full mt-2">
          <ul className="w-96 p-4 glass border border-border/50 rounded-2xl shadow-glass bg-popover/25 backdrop-blur-md">
            {item.items.map(subItem => <li key={subItem.title}>
                <NavigationMenuLink asChild>
                  <Link className="flex select-none gap-4 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent/50 hover:text-accent-foreground group" to={subItem.url}>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {subItem.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground mb-1">
                        {subItem.title}
                      </div>
                      {subItem.description && <p className="text-sm leading-relaxed text-muted-foreground">
                          {subItem.description}
                        </p>}
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>)}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>;
  }
  return <Link key={item.title} className="group inline-flex h-10 w-max items-center justify-center rounded-xl px-3 lg:px-4 py-2 font-medium text-foreground transition-all duration-300 hover:bg-accent/50 hover:text-primary whitespace-nowrap text-sm lg:text-base" to={item.url}>
      {item.title}
    </Link>;
};
const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map(subItem => <Link key={subItem.title} className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted hover:text-accent-foreground" to={subItem.url}>
              {subItem.icon}
              <div>
                <div className="text-sm font-semibold">{subItem.title}</div>
                {subItem.description && <p className="text-sm leading-snug text-muted-foreground">
                    {subItem.description}
                  </p>}
              </div>
            </Link>)}
        </AccordionContent>
      </AccordionItem>;
  }
  return <Link key={item.title} to={item.url} className="font-semibold">
      {item.title}
    </Link>;
};
export { Navbar };