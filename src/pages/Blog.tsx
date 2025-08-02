import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { BlogCard } from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, Filter, Calendar, Clock, ArrowRight } from "lucide-react";
import { getAllBlogPosts } from "@/services/contentful";
import { BlogPost } from "@/types/blog";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
// Using Cloudinary URL instead of local import

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (error) {
    return (
      <div className="min-h-screen bg-background font-inter">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-xl font-semibold mb-4">Something went wrong</h1>
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
            src="https://res.cloudinary.com/dng12bd0a/image/upload/v1753009981/Untitled_design_3_zz8vdo.jpg" 
            alt="Blog hero" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">Blog & Insights</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white">
              Latest Insights &{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Updates
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto font-light">
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
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <Skeleton className="aspect-[4/3] w-full" />
                  <div className="p-8 lg:p-12 space-y-6">
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <div className="flex items-center gap-4">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                    <Skeleton className="h-12 w-40" />
                  </div>
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
              {/* Enhanced Featured Post */}
              {featuredPost && (
                <section className="mb-16">
                  <div className="text-center mb-8">
                    <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Latest</Badge>
                    <h2 className="text-2xl md:text-3xl font-light tracking-tight text-black">Featured Article</h2>
                  </div>
                  
                  <Link to={`/blog/${featuredPost.slug}`} className="block group">
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-border group-hover:border-primary/20">
                      <div className="grid lg:grid-cols-2 gap-0">
                        {/* Featured Image */}
                        <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                          <img 
                            src={featuredPost.featuredImage.url}
                            alt={featuredPost.featuredImage.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        
                        {/* Content */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                          <div className="space-y-6">
                            {/* Date and Reading Time */}
                            <div className="flex items-center gap-6 text-sm text-muted-foreground">
                              <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {formatDate(featuredPost.date)}
                              </span>
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-2xl lg:text-3xl font-semibold leading-tight text-black group-hover:text-primary transition-colors duration-300">
                              {featuredPost.title}
                            </h3>
                            
                            {/* Excerpt */}
                            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed line-clamp-3">
                              {featuredPost.excerpt}
                            </p>
                            
                            {/* CTA */}
                            <div className="pt-4">
                              <Button size="lg" className="group-hover:bg-primary/90 transition-colors">
                                Read Full Article
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </section>
              )}

              {/* Other Posts Grid */}
              {otherPosts.length > 0 && (
                <section>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-3xl font-light tracking-tight text-black">More Articles</h2>
                    <div className="text-sm text-muted-foreground">
                      {otherPosts.length} article{otherPosts.length !== 1 ? 's' : ''}
                    </div>
                  </div>
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
                  <div className="max-w-md mx-auto">
                    <h3 className="text-xl font-semibold text-black mb-4">No posts found</h3>
                    <p className="text-muted-foreground mb-6">
                      {searchTerm ? "Try adjusting your search criteria to find what you're looking for." : "Check back soon for new content and insights."}
                    </p>
                    {searchTerm && (
                      <Button 
                        variant="outline" 
                        onClick={() => setSearchTerm("")}
                        className="hover:bg-primary hover:text-primary-foreground"
                      >
                        Clear Search
                      </Button>
                    )}
                  </div>
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
