import { Button } from "@/components/ui/button";
import { BarChart3, Leaf, QrCode, FileText, Sparkles, TrendingUp, Award, Heart } from "lucide-react";

export const KapesImpactPlatform = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary to-primary/80 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <BarChart3 className="w-4 h-4" />
              <span className="text-sm font-medium">Data-Driven Sustainability</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              KapesImpact™ Platform
            </h1>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-white/30 flex-1 max-w-20"></div>
              <p className="text-2xl md:text-3xl font-semibold text-white/90">
                Real-Time Sustainability, at Your Fingertips
              </p>
              <div className="h-px bg-white/30 flex-1 max-w-20"></div>
            </div>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed text-white/90">
              The KapesImpact™ Platform is a revolutionary sustainability dashboard that lets schools track, measure, and communicate their environmental and social impact—instantly.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-auto">
            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" fill="hsl(var(--background))"></path>
          </svg>
        </div>
      </section>

      {/* Enhanced Tracking Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What KapesImpact™ Tracks</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive metrics that showcase your school's environmental leadership
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="group hover-scale animate-fade-in">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl p-8 h-full border border-green-100 dark:border-green-900/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">
                  Carbon Savings
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  See the exact reduction in carbon footprint from using sustainable materials. Track your school's contribution to climate action in real-time.
                </p>
                <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-green-700 dark:text-green-300">This Year</span>
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-green-800 dark:text-green-200">2.4 tonnes CO₂</div>
                  <div className="text-xs text-green-600 dark:text-green-400">Saved vs. traditional uniforms</div>
                </div>
              </div>
            </div>

            <div className="group hover-scale animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-2xl p-8 h-full border border-blue-100 dark:border-blue-900/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">
                  Uniform Recycling
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Track exactly how many uniforms your community has diverted from landfill through our takeback program.
                </p>
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Garments Recycled</span>
                    <Award className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-blue-800 dark:text-blue-200">1,247 items</div>
                  <div className="text-xs text-blue-600 dark:text-blue-400">Diverted from landfill</div>
                </div>
              </div>
            </div>

            <div className="group hover-scale animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-2xl p-8 h-full border border-orange-100 dark:border-orange-900/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">
                  Meals Donated
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Every returned garment funds meals for children in need—see your impact grow throughout the year.
                </p>
                <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Meals Provided</span>
                    <Heart className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-orange-800 dark:text-orange-200">3,741 meals</div>
                  <div className="text-xs text-orange-600 dark:text-orange-400">To children in need</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced QR Codes Section */}
      <section className="py-24 bg-gradient-to-br from-secondary/5 to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(0,0,0,0.05),transparent_70%)]"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
              <QrCode className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Impact Tier Exclusive</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">QR Codes for Instant Transparency</h2>
            
            <div className="bg-background/80 backdrop-blur-sm border-2 border-border/50 rounded-3xl p-8 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Uniforms come embedded with QR codes. Students, parents, and staff can scan the code to see immediate transparency about how and where each garment was made, and the exact impact their purchase has generated.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Factory location & worker conditions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Material sourcing & sustainability</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Carbon footprint calculation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Social impact generated</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                      <QrCode className="w-16 h-16 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-4 text-center">Scan for full transparency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Reporting Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-2 mb-6">
              <FileText className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Professional Reporting</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Reporting Made Easy</h2>
            
            <div className="bg-gradient-to-br from-background to-secondary/20 rounded-3xl p-8 border border-border/50 shadow-2xl mb-12">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                KapesImpact™ generates clear, professional reports that schools can instantly share with parents, board members, and stakeholders, making your sustainability achievements clear and tangible.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-background/50 rounded-xl p-6 border border-border/30">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Monthly Reports</h4>
                  <p className="text-sm text-muted-foreground">Detailed sustainability metrics</p>
                </div>
                <div className="bg-background/50 rounded-xl p-6 border border-border/30">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Annual Summaries</h4>
                  <p className="text-sm text-muted-foreground">Year-over-year impact analysis</p>
                </div>
                <div className="bg-background/50 rounded-xl p-6 border border-border/30">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Achievement Badges</h4>
                  <p className="text-sm text-muted-foreground">Milestone celebrations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">See It In Action</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Impact Reporting?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Book a personalized demo and see how KapesImpact™ can showcase your school's sustainability leadership
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
              Schedule a Demo of KapesImpact™
              <div className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</div>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};