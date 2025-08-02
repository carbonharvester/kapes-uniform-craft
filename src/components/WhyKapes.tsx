
export const WhyKapes = () => {
  return (
    <section className="py-0 bg-background-warm text-heading">
      <div className="container mx-auto px-4">
        <div className="grid gap-16">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-light tracking-tight mb-8">Why Kapes?</h1>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-medium mb-6">Our Mission</h2>
            </div>
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/dng12bd0a/image/upload/v1752999752/490294314_1221791753286267_8865515835930643023_n_cue5wc.jpg"
                alt="Our Mission" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative order-2 md:order-1">
              <img 
                src="https://res.cloudinary.com/dng12bd0a/image/upload/v1752904778/Filip-C-Agoo-Everland-Marketing-Kenya-8679-WEB-low-resolution_fwb4kw.jpg"
                alt="Sustainability & Ethics" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-4xl font-medium mb-6">Sustainability & Ethics</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-medium mb-6">Circular Economy & Takeback</h2>
            </div>
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/dng12bd0a/image/upload/v1753009981/Untitled_design_3_zz8vdo.jpg"
                alt="Circular Economy" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative order-2 md:order-1">
              <img 
                src="https://res.cloudinary.com/dng12bd0a/image/upload/v1750536183/Screen_Shot_2022-06-07_at_7.22.23_PM_i4veeu.png"
                alt="Social Impact" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-4xl font-medium mb-6">Social Impact in Africa</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-medium mb-6">Testimonials & Case Studies</h2>
            </div>
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/dng12bd0a/image/upload/v1752991030/thumb_4_mzgf4h.jpg"
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
