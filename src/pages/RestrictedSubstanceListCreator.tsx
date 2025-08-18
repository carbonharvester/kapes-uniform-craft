import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import RestrictedSubstanceListCreator from "@/components/RestrictedSubstanceListCreator";

const RestrictedSubstanceListCreatorPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <RestrictedSubstanceListCreator />
      </main>
      <Footer />
    </div>
  );
};

export default RestrictedSubstanceListCreatorPage;