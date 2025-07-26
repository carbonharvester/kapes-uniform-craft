import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Recycle, ShieldCheck, Shirt, Zap, Users, Sparkles, CheckCircle, Plus } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { cn } from "@/lib/utils";
export const UniformSolutions = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);

  const materials = [
    {
      id: "organic-cotton",
      title: "Regenerative Organic Cotton",
      subtitle: "Carbon negative process that heals the earth.",
      tagline: "Kind to skin. Kinder to Earth.",
      description: "Naturally soft, breathable, and grown sustainably",
      image: "https://res.cloudinary.com/dng12bd0a/image/upload/v1752904778/Filip-C-Agoo-Everland-Marketing-Kenya-8679-WEB-low-resolution_fwb4kw.jpg",
      icon: <Leaf className="w-6 h-6" />,
      details: {
        title: "Regenerative Organic Cotton",
        content: "Our organic cotton doesn't just avoid harm—it actively heals the earth. Grown using regenerative farming practices that improve soil health, increase biodiversity, and sequester carbon from the atmosphere. This naturally soft and breathable fabric is GOTS-certified, ensuring the highest environmental and social standards throughout the supply chain. From seed to shirt, every step is designed to restore the planet while creating the most comfortable uniforms for your students.",
        features: [
          "GOTS-certified organic cotton",
          "Carbon negative farming practices",
          "Improved soil health and biodiversity",
          "Chemical-free growing process",
          "Fair trade certified supply chain"
        ]
      }
    },
    {
      id: "biodegradable-tech",
      title: "Biodegradable Tech Fabrics",
      subtitle: "Advanced performance that returns to nature.",
      tagline: "High-tech. Zero waste.",
      description: "Innovation meets sustainability",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=600&fit=crop",
      icon: <Recycle className="w-6 h-6" />,
      details: {
        title: "Biodegradable Tech Fabrics",
        content: "Revolutionary fabrics that perform like high-tech synthetics but safely biodegrade at end of life. These innovative materials offer moisture-wicking, stain resistance, and durability while being completely natural and compostable. Made from advanced plant-based fibers and natural treatments, they represent the future of sustainable textiles—proving you don't need to choose between performance and planet.",
        features: [
          "100% biodegradable materials",
          "Moisture-wicking technology",
          "Natural stain resistance",
          "Anti-microbial properties",
          "Compostable at end of life"
        ]
      }
    },
    {
      id: "recycled-fabrics",
      title: "Recycled Fabrics",
      subtitle: "Giving new life to waste materials.",
      tagline: "Waste to wonder.",
      description: "70% less carbon footprint",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=600&fit=crop",
      icon: <ShieldCheck className="w-6 h-6" />,
      details: {
        title: "Recycled Fabrics",
        content: "Durable materials crafted from recycled plastic bottles, textile waste, and other post-consumer materials. Each uniform diverts waste from landfills while reducing carbon emissions by up to 70% compared to virgin materials. Through innovative processing techniques, we transform waste into high-quality fabrics that are stronger, more durable, and better performing than traditional alternatives.",
        features: [
          "70% lower carbon footprint",
          "Made from recycled plastic bottles",
          "Diverts waste from landfills",
          "Enhanced durability and strength",
          "Fully traceable recycled content"
        ]
      }
    }
  ];

  const uniformSolutions = [
    {
      id: "everyday-wear",
      title: "Everyday Schoolwear",
      subtitle: "Complete wardrobe solutions for daily learning.",
      tagline: "Comfort meets durability.",
      description: "Shirts, trousers, skirts, dresses, and blazers",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=600&fit=crop",
      icon: <Shirt className="w-6 h-6" />,
      details: {
        title: "Complete Everyday Schoolwear",
        content: "From polo shirts to formal blazers, our complete range covers every aspect of your school's uniform policy. Each piece is designed with comfort, durability, and ease of care in mind. Stain-resistant treatments ensure uniforms look fresh longer, while our comfort-first approach means students can focus on learning, not adjusting their clothes. Available in a full range of sizes and fits to ensure every student feels confident and comfortable.",
        features: [
          "Stain-resistant treatments",
          "Easy-care fabrics",
          "Comfort-first design",
          "Full size range available",
          "Durable construction",
          "School-specific customization"
        ]
      }
    },
    {
      id: "sports-kits",
      title: "Sports & PE Kits",
      subtitle: "High-performance gear for active learning.",
      tagline: "Move better. Play better.",
      description: "Breathable, sustainable performance wear",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop",
      icon: <Zap className="w-6 h-6" />,
      details: {
        title: "High-Performance Sports & PE Kits",
        content: "Our sports uniforms combine cutting-edge performance technology with sustainable materials. Made from natural fibers and biodegradable tech fabrics, they offer superior moisture-wicking, breathability, and anti-microbial properties. Designed to withstand intense activity while maintaining comfort and shape, these kits prove that sustainable doesn't mean compromising on performance.",
        features: [
          "Moisture-wicking technology",
          "Anti-microbial properties",
          "Durable construction",
          "Natural fiber blend",
          "Temperature regulation",
          "Quick-dry capabilities"
        ]
      }
    },
    {
      id: "accessories",
      title: "Accessories & Essentials",
      subtitle: "Complete your uniform program sustainably.",
      tagline: "Every detail matters.",
      description: "Hats, bags, ties, and socks",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=600&fit=crop",
      icon: <Users className="w-6 h-6" />,
      details: {
        title: "Sustainable Accessories & Essentials",
        content: "Complete your uniform program with our range of sustainable accessories. From recycled polyester ties to organic cotton socks, every accessory is crafted with the same attention to sustainability and quality as our main uniform pieces. These finishing touches ensure a cohesive, professional appearance while maintaining your school's commitment to environmental responsibility.",
        features: [
          "Matching brand aesthetics",
          "Sustainable materials",
          "Quality craftsmanship",
          "Durable design",
          "Easy care instructions",
          "Complete uniform coordination"
        ]
      }
    }
  ];
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-no-repeat" style={{
          backgroundImage: "url('https://res.cloudinary.com/dng12bd0a/image/upload/v1752921385/leaners-leaders-4_aun2tp.jpg')",
          backgroundPosition: "center"
        }}></div>
        
        {/* Overlay and Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-left">
          <div className="max-w-2xl space-y-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Uniform Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">Sustainable. Ethical.<br />Future-proof.</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              At Kapes, we create school uniforms that reflect your school's values and commitment to sustainability—without sacrificing quality or comfort.
            </p>
          </div>
        </div>
        
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
      </section>

      {/* Materials Carousel Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">Materials that Matter</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every fiber tells a story of sustainability, innovation, and care for our planet
            </p>
          </div>
          
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4 py-4">
                {materials.map((material) => (
                  <CarouselItem key={material.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <Dialog open={openDialog === material.id} onOpenChange={(open) => setOpenDialog(open ? material.id : null)}>
                      <DialogTrigger asChild>
                        <Card className="group cursor-pointer border-0 transition-all duration-300 h-full overflow-hidden hover-lift">
                          <div className="relative h-80">
                            <div 
                              className="h-full bg-cover bg-center relative"
                              style={{ backgroundImage: `url(${material.image})` }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                              
                              {/* Plus icon in top right */}
                              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 hover:scale-110 transition-all duration-300 cursor-pointer">
                                <Plus className="w-4 h-4 text-white" />
                              </div>
                              
                              {/* Content overlay */}
                              <div className="absolute bottom-0 left-0 right-0 p-6">
                                <div className="text-white/80 text-xs font-medium uppercase tracking-wide mb-2">
                                  {material.tagline}
                                </div>
                                <h3 className="text-white font-semibold text-xl leading-tight">
                                  Organic Cotton
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <div className="space-y-6">
                          <div 
                            className="h-64 bg-cover bg-center rounded-lg relative"
                            style={{ backgroundImage: `url(${material.image})` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-lg"></div>
                            <div className="absolute bottom-6 left-6">
                              <div className="text-white/80 text-sm font-medium uppercase tracking-wide mb-2">
                                {material.tagline}
                              </div>
                              <h2 className="text-3xl font-bold text-white leading-tight">
                                {material.details.title}
                              </h2>
                            </div>
                          </div>
                          
                          <div className="px-2">
                            <p className="text-muted-foreground leading-relaxed mb-6">
                              {material.details.content}
                            </p>
                            
                            {material.details.features.length > 0 && (
                              <div>
                                <h3 className="font-semibold text-lg mb-4">Key Features</h3>
                                <div className="grid gap-3">
                                  {material.details.features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                      <span className="text-muted-foreground">{feature}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Uniform Solutions Carousel Section */}
      <section className="bg-gradient-warm-section py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">Complete Uniform Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From everyday essentials to specialized sportswear, we've got every uniform need covered
            </p>
          </div>
          
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4 py-4">
                {uniformSolutions.map((solution) => (
                  <CarouselItem key={solution.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <Dialog open={openDialog === solution.id} onOpenChange={(open) => setOpenDialog(open ? solution.id : null)}>
                      <DialogTrigger asChild>
                        <Card className="group cursor-pointer border-0 transition-all duration-300 h-full overflow-hidden hover-lift">
                          <div className="relative h-80">
                            <div 
                              className="h-full bg-cover bg-center relative"
                              style={{ backgroundImage: `url(${solution.image})` }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                              
                              {/* Plus icon in top right */}
                              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 hover:scale-110 transition-all duration-300 cursor-pointer">
                                <Plus className="w-4 h-4 text-white" />
                              </div>
                              
                              {/* Content overlay */}
                              <div className="absolute bottom-0 left-0 right-0 p-6">
                                <div className="text-white/80 text-xs font-medium uppercase tracking-wide mb-2">
                                  {solution.tagline}
                                </div>
                                <h3 className="text-white font-semibold text-xl leading-tight">
                                  {solution.title}
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <div className="space-y-6">
                          <div 
                            className="h-64 bg-cover bg-center rounded-lg relative"
                            style={{ backgroundImage: `url(${solution.image})` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-lg"></div>
                            <div className="absolute bottom-6 left-6">
                              <div className="text-white/80 text-sm font-medium uppercase tracking-wide mb-2">
                                {solution.tagline}
                              </div>
                              <h2 className="text-3xl font-bold text-white leading-tight">
                                {solution.details.title}
                              </h2>
                            </div>
                          </div>
                          
                          <div className="px-2">
                            <p className="text-muted-foreground leading-relaxed mb-6">
                              {solution.details.content}
                            </p>
                            
                            {solution.details.features.length > 0 && (
                              <div>
                                <h3 className="font-semibold text-lg mb-4">Key Features</h3>
                                <div className="grid gap-3">
                                  {solution.details.features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                      <span className="text-muted-foreground">{feature}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Enhanced AI Sizing Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-2xl px-6 py-3 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Powered by AI</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">AI-Driven Sizing Made Easy</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              No more confusion or wasted time. Our AI-powered sizing tool ensures every parent gets the right fit, every time—reducing returns by 85%.
            </p>
            
            <div className="border-0 shadow-glass rounded-3xl p-8 md:p-12 mb-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <img 
                    src="https://res.cloudinary.com/dng12bd0a/image/upload/v1753533310/IMG-20250726-WA0007_ococxs.jpg" 
                    alt="Enter your details" 
                    className="w-full h-64 object-contain bg-gray-50 rounded-lg mb-4"
                  />
                  <div className="bg-primary/10 rounded-2xl w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Enter Your Details</h4>
                  <p className="text-sm text-muted-foreground">Gender, height, weight, and age</p>
                </div>
                <div className="text-center">
                  <img 
                    src="https://res.cloudinary.com/dng12bd0a/image/upload/v1753533311/IMG-20250726-WA0006_qxvevj.jpg" 
                    alt="Choose your reference brand" 
                    className="w-full h-64 object-contain bg-gray-50 rounded-lg mb-4"
                  />
                  <div className="bg-primary/10 rounded-2xl w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Choose Your Reference</h4>
                  <p className="text-sm text-muted-foreground">Select your favourite brand and perfect size</p>
                </div>
                <div className="text-center">
                  <img 
                    src="https://res.cloudinary.com/dng12bd0a/image/upload/v1753533310/IMG-20250726-WA0005_wkku2x.jpg" 
                    alt="Choose fit preference" 
                    className="w-full h-64 object-contain bg-gray-50 rounded-lg mb-4"
                  />
                  <div className="bg-primary/10 rounded-2xl w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Choose Fit</h4>
                  <p className="text-sm text-muted-foreground">Select your preferred fit style</p>
                </div>
                <div className="text-center">
                  <img 
                    src="https://res.cloudinary.com/dng12bd0a/image/upload/v1753533311/IMG-20250726-WA0004_ppbcov.jpg" 
                    alt="Perfect Kapes fit recommendation" 
                    className="w-full h-64 object-contain bg-gray-50 rounded-lg mb-4"
                  />
                  <div className="bg-primary/10 rounded-2xl w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">4</span>
                  </div>
                  <h4 className="font-semibold mb-2">Perfect Kapes Fit</h4>
                  <p className="text-sm text-muted-foreground">AI recommends your ideal Kapes uniform size</p>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="rounded-2xl px-12 py-6 text-lg hover-scale transition-smooth group">
              Book Your Free Uniform Consultation
              <div className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</div>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};