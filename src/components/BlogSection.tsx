
import { Button } from "@/components/ui/button";

export const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Sustainable School Uniforms",
      excerpt: "Exploring how eco-friendly materials are revolutionizing the uniform industry.",
      date: "March 15, 2024"
    },
    {
      id: 2,
      title: "How Schools Can Reduce Their Carbon Footprint",
      excerpt: "Simple steps schools can take to become more environmentally conscious.",
      date: "March 10, 2024"
    },
    {
      id: 3,
      title: "Student Voices on Sustainability",
      excerpt: "What students think about environmental initiatives in their schools.",
      date: "March 5, 2024"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-4xl font-bold">Blog</h2>
          </div>
          <div className="flex justify-end items-center">
            <Button variant="link" className="text-primary">
              See More Articles →
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
              <div className="aspect-video bg-gray-100 rounded-lg mb-4"></div>
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <h3 className="text-xl font-bold mb-3">{post.title}</h3>
              <p className="text-gray-600">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
