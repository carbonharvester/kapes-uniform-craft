
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getLatestBlogPosts } from "@/services/contentful";

export const BlogSection = () => {
  const { data: blogPosts, isLoading, error } = useQuery({
    queryKey: ['latestBlogPosts'],
    queryFn: () => getLatestBlogPosts(3),
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (error) {
    return (
      <section className="py-16 px-4 bg-gradient-tri-soft">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-6">
              Latest Insights & Updates
            </h2>
            <p className="text-muted-foreground">
              We're having trouble loading our latest blog posts. Please try again later.
            </p>
          </div>
        </div>
      </section>
    );
  }

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
          <Button variant="ghost" className="mt-6 md:mt-0 self-start md:self-auto" asChild>
            <Link to="/blog">
              Explore all posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading skeleton
            [...Array(3)].map((_, index) => (
              <Card key={index} className="overflow-hidden">
                <Skeleton className="aspect-video w-full" />
                <CardHeader>
                  <Skeleton className="h-4 w-20 mb-2" />
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Skeleton className="h-3 w-16" />
                      <Skeleton className="h-3 w-16" />
                    </div>
                    <Skeleton className="h-4 w-20" />
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            blogPosts?.map(post => (
              <Link key={post.slug} to={`/blog/${post.slug}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                  <div className="aspect-video relative overflow-hidden bg-muted/50">
                    <img 
                      src={post.featuredImage.url} 
                      alt={post.featuredImage.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                     <div className="absolute top-4 left-4">
                       <span className="text-xs text-background/90 bg-background/20 backdrop-blur-sm px-2 py-1 rounded">
                         {formatDate(post.date)}
                       </span>
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
                          {formatDate(post.date)}
                        </span>
                      </div>
                      <Button variant="ghost" className="p-0 h-auto font-medium group-hover:text-primary transition-colors">
                        Read more
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
