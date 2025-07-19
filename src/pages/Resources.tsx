import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { ValueCalculator } from "@/components/ValueCalculator";
import { TierQuiz } from "@/components/TierQuiz";
import { BookOpen, Download, Calculator } from "lucide-react";
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
    answer: "We offer three tiers - EcoLaunch, SustainPro, and LegacyImpact - each with increasing levels of support and features."
  }, {
    question: "How is impact measured?",
    answer: "Through our KapesImpact™ dashboard, which tracks carbon savings, recycling rates, meals donated, and more in real-time."
  }];
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-no-repeat" style={{
        backgroundImage: "url('https://res.cloudinary.com/dng12bd0a/image/upload/v1752871031/2_19_s_eyievk.jpg')",
        backgroundPosition: "20% center"
      }}></div>
        
        {/* Overlay and Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        
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
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Latest Articles</h2>
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

          {/* Educational Tools */}
          <section className="py-16 bg-muted/30 -mx-4 px-4 rounded-3xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Free Educational Tools</h2>
              <p className="text-muted-foreground text-lg">Resources to empower your sustainability journey</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-0 shadow-glass hover-lift transition-smooth">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-medium">Sustainability Guides</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Comprehensive guides for implementing sustainability practices in schools.
                  </p>
                  <Button variant="outline" className="flex items-center gap-2 rounded-xl hover:scale-105 transition-smooth">
                    <Download className="h-4 w-4" />
                    Download Guides
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-glass hover-lift transition-smooth">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-medium">Kapes Leaders Academy</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Ready-to-use lesson plans on sustainability, ethics, and global citizenship.
                  </p>
                  <Button variant="outline" className="flex items-center gap-2 rounded-xl hover:scale-105 transition-smooth">
                    <Download className="h-4 w-4" />
                    Download Plans
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Free Audit Tool */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Free School Uniform Sustainability Scorecard</h2>
              <p className="text-muted-foreground text-lg">Get personalized insights for your school</p>
            </div>
            <Card className="border-0 shadow-glass max-w-4xl mx-auto">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Calculator className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-medium mb-4">Diagnostic Tool with Report Generation</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Get a comprehensive analysis of your current uniform program with personalized recommendations for improvement.
                  </p>
                </div>
                <div className="max-w-2xl mx-auto">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">School Name</label>
                      <input type="text" className="w-full p-3 border rounded-xl bg-background" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Current Uniform Supplier</label>
                      <input type="text" className="w-full p-3 border rounded-xl bg-background" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Annual Uniform Budget</label>
                      <input type="number" className="w-full p-3 border rounded-xl bg-background" />
                    </div>
                    <Button type="submit" className="w-full rounded-xl font-medium text-lg py-4 hover:scale-105 transition-smooth">
                      Start Free Audit
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Partnership Tier Quiz */}
          <section className="py-16 bg-muted/30 -mx-4 px-4 rounded-3xl">
            <Card className="border-0 shadow-glass max-w-4xl mx-auto">
              <CardContent className="p-8 md:p-12">
                <TierQuiz />
              </CardContent>
            </Card>
          </section>

          {/* FAQ Section */}
          <section>
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
    </div>;
};
export default Resources;