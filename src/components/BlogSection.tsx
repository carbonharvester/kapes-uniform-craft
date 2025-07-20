
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Build websites in minutes with shadcn/ui",
      excerpt: "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
      image: "/lovable-uploads/91210300-6e9a-42b7-b47d-79bcb00e41a7.png"
    },
    {
      id: 2,
      title: "Easily copy code to build your website", 
      excerpt: "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
      image: "/lovable-uploads/91210300-6e9a-42b7-b47d-79bcb00e41a7.png"
    },
    {
      id: 3,
      title: "The future of web design",
      excerpt: "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
      image: "/lovable-uploads/91210300-6e9a-42b7-b47d-79bcb00e41a7.png"
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        {/* Three equal cards in a grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="aspect-square bg-muted/30 flex items-center justify-center">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
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

        {/* Explore all posts button */}
        <div className="text-center mt-12">
          <Button variant="ghost" className="font-medium text-foreground hover:text-primary transition-colors">
            Explore all posts
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
