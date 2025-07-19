import { 
  Recycle, 
  Users, 
  BarChart3, 
  RotateCcw, 
  GraduationCap, 
  Heart, 
  Store, 
  Package, 
  Truck 
} from 'lucide-react'

export function Features() {
    const features = [
        {
            icon: Recycle,
            title: "Natural, Sustainable Materials",
            description: "From regenerative cotton to biodegradable tech-fabrics"
        },
        {
            icon: Users,
            title: "Ethical Manufacturing",
            description: "No shortcuts. No child labour. Just safe jobs and fair pay."
        },
        {
            icon: BarChart3,
            title: "Real-Time Sustainability Dashboard",
            description: "Track your environmental and social impact across the year"
        },
        {
            icon: RotateCcw,
            title: "Fully Managed Takeback Scheme",
            description: "Old uniforms = new meals for children in need across Africa"
        },
        {
            icon: GraduationCap,
            title: "Student Leadership Board",
            description: "Give your students a voice in the sustainability mission"
        },
        {
            icon: Heart,
            title: "Free Uniforms & School Meals in Africa",
            description: "Every sale funds uniforms and meals for children in need"
        },
        {
            icon: Store,
            title: "On-Campus School Shops",
            description: "Beautifully designed, fully managed by Kapes"
        },
        {
            icon: Package,
            title: "E-Commerce Lockers",
            description: "Let parents collect orders directly from school"
        },
        {
            icon: Truck,
            title: "Next-Day Home Delivery",
            description: "For ultimate parent convenience"
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-background to-muted/30">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto space-y-16">
                    {/* Header */}
                    <div className="text-center space-y-6">
                        <h2 className="text-4xl md:text-6xl font-light tracking-tight">
                            What Makes Kapes{" "}
                            <span className="font-medium bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                Different
                            </span>
                        </h2>
                        <p className="text-xl text-primary font-medium max-w-3xl mx-auto">
                            We're Not Just a Uniform Supplier — We're Your Sustainability & Social Impact Partner
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <div 
                                    key={index}
                                    className="group glass rounded-2xl p-8 border border-border/50 hover-lift transition-smooth hover:shadow-glass"
                                >
                                    <div className="space-y-4">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <IconComponent className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-foreground">
                                            {feature.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}