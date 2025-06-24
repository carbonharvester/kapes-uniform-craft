
export const InTheNews = () => {
  const newsItems = [
    { id: 1, alt: "EduAE Magazine" },
    { id: 2, alt: "The Agenda" },
    { id: 3, alt: "Fast Company" },
    { id: 4, alt: "Teach Middle East" },
    { id: 5, alt: "Global Citizen" }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">In The News</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
              <span className="text-gray-600 text-sm text-center px-2">{item.alt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
