
import { Button } from "@/components/ui/button";

const PartnerWithUs = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Partner <span className="text-primary">With Us</span>
          </h1>
          
          <p className="text-xl text-gray-600 text-center mb-12 font-medium">
            Join forward-thinking schools that are making a positive impact on the environment 
            while providing quality uniforms for their students.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-2xl font-bold mb-4">For Schools</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Achieve your sustainability goals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Integrate environmental education</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Reduce long-term uniform costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Custom branding and design options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Flexible ordering and delivery</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 font-semibold">
                School Partnership Inquiry
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-2xl font-bold mb-4">For Distributors</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Represent a leading sustainable brand</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Comprehensive training and support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Marketing materials and resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Competitive wholesale pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Territory protection</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 font-semibold">
                Distributor Application
              </Button>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Partnership Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  1
                </div>
                <h4 className="font-semibold mb-2">Initial Consultation</h4>
                <p className="text-sm text-gray-600">
                  Discuss your school's needs and sustainability goals
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  2
                </div>
                <h4 className="font-semibold mb-2">Custom Proposal</h4>
                <p className="text-sm text-gray-600">
                  Receive tailored uniform solutions and pricing
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  3
                </div>
                <h4 className="font-semibold mb-2">Sample & Testing</h4>
                <p className="text-sm text-gray-600">
                  Try our uniforms with a small pilot program
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  4
                </div>
                <h4 className="font-semibold mb-2">Full Implementation</h4>
                <p className="text-sm text-gray-600">
                  Launch your sustainable uniform program
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6 font-medium">
              Contact us today to learn how Kapes can help your school make a positive environmental impact.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 font-semibold">
              Contact Us Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
