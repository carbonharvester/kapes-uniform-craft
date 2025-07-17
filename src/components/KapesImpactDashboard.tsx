import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BorderBeam } from "@/components/ui/border-beam";
import { BarChart3, TrendingUp, Target, Users, Leaf, Award } from "lucide-react";

const impactMetrics = [
  { icon: BarChart3, label: "Carbon Tracking", value: "12.5t CO2", change: "+15%" },
  { icon: TrendingUp, label: "Waste Reduction", value: "87%", change: "+23%" },
  { icon: Target, label: "Goals Achieved", value: "9/12", change: "+3" },
  { icon: Users, label: "Students Engaged", value: "1,247", change: "+89" },
];

const dashboardFeatures = [
  { icon: Leaf, title: "Environmental Impact", description: "Track carbon footprint, waste reduction, and energy savings in real-time" },
  { icon: BarChart3, title: "Data Visualization", description: "Beautiful charts and graphs that make complex sustainability data easy to understand" },
  { icon: Target, title: "Goal Management", description: "Set, track, and achieve sustainability targets with automated progress monitoring" },
  { icon: Award, title: "Achievement Sharing", description: "Celebrate milestones and share your school's success story with the community" },
];

export const KapesImpactDashboard = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Kapes Impact Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your sustainability data into compelling stories. Track, measure, and showcase your school's environmental impact with our comprehensive dashboard.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <Card className="relative overflow-hidden border-2 shadow-2xl">
              <BorderBeam size={300} duration={12} delay={9} />
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <BarChart3 className="h-6 w-6 text-primary" />
                  Impact Dashboard
                </CardTitle>
                <CardDescription className="text-base">
                  Real-time sustainability metrics for your school
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="mt-6">
                    <div className="grid grid-cols-2 gap-4">
                      {impactMetrics.map((metric, index) => (
                        <div key={index} className="p-4 bg-muted/30 rounded-lg border">
                          <div className="flex items-center gap-2 mb-2">
                            <metric.icon className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium text-muted-foreground">{metric.label}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold">{metric.value}</span>
                            <span className="text-xs text-green-600 font-medium">{metric.change}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="details" className="mt-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-muted/30 rounded-lg border">
                        <h4 className="font-semibold mb-2">Monthly Progress</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Carbon Reduction</span>
                            <span className="font-medium">78%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-muted/30 rounded-lg border">
                        <h4 className="font-semibold mb-2">Student Engagement</h4>
                        <div className="text-2xl font-bold text-primary">1,247</div>
                        <p className="text-sm text-muted-foreground">Active participants this month</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">Transform Your Impact Story</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Turn complex sustainability data into clear, compelling narratives that inspire action and demonstrate real environmental progress.
              </p>
            </div>
            
            <div className="grid gap-6">
              {dashboardFeatures.map((feature, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg border bg-card/50 hover:bg-card transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="flex-1 h-12">
                View Live Demo
              </Button>
              <Button variant="outline" size="lg" className="flex-1 h-12">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};