
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Camera, Heart, Plane, Star, Trophy, Gift, CheckCircle, ArrowRight } from "lucide-react";

const Affiliate = () => {
  return (
    <div className="min-h-screen bg-gradient-tri-sections">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 text-lg px-6 py-2 bg-primary/10 text-primary border-primary/20">
            EXCLUSIVE AFFILIATE PROGRAM
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-heading mb-8 leading-tight">
            Refer 3 Schools,<br />
            <span className="text-primary">Win Kenya</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Get paid $2,000 per school referral + earn an all-expenses-paid behind-the-scenes adventure to Kenya 
            when you refer 3 schools to Kapes sustainable uniforms
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-4 rounded-xl">
              Join Affiliate Program <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 rounded-xl">
              Watch Kenya Trip Video
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$2,000</div>
              <div className="text-muted-foreground">Per School Referral</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <div className="text-muted-foreground">Schools = Kenya Trip</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$0</div>
              <div className="text-muted-foreground">Cost to You</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Offer Section */}
      <section className="py-20 px-4 bg-gradient-warm-section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-heading mb-6">
              Here's What You Get
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              This isn't just another affiliate program. This is your chance to make serious money while changing the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-heading mb-2">$2,000 Per School</h3>
                  <p className="text-muted-foreground">Immediate payment for every school that signs up through your referral. No waiting, no games.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Plane className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-heading mb-2">All-Expenses Kenya Trip</h3>
                  <p className="text-muted-foreground">Flights, accommodation, meals, safari, everything covered when you hit 3 referrals.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Gift className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-heading mb-2">Exclusive Behind-the-Scenes Access</h3>
                  <p className="text-muted-foreground">See how we're revolutionizing education and sustainability in African communities.</p>
                </div>
              </div>
            </div>
            
            <Card className="p-8 glass border-border/50">
              <div className="text-center mb-6">
                <Badge className="text-lg px-4 py-2 bg-primary text-primary-foreground">
                  TOTAL VALUE: $15,000+
                </Badge>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-border/30">
                  <span>3 School Referrals</span>
                  <span className="font-bold">$6,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border/30">
                  <span>Kenya Flight & Hotels</span>
                  <span className="font-bold">$4,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border/30">
                  <span>Safari Experience</span>
                  <span className="font-bold">$2,500</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border/30">
                  <span>Meals & Experiences</span>
                  <span className="font-bold">$1,500</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border/30">
                  <span>VIP Access & Tours</span>
                  <span className="font-bold">$1,000</span>
                </div>
                <div className="flex justify-between items-center text-xl font-bold text-primary pt-4">
                  <span>YOUR INVESTMENT</span>
                  <span>$0</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Kenya Trip Itinerary */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-heading mb-6">
              Your Kenya Adventure
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              7 days of life-changing experiences that money can't buy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass border-border/50 hover-lift transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>School Visits</CardTitle>
                <CardDescription>
                  Visit the schools we support and see firsthand how sustainable uniforms are changing lives
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="glass border-border/50 hover-lift transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Carbon Offset Projects</CardTitle>
                <CardDescription>
                  Tour reforestation and clean energy projects that offset our manufacturing footprint
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="glass border-border/50 hover-lift transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Big 5 Safari</CardTitle>
                <CardDescription>
                  3-day luxury safari experience in Maasai Mara with professional guides
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="glass border-border/50 hover-lift transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Cultural Immersion</CardTitle>
                <CardDescription>
                  Meet local artisans, visit markets, and experience authentic Kenyan culture
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="glass border-border/50 hover-lift transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Luxury Accommodation</CardTitle>
                <CardDescription>
                  5-star eco-lodges and boutique hotels throughout your journey
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="glass border-border/50 hover-lift transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Gift className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>VIP Experiences</CardTitle>
                <CardDescription>
                  Exclusive access to our manufacturing partners and sustainability initiatives
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Referral Requirements */}
      <section className="py-20 px-4 bg-gradient-warm-section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-heading mb-6">
              How to Qualify
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple, straightforward requirements. No hidden catches.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-heading mb-2">Sign Up</h3>
                <p className="text-muted-foreground">Join our affiliate program and get your unique referral code</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-heading mb-2">Refer Schools</h3>
                <p className="text-muted-foreground">Connect us with schools that need sustainable uniform solutions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-heading mb-2">Get Paid</h3>
                <p className="text-muted-foreground">Earn $2,000 per school + Kenya trip at 3 referrals</p>
              </div>
            </div>
            
            <Card className="p-8 glass border-border/50">
              <h3 className="text-2xl font-bold text-heading mb-6 text-center">School Qualification Criteria</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Minimum 200 students</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Annual uniform budget of $50,000+</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Decision maker contact provided</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Interest in sustainability programs</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-heading mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real affiliates, real results, real trips to Kenya
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 glass border-border/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Mitchell</h4>
                  <p className="text-sm text-muted-foreground">Education Consultant</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "I referred 5 schools in my first quarter and earned $10,000. The Kenya trip was absolutely life-changing. Seeing the impact firsthand made me even more passionate about Kapes' mission."
              </p>
              <Badge variant="secondary">$10,000 earned + Kenya trip</Badge>
            </Card>
            
            <Card className="p-6 glass border-border/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Marcus Rodriguez</h4>
                  <p className="text-sm text-muted-foreground">Former School Principal</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "My network of educator friends was perfect for this. I've now referred 8 schools and have been to Kenya twice. Each trip reveals new ways Kapes is making a difference."
              </p>
              <Badge variant="secondary">$16,000 earned + 2 Kenya trips</Badge>
            </Card>
            
            <Card className="p-6 glass border-border/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Jennifer Wong</h4>
                  <p className="text-sm text-muted-foreground">Sustainability Advocate</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "The Kenya experience wasn't just a reward—it was education. I came back with stories and insights that helped me refer 3 more schools immediately after returning."
              </p>
              <Badge variant="secondary">$12,000 earned + Kenya trip</Badge>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-warm-section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-heading mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-6 glass border-border/50">
              <h3 className="text-xl font-bold text-heading mb-3">When do I get paid?</h3>
              <p className="text-muted-foreground">Payment is processed within 30 days of a school signing their contract with Kapes. No waiting for quarterly payments or minimum thresholds.</p>
            </Card>
            
            <Card className="p-6 glass border-border/50">
              <h3 className="text-xl font-bold text-heading mb-3">What if a school doesn't qualify?</h3>
              <p className="text-muted-foreground">We'll work with you to help them meet our criteria or find alternative solutions. Our goal is to help every school become sustainable.</p>
            </Card>
            
            <Card className="p-6 glass border-border/50">
              <h3 className="text-xl font-bold text-heading mb-3">Can I bring someone on the Kenya trip?</h3>
              <p className="text-muted-foreground">Yes! Your spouse or partner can join for an additional fee, or earn a second trip by referring 6 schools total.</p>
            </Card>
            
            <Card className="p-6 glass border-border/50">
              <h3 className="text-xl font-bold text-heading mb-3">Is there a limit to referrals?</h3>
              <p className="text-muted-foreground">No limits! Top affiliates earn $50,000+ annually and qualify for multiple Kenya trips and exclusive rewards.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-heading mb-8">
              Ready to Change Lives<br />
              <span className="text-primary">And See Kenya?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              This isn't just about the money or the trip. This is about being part of a movement that's revolutionizing education and sustainability worldwide. Your referrals create lasting impact.
            </p>
            
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-heading mb-4">Limited Time Bonus</h3>
              <p className="text-lg text-muted-foreground mb-6">
                First 50 affiliates to join get an extra $500 for their first referral
              </p>
              <Badge className="text-lg px-6 py-2">Only 23 spots remaining</Badge>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-xl px-12 py-6 rounded-xl">
                Join Affiliate Program Now
              </Button>
              <Button variant="outline" size="lg" className="text-xl px-12 py-6 rounded-xl">
                Schedule Info Call
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-8">
              No contracts. No hidden fees. Cancel anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Affiliate;
