import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { BlogCard } from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, Filter } from "lucide-react";
import { getAllBlogPosts } from "@/services/contentful";
import { BlogPost } from "@/types/blog";
import { Footer } from "@/components/Footer";
import newBlogHeroImage from "@/assets/new-blog-hero.jpg";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data: blogPosts, isLoading, error } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: getAllBlogPosts,
  });

  // Filter posts based on search and category
  const filteredPosts = blogPosts?.filter(post => {
    const matchesSearch = !searchTerm || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSearch;
  }) || [];

  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  if (error) {
    return (
      <div className="min-h-screen bg-background font-inter">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-heading mb-4">Something went wrong</h1>
            <p className="text-muted-foreground">We couldn't load the blog posts. Please try again later.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={newBlogHeroImage} 
            alt="Blog hero" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">Blog & Insights</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
              Latest Insights &{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Updates
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto font-light">
              Stay informed with the latest trends in sustainable uniforms, cost-saving strategies, and educational innovations.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 bg-gradient-tri-soft">
        <div className="max-w-6xl mx-auto">
          
          {/* Search and Filter Controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {isLoading ? (
            <div className="space-y-12">
              {/* Featured Post Skeleton */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <Skeleton className="aspect-video w-full" />
                <div className="space-y-4">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-8 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-6 w-32" />
                </div>
              </div>
              
              {/* Other Posts Skeleton */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="space-y-4">
                    <Skeleton className="aspect-video w-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-6 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              {featuredPost && (
                <section className="mb-16">
                  <h2 className="text-4xl md:text-5xl font-light tracking-tight text-heading mb-8">Featured Post</h2>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <img 
                        src={featuredPost.featuredImage.url}
                        alt={featuredPost.featuredImage.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-6">
                      <h3 className="text-3xl font-semibold leading-tight text-heading">{featuredPost.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">{featuredPost.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <Button asChild size="lg">
                        <a href={`/blog/${featuredPost.slug}`}>Read Full Article</a>
                      </Button>
                    </div>
                  </div>
                </section>
              )}

              {/* Other Posts Grid */}
              {otherPosts.length > 0 && (
                <section>
                  <h2 className="text-4xl md:text-5xl font-light tracking-tight text-heading mb-8">All Posts</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {otherPosts.map(post => (
                      <BlogCard key={post.slug} post={post} />
                    ))}
                  </div>
                </section>
              )}

              {/* No Results */}
              {filteredPosts.length === 0 && !isLoading && (
                <div className="text-center py-16">
                  <h3 className="text-2xl font-semibold text-heading mb-4">No posts found</h3>
                  <p className="text-muted-foreground mb-6">
                    {searchTerm ? "Try adjusting your search criteria." : "Check back soon for new content."}
                  </p>
                  {searchTerm && (
                    <Button 
                      variant="outline" 
                      onClick={() => setSearchTerm("")}
                    >
                      Clear Filters
                    </Button>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
