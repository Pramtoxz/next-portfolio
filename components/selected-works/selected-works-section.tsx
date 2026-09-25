"use client";

import { useState } from "react";
import { selectedWorks, profileData } from "@/lib/data/portfolio-data";
import { ProjectItem as ProjectItemType } from "@/lib/types/portfolio.types";
import { ProjectItem } from "./project-item";
import { FloatingPreview } from "./floating-preview";

export function SelectedWorksSection() {
  const [activeProject, setActiveProject] = useState<ProjectItemType | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="work"
      onMouseMove={handleMouseMove}
      className="relative w-full bg-[#EDEDED] text-black py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-label="Selected Works"
    >
      {/* Floating Mockup Preview on Cursor Follower */}
      <FloatingPreview
        activeImage={activeProject?.previewImage || null}
        activeTitle={activeProject?.title || null}
        cursorPos={cursorPos}
      />

      <div className="w-full max-w-6xl mx-auto space-y-16 sm:space-y-24">
        {/* Top Header Grid: Narrative Statement & Circular GET IN TOUCH Button */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
          <div className="md:col-span-8">
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-neutral-800 leading-snug font-sans max-w-2xl">
              Pramudito brings immense value to every project, consistently exceeding client expectations and setting new standards in the world of fullstack &amp; mobile engineering.
            </p>
          </div>

          <div className="md:col-span-4 flex justify-start md:justify-end">
            <a
              href={`mailto:${profileData.email}`}
              className="group w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-black/30 flex flex-col items-center justify-center font-bold text-xs uppercase font-sans tracking-wider text-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
              aria-label="Get in touch"
            >
              <span>GET IN</span>
              <span>TOUCH</span>
            </a>
          </div>
        </div>

        {/* Selected Works List */}
        <div className="space-y-6">
          <div className="text-xs font-bold tracking-widest text-neutral-400 uppercase font-sans">
            SELECTED WORKS
          </div>

          <div className="border-b border-dashed border-neutral-300">
            {selectedWorks.map((project, index) => (
              <ProjectItem
                key={project.id}
                project={project}
                index={index}
                onHoverStart={(p) => setActiveProject(p)}
                onHoverEnd={() => setActiveProject(null)}
              />
            ))}
          </div>
        </div>

        {/* Bottom Action: View all our work */}
        <div className="text-center pt-4">
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-bold text-black hover:text-neutral-600 transition-colors border-b border-black pb-0.5"
          >
            View all our work
          </a>
        </div>
      </div>
    </section>
  );
}
