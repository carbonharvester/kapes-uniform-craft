
export const OneForAll = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-light tracking-tight mb-8">
              One <span className="text-primary">For All</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ever since we found out that school uniform can reduce absenteeism by 62%, 
              we've made it a priority to help keep as many kids in school as possible. 
              Which is why for every one we sell, we give away a free uniform to a child who really needs it.
            </p>
          </div>
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">▶</span>
              </div>
              <p className="text-gray-600">Video Content</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
