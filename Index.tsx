import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuHighlights from "@/components/MenuHighlights";
import TestimonialsSection from "@/components/TestimonialsSection";
import InfoSection from "@/components/InfoSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <MenuHighlights />
      <TestimonialsSection />
      <div id="visit">
        <InfoSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Index;
