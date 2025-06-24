
import { Hero } from "@/components/Hero";
import { SchoolCodeEntry } from "@/components/SchoolCodeEntry";
import { WhyKapes } from "@/components/WhyKapes";
import { Superpowers } from "@/components/Superpowers";
import { OneForAll } from "@/components/OneForAll";
import { CaseStudies } from "@/components/CaseStudies";
import { InTheNews } from "@/components/InTheNews";
import { Partnership } from "@/components/Partnership";
import { BlogSection } from "@/components/BlogSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <SchoolCodeEntry />
      <WhyKapes />
      <Superpowers />
      <OneForAll />
      <CaseStudies />
      <InTheNews />
      <Partnership />
      <BlogSection />
    </div>
  );
};

export default Index;
