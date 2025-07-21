
import SustainabilityScorecard from '@/components/SustainabilityScorecard';
import { Footer } from "@/components/Footer";

const SustainabilityScorecardPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center" style={{ backgroundColor: '#cfeaff' }}>
      <div className="flex-1 flex items-center justify-center py-12">
        <SustainabilityScorecard />
      </div>
      <Footer />
    </div>
  );
};

export default SustainabilityScorecardPage;
