import React from "react";
import Image from "next/image";
import { profileData } from "@/lib/data/portfolio-data";

interface MarqueeStripProps {
  items?: string[];
  reverse?: boolean;
  className?: string;
}

export function MarqueeStrip({
  items = profileData.tickerItems,
  reverse = false,
  className = "",
}: MarqueeStripProps) {
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`relative w-full overflow-hidden border-y border-black bg-black py-4 sm:py-5 select-none ${className}`}
      aria-label="Capabilities ticker"
    >
      <div
        className={
          reverse
            ? "animate-marquee-infinite-reverse flex items-center"
            : "animate-marquee-infinite flex items-center"
        }
      >
        {repeatedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-6 sm:gap-10 px-4 sm:px-6 shrink-0"
          >
            <span className="text-xl sm:text-3xl font-normal tracking-wide text-white uppercase font-display">
              {item}
            </span>
            <div className="w-5 h-5 sm:w-6 sm:h-6 text-white shrink-0 flex items-center justify-center">
              <Image
                src="/assets/vectors/starburst.svg"
                alt="starburst"
                width={20}
                height={20}
                className="w-full h-full object-contain filter invert"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
