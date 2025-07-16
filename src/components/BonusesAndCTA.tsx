import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Users, BookOpen, Plane } from "lucide-react";
export const BonusesAndCTA = () => {
  const bonuses = [{
    icon: Gift,
    title: "Free Setup & Transition",
    description: "Complete program setup with zero transition costs",
    value: "Worth £5,000"
  }, {
    icon: Users,
    title: "Dedicated Account Manager",
    description: "Personal support throughout your partnership",
    value: "Included"
  }, {
    icon: BookOpen,
    title: "Educational Resource Package",
    description: "Curriculum materials and sustainability guides",
    value: "Worth £2,000"
  }, {
    icon: Plane,
    title: "Factory Visit Program",
    description: "Educational trips for students and staff",
    value: "Exclusive Access"
  }];
  return;
};