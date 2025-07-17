import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  Leaf, 
  QrCode, 
  FileText, 
  Sparkles, 
  TrendingUp, 
  Award, 
  Heart,
  Monitor,
  Smartphone,
  Users,
  Globe,
  Shield,
  Target,
  Zap,
  Eye,
  ArrowRight,
  CheckCircle,
  Play,
  Download
} from "lucide-react";
import { useState } from "react";

export const KapesImpactPlatform = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen">
      {/* Revolutionary Hero Section */}
      <section className="relative py-32 bg-gradient-primary text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-32 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="animate-fade-in">
              <Badge className="bg-white/15 text-white border-white/20 mb-8 text-sm px-4 py-2">
                <BarChart3 className="w-4 h-4 mr-2" />
                Next-Generation Impact Analytics
              </Badge>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                  KapesImpact™
                </span>
              </h1>
              
              <div className="mb-8">
                <p className="text-2xl md:text-3xl font-semibold mb-4 text-white/90">
                  Real-Time Sustainability Dashboard
                </p>
                <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
              </div>
              
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-white/85 mb-12">
                Transform your school's sustainability story with live data, instant transparency, 
                and powerful reporting that showcases your environmental leadership.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-4 rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 group">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
                <Button size="lg" variant="ghost" className="text-white border-white/30 hover:bg-white/10 text-lg px-8 py-4 rounded-full">
                  <Download className="w-5 h-5 mr-2" />
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-auto">
            <path 
              d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" 
              fill="hsl(var(--background))"
              className="drop-shadow-lg"
            />
          </svg>
        </div>
      </section>

      {/* Interactive Platform Overview */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6">
              <Monitor className="w-4 h-4 mr-2" />
              Platform Features
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 heading-gradient">
              Everything You Need to Track Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive real-time analytics across every aspect of your sustainability journey
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-secondary/20 p-2 rounded-2xl">
              <TabsTrigger value="overview" className="rounded-xl py-4 text-lg">Dashboard Overview</TabsTrigger>
              <TabsTrigger value="analytics" className="rounded-xl py-4 text-lg">Live Analytics</TabsTrigger>
              <TabsTrigger value="reports" className="rounded-xl py-4 text-lg">Smart Reports</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="group hover-lift shadow-glass border-0 bg-card/80 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Leaf className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-green-600 dark:text-green-400">Carbon Impact</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="bg-green-500/10 rounded-xl p-6 mb-4">
                      <div className="text-3xl font-bold text-green-700 dark:text-green-300 mb-2">2.4 tonnes</div>
                      <div className="text-sm text-green-600 dark:text-green-400">CO₂ Saved This Year</div>
                    </div>
                    <p className="text-muted-foreground">
                      Real-time carbon footprint tracking with detailed breakdowns by material and process.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover-lift shadow-glass border-0 bg-card/80 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <BarChart3 className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">Circular Economy</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="bg-blue-500/10 rounded-xl p-6 mb-4">
                      <div className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-2">1,247</div>
                      <div className="text-sm text-blue-600 dark:text-blue-400">Items Recycled</div>
                    </div>
                    <p className="text-muted-foreground">
                      Track takeback programs and circular economy initiatives with detailed analytics.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover-lift shadow-glass border-0 bg-card/80 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-orange-600 dark:text-orange-400">Social Impact</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="bg-orange-500/10 rounded-xl p-6 mb-4">
                      <div className="text-3xl font-bold text-orange-700 dark:text-orange-300 mb-2">3,741</div>
                      <div className="text-sm text-orange-600 dark:text-orange-400">Meals Donated</div>
                    </div>
                    <p className="text-muted-foreground">
                      Every garment returned funds meals for children in need—track your community impact.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-glass border-0 bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-6 h-6 text-primary" />
                      Live Data Streams
                    </CardTitle>
                    <CardDescription>
                      Real-time updates from production, delivery, and end-of-life processes
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-secondary/10 rounded-lg">
                      <span className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        Production Line
                      </span>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-secondary/10 rounded-lg">
                      <span className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                        Supply Chain
                      </span>
                      <Badge variant="secondary">Tracking</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-secondary/10 rounded-lg">
                      <span className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                        Impact Metrics
                      </span>
                      <Badge variant="secondary">Live</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-glass border-0 bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-6 h-6 text-primary" />
                      Goal Tracking
                    </CardTitle>
                    <CardDescription>
                      Monitor progress against sustainability targets and commitments
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Carbon Neutral by 2025</span>
                        <span>78%</span>
                      </div>
                      <div className="h-2 bg-secondary/20 rounded-full overflow-hidden">
                        <div className="h-full w-[78%] bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>100% Recycled Materials</span>
                        <span>92%</span>
                      </div>
                      <div className="h-2 bg-secondary/20 rounded-full overflow-hidden">
                        <div className="h-full w-[92%] bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Zero Waste to Landfill</span>
                        <span>85%</span>
                      </div>
                      <div className="h-2 bg-secondary/20 rounded-full overflow-hidden">
                        <div className="h-full w-[85%] bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="reports" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="group hover-lift shadow-glass border-0 bg-card/80 backdrop-blur-sm text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <FileText className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Monthly Reports</CardTitle>
                    <CardDescription>Automated sustainability summaries</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">Generate Report</Button>
                  </CardContent>
                </Card>

                <Card className="group hover-lift shadow-glass border-0 bg-card/80 backdrop-blur-sm text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Impact Certificates</CardTitle>
                    <CardDescription>Shareable achievement badges</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">View Certificates</Button>
                  </CardContent>
                </Card>

                <Card className="group hover-lift shadow-glass border-0 bg-card/80 backdrop-blur-sm text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Public Dashboard</CardTitle>
                    <CardDescription>Transparent community view</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">Share Dashboard</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Revolutionary QR Technology Section */}
      <section className="py-24 bg-secondary/5 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6">
                <QrCode className="w-4 h-4 mr-2" />
                Impact Tier Exclusive
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 heading-gradient">
                Instant Transparency Technology
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Every garment tells its complete story through embedded QR codes
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Eye className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Full Supply Chain Visibility</h3>
                      <p className="text-muted-foreground">
                        See exactly where and how each garment was made, from raw materials to finished product.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Worker Welfare Data</h3>
                      <p className="text-muted-foreground">
                        Access detailed information about working conditions, wages, and safety standards.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Real-Time Impact</h3>
                      <p className="text-muted-foreground">
                        Live updates on carbon savings, water usage, and social impact generated.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="text-center p-6 border-0 bg-card/50">
                    <div className="text-2xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Transparency</div>
                  </Card>
                  <Card className="text-center p-6 border-0 bg-card/50">
                    <div className="text-2xl font-bold text-primary mb-2">Instant</div>
                    <div className="text-sm text-muted-foreground">Access</div>
                  </Card>
                </div>
              </div>

              <div className="relative">
                <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-12 shadow-glass hover-lift">
                  <div className="text-center">
                    <div className="w-40 h-40 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-elegant">
                      <QrCode className="w-20 h-20 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Scan for Complete Story</h3>
                    <p className="text-muted-foreground mb-6">
                      Each QR code contains the garment's complete journey and impact data
                    </p>
                    <Button className="w-full rounded-xl">
                      <Smartphone className="w-4 h-4 mr-2" />
                      Try Sample Scan
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6">
              <Users className="w-4 h-4 mr-2" />
              For Your Community
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 heading-gradient">
              Built for Everyone
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-16">
              Different stakeholders get exactly the information they need
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group hover-lift shadow-glass border-0 bg-card/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-blue-600">School Leaders</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    Comprehensive dashboards and reports for board meetings and stakeholder communications.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Executive summaries
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Goal tracking
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      ROI analysis
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover-lift shadow-glass border-0 bg-card/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-green-600">Parents & Students</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    Simple, engaging displays showing how their school is making a difference.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      QR code scanning
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Impact stories
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Achievement badges
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover-lift shadow-glass border-0 bg-card/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl text-purple-600">Community</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    Public dashboards showcasing your school's environmental leadership in the community.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Public dashboard
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Social sharing
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Impact comparisons
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-white/15 text-white border-white/20 mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              Transform Your Impact Story
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to Lead the Future of 
              <span className="block">Sustainable Education?</span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 text-white/85 max-w-3xl mx-auto">
              Join forward-thinking schools already using KapesImpact™ to showcase their 
              environmental leadership and inspire their communities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" variant="secondary" className="text-lg px-12 py-6 rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 group">
                Schedule Your Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button size="lg" variant="ghost" className="text-white border-white/30 hover:bg-white/10 text-lg px-12 py-6 rounded-full">
                <FileText className="w-5 h-5 mr-2" />
                Get the Full Brochure
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">5 min</div>
                <div className="text-white/70 text-sm">Setup Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-white/70 text-sm">Live Data</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-white/70 text-sm">Transparency</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};