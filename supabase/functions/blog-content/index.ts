import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

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
    const limit = url.searchParams.get('limit');

    // Get Contentful credentials from Supabase secrets
    const spaceId = Deno.env.get('CONTENTFUL_SPACE_ID');
    const accessToken = Deno.env.get('CONTENTFUL_ACCESS_TOKEN');
    
    console.log('Contentful credentials check:', { 
      hasSpaceId: !!spaceId, 
      hasAccessToken: !!accessToken,
      spaceId: spaceId ? spaceId.substring(0, 5) + '...' : 'missing'
    });
    
    if (!spaceId || !accessToken) {
      console.error('Missing Contentful credentials');
      return new Response(
        JSON.stringify({ error: 'Contentful credentials not configured' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const CONTENT_TYPE_ID = 'kapesUniformsBlog';
    const baseUrl = `https://cdn.contentful.com/spaces/${spaceId}/entries`;

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
    const transformBlogPost = (entry: any, assets: any[] = []): BlogPost => {
      const featuredImageId = entry.fields.featuredImage?.sys?.id;
      const featuredImageAsset = assets.find(asset => asset.sys.id === featuredImageId);
      
      return {
        title: entry.fields.title,
        slug: entry.fields.slug,
        date: entry.fields.date,
        excerpt: entry.fields.excerpt,
        content: entry.fields.content,
        featuredImage: transformAsset(featuredImageAsset),
      };
    };

    let responseData;

    if (slug) {
      // Get specific blog post by slug
      const queryParams = new URLSearchParams({
        'access_token': accessToken,
        'content_type': CONTENT_TYPE_ID,
        'fields.slug': slug,
        'include': '2',
        'limit': '1'
      });

      const response = await fetch(`${baseUrl}?${queryParams}`);
      
      if (!response.ok) {
        console.error('Contentful API error:', response.status, response.statusText);
        throw new Error(`Contentful API error: ${response.status}`);
      }

      const data = await response.json();

      if (data.items.length === 0) {
        return new Response(
          JSON.stringify({ error: 'Blog post not found' }),
          { 
            status: 404, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }

      responseData = transformBlogPost(data.items[0], data.includes?.Asset || []);
    } else {
      // Get all blog posts
      const queryLimit = limit ? parseInt(limit) : 10;
      const queryParams = new URLSearchParams({
        'access_token': accessToken,
        'content_type': CONTENT_TYPE_ID,
        'order': '-fields.date',
        'include': '2',
        'limit': queryLimit.toString()
      });

      const response = await fetch(`${baseUrl}?${queryParams}`);
      
      if (!response.ok) {
        console.error('Contentful API error:', response.status, response.statusText);
        throw new Error(`Contentful API error: ${response.status}`);
      }

      const data = await response.json();
      responseData = data.items.map((item: any) => transformBlogPost(item, data.includes?.Asset || []));
    }

    console.log('Successfully fetched blog content:', responseData?.length || 'single post');

    return new Response(
      JSON.stringify(responseData),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error fetching blog content:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch blog content', details: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});