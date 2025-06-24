
export const InTheNews = () => {
  const newsItems = [
    { id: 1, alt: "EduAE Magazine", image: "/shopify/shop_images/image_10.jpg" },
    { id: 2, alt: "The Agenda", image: "/shopify/shop_images/image_11.jpg" },
    { id: 3, alt: "Fast Company", image: "/shopify/shop_images/image_12.jpg" },
    { id: 4, alt: "Teach Middle East", image: "/shopify/shop_images/image_13.jpg" },
    { id: 5, alt: "Global Citizen", image: "/shopify/shop_images/image_14.jpg" }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">In The News</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer overflow-hidden">
              <img 
                src={item.image} 
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
