"use client";

import Image from "next/image";
import { motion, useSpring } from "framer-motion";
import { useEffect } from "react";

interface FloatingPreviewProps {
  activeImage: string | null;
  activeTitle: string | null;
  cursorPos: { x: number; y: number };
}

export function FloatingPreview({
  activeImage,
  activeTitle,
  cursorPos,
}: FloatingPreviewProps) {
  const springConfig = { damping: 20, stiffness: 220, mass: 0.4 };
  const springX = useSpring(cursorPos.x, springConfig);
  const springY = useSpring(cursorPos.y, springConfig);

  useEffect(() => {
    springX.set(cursorPos.x);
    springY.set(cursorPos.y);
  }, [cursorPos.x, cursorPos.y, springX, springY]);

  if (!activeImage) return null;

  return (
    <motion.div
      style={{
        left: springX,
        top: springY,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
      className="pointer-events-none fixed z-50 hidden lg:block -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-white/20 bg-black/90 shadow-[0_25px_60px_rgba(0,0,0,0.4)] w-[360px] aspect-[16/10]"
    >
      <div className="relative w-full h-full p-2 flex flex-col justify-between">
        <div className="relative w-full flex-1 rounded-lg overflow-hidden bg-neutral-950">
          <Image
            src={activeImage}
            alt={activeTitle || "Project Mockup Preview"}
            fill
            sizes="360px"
            className="object-cover object-center filter contrast-105"
          />
        </div>
        <div className="pt-2 px-1 flex items-center justify-between text-[11px] font-mono text-neutral-300">
          <span className="truncate max-w-[240px] font-bold text-white uppercase tracking-tight">
            {activeTitle}
          </span>
          <span className="text-[10px] text-neutral-400 uppercase tracking-widest">VIEW CASE</span>
        </div>
      </div>
    </motion.div>
  );
}
