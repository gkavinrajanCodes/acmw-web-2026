import { ScrollHero } from "@/components/hero/scroll-hero";
import { PioneersSection } from "@/components/sections/pioneers-section";
import { AboutSection } from "@/components/sections/about-section";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";

export default function Home() {
  return (
    <main className="relative bg-[#0a0a0a]">
      <Navbar />
      
      {/* Hero with scroll-driven zoom effect */}
      <ScrollHero />
      
      {/* Detailed pioneers section */}
      <PioneersSection />
      
      {/* About ACM-W and SSN */}
      <AboutSection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
