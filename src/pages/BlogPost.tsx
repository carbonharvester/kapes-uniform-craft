import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";
import { getBlogPostBySlug, getLatestBlogPosts } from "@/services/contentful";
import { BlogCard } from "@/components/BlogCard";
import { Footer } from "@/components/Footer";
import { BlogPost as BlogPostType } from "@/types/blog";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blogPost', slug],
    queryFn: () => getBlogPostBySlug(slug!),
    enabled: !!slug,
  });

  const { data: relatedPosts } = useQuery({
    queryKey: ['relatedPosts'],
    queryFn: () => getLatestBlogPosts(4),
  });

  // Rich text rendering options
  const richTextOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <p className="mb-6 text-base leading-relaxed text-content font-light">{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node: any, children: any) => (
        <h1 className="text-2xl font-light mb-8 mt-12 text-black tracking-tight">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: any) => (
        <h2 className="text-xl font-light mb-6 mt-10 text-black tracking-tight">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: any) => (
        <h3 className="text-lg font-normal mb-4 mt-8 text-black">{children}</h3>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: any) => (
        <ul className="list-disc list-outside mb-6 space-y-2 text-base pl-6">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: any) => (
        <ol className="list-decimal list-outside mb-6 space-y-2 text-base pl-6">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
        <li className="text-content font-light">{children}</li>
      ),
      [BLOCKS.QUOTE]: (node: any, children: any) => (
        <blockquote className="border-l-4 border-primary pl-6 py-4 mb-6 bg-secondary/10 rounded-r-lg">
          <div className="text-base italic text-content font-light">{children}</div>
        </blockquote>
      ),
      [INLINES.HYPERLINK]: (node: any, children: any) => (
        <a 
          href={node.data.uri} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 underline font-medium transition-colors"
        >
          {children}
        </a>
      ),
    },
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const sharePost = () => {
    if (navigator.share && post) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5 font-inter">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-light text-heading mb-4">Post not found</h1>
            <p className="text-content mb-6 font-light">The blog post you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5 font-inter">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-8 w-32 mb-8" />
            <Skeleton className="aspect-video w-full mb-8" />
            <div className="space-y-4 mb-8">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <div className="space-y-4">
              {[...Array(8)].map((_, i) => (
                <Skeleton key={i} className="h-4 w-full" />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5 font-inter">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-light text-heading mb-4">Post not found</h1>
            <p className="text-content mb-6 font-light">The blog post you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const filteredRelatedPosts = relatedPosts?.filter(p => p.slug !== post.slug).slice(0, 3) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5 font-inter">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-8 text-heading hover:text-primary transition-colors">
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>

          {/* Hero Section */}
          <article className="space-y-8">
            <div className="aspect-video overflow-hidden rounded-lg border border-border shadow-md">
              <img 
                src={post.featuredImage.url}
                alt={post.featuredImage.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h1 className="text-2xl md:text-3xl font-light leading-tight tracking-tight text-black">
                {post.title}
              </h1>
              
              {/* Date and Share Section */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-2 text-sm text-content">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.date)}</span>
                </div>
                
                <Button variant="outline" size="sm" onClick={sharePost} className="border-primary/20 hover:bg-primary/5">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
              
              <p className="text-base text-content leading-relaxed font-light">
                {post.excerpt}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {documentToReactComponents(post.content, richTextOptions)}
            </div>
          </article>

          {/* Related Posts */}
          {filteredRelatedPosts.length > 0 && (
            <section className="mt-16 pt-16 border-t border-border/50">
              <h2 className="text-xl font-light mb-8 text-black tracking-tight">Related Posts</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredRelatedPosts.map(relatedPost => (
                  <BlogCard key={relatedPost.slug} post={relatedPost} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
