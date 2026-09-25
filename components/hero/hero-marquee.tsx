"use client";

import { motion } from "framer-motion";

export function HeroMarquee() {
  const nameString = "PRAMUDITO METRA • PRAMUDITO METRA • ";

  return (
    <div
      className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden pointer-events-none select-none z-10"
      aria-hidden="true"
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 18,
        }}
        className="flex w-max whitespace-nowrap text-[22vw] sm:text-[20vw] font-normal uppercase font-display tracking-tight text-black leading-none"
      >
        <span>{nameString}</span>
        <span>{nameString}</span>
      </motion.div>
    </div>
  );
}
