import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { ValueCalculator } from "@/components/ValueCalculator";
import { ImpactAssessment } from "@/components/ImpactAssessment";
import { FreeAuditTool } from "@/components/FreeAuditTool";
import { BookOpen, Download, FileText } from "lucide-react";
import { Footer } from "@/components/Footer";
const Resources = () => {
  const blogPosts = [{
    title: "Top Sustainability Challenges for Private Schools",
    excerpt: "Navigate the key challenges schools face when implementing sustainable practices.",
    category: "Sustainability"
  }, {
    title: "Ethical Fashion in Education: A Guide for Schools",
    excerpt: "Understanding how to make ethical choices in school uniform procurement.",
    category: "Ethics"
  }, {
    title: "Building Student Engagement Through Sustainability",
    excerpt: "Practical tips for involving students in your school's sustainability journey.",
    category: "Engagement"
  }];
  const faqs = [{
    question: "What are the contract terms for partnership?",
    answer: "Our partnerships are based on 3-year minimum agreements with flexible terms and upgrade options."
  }, {
    question: "How do the different tiers work?",
    answer: "We offer a comprehensive partnership program that includes sustainable uniforms, impact tracking, and full support for your school community."
  }, {
    question: "How is impact measured?",
    answer: "Through our KapesImpact™ dashboard, which tracks carbon savings, recycling rates, meals donated, and more in real-time."
  }];
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-hero-to-warm">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-no-repeat" style={{
        backgroundImage: "url('https://res.cloudinary.com/dng12bd0a/image/upload/v1752871031/2_19_s_eyievk.jpg')",
        backgroundPosition: "20% center"
      }}></div>
        
        {/* Overlay and Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-left">
          <div className="max-w-2xl space-y-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Resources & Tools</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Get Started
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              Guides, tools, and insights to help you build a more sustainable future for your school.
            </p>
          </div>
        </div>
        
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Blog Section */}
          <section className="bg-gradient-warm-section py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Guides</h2>
              <p className="text-muted-foreground text-lg">Insights and guidance for sustainable education</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map(post => <Card key={post.title} className="border-0 shadow-glass hover-lift transition-smooth">
                  <CardHeader>
                    <Badge className="w-fit mb-4 bg-primary/10 text-primary">{post.category}</Badge>
                    <CardTitle className="text-xl font-medium leading-tight">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>
                    <Button variant="outline" size="sm" className="rounded-xl hover:scale-105 transition-smooth">
                      Read More
                    </Button>
                  </CardContent>
                </Card>)}
            </div>
          </section>

          {/* Value Calculator */}
          <ValueCalculator />

          <FreeAuditTool />

          {/* Uniform Policy Maker */}
          <section className="py-16 bg-gradient-warm-section -mx-4 px-4 rounded-3xl">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary">
                <FileText className="w-4 h-4 mr-2" />
                Policy Generator
              </Badge>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">
                Uniform Policy Maker
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Create comprehensive, sustainable uniform policies tailored to your school's specific needs and goals
              </p>
            </div>

            <Card className="border-0 shadow-glass max-w-4xl mx-auto">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-medium">Build Custom Policies</CardTitle>
              </CardHeader>
              <CardContent className="p-8 text-center space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                  Generate professional uniform policies that align with your sustainability goals, budget constraints, and educational objectives.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl mx-auto flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-medium">Custom Templates</h3>
                    <p className="text-sm text-muted-foreground">Tailored to your school type and goals</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl mx-auto flex items-center justify-center">
                      <Download className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-medium">Ready to Use</h3>
                    <p className="text-sm text-muted-foreground">Download as PDF for immediate implementation</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl mx-auto flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-medium">Best Practices</h3>
                    <p className="text-sm text-muted-foreground">Based on sustainability standards</p>
                  </div>
                </div>
                <div className="pt-6">
                  <Button size="lg" className="rounded-xl px-8 hover:scale-105 transition-smooth" onClick={() => window.location.href = '/uniform-policy-maker'}>
                    <FileText className="w-5 h-5 mr-2" />
                    Create Your Policy
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Partnership Tier Quiz */}
          <section className="py-16 bg-gradient-warm-section -mx-4 px-4 rounded-3xl">
            <Card className="border-0 shadow-glass max-w-4xl mx-auto">
              <CardContent className="p-8 md:p-12">
                <ImpactAssessment />
              </CardContent>
            </Card>
          </section>

          {/* FAQ Section */}
          <section className="bg-gradient-light-warm-section py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-lg">Quick answers to common questions</p>
            </div>
            <div className="flex justify-center">
              <FAQAccordion />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>;
};
export default Resources;