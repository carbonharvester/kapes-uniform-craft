import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Users, 
  Camera,
  Star,
  Heart,
  Globe,
  Calendar,
  DollarSign,
  Target,
  Gift,
  Plane,
  TreePine,
  School,
  ChevronRight,
  Award,
  Clock,
  CheckCircle
} from "lucide-react";

const Affiliate = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 bg-gradient-overlay opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm px-6 py-2 text-lg font-medium">
            🎯 Ultimate Affiliate Opportunity
          </Badge>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Earn <span className="gradient-text-accent">$2,000</span> + An All-Expenses-Paid
            <br />
            <span className="gradient-text-primary">Kenya Adventure</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed">
            For every school you refer to Kapes, you don't just earn $2,000 in cash...
            <br />
            <strong>You earn the experience of a lifetime in Kenya!</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="rounded-2xl px-8 py-4 font-medium text-lg hover:scale-105 transition-smooth">
              <Gift className="mr-2 h-5 w-5" />
              Join the Affiliate Program Now
            </Button>
            <Button variant="outline" size="lg" className="rounded-2xl px-8 py-4 font-medium text-lg hover:scale-105 transition-smooth border-white/20 text-white hover:bg-white/10">
              <Camera className="mr-2 h-5 w-5" />
              Watch Kenya Preview
            </Button>
          </div>
        </div>
      </section>

      {/* The Offer */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-6 gradient-text-primary">
              Here's What You Get
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              This isn't just another affiliate program. This is your ticket to making real money
              while experiencing the impact of sustainable education firsthand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="relative overflow-hidden glass-card hover:scale-105 transition-smooth">
              <Badge className="absolute top-4 right-4 bg-primary/10 text-primary border-primary/20">
                Cash Reward
              </Badge>
              <CardHeader className="text-center pb-4 pt-8">
                <div className="text-6xl font-bold text-primary mb-4">$2,000</div>
                <CardTitle className="text-2xl font-bold">Per School Referral</CardTitle>
                <CardDescription className="text-lg">
                  Cold hard cash deposited directly into your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Instant payment upon school enrollment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>No cap on earnings</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Recurring bonuses for renewals</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden glass-card hover:scale-105 transition-smooth">
              <Badge className="absolute top-4 right-4 bg-secondary/10 text-secondary border-secondary/20">
                Experience Reward
              </Badge>
              <CardHeader className="text-center pb-4 pt-8">
                <div className="text-4xl font-bold text-secondary mb-4">🇰🇪 Kenya</div>
                <CardTitle className="text-2xl font-bold">All-Expenses-Paid Trip</CardTitle>
                <CardDescription className="text-lg">
                  After your 5th successful referral
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Plane className="h-5 w-5 text-secondary" />
                    <span>Round-trip flights covered</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-secondary" />
                    <span>5-star accommodation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Camera className="h-5 w-5 text-secondary" />
                    <span>Professional photo & video documentation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Kenya Experience */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-6">
              Your <span className="gradient-text-primary">Kenya Adventure</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              This isn't just a vacation. It's a life-changing journey where you'll witness 
              the real impact of sustainable education and create memories that last forever.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                day: "Day 1-2",
                title: "School Visits & Impact Tours",
                description: "Visit the schools we support, meet students whose lives have been transformed, and see firsthand how your referrals create real change.",
                icon: <School className="h-8 w-8" />,
                color: "bg-primary"
              },
              {
                day: "Day 3",
                title: "Carbon Offset Project Experience",
                description: "Tour our reforestation projects, plant trees with local communities, and understand the environmental impact of our work.",
                icon: <TreePine className="h-8 w-8" />,
                color: "bg-secondary"
              },
              {
                day: "Day 4-5",
                title: "Safari Adventure",
                description: "Experience Kenya's incredible wildlife with guided safari tours through world-famous national parks.",
                icon: <Camera className="h-8 w-8" />,
                color: "bg-accent"
              },
              {
                day: "Day 6",
                title: "Cultural Immersion",
                description: "Connect with local communities, experience traditional culture, and participate in authentic cultural exchanges.",
                icon: <Heart className="h-8 w-8" />,
                color: "bg-muted"
              }
            ].map((item, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-smooth">
                <div className="flex flex-col md:flex-row">
                  <div className={`${item.color} p-8 text-primary-foreground flex flex-col justify-center items-center min-w-[200px] rounded-l-lg`}>
                    {item.icon}
                    <h3 className="text-2xl font-bold mt-4">{item.day}</h3>
                  </div>
                  <div className="flex-1 p-8">
                    <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                    <p className="text-lg text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-6">
              How to <span className="gradient-text-primary">Qualify</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              It's simple. Refer schools, get paid, change lives, experience Kenya.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Join the Program",
                description: "Sign up for our affiliate program and get your unique referral code.",
                reward: "Instant access to marketing materials"
              },
              {
                step: "02",
                title: "Refer Schools",
                description: "Connect schools with Kapes using your referral code. We handle the rest.",
                reward: "$2,000 per successful enrollment"
              },
              {
                step: "03",
                title: "Reach 5 Referrals",
                description: "After your 5th successful school enrollment, you qualify for Kenya!",
                reward: "All-expenses-paid Kenya experience"
              },
              {
                step: "04",
                title: "Experience Kenya",
                description: "Join us for the adventure of a lifetime while seeing your impact firsthand.",
                reward: "Life-changing memories + professional documentation"
              }
            ].map((item, index) => (
              <Card key={index} className="glass-card p-8 hover:scale-105 transition-smooth">
                <div className="flex items-center gap-8">
                  <div className="bg-gradient-primary text-white font-bold text-3xl w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-3">{item.description}</p>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      <Gift className="mr-1 h-4 w-4" />
                      {item.reward}
                    </Badge>
                  </div>
                  {index < 3 && (
                    <ChevronRight className="h-8 w-8 text-muted-foreground" />
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-6 gradient-text-primary">
              What Affiliates Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Education Consultant",
                quote: "I've earned $24,000 in 6 months and just got back from Kenya. This program changed my life AND my bank account!",
                avatar: "👩‍🏫"
              },
              {
                name: "Mike Chen",
                role: "School Administrator",
                quote: "The Kenya trip was incredible. Seeing the impact firsthand made every referral feel meaningful. Plus, the money doesn't hurt!",
                avatar: "👨‍💼"
              },
              {
                name: "Lisa Martinez",
                role: "Sustainability Advocate",
                quote: "I've never been part of an affiliate program that actually changes lives. The Kenya experience was the cherry on top!",
                avatar: "👩‍🌾"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="glass-card text-center p-8 hover:scale-105 transition-smooth">
                <div className="text-6xl mb-4">{testimonial.avatar}</div>
                <h4 className="text-xl font-bold mb-2">{testimonial.name}</h4>
                <p className="text-muted-foreground mb-4">{testimonial.role}</p>
                <p className="text-lg italic text-foreground mb-4">"{testimonial.quote}"</p>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-6 gradient-text-primary">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How much can I really earn?",
                answer: "There's no cap! At $2,000 per referral, if you refer 2 schools per month, that's $48,000 per year. Plus the Kenya trip after 5 referrals."
              },
              {
                question: "What if the school doesn't enroll?",
                answer: "You only get paid when schools successfully enroll and start their program with us. We provide all the support to maximize conversion rates."
              },
              {
                question: "How often do Kenya trips happen?",
                answer: "We organize Kenya trips quarterly. Once you qualify, you can choose which trip works best for your schedule."
              },
              {
                question: "What's included in the Kenya trip?",
                answer: "Everything! Flights, accommodation, meals, activities, guides, and professional photo/video documentation of your experience."
              },
              {
                question: "How do I track my referrals?",
                answer: "You'll get access to a real-time dashboard showing all your referrals, their status, earnings, and progress toward your Kenya trip."
              }
            ].map((faq, index) => (
              <Card key={index} className="glass-card p-6 hover:scale-105 transition-smooth">
                <h4 className="text-xl font-bold mb-3">{faq.question}</h4>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your
            <br />
            <span className="gradient-text-accent">Affiliate Journey?</span>
          </h2>
          
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Join hundreds of affiliates who are earning serious money while making a real impact 
            on sustainable education. Your Kenya adventure awaits!
          </p>
          
          <div className="flex justify-center mb-10">
            <Button size="lg" className="rounded-2xl px-12 py-6 font-medium text-xl hover:scale-105 transition-smooth">
              <DollarSign className="mr-2 h-6 w-6" />
              Start Earning $2,000 Per Referral
            </Button>
          </div>
          
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">$2,000</div>
              <div className="text-sm opacity-75">Per Referral</div>
            </div>
            <div>
              <div className="text-3xl font-bold">5</div>
              <div className="text-sm opacity-75">Referrals = Kenya</div>
            </div>
            <div>
              <div className="text-3xl font-bold">∞</div>
              <div className="text-sm opacity-75">No Earning Limit</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Affiliate;