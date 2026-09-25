"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroPortrait() {
  return (
    <div className="relative mx-auto flex items-end justify-center w-full h-[74dvh] sm:h-[85vh] lg:h-[92vh] max-h-[1000px] z-20 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, rotate: -20, scale: 0.9 }}
        animate={{ opacity: 0.7, rotate: 0, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -top-10 sm:-top-24 lg:-top-32 inset-x-0 mx-auto w-[540px] h-[540px] sm:w-[700px] sm:h-[700px] lg:w-[900px] lg:h-[900px] flex items-center justify-center -z-10"
      >
        <Image
          src="/assets/vectors/orbit-lines.svg"
          alt="Orbital Background Accent"
          width={900}
          height={900}
          className="w-full h-full object-contain select-none opacity-40 animate-[spin_160s_linear_infinite]"
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[175vw] sm:w-full max-w-none sm:max-w-[620px] lg:max-w-[780px] xl:max-w-[880px] h-full flex items-end justify-center shrink-0 origin-bottom scale-105 sm:scale-100"
      >
        <Image
          src="/assets/images/pramudito.png"
          alt="Pramudito Metra - Fullstack & Mobile Developer"
          fill
          sizes="(max-width: 640px) 175vw, (max-width: 1024px) 620px, 880px"
          className="object-contain object-bottom select-none filter contrast-105 drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
          priority
        />
      </motion.div>
    </div>
  );
}