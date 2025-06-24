
import { Button } from "@/components/ui/button";

export const CaseStudies = () => {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Trusted By Schools That Care About Sustainability
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-center">
            <div className="aspect-square bg-white/10 rounded-lg mb-6 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop" 
                alt="The Arbor School" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">The Arbor School</h3>
            <p className="text-lg mb-6 text-white/90">
              Join the ranks of The Arbor School, a leading light in sustainability education 
              with 1300 students, who embraced our eco-uniforms, redefining the impact of their green ethos.
            </p>
            <Button variant="outline" className="text-primary bg-white hover:bg-white/90">
              Learn More
            </Button>
          </div>
          <div className="text-center">
            <div className="aspect-square bg-white/10 rounded-lg mb-6 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop" 
                alt="Fairgreen International" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">Fairgreen International</h3>
            <p className="text-lg mb-6 text-white/90">
              Take a leaf out of Fairgreen International's book, a school with 950 students, 
              who seamlessly transitioned to uniforms that echo their commitment to a sustainable future.
            </p>
            <Button variant="outline" className="text-primary bg-white hover:bg-white/90">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
