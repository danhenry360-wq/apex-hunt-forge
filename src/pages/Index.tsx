import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AdvantageCards } from "@/components/AdvantageCards";
import { ToolsTicker } from "@/components/ToolsTicker";
import { BentoGrid } from "@/components/BentoGrid";
import { Pricing } from "@/components/Pricing";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { AudioToggle } from "@/components/AudioToggle";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <AdvantageCards />
      <ToolsTicker />
      <BentoGrid />
      <Pricing />
      <ContactSection />
      <Footer />
      <AudioToggle />
    </main>
  );
};

export default Index;
