
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getLatestBlogPosts } from "@/services/contentful";
import { BlogCard } from "@/components/BlogCard";

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
      <section className="py-16 px-4 bg-gradient-tri-soft font-inter">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-heading mb-6">
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
    <section className="py-16 px-4 bg-gradient-tri-soft font-inter">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-heading mb-6">
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

        <div className="grid w-full max-w-5xl mx-auto gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {isLoading ? (
            // Loading skeleton
            [...Array(3)].map((_, index) => (
              <Card key={index} className="overflow-hidden h-[400px]">
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
              <BlogCard key={post.slug} post={post} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};
