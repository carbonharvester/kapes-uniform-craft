
import { Button } from "@/components/ui/button";

export const Superpowers = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Uniforms With <span className="text-primary">Superpowers</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          School uniforms are typically made from synthetic materials and conventional cotton, 
          which are destroying the very planet that the children wearing them will inherit.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          OUR SUSTAINABILITY MISSION
        </Button>
      </div>
    </section>
  );
};
