"use client";

import { ProjectItem as ProjectItemType } from "@/lib/types/portfolio.types";

interface ProjectItemProps {
  project: ProjectItemType;
  index: number;
  onHoverStart: (project: ProjectItemType) => void;
  onHoverEnd: () => void;
}

export function ProjectItem({
  project,
  onHoverStart,
  onHoverEnd,
}: ProjectItemProps) {
  return (
    <div
      onMouseEnter={() => onHoverStart(project)}
      onMouseLeave={onHoverEnd}
      className="group relative border-t border-dashed border-neutral-300 py-8 sm:py-12 transition-colors cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
    >
      {/* Project Title (Display Font) */}
      <h3 className="text-3xl sm:text-5xl lg:text-6xl font-normal uppercase tracking-tight text-black font-display group-hover:translate-x-3 transition-transform duration-300">
        {project.title}
      </h3>

      {/* Category / Role on Right */}
      <div className="flex items-center gap-4">
        <span className="text-sm sm:text-base font-medium text-neutral-500 font-sans group-hover:text-black transition-colors">
          {project.category}
        </span>
      </div>
    </div>
  );
}
