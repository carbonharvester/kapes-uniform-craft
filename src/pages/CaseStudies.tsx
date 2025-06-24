
const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Success <span className="text-primary">Stories</span>
          </h1>
          
          <p className="text-xl text-gray-600 text-center mb-12 font-medium">
            See how forward-thinking schools are making a positive impact with Kapes uniforms.
          </p>

          <div className="space-y-12">
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-2xl font-bold mb-4">Arbor School</h3>
              <p className="text-gray-600 font-medium mb-4">
                A progressive international school that reduced their carbon footprint by 40% 
                after switching to Kapes sustainable uniforms.
              </p>
              <div className="bg-gray-50 p-4 rounded border-l-4 border-primary">
                <p className="text-gray-700 italic">
                  "Kapes helped us align our uniform policy with our environmental values. 
                  Students are more engaged with sustainability topics since seeing the direct 
                  impact of their clothing choices."
                </p>
                <p className="text-sm text-gray-600 mt-2">- Sarah Johnson, Head of School</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-2xl font-bold mb-4">Green Valley Academy</h3>
              <p className="text-gray-600 font-medium mb-4">
                This innovative school integrated sustainability education into their curriculum 
                through their partnership with Kapes.
              </p>
              <div className="bg-gray-50 p-4 rounded border-l-4 border-primary">
                <p className="text-gray-700 italic">
                  "The durability of Kapes uniforms has saved us money while teaching our 
                  students valuable lessons about conscious consumption and environmental responsibility."
                </p>
                <p className="text-sm text-gray-600 mt-2">- Dr. Michael Chen, Principal</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-2xl font-bold mb-4">Future Leaders School</h3>
              <p className="text-gray-600 font-medium mb-4">
                A school that wanted to lead by example in environmental stewardship 
                and found the perfect partner in Kapes.
              </p>
              <div className="bg-gray-50 p-4 rounded border-l-4 border-primary">
                <p className="text-gray-700 italic">
                  "Our partnership with Kapes has transformed how we approach sustainability. 
                  Parents and students love knowing their uniforms are making a positive difference."
                </p>
                <p className="text-sm text-gray-600 mt-2">- Emma Rodriguez, Sustainability Coordinator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
