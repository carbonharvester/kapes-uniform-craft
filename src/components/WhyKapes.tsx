
export const WhyKapes = () => {
  return (
    <section className="py-0 bg-primary text-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop" 
              alt="Why Kapes" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">Why Kapes?</h2>
            <p className="text-lg leading-relaxed">
              Discover Kapes, where sustainability meets style in school uniforms. 
              Our products champion ethical, eco-friendly practices without compromising 
              on comfort or durability.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">Sustainability</h2>
            <p className="text-lg leading-relaxed">
              At Kapes, we're redefining the uniform industry with our eco-conscious ethos. 
              We craft each product with sustainable materials, ensuring durability and 
              reducing our environmental impact.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop" 
              alt="Sustainability" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
