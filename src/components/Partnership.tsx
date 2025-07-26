
import { Button } from "@/components/ui/button";

export const Partnership = () => {
  return (
    <section className="py-20 bg-yellow-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6">
              Join the waiting list to partner with <span className="text-primary">Kapes</span>
            </h2>
          </div>
          <div>
            <p className="text-lg text-gray-600 mb-8">
              Does your school value sustainability? Join our waiting list and take our School Uniform 
              Sustainability Scorecard to benchmark the sustainability of your uniforms.
            </p>
            <div className="space-y-4">
              <Button size="lg" className="w-full md:w-auto mr-4">
                Take scorecard
              </Button>
              <Button variant="outline" size="lg" className="w-full md:w-auto">
                Join Waiting List
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
