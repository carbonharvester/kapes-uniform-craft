
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { BlogPost } from "@/types/blog";
import { Link } from "react-router-dom";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export const BlogCard = ({ post, className }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <Link to={`/blog/${post.slug}`} className="block">
      <Card className={`overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer h-[450px] flex flex-col hover:scale-105 ${className}`}>
        <div className="aspect-video relative overflow-hidden bg-muted/50">
          <img 
            src={post.featuredImage.url} 
            alt={post.featuredImage.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardHeader className="flex-1">
          <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
            {post.title}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground line-clamp-3 flex-1 font-inter">
            {post.excerpt}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0 mt-auto">
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
  );
};
