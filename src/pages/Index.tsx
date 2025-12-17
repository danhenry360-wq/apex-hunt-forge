import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AdvantageCards } from "@/components/AdvantageCards";
import { ToolsTicker } from "@/components/ToolsTicker";
import { BentoGrid } from "@/components/BentoGrid";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <AdvantageCards />
      <ToolsTicker />
      <BentoGrid />
      <Pricing />
      <Footer />
    </main>
  );
};

export default Index;
