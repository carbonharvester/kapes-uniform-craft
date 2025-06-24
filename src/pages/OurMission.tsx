
import { Button } from "@/components/ui/button";

const OurMission = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Our <span className="text-primary">Mission</span>
          </h1>
          
          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 font-medium mb-8">
              To revolutionize school uniforms through sustainable practices, 
              creating a better future for students and our planet.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">What Drives Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Environmental Impact</h3>
                <p className="text-gray-600">
                  Reducing the fashion industry's environmental footprint through sustainable materials and processes.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-gray-600">
                  Teaching students about sustainability through their daily clothing choices and lifestyle.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Partnership</h3>
                <p className="text-gray-600">
                  Collaborating with schools to achieve their sustainability goals and create lasting change.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Carbon Neutral Operations:</strong> We offset 100% of our carbon emissions through verified environmental projects.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Ethical Manufacturing:</strong> All our products are made in facilities with fair labor practices and safe working conditions.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Circular Economy:</strong> We design for durability and offer take-back programs for end-of-life uniforms.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Transparency:</strong> We provide detailed information about our supply chain and environmental impact.</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 font-semibold">
              Join Our Mission
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
