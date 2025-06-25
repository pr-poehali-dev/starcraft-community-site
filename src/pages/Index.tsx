import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import Footer from "@/components/Footer";
import BottomNavigation from "@/components/BottomNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      <Hero />
      <FeatureCards />
      <Footer />
      <BottomNavigation />
    </div>
  );
};

export default Index;
