import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/contentful@10.6.21"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  featuredImage: {
    url: string;
    title: string;
    description?: string;
    width?: number;
    height?: number;
  };
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const slug = url.searchParams.get('slug');

    // Get Contentful credentials from Supabase secrets
    const spaceId = Deno.env.get('CONTENTFUL_SPACE_ID');
    const accessToken = Deno.env.get('CONTENTFUL_ACCESS_TOKEN');
    
    console.log('Contentful credentials check:', { 
      hasSpaceId: !!spaceId, 
      hasAccessToken: !!accessToken,
      spaceId: spaceId?.substring(0, 5) + '...' // Log partial for debugging
    });
    
    if (!spaceId || !accessToken) {
      console.error('Missing Contentful credentials:', { spaceId: !!spaceId, accessToken: !!accessToken });
      throw new Error('Contentful credentials not configured');
    }

    // Create Contentful client using the delivery API
    const contentfulClient = createClient({
      space: spaceId,
      accessToken: accessToken,
    });

    const CONTENT_TYPE_ID = 'kapesUniformsBlog';

    // Helper function to transform Contentful asset
    const transformAsset = (asset: any) => {
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

    // Transform Contentful entry to BlogPost
    const transformBlogPost = (entry: any): BlogPost => {
      return {
        title: entry.fields.title,
        slug: entry.fields.slug,
        date: entry.fields.date,
        excerpt: entry.fields.excerpt,
        content: entry.fields.content,
        featuredImage: transformAsset(entry.fields.featuredImage),
      };
    };

    let responseData;

    if (slug) {
      // Get specific blog post by slug
      const response = await contentfulClient.getEntries({
        content_type: CONTENT_TYPE_ID,
        'fields.slug': slug,
        limit: 1,
      });

      if (response.items.length === 0) {
        return new Response(
          JSON.stringify({ error: 'Blog post not found' }),
          { 
            status: 404, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }

      responseData = transformBlogPost(response.items[0]);
    } else {
      // Get all blog posts
      const limit = parseInt(url.searchParams.get('limit') || '10');
      const response = await contentfulClient.getEntries({
        content_type: CONTENT_TYPE_ID,
        order: ['-fields.date'],
        limit,
      });

      responseData = response.items.map(transformBlogPost);
    }

    return new Response(
      JSON.stringify(responseData),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error fetching blog content:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch blog content' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
})