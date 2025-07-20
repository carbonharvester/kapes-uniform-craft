
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
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800&h=400&fit=crop&crop=center",
      featured: true
    },
    {
      id: 2,
      title: "How Schools Can Reduce Uniform Costs by 40%",
      excerpt: "Learn practical strategies that schools use to significantly reduce uniform expenses while maintaining quality.",
      category: "Finance",
      readTime: "4 min read",
      date: "Mar 12, 2024",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop&crop=center",
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
    <section className="py-16 px-4 bg-gradient-tri-soft">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-6">
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
              <div className="aspect-video relative overflow-hidden bg-muted/50">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90 text-foreground">
                    {post.category}
                  </Badge>
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
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <Button variant="ghost" className="p-0 h-auto font-medium group-hover:text-primary transition-colors">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
