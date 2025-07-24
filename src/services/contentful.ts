
import { BlogPost } from '@/types/blog';
import { secureApi } from './secureApi';

// SECURITY NOTE: This file now uses secure API service instead of exposing credentials
// All Contentful API calls are now handled securely through edge functions

export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
  return secureApi.getBlogPosts();
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  return secureApi.getBlogPost(slug);
};

export const getBlogPostsByCategory = async (category: string): Promise<BlogPost[]> => {
  try {
    // Since category field is omitted, this function will return all posts
    // You may want to remove this function or implement client-side filtering
    console.warn('Category field is omitted from API response. Returning all posts.');
    return getAllBlogPosts();
  } catch (error) {
    console.error('Error fetching blog posts by category:', error);
    throw new Error('Failed to fetch blog posts');
  }
};

export const getLatestBlogPosts = async (limit: number = 3): Promise<BlogPost[]> => {
  return secureApi.getBlogPosts(limit);
};
