
const Materials = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Sustainable <span className="text-primary">Materials</span>
          </h1>
          
          <p className="text-xl text-gray-600 text-center mb-12 font-medium">
            Discover the innovative, eco-friendly materials that make Kapes uniforms 
            both sustainable and superior in quality.
          </p>

          <div className="space-y-12">
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-2xl font-bold mb-4">Organic Cotton</h3>
              <p className="text-gray-600 font-medium mb-4">
                Our organic cotton is grown without harmful pesticides or synthetic fertilizers, 
                protecting both the environment and the farmers who grow it.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>90% less water usage than conventional cotton</li>
                <li>No toxic chemicals or pesticides</li>
                <li>Biodegradable and renewable</li>
                <li>Softer and more durable than regular cotton</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-2xl font-bold mb-4">Recycled Polyester</h3>
              <p className="text-gray-600 font-medium mb-4">
                Made from recycled plastic bottles and textile waste, our recycled polyester 
                gives new life to materials that would otherwise end up in landfills.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Reduces plastic waste in oceans and landfills</li>
                <li>Uses 75% less energy than virgin polyester</li>
                <li>Maintains durability and performance</li>
                <li>Easy care and quick-drying properties</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-2xl font-bold mb-4">Natural Dyes</h3>
              <p className="text-gray-600 font-medium mb-4">
                Our coloring process uses plant-based and low-impact dyes that minimize 
                water consumption and eliminate harmful chemicals.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Non-toxic and skin-friendly</li>
                <li>Reduced water pollution</li>
                <li>Long-lasting color retention</li>
                <li>Safe for children and the environment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materials;
