import React from "react";
import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Pricing() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge>Partnership Tiers</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Choose Your Impact Level
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Flexible partnership options designed to maximize your school's sustainability impact and student engagement.
            </p>
          </div>
          <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8">
            <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Essentials Tier
                  </span>
                </CardTitle>
                <CardDescription>
                  Perfect for schools beginning their sustainability journey with immediate impact and student engagement.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Basic Uniform Collection</p>
                        <p className="text-muted-foreground text-sm">
                          Simple collection bins and basic materials.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Student Engagement Kit</p>
                        <p className="text-muted-foreground text-sm">
                          Educational materials and assembly presentations.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Impact Tracking</p>
                        <p className="text-muted-foreground text-sm">
                          Basic metrics on uniforms collected and impact created.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-4" asChild>
                     <Link to="/sustainability-scorecard">Get Started <MoveRight className="w-4 h-4" /></Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full shadow-2xl rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Core Tier
                  </span>
                </CardTitle>
                <CardDescription>
                  Enhanced features for schools ready to become sustainability leaders with deeper student involvement.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Everything in Essentials</p>
                        <p className="text-muted-foreground text-sm">
                          Plus enhanced collection and tracking systems.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Student Leadership Program</p>
                        <p className="text-muted-foreground text-sm">
                          Training and resources for student ambassadors.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Quarterly Impact Reports</p>
                        <p className="text-muted-foreground text-sm">
                          Detailed analytics and celebration materials.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button className="gap-4" asChild>
                     <Link to="/sustainability-scorecard">Join Core Tier <MoveRight className="w-4 h-4" /></Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Impact Tier
                  </span>
                </CardTitle>
                <CardDescription>
                  Complete sustainability transformation with maximum impact, innovation, and global recognition.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Everything in Core</p>
                        <p className="text-muted-foreground text-sm">
                          Plus premium features and personalized support.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Factory Visits & Global Connection</p>
                        <p className="text-muted-foreground text-sm">
                          Virtual exchanges with African partner schools.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Innovation Lab Access</p>
                        <p className="text-muted-foreground text-sm">
                          Latest sustainability tools and research programs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-4" asChild>
                     <Link to="/sustainability-scorecard">Book a consultation <PhoneCall className="w-4 h-4" /></Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Pricing };