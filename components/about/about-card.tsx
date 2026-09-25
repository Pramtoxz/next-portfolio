"use client";

import Image from "next/image";
import { profileData } from "@/lib/data/portfolio-data";

export function AboutCard() {
  return (
    <div className="relative w-full rounded-3xl bg-[#0B0B0B] text-white p-8 sm:p-14 lg:p-20 shadow-2xl border border-white/10">
      {/* Top Right Counter Indicator */}
      <div className="absolute top-8 sm:top-12 right-8 sm:right-12 font-mono text-xs sm:text-sm tracking-widest text-neutral-500 uppercase">
        02/05
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column: Huge /ABOUT headline + Bold diagonal arrow */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8 sm:space-y-12">
          <h2 className="text-6xl sm:text-8xl lg:text-9xl font-normal uppercase font-display tracking-tight leading-none text-white select-none">
            /ABOUT
          </h2>

          {/* Large Diagonal Arrow Icon */}
          <div className="w-16 h-16 sm:w-24 sm:h-24 text-neutral-400">
            <Image
              src="/assets/vectors/arrow-up-right.svg"
              alt="Arrow Up Right"
              width={80}
              height={80}
              className="w-full h-full object-contain filter invert opacity-80"
            />
          </div>
        </div>

        {/* Right Column: Editorial Quote and Current Status */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 sm:space-y-10 pt-2 lg:pt-4">
          {/* Main Narrative Quote */}
          <blockquote className="text-lg sm:text-2xl lg:text-[26px] font-normal leading-relaxed text-neutral-200 tracking-normal font-sans">
            &ldquo;{profileData.aboutQuote}&rdquo;
          </blockquote>

          {/* Extended Bio */}
          <p className="text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
            {profileData.aboutExtended}
          </p>

          {/* Current Engagement Status Line */}
          <div className="pt-4 border-t border-white/10">
            <span className="block text-[11px] sm:text-xs font-bold tracking-widest text-neutral-400 uppercase font-mono">
              {profileData.currentStatus}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
