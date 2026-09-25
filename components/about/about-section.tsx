import { AboutCard } from "./about-card";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#EDEDED] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 flex justify-center"
      aria-label="About Pramudito Metra"
    >
      <div className="w-full max-w-6xl">
        <AboutCard />
      </div>
    </section>
  );
}
