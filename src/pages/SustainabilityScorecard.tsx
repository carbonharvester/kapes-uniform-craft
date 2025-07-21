
import SustainabilityScorecard from '@/components/SustainabilityScorecard';
import { Footer } from "@/components/Footer";

const SustainabilityScorecardPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center" style={{ backgroundColor: '#cfeaff' }}>
      <div className="container mx-auto py-12 flex justify-center">
        <SustainabilityScorecard />
      </div>
      <Footer />
    </div>
  );
};

export default SustainabilityScorecardPage;
