import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Leaf, Factory, BarChart3, Recycle, Users, Heart, Store, Package, Truck, MapPin, Brain, MessageCircle, GraduationCap } from "lucide-react";
import factoryVisitsImage from "@/assets/factory-visits.jpg";
import organicCottonImage from "@/assets/organic-cotton.jpg";
import sustainableMaterialsImage from "@/assets/sustainable-materials.jpg";
import ethicalManufacturingImage from "@/assets/ethical-manufacturing.jpg";
import takebackSchemeImage from "@/assets/takeback-scheme.jpg";
import freeUniformsMealsImage from "@/assets/free-uniforms-meals.jpg";
import freeSchoolUniformsImage from "@/assets/free-school-uniforms.png";
import uniformProgramImage from "@/assets/uniform-program.png";
import eCommerceLockerImage from "@/assets/e-commerce-lockers.png";
import studentBoardImage from "@/assets/student-board.jpg";
import nextDayDeliveryImage from "@/assets/next-day-delivery.jpg";
import { cn } from "@/lib/utils";

interface DifferenceCard {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  details: {
    title: string;
    content: string;
    features: string[];
  };
}

const differences: DifferenceCard[] = [
  {
    id: "materials",
    title: "Earth-First Fabrics",
    subtitle: "Every thread matters for our planet's future.",
    tagline: "Kind to skin. Kinder to Earth.",
    description: "100% organic and recycled fabrics",
    image: sustainableMaterialsImage,
    icon: <Leaf className="w-6 h-6" />,
    details: {
      title: "Natural, Sustainable Materials",
      content: "We craft every uniform with the health of your students and the future of the planet in mind. Using only the highest quality natural and recycled materials, we ensure our garments are safe, breathable, and durable — without compromising on sustainability. From GOTS-certified organic cotton to recycled polyester and biodegradable fibers, every fabric we use is chosen for its low environmental impact and high performance in the classroom and beyond. Our materials are always free from harmful chemicals and dyes, and fully traceable through an ethical, transparent supply chain. This means your school can offer families uniforms they can feel proud of — comfortable for their children, and responsible for the world they'll grow up in.",
      features: []
    }
  },
  {
    id: "manufacturing",
    title: "People-First Production",
    subtitle: "Fair wages and safe working conditions.",
    tagline: "Made with pride. Made with purpose.",
    description: "Responsible production practices",
    image: ethicalManufacturingImage,
    icon: <Factory className="w-6 h-6" />,
    details: {
      title: "Ethical Manufacturing",
      content: "We take pride in knowing exactly who makes our uniforms — and how they're treated. Our manufacturing partners are carefully chosen not just for their craftsmanship, but for their commitment to people. Every factory we work with is Fair Trade certified or meets equivalent ethical standards, ensuring all workers receive a living wage, operate in safe and healthy environments, and are treated with dignity and respect. We maintain full visibility into their practices through regular third-party audits and uphold a strict zero-tolerance policy for child labour. When your school partners with Kapes, you're not just choosing better uniforms — you're supporting a global supply chain that values humanity as much as quality.",
      features: []
    }
  },
  {
    id: "uniforms-africa",
    title: "One For All Promise",
    subtitle: "Providing dignity through education access.",
    tagline: "Buy one. Give one. Change lives.",
    description: "Breaking barriers to learning",
    image: uniformProgramImage,
    icon: <Heart className="w-6 h-6" />,
    details: {
      title: "Free School Uniforms in Africa",
      content: "Every uniform your school purchases helps open the door to education for a child who needs it most. Through our 1:1 donation program, we provide a free, high-quality school uniform to a child in Africa for every one sold — ensuring no student is kept out of the classroom simply because they don't have the right clothes. These uniforms are made locally through our ethical manufacturing partners, supporting regional job creation and reducing environmental impact. Beyond the garment itself, we engage directly with schools and communities to understand their needs and remove barriers to education with dignity and respect. When your families choose Kapes, they're not just buying a uniform — they're giving one too.",
      features: []
    }
  },
  {
    id: "takeback",
    title: "Circular Life Guarantee",
    subtitle: "Complete circular lifecycle management.",
    tagline: "Wear. Return. Repeat.",
    description: "End-to-end uniform recycling",
    image: takebackSchemeImage,
    icon: <Recycle className="w-6 h-6" />,
    details: {
      title: "Fully Managed Takeback Scheme",
      content: "Our takeback program ensures that no uniform ever becomes waste — closing the loop and turning every garment into a force for good. At the end of its life, each Kapes uniform is collected, professionally cleaned and refurbished where possible, or responsibly recycled into new materials. Many items are donated to families in need, extending their use and impact even further. The entire process is fully managed by us — from free collections to lifecycle tracking — so your school doesn't need to lift a finger. It's a simple, powerful way to reduce environmental impact, support communities, and model circular thinking for your students and families.",
      features: []
    }
  },
  {
    id: "africa",
    title: "Uniforms that Feed",
    subtitle: "Creating global educational equity.",
    tagline: "Return uniforms. Feed children.",
    description: "Supporting education worldwide",
    image: freeUniformsMealsImage,
    icon: <Heart className="w-6 h-6" />,
    details: {
      title: "Free Uniforms & School Meals in Africa",
      content: "Our takeback scheme doesn't just reduce waste — it puts food on the table for children who need it most.\n\nFor every item of school uniform returned through our circular program, we provide a free school meal to a child who would otherwise go hungry. In Kenya, 1 in 3 children suffers from stunted growth due to chronic undernourishment. And while a subsidised meal can cost as little as 12 cents, far too many children still go without — sitting in classrooms with empty stomachs, unable to focus, learn, or thrive.\n\nBy encouraging families to return used uniforms, we close the loop and break down a devastating barrier to education. A small act — dropping a uniform into a return bag — becomes a lifeline.\n\nLess waste for the planet. More nourishment for children. That's what impact looks like.",
      features: [
        "1:1 uniform donation program",
        "Daily school meal provision",
        "Educational infrastructure support",
        "Teacher training programs",
        "Community development initiatives"
      ]
    }
  },
  {
    id: "dashboard",
    title: "KapesImpact Dashboard",
    subtitle: "Track your environmental impact live.",
    tagline: "See impact. Share impact.",
    description: "Complete transparency on impact",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=600&fit=crop",
    icon: <BarChart3 className="w-6 h-6" />,
    details: {
      title: "Real-Time Sustainability Dashboard",
      content: "With Kapes, your school can measure its environmental and social impact — not just talk about it. Our real-time dashboard gives you full visibility into the difference your uniform choices are making. From carbon footprint and water savings to waste reduction and social contributions, every metric is tracked live and presented in an easy-to-use format. You'll have access to data on how many garments have been returned through our takeback scheme, how many free meals or uniforms have been provided through your partnership, and how your choices are driving meaningful change. Custom reporting tools also make it simple to share your progress with parents, students, boards, or inspectors — turning your uniform program into a living, breathing example of sustainability in action.",
      features: []
    }
  },
  {
    id: "carbon-offsetting",
    title: "Planet Positive Pledge",
    subtitle: "Neutralizing our environmental impact.",
    tagline: "Beyond neutral. Actively healing.",
    description: "Climate-positive manufacturing",
    image: "https://res.cloudinary.com/dng12bd0a/image/upload/v1752904778/Filip-C-Agoo-Everland-Marketing-Kenya-8679-WEB-low-resolution_fwb4kw.jpg",
    icon: <Leaf className="w-6 h-6" />,
    details: {
      title: "Carbon Offsetting & Climate Action",
      content: "We go beyond reducing emissions — we actively work to remove carbon from the atmosphere. Every Kapes uniform is manufactured with a commitment to climate neutrality, backed by verified carbon offset programs that support reforestation, renewable energy, and sustainable agriculture projects worldwide. Our comprehensive carbon accounting tracks emissions throughout the entire lifecycle — from raw material production to transportation and end-of-life processing. Through partnerships with Gold Standard certified projects, we ensure that every uniform sold contributes to measurable, additional climate impact. This means your school's uniform program doesn't just minimize harm — it actively helps heal the planet.",
      features: [
        "Verified carbon offset programs",
        "Gold Standard certified projects",
        "Full lifecycle carbon accounting",
        "Reforestation support initiatives",
        "Renewable energy investments",
        "Climate-positive manufacturing"
      ]
    }
  },
  {
    id: "educational-programs",
    title: "Kapes Eco Academy",
    subtitle: "Empowering students through sustainability education.",
    tagline: "Learn it. Live it. Lead it.",
    description: "Interactive learning initiatives",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=600&fit=crop",
    icon: <GraduationCap className="w-6 h-6" />,
    details: {
      title: "Educational Programs",
      content: "Transform your uniform program into a powerful educational tool that brings sustainability to life in the classroom. Our comprehensive educational programs engage students at every level, from interactive workshops about textile production and environmental impact to hands-on projects that demonstrate circular economy principles. Students learn where their uniforms come from, how they're made, and what happens when they're returned through our takeback scheme. Through curriculum support, guest speakers, and immersive experiences, we help schools turn everyday uniforms into meaningful learning opportunities that inspire the next generation of sustainability leaders.",
      features: [
        "Interactive sustainability workshops",
        "Curriculum support materials",
        "Supply chain education programs",
        "Environmental impact demonstrations",
        "Student leadership development",
        "Guest speaker sessions",
        "Hands-on circular economy projects",
        "Real-world case study materials"
      ]
    }
  },
  {
    id: "visits",
    title: "Behind-the-Scenes Tours",
    subtitle: "See sustainability in action firsthand.",
    tagline: "From field to school. Transparency tells.",
    description: "Transparent supply chain access",
    image: factoryVisitsImage,
    icon: <MapPin className="w-6 h-6" />,
    details: {
      title: "Farm & Factory Visits",
      content: "Through guided visits to our partner farms and factories, your school community can witness exactly how and where your uniforms are made. From the organic cotton fields to the cutting tables and sewing machines, these immersive experiences offer a powerful look at sustainable practices in action.\n\nStudents meet the skilled people behind their clothing, learn about ethical production, and gain a deeper appreciation for the impact of conscious choices. For educators, it's a chance to bring sustainability and global citizenship to life beyond the classroom.\n\nIt's not just a field trip — it's a window into the values your school stands for.",
      features: [
        "Guided farm and factory tours",
        "Meet the people behind your uniforms",
        "See sustainable practices in action",
        "Educational opportunities for students",
        "Complete supply chain transparency"
      ]
    }
  },
  {
    id: "governance",
    title: "Kapes Young Leaders Council",
    subtitle: "Empowering students to lead change.",
    tagline: "Young voices. Big changes.",
    description: "Student-led sustainability initiatives",
    image: studentBoardImage,
    icon: <Users className="w-6 h-6" />,
    details: {
      title: "Kapes Young Leaders Council",
      content: "We believe students should have a voice in shaping a more sustainable future — starting with their own school. Our student leadership program empowers young people to take an active role in sustainability, from reviewing impact data to leading real initiatives that make a difference. Through school-based committees, regular review meetings, and peer-led campaigns, students are given meaningful decision-making opportunities — not just token roles. They'll gain valuable leadership experience, develop practical skills, and inspire their peers to take action. It's not just about raising awareness — it's about raising leaders.",
      features: []
    }
  },
  {
    id: "pop-up",
    title: "Pop-Up Experiences",
    subtitle: "Bringing uniforms directly to your community.",
    tagline: "We come to you. You come together.",
    description: "Mobile uniform experiences and events",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=600&fit=crop",
    icon: <Truck className="w-6 h-6" />,
    details: {
      title: "Pop-Up Experiences",
      content: "Our mobile uniform experiences bring the complete Kapes service directly to your school community. Whether it's a weekend fitting event in the school hall, a pop-up shop at the school fair, or a dedicated uniform day in your local community center, we create memorable experiences that make uniform shopping convenient and engaging. These events often feature interactive sustainability workshops, meet-the-maker sessions, and hands-on demonstrations of our circular economy in action. Students and families can see, feel, and try our uniforms while learning about the positive impact their choices make around the world. It's more than just shopping — it's an opportunity to bring your school community together around shared values of sustainability, quality, and global citizenship.",
      features: [
        "Mobile fitting and sizing services",
        "Community-based pop-up events",
        "Interactive sustainability workshops",
        "Meet-the-maker experiences",
        "Family-friendly educational activities",
        "Flexible scheduling around school events"
      ]
    }
  },
  {
    id: "shops",
    title: "Uniform Hubs",
    subtitle: "Convenient access to quality uniforms.",
    tagline: "Try. Buy. Learn. Earn.",
    description: "Physical retail presence at schools",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=600&fit=crop",
    icon: <Store className="w-6 h-6" />,
    details: {
      title: "On-Campus School Shops",
      content: "Designed and built by Kapes, these dedicated retail spaces provide schools with a fully branded, professionally fitted shop right on-site. Parents benefit from convenient, face-to-face service where they can see, feel, and try uniforms before buying — with immediate access to essential items during the school year.\n\nBut these shops are more than just a point of sale. They also create hands-on learning opportunities for students, who can assist with stock management, customer service, and basic retail operations as part of a structured program. It's a chance to gain practical skills in a real business environment — right inside the school gates.\n\nWhether as a standalone shop or alongside our locker and delivery options, it's a seamless way to bring the uniform experience closer to your community.",
      features: [
        "Dedicated on-site retail spaces",
        "Student employment opportunities",
        "Try-before-you-buy service",
        "Immediate uniform availability",
        "Professional fitting services"
      ]
    }
  },
  {
    id: "lockers",
    title: "SmartCollect Lockers",
    subtitle: "Smart collection points for busy families.",
    tagline: "Order online. Collect anytime.",
    description: "Automated pickup and delivery",
    image: eCommerceLockerImage,
    icon: <Package className="w-6 h-6" />,
    details: {
      title: "E-Commerce Lockers",
      content: "Installed at your school, the locker provides 24/7 access so parents can pick up orders whenever it suits them — before drop-off, after pick-up, or even during the weekend. As soon as their order is ready, they receive an instant SMS and email notification with a secure access code. The system also supports easy returns and exchanges, making it just as simple to send something back.\n\nIt's a modern, flexible solution designed for today's busy families — and one more way Kapes makes uniforms effortless for everyone involved.",
      features: [
        "24/7 access to secure lockers",
        "Multiple pickup locations",
        "SMS and email notifications",
        "Temperature-controlled storage",
        "Returns and exchanges capability"
      ]
    }
  },
];

export const KapesDifferentCarousel = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);

  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4 py-4">
          {differences.map((difference) => (
            <CarouselItem key={difference.id} className="pl-2 md:pl-4 px-2 basis-full sm:basis-1/2 lg:basis-1/3">
              <Card className="h-96 border-0 overflow-hidden relative group cursor-pointer transition-all duration-300 hover:scale-105 rounded-2xl">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${difference.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 15%, rgba(0,0,0,0) 25%)' }} />
                
                <CardContent className="p-6 h-full flex flex-col justify-between relative z-10">
                  {/* Text content at top left */}
                  <div>
                    <h3 className="text-xl font-semibold leading-tight text-white mb-2">
                      {difference.title}
                    </h3>
                    <p className="text-sm text-white/90 font-light">
                      {difference.tagline}
                    </p>
                  </div>

                   {/* Plus Button at bottom right */}
                   <div className="flex justify-end">
                     <Dialog 
                       open={openDialog === difference.id} 
                       onOpenChange={(open) => setOpenDialog(open ? difference.id : null)}
                     >
                       <DialogTrigger asChild>
                         <button
                           className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-200 hover:scale-110"
                           onClick={(e) => {
                             e.stopPropagation();
                             setOpenDialog(openDialog === difference.id ? null : difference.id);
                           }}
                         >
                           <Plus className="w-4 h-4 text-white" />
                         </button>
                       </DialogTrigger>
                       <DialogContent className="w-[480px] max-w-[480px] p-0 border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
                         <div className="p-8">
                           <div className="flex items-center space-x-4 mb-6">
                             <div className="p-3 rounded-xl bg-primary">
                               {React.cloneElement(difference.icon as React.ReactElement, {
                                 className: "w-6 h-6 text-white"
                               })}
                             </div>
                             <h4 className="text-xl font-semibold text-foreground">
                               {difference.details.title}
                             </h4>
                           </div>
                           
                            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                              {difference.details.content}
                            </p>
                         </div>
                       </DialogContent>
                     </Dialog>
                   </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation arrows positioned below and centered */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <CarouselPrevious className="relative left-0 translate-x-0 translate-y-0 hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="relative right-0 translate-x-0 translate-y-0 hover:bg-primary hover:text-primary-foreground" />
        </div>
      </Carousel>
    </div>
  );
};
