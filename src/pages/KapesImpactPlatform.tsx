import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Leaf, QrCode, FileText, Sparkles, TrendingUp, Award, Heart, Monitor, Smartphone, Users, Globe, Shield, Target, Zap, Eye, BookOpen, Download, CheckCircle } from "lucide-react";
import { Footer } from "@/components/Footer";
import { ImpactMetricsCards } from "@/components/ImpactMetricsCards";
const KapesImpactPlatform = () => {
  const platformFeatures = [{
    icon: Eye,
    title: "Full Supply Chain Visibility",
    description: "See exactly where and how each garment was made, from raw materials to finished product."
  }, {
    icon: Shield,
    title: "Supplier Certifications",
    description: "View certification status and compliance records for all manufacturing partners."
  }, {
    icon: Zap,
    title: "Real-Time Impact",
    description: "Live updates on carbon savings, water usage, and social impact generated."
  }];
  const stakeholderFeatures = [{
    icon: Users,
    title: "School Leaders",
    description: "Comprehensive dashboards and reports for board meetings and stakeholder communications.",
    features: ["Executive summaries", "Goal tracking", "ROI analysis"],
    color: "blue"
  }, {
    icon: Heart,
    title: "Parents & Students",
    description: "Simple, engaging displays showing how their school is making a difference.",
    features: ["QR code scanning", "Impact stories", "Achievement badges"],
    color: "green"
  }, {
    icon: Globe,
    title: "Community",
    description: "Public dashboards showcasing your school's environmental leadership in the community.",
    features: ["Public dashboard", "Social sharing", "Impact comparisons"],
    color: "purple"
  }];
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-no-repeat" style={{
        backgroundImage: "url('https://res.cloudinary.com/drkudvyog/image/upload/v1737219891/mf7gylpmgb26uh7lbk8w.jpg')",
        backgroundPosition: "20% center"
      }}></div>
        
        {/* Overlay and Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-left">
          <div className="max-w-2xl space-y-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              KapesImpact™ Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
              Real-Time Sustainability Dashboard
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              Transform your school's sustainability story with live data, instant transparency, 
              and powerful reporting that showcases your environmental leadership.
            </p>
          </div>
        </div>
        
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
      </section>

      <ImpactMetricsCards />
      <section className="bg-gradient-warm-section py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-2xl px-6 py-3 mb-6">
              <QrCode className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Impact Tier Exclusive</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-tight mb-6">
              QR Codes for Instant Transparency
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every garment tells its complete story through embedded QR codes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              {platformFeatures.map((feature, index) => <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>)}
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-6 border-0 shadow-glass rounded-2xl">
                  <div className="text-2xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Transparency</div>
                </div>
                <div className="text-center p-6 border-0 shadow-glass rounded-2xl">
                  <div className="text-2xl font-bold text-primary mb-2">Instant</div>
                  <div className="text-sm text-muted-foreground">Access</div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <div className="border-0 shadow-glass rounded-3xl p-12 text-center">
                <div className="w-40 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <QrCode className="w-20 h-20 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Scan for Complete Story</h3>
                <p className="text-muted-foreground mb-6">
                  Each QR code contains the garment's complete journey and impact data
                </p>
                <Button className="w-full rounded-2xl hover-scale transition-smooth">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Try Sample Scan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Benefits for Stakeholders */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-2xl px-6 py-3 mb-6">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">For Your Community</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-tight mb-6">
              Built for Everyone
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Different stakeholders get exactly the information they need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stakeholderFeatures.map((stakeholder, index) => <div key={index} className="group hover-lift transition-smooth animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="border-0 shadow-glass rounded-3xl p-8 h-full">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-${stakeholder.color}-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth`}>
                      <stakeholder.icon className={`w-8 h-8 text-${stakeholder.color}-600`} />
                    </div>
                    <h3 className={`text-xl font-semibold text-${stakeholder.color}-600`}>{stakeholder.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 text-center">
                    {stakeholder.description}
                  </p>
                  <div className="space-y-2">
                    {stakeholder.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>)}
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Reporting Features */}
      <section className="bg-gradient-light-warm-section py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-2xl px-6 py-3 mb-6">
              <FileText className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Professional Reporting</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-tight mb-6">
              Reporting Made Easy
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              KapesImpact™ generates clear, professional reports that schools can instantly share with parents, board members, and stakeholders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="group hover-lift transition-smooth animate-fade-in text-center">
              <div className="border-0 shadow-glass rounded-3xl p-8 h-full">
                <div className="bg-primary/10 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Monthly Reports</h3>
                <p className="text-muted-foreground mb-6">Detailed sustainability metrics</p>
                <Button variant="outline" className="w-full rounded-2xl hover-scale transition-smooth">
                  Generate Report
                </Button>
              </div>
            </div>

            <div className="group hover-lift transition-smooth animate-fade-in text-center" style={{
            animationDelay: '0.1s'
          }}>
              <div className="border-0 shadow-glass rounded-3xl p-8 h-full">
                <div className="bg-primary/10 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Impact Certificates</h3>
                <p className="text-muted-foreground mb-6">Shareable achievement badges</p>
                <Button variant="outline" className="w-full rounded-2xl hover-scale transition-smooth">
                  View Certificates
                </Button>
              </div>
            </div>

            <div className="group hover-lift transition-smooth animate-fade-in text-center" style={{
            animationDelay: '0.2s'
          }}>
              <div className="border-0 shadow-glass rounded-3xl p-8 h-full">
                <div className="bg-primary/10 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Public Dashboard</h3>
                <p className="text-muted-foreground mb-6">Transparent community view</p>
                <Button variant="outline" className="w-full rounded-2xl hover-scale transition-smooth">
                  Share Dashboard
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-12 text-white relative overflow-hidden" style={{
      backgroundColor: '#cfeaff'
    }}>
        <div className="absolute inset-0 bg-[cfeaff]">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white border border-white/20 rounded-2xl px-6 py-3 mb-6">
              <Sparkles className="w-5 h-5" style={{
              color: '#030063'
            }} />
              <span className="text-sm font-medium" style={{
              color: '#030063'
            }}>Transform Your Impact Story</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-tight mb-6">
              Ready to Lead the Future of Sustainable Education?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed" style={{
            color: '#030063'
          }}>
              Join forward-thinking schools already using KapesImpact™ to showcase their 
              environmental leadership and inspire their communities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="rounded-2xl px-12 py-6 text-lg hover-scale transition-smooth text-white hover:opacity-90" style={{
              backgroundColor: '#f97769'
            }}>Start Your Journey</Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default KapesImpactPlatform;