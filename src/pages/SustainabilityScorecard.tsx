import SustainabilityScorecard from '@/components/SustainabilityScorecard';
import { Footer } from "@/components/Footer";

const SustainabilityScorecardPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-12">
        <SustainabilityScorecard />
      </div>
      <Footer />
    </div>
  );
};

export default SustainabilityScorecardPage;