export const Hero = () => {
  return <section className="relative min-h-[80vh] flex items-end bg-cover bg-center font-inter" style={{
    backgroundImage: `url('/shopify/shop_images/home-banner.png')`
  }}>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 container mx-auto px-4 pb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">School Uniforms That Make the World Better</h1>
          <p className="text-lg text-white/90 max-w-xl font-medium">Ethically made. Sustainably sourced. Fully managed from design to delivery with measurable impact and zero admin for your school</p>
        </div>
      </div>
    </section>;
};