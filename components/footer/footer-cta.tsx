import Image from "next/image";
import { profileData } from "@/lib/data/portfolio-data";

export function FooterCta() {
  return (
    <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-12">
      {/* Big Diagonal Arrow + Headline */}
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="w-12 h-12 sm:w-16 sm:h-16 text-black flex items-center justify-center shrink-0">
          <Image
            src="/assets/vectors/arrow-up-right.svg"
            alt="Arrow"
            width={60}
            height={60}
            className="w-full h-full object-contain"
          />
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-black font-sans leading-none">
          LET&apos;S WORK TOGETHER
        </h2>
      </div>

      {/* Button: SEND ME A MESSAGE */}
      <div>
        <a
          href={`mailto:${profileData.email}?subject=Project%20Inquiry`}
          className="inline-flex items-center justify-center rounded-full border border-black px-6 sm:px-8 py-3 text-xs sm:text-sm font-bold tracking-wider text-black transition-all hover:bg-black hover:text-white active:scale-95 min-h-[44px]"
          aria-label={`Send message to ${profileData.email}`}
        >
          SEND ME A MESSAGE
        </a>
      </div>
    </div>
  );
}
