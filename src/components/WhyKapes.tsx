
export const WhyKapes = () => {
  return (
    <section className="py-0 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-8">Why Kapes?</h1>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            </div>
            <div className="relative">
              <img 
                src="/shopify/shop_images/why-kapes.png" 
                alt="Our Mission" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative order-2 md:order-1">
              <img 
                src="/shopify/shop_images/good-places.png" 
                alt="Sustainability & Ethics" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Sustainability & Ethics</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Circular Economy & Takeback</h2>
            </div>
            <div className="relative">
              <img 
                src="/shopify/shop_images/why-kapes.png" 
                alt="Circular Economy" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative order-2 md:order-1">
              <img 
                src="/shopify/shop_images/good-places.png" 
                alt="Social Impact" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Social Impact in Africa</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Testimonials & Case Studies</h2>
            </div>
            <div className="relative">
              <img 
                src="/shopify/shop_images/why-kapes.png" 
                alt="Testimonials" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
