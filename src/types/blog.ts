
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
  author: string;
  authorTitle: string;
  authorImage: ContentfulAsset;
  category: string;
  readTime?: string;
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
    author: string;
    authorTitle: string;
    authorImage: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    };
    category: string;
  };
}
