import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Download, Calculator, HelpCircle } from "lucide-react";

const Resources = () => {
  const blogPosts = [
    {
      title: "Top Sustainability Challenges for Private Schools",
      excerpt: "Navigate the key challenges schools face when implementing sustainable practices.",
      category: "Sustainability"
    },
    {
      title: "Ethical Fashion in Education: A Guide for Schools",
      excerpt: "Understanding how to make ethical choices in school uniform procurement.",
      category: "Ethics"
    },
    {
      title: "Building Student Engagement Through Sustainability",
      excerpt: "Practical tips for involving students in your school's sustainability journey.",
      category: "Engagement"
    }
  ];

  const faqs = [
    {
      question: "What are the contract terms for partnership?",
      answer: "Our partnerships are based on 3-year minimum agreements with flexible terms and upgrade options."
    },
    {
      question: "How do the different tiers work?",
      answer: "We offer three tiers - EcoLaunch, SustainPro, and LegacyImpact - each with increasing levels of support and features."
    },
    {
      question: "How is impact measured?",
      answer: "Through our KapesImpact™ dashboard, which tracks carbon savings, recycling rates, meals donated, and more in real-time."
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Resources & Tools</h1>
          
          {/* Blog Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Card key={post.title}>
                  <CardHeader>
                    <Badge className="w-fit mb-2">{post.category}</Badge>
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Button variant="outline" size="sm">Read More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Educational Tools */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Free Educational Tools</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Sustainability Guides
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Comprehensive guides for implementing sustainability practices in schools.</p>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Guides
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Lesson Plans
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Ready-to-use lesson plans on sustainability, ethics, and global citizenship.</p>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Plans
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Free Audit Tool */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Free Uniform Program Audit</h2>
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Calculator className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-4">Diagnostic Tool with Report Generation</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Get a comprehensive analysis of your current uniform program with personalized recommendations for improvement.
                  </p>
                </div>
                <div className="max-w-2xl mx-auto">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">School Name</label>
                      <input type="text" className="w-full p-3 border rounded-lg" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Current Uniform Supplier</label>
                      <input type="text" className="w-full p-3 border rounded-lg" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Annual Uniform Budget</label>
                      <input type="number" className="w-full p-3 border rounded-lg" />
                    </div>
                    <Button type="submit" className="w-full">Start Free Audit</Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* School Matcher Quiz */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">School Matcher Quiz</h2>
            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Find Your Perfect Partnership Tier</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Take our interactive quiz to discover which Kapes partnership tier aligns best with your school's values and goals.
                </p>
                <Button size="lg">Take the Quiz</Button>
              </CardContent>
            </Card>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <HelpCircle className="h-5 w-5 text-primary" />
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resources;