
import { Button } from "@/components/ui/button";

const WhyKapes = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Why Choose <span className="text-primary">Kapes</span>?
          </h1>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-600 text-center mb-12 font-medium">
              We're revolutionizing school uniforms with sustainable materials and innovative design, 
              creating a better future for students and the planet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-2xl font-bold mb-4">Sustainable Materials</h3>
              <p className="text-gray-600 font-medium">
                Our uniforms are made from eco-friendly materials that reduce environmental impact 
                while maintaining durability and comfort for everyday wear.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-2xl font-bold mb-4">Educational Impact</h3>
              <p className="text-gray-600 font-medium">
                We help schools teach students about sustainability and responsible consumption 
                through their daily clothing choices.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-2xl font-bold mb-4">Quality & Durability</h3>
              <p className="text-gray-600 font-medium">
                Our uniforms are designed to last longer than traditional alternatives, 
                reducing waste and providing better value for schools and families.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-2xl font-bold mb-4">Forward-Thinking Partnership</h3>
              <p className="text-gray-600 font-medium">
                We work closely with schools to achieve their sustainability goals and 
                create positive environmental impact through uniform programs.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 font-semibold">
              Learn More About Our Mission
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyKapes;
