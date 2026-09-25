"use client";

import Image from "next/image";
import { HeroNavbar } from "./hero-navbar";
import { HeroMarquee } from "./hero-marquee";
import { HeroPortrait } from "./hero-portrait";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] w-full flex flex-col justify-between pt-16 sm:pt-28 pb-0 sm:pb-8 overflow-hidden bg-[#EDEDED]"
      aria-label="Introduction and Hero"
    >
      <HeroNavbar />
      <HeroMarquee />
      <div className="relative w-full max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 flex-1 flex flex-col justify-end">
        <div className="absolute left-4 sm:left-12 top-1/4 sm:top-1/3 -translate-y-1/2 z-30 max-w-[160px] sm:max-w-[200px]">
          <span className="block text-xs sm:text-sm font-semibold text-neutral-500 tracking-tight leading-tight font-sans">
            Freelance
          </span>
          <span className="block text-xs sm:text-sm font-bold text-black tracking-tight leading-tight font-sans mt-0.5">
            Designer &amp; Developer
          </span>
        </div>
        <div className="w-full flex justify-center items-end">
          <HeroPortrait />
        </div>
        <div className="absolute right-4 sm:right-12 bottom-4 sm:bottom-8 z-30 flex flex-col items-center gap-2">
          <a
            href="#about"
            className="group flex flex-col items-center gap-1.5 text-neutral-600 hover:text-black transition-colors min-h-[44px] justify-center"
            aria-label="Scroll down to About section"
          >
            <span className="text-[11px] sm:text-xs font-medium tracking-tight font-sans">
              Scroll down
            </span>
            <div className="w-5 h-5 flex items-center justify-center transition-transform group-hover:translate-y-1">
              <Image
                src="/assets/vectors/arrow-down.svg"
                alt="Scroll Down Arrow"
                width={18}
                height={18}
                className="w-4 h-4 text-black"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}