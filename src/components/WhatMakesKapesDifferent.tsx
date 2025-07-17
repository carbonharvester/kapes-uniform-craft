import { Card, CardContent } from "@/components/ui/card";

export const WhatMakesKapesDifferent = () => {
  const features = [
    {
      icon: "♻️",
      title: "Natural, Sustainable Materials",
      description: "From regenerative cotton to biodegradable tech-fabrics"
    },
    {
      icon: "🧵",
      title: "Ethical Manufacturing",
      description: "No shortcuts. No child labour. Just safe jobs and fair pay."
    },
    {
      icon: "📊",
      title: "Real-Time Sustainability Dashboard",
      description: "Track your environmental and social impact across the year"
    },
    {
      icon: "♻️",
      title: "Fully Managed Takeback Scheme",
      description: "Old uniforms = new meals for children in need across Africa"
    },
    {
      icon: "🧑‍🎓",
      title: "Student Governance Board",
      description: "Give your students a voice in the sustainability mission"
    },
    {
      icon: "🎒",
      title: "Free Uniforms & School Meals in Africa",
      description: "Every sale funds uniforms and meals for children in need"
    },
    {
      icon: "🏫",
      title: "On-Campus School Shops",
      description: "Beautifully designed, fully managed by Kapes"
    },
    {
      icon: "📦",
      title: "E-Commerce Lockers",
      description: "Let parents collect orders directly from school"
    },
    {
      icon: "🚚",
      title: "Next-Day Home Delivery",
      description: "For ultimate parent convenience"
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Makes Kapes Different</h2>
            <h3 className="text-xl text-primary font-semibold max-w-4xl mx-auto">
              We're Not Just a Uniform Supplier — We're Your Sustainability & Social Impact Partner
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0">{feature.icon}</span>
                    <div>
                      <h4 className="font-semibold mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};