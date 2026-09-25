import { CurtainWipe } from "@/components/shared/curtain-wipe";
import { HeroSection } from "@/components/hero/hero-section";
import { AboutSection } from "@/components/about/about-section";
import { MarqueeStrip } from "@/components/shared/marquee-strip";
import { SelectedWorksSection } from "@/components/selected-works/selected-works-section";
import { ProcessSection } from "@/components/process/process-section";
import { FooterSection } from "@/components/footer/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#EDEDED] text-[#0A0A0A] overflow-x-hidden selection:bg-black selection:text-white">
      {/* 01. Preloader curtain wipe */}
      <CurtainWipe />

      {/* 02. Hero section: centered portrait, orbit lines, kinetic name marquee, floating pill navbar */}
      <HeroSection />

      {/* 03. About section: dark card 02/05, giant /ABOUT, diagonal arrow, editorial narrative */}
      <AboutSection />

      {/* 04. Kinetic ticker marquee banner with starburst separator */}
      <MarqueeStrip />

      {/* 05. Selected works: narrative quote, circular GET IN TOUCH, dashed rows, floating mockup hover */}
      <SelectedWorksSection />

      {/* 06. Process methodology: dark card, stacked DEFINE/DESIGN/DELIVER, synced cross-fade visual */}
      <ProcessSection />

      {/* 07. Footer: ↗ LET'S WORK TOGETHER, SEND ME A MESSAGE button, massive full-width typography */}
      <FooterSection />
    </main>
  );
}
