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
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">What Makes Kapes Different</h2>
                    <p className="text-primary font-semibold">We're Not Just a Uniform Supplier — We're Your Sustainability & Social Impact Partner</p>
                </div>

                <div className="relative mx-auto grid max-w-2xl lg:max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Recycle className="size-4" />
                            <h3 className="text-sm font-medium">Natural, Sustainable Materials</h3>
                        </div>
                        <p className="text-sm">From regenerative cotton to biodegradable tech-fabrics</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Users className="size-4" />
                            <h3 className="text-sm font-medium">Ethical Manufacturing</h3>
                        </div>
                        <p className="text-sm">No shortcuts. No child labour. Just safe jobs and fair pay.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <BarChart3 className="size-4" />
                            <h3 className="text-sm font-medium">Real-Time Sustainability Dashboard</h3>
                        </div>
                        <p className="text-sm">Track your environmental and social impact across the year</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <RotateCcw className="size-4" />
                            <h3 className="text-sm font-medium">Fully Managed Takeback Scheme</h3>
                        </div>
                        <p className="text-sm">Old uniforms = new meals for children in need across Africa</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <GraduationCap className="size-4" />
                            <h3 className="text-sm font-medium">Student Governance Board</h3>
                        </div>
                        <p className="text-sm">Give your students a voice in the sustainability mission</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Heart className="size-4" />
                            <h3 className="text-sm font-medium">Free Uniforms & School Meals in Africa</h3>
                        </div>
                        <p className="text-sm">Every sale funds uniforms and meals for children in need</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Store className="size-4" />
                            <h3 className="text-sm font-medium">On-Campus School Shops</h3>
                        </div>
                        <p className="text-sm">Beautifully designed, fully managed by Kapes</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Package className="size-4" />
                            <h3 className="text-sm font-medium">E-Commerce Lockers</h3>
                        </div>
                        <p className="text-sm">Let parents collect orders directly from school</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Truck className="size-4" />
                            <h3 className="text-sm font-medium">Next-Day Home Delivery</h3>
                        </div>
                        <p className="text-sm">For ultimate parent convenience</p>
                    </div>
                </div>
            </div>
        </section>
    )
}