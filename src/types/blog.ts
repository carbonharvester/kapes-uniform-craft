
import { Document } from '@contentful/rich-text-types';

export interface ContentfulAsset {
  url: string;
  title: string;
  description?: string;
  width?: number;
  height?: number;
}

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: Document;
  featuredImage: ContentfulAsset;
  category: string;
  readTime?: string; // Generated from content
}

export interface ContentfulBlogPost {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    slug: string;
    date: string;
    excerpt: string;
    content: Document;
    featuredImage: {
      fields: {
        file: {
          url: string;
        };
        title: string;
        description?: string;
      };
    };
    category: string;
  };
}
