
import { Logos3 } from "@/components/ui/logos3";

export const SchoolLogos = () => {
  const schoolLogos = [
    {
      id: "school-1",
      description: "International School",
      image: "https://res.cloudinary.com/dng12bd0a/image/upload/v1752856916/LOGO-TRANS-V3-300x300_zlrmrw.png",
      className: "h-16 w-auto opacity-70 hover:opacity-100 transition-opacity",
    },
    {
      id: "school-2", 
      description: "Nadeen School",
      image: "https://res.cloudinary.com/dng12bd0a/image/upload/v1752856982/nadeen-logo_o9oteq.png",
      className: "h-16 w-auto opacity-70 hover:opacity-100 transition-opacity",
    },
    {
      id: "school-3",
      description: "International School",
      image: "https://res.cloudinary.com/dng12bd0a/image/upload/v1752857049/v1-primary-high_gsi2bd.png",
      className: "h-16 w-auto opacity-70 hover:opacity-100 transition-opacity",
    },
    {
      id: "school-4",
      description: "Cheltenham Muscat",
      image: "https://res.cloudinary.com/dng12bd0a/image/upload/v1752856945/Cheltenham_Muscat_Logo_Full_Colour-v2.0_qinckm.png",
      className: "h-16 w-auto opacity-70 hover:opacity-100 transition-opacity",
    },
    {
      id: "school-5",
      description: "NEOM",
      image: "https://res.cloudinary.com/dng12bd0a/image/upload/v1752857075/neom-logo-8D73A48B82-seeklogo.com_kaxjte.png",
      className: "h-16 w-auto opacity-70 hover:opacity-100 transition-opacity",
    },
    {
      id: "school-6",
      description: "International School",
      image: "https://res.cloudinary.com/dng12bd0a/image/upload/v1752872116/Horizontal_Lockup_94_f9ozlm_uizm8f.png",
      className: "h-16 w-auto opacity-70 hover:opacity-100 transition-opacity",
    },
  ];

  return (
    <Logos3 
      heading="Trusted by Leading International Schools"
      logos={schoolLogos}
    />
  );
};
