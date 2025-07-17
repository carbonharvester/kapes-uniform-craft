import { Logos3 } from "@/components/ui/logos3";

export const SchoolLogos = () => {
  const schoolLogos = [
    {
      id: "school-1",
      description: "Oxford University",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=200&h=60&fit=crop&crop=center",
      className: "h-12 w-auto opacity-70 hover:opacity-100 transition-opacity",
    },
    {
      id: "school-2", 
      description: "Cambridge University",
      image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=200&h=60&fit=crop&crop=center",
      className: "h-12 w-auto opacity-70 hover:opacity-100 transition-opacity",
    },
    {
      id: "school-3",
      description: "Eton College",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=60&fit=crop&crop=center",
      className: "h-12 w-auto opacity-70 hover:opacity-100 transition-opacity",
    },
    {
      id: "school-4",
      description: "Winchester College",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=60&fit=crop&crop=center",
      className: "h-12 w-auto opacity-70 hover:opacity-100 transition-opacity",
    },
    {
      id: "school-5",
      description: "Harrow School",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=200&h=60&fit=crop&crop=center",
      className: "h-12 w-auto opacity-70 hover:opacity-100 transition-opacity",
    },
    {
      id: "school-6",
      description: "Rugby School",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=60&fit=crop&crop=center",
      className: "h-12 w-auto opacity-70 hover:opacity-100 transition-opacity",
    },
    {
      id: "school-7",
      description: "St. Paul's School",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=60&fit=crop&crop=center",
      className: "h-12 w-auto opacity-70 hover:opacity-100 transition-opacity",
    },
    {
      id: "school-8",
      description: "Westminster School",
      image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=200&h=60&fit=crop&crop=center",
      className: "h-12 w-auto opacity-70 hover:opacity-100 transition-opacity",
    },
  ];

  return (
    <Logos3 
      heading="Trusted by Leading Schools Across the UK"
      logos={schoolLogos}
    />
  );
};