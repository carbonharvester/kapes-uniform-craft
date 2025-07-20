
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const BlogSection = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "The Future of Sustainable School Uniforms",
      excerpt: "Discover how innovative materials and ethical manufacturing are transforming school uniform sustainability.",
      category: "Sustainability",
      readTime: "5 min read",
      date: "Mar 15, 2024",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop&crop=center",
      featured: true
    },
    {
      id: 2,
      title: "How Schools Can Reduce Uniform Costs by 40%",
      excerpt: "Learn practical strategies that schools use to significantly reduce uniform expenses while maintaining quality.",
      category: "Finance",
      readTime: "4 min read",
      date: "Mar 12, 2024",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop&crop=center",
      featured: false
    },
    {
      id: 3,
      title: "Student Voice in Uniform Design: A Case Study",
      excerpt: "See how involving students in uniform design creates better outcomes for everyone in the school community.",
      category: "Education",
      readTime: "6 min read",
      date: "Mar 10, 2024",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=400&fit=crop&crop=center",
      featured: false
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest Insights & Updates
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Stay informed with the latest trends in sustainable uniforms, cost-saving strategies, and educational innovations.
            </p>
          </div>
          <Button variant="ghost" className="mt-6 md:mt-0 self-start md:self-auto">
            Explore all posts
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredPosts.map(post => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="aspect-video relative overflow-hidden bg-muted/50 flex items-center justify-center">
                <div className="w-16 h-16 bg-foreground rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-background rounded-sm"></div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button variant="ghost" className="p-0 h-auto font-medium group-hover:text-primary transition-colors">
                  Read more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
