
import { createClient } from 'contentful';
import { BlogPost, ContentfulBlogPost, ContentfulAsset } from '@/types/blog';

const client = createClient({
  space: 'qz62f406e9mz',
  accessToken: 'JOMvxwVln4d3rleEjr-2xW8vESIkNYiiDM33mQO6s3Y',
});

const CONTENT_TYPE_ID = 'kapesUniformsBlog';

// Helper function to transform Contentful asset
const transformAsset = (asset: any): ContentfulAsset => {
  if (!asset?.fields?.file) {
    return {
      url: '',
      title: asset?.fields?.title || 'Image',
    };
  }
  
  return {
    url: asset.fields.file.url.startsWith('//') 
      ? `https:${asset.fields.file.url}` 
      : asset.fields.file.url,
    title: asset.fields.title || 'Image',
    description: asset.fields.description,
    width: asset.fields.file.details?.image?.width,
    height: asset.fields.file.details?.image?.height,
  };
};

// Helper function to calculate read time
const calculateReadTime = (content: any): string => {
  if (!content) return '5 min read';
  
  // Convert rich text to plain text and count words
  const getText = (node: any): string => {
    if (!node) return '';
    if (typeof node === 'string') return node;
    if (node.value) return node.value;
    if (node.content) {
      return node.content.map(getText).join(' ');
    }
    return '';
  };
  
  const plainText = getText(content);
  const wordCount = plainText.split(/\s+/).filter(word => word.length > 0).length;
  const readTime = Math.max(1, Math.round(wordCount / 200)); // 200 words per minute
  
  return `${readTime} min read`;
};

// Transform Contentful entry to BlogPost
const transformBlogPost = (entry: ContentfulBlogPost): BlogPost => {
  return {
    title: entry.fields.title,
    slug: entry.fields.slug,
    date: entry.fields.date,
    excerpt: entry.fields.excerpt,
    content: entry.fields.content,
    featuredImage: transformAsset(entry.fields.featuredImage),
    category: entry.fields.category,
    readTime: calculateReadTime(entry.fields.content),
  };
};

export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await client.getEntries({
      content_type: CONTENT_TYPE_ID,
      order: ['-fields.date'],
    });

    return response.items.map(item => transformBlogPost(item as unknown as ContentfulBlogPost));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw new Error('Failed to fetch blog posts');
  }
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const response = await client.getEntries({
      content_type: CONTENT_TYPE_ID,
      'fields.slug': slug,
      limit: 1,
    });

    if (response.items.length === 0) {
      return null;
    }

    return transformBlogPost(response.items[0] as unknown as ContentfulBlogPost);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    throw new Error('Failed to fetch blog post');
  }
};

export const getBlogPostsByCategory = async (category: string): Promise<BlogPost[]> => {
  try {
    const response = await client.getEntries({
      content_type: CONTENT_TYPE_ID,
      'fields.category': category,
      order: ['-fields.date'],
    });

    return response.items.map(item => transformBlogPost(item as unknown as ContentfulBlogPost));
  } catch (error) {
    console.error('Error fetching blog posts by category:', error);
    throw new Error('Failed to fetch blog posts');
  }
};

export const getLatestBlogPosts = async (limit: number = 3): Promise<BlogPost[]> => {
  try {
    const response = await client.getEntries({
      content_type: CONTENT_TYPE_ID,
      order: ['-fields.date'],
      limit,
    });

    return response.items.map(item => transformBlogPost(item as unknown as ContentfulBlogPost));
  } catch (error) {
    console.error('Error fetching latest blog posts:', error);
    throw new Error('Failed to fetch latest blog posts');
  }
};
