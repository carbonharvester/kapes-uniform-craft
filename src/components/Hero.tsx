

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-end bg-cover bg-center font-inter" 
             style={{ backgroundImage: `url('/shopify/shop_images/home-banner.png')` }}>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 container mx-auto px-4 pb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Sustainable Uniforms for Forward-Thinking Schools
          </h1>
          <p className="text-lg text-white/90 max-w-xl font-medium">
            Kapes empower schools to reach their sustainability targets, while educating students 
            about the life cycle of their clothing, and nurturing eco-conscious habits.
          </p>
        </div>
      </div>
    </section>
  );
};

