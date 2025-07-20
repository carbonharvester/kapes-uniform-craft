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
      <section className="relative py-24 px-4 overflow-hidden glass">
        <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIi8+PC9nPjwvZz48L3N2Zz4=')] animate-pulse"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 px-6 py-2 text-lg">
            🎯 ULTIMATE AFFILIATE OPPORTUNITY
          </Badge>
          
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
            EARN <span className="text-accent">$2,000</span> + AN ALL-EXPENSES-PAID
            <br />
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              KENYA ADVENTURE
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            For every school you refer to Kapes, you don't just earn $2,000 in cash...
            <br />
            <strong>You earn the EXPERIENCE OF A LIFETIME in Kenya!</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-4 rounded-full hover-scale transition-all duration-300 shadow-elegant">
              <Gift className="mr-2 h-5 w-5" />
              JOIN THE AFFILIATE PROGRAM NOW
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8 py-4 rounded-full transition-all duration-300">
              <Camera className="mr-2 h-5 w-5" />
              Watch Kenya Preview
            </Button>
          </div>
        </div>
      </section>

      {/* The Offer */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-heading">
              HERE'S WHAT YOU GET
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              This isn't just another affiliate program. This is your ticket to making real money
              while experiencing the impact of sustainable education firsthand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="relative overflow-hidden border-2 border-primary shadow-elegant hover-scale transition-all duration-300">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-2 font-bold">
                CASH REWARD
              </div>
              <CardHeader className="text-center pb-4">
                <div className="text-6xl font-black text-primary mb-4">$2,000</div>
                <CardTitle className="text-2xl font-black">PER SCHOOL REFERRAL</CardTitle>
                <CardDescription className="text-lg">
                  Cold hard cash deposited directly into your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
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

            <Card className="relative overflow-hidden border-2 border-secondary shadow-elegant hover-scale transition-all duration-300">
              <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground px-4 py-2 font-bold">
                EXPERIENCE REWARD
              </div>
              <CardHeader className="text-center pb-4">
                <div className="text-4xl font-black text-secondary mb-4">🇰🇪 KENYA</div>
                <CardTitle className="text-2xl font-black">ALL-EXPENSES-PAID TRIP</CardTitle>
                <CardDescription className="text-lg">
                  After your 5th successful referral
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
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
      <section className="py-20 px-4 glass">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-heading">
              YOUR <span className="text-primary">KENYA ADVENTURE</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              This isn't just a vacation. It's a life-changing journey where you'll witness 
              the real impact of sustainable education and create memories that last forever.
            </p>
          </div>

          <div className="space-y-8">
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
                color: "bg-destructive"
              }
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300 hover-scale">
                <div className="flex flex-col md:flex-row">
                  <div className={`${item.color} p-8 text-primary-foreground flex flex-col justify-center items-center min-w-[200px]`}>
                    {item.icon}
                    <h3 className="text-2xl font-bold mt-4">{item.day}</h3>
                  </div>
                  <div className="flex-1 p-8">
                    <h4 className="text-2xl font-bold mb-4 text-heading">{item.title}</h4>
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-heading">
              HOW TO <span className="text-primary">QUALIFY</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              It's simple. Refer schools, get paid, change lives, experience Kenya.
            </p>
          </div>

          <div className="space-y-8">
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
              <div key={index} className="flex items-center gap-8 p-8 bg-card rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-300 hover-scale">
                <div className="bg-gradient-primary text-primary-foreground font-black text-3xl w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-heading">{item.title}</h3>
                  <p className="text-muted-foreground mb-2">{item.description}</p>
                  <Badge className="bg-primary/10 text-primary">
                    <Gift className="mr-1 h-4 w-4" />
                    {item.reward}
                  </Badge>
                </div>
                {index < 3 && (
                  <ChevronRight className="h-8 w-8 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 glass">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-heading">
              WHAT AFFILIATES SAY
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
              <Card key={index} className="text-center p-8 shadow-elegant hover:shadow-glow transition-all duration-300 hover-scale">
                <div className="text-6xl mb-4">{testimonial.avatar}</div>
                <h4 className="text-xl font-bold mb-2 text-heading">{testimonial.name}</h4>
                <p className="text-muted-foreground mb-4">{testimonial.role}</p>
                <p className="text-lg italic text-foreground">"{testimonial.quote}"</p>
                <div className="flex justify-center mt-4">
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
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-heading">
              FREQUENTLY ASKED QUESTIONS
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
              <Card key={index} className="p-6 shadow-elegant hover:shadow-glow transition-all duration-300 hover-scale">
                <h4 className="text-xl font-bold mb-3 text-heading">{faq.question}</h4>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            READY TO START YOUR
            <br />
            <span className="text-accent">AFFILIATE JOURNEY?</span>
          </h2>
          
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of affiliates who are earning serious money while making a real impact 
            on sustainable education. Your Kenya adventure awaits!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xl px-12 py-6 rounded-full hover-scale transition-all duration-300 shadow-elegant">
              <DollarSign className="mr-2 h-6 w-6" />
              START EARNING $2,000 PER REFERRAL
            </Button>
          </div>
          
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">$2,000</div>
              <div className="text-sm">Per Referral</div>
            </div>
            <div>
              <div className="text-3xl font-bold">5</div>
              <div className="text-sm">Referrals = Kenya</div>
            </div>
            <div>
              <div className="text-3xl font-bold">∞</div>
              <div className="text-sm">No Earning Limit</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Affiliate;