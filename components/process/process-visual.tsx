"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ProcessStep } from "@/lib/types/portfolio.types";

interface ProcessVisualProps {
  currentStep: ProcessStep;
}

export function ProcessVisual({ currentStep }: ProcessVisualProps) {
  return (
    <div className="relative w-full aspect-[4/5] max-h-[550px] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full"
        >
          <Image
            src={currentStep.visualImage}
            alt={currentStep.title}
            fill
            sizes="(max-width: 1024px) 100vw, 550px"
            className="object-cover object-center filter contrast-105"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Subtle Corner Badge */}
      <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 font-mono text-[10px] tracking-widest text-neutral-300 uppercase">
        {currentStep.title} PHASE
      </div>
    </div>
  );
}
