"use client";

import { ProcessStep } from "@/lib/types/portfolio.types";

interface ProcessTabsProps {
  steps: ProcessStep[];
  activeStepId: string;
  onSelectStep: (stepId: string) => void;
}

export function ProcessTabs({
  steps,
  activeStepId,
  onSelectStep,
}: ProcessTabsProps) {
  const currentStep = steps.find((s) => s.id === activeStepId) || steps[0];

  return (
    <div className="w-full flex flex-col justify-between h-full space-y-8 lg:space-y-12">
      {/* Giant Stacked Typography: DEFINE / DESIGN / DELIVER */}
      <div className="flex flex-col space-y-2 select-none">
        {steps.map((step) => {
          const isActive = step.id === activeStepId;
          return (
            <button
              key={step.id}
              type="button"
              onClick={() => onSelectStep(step.id)}
              className={`text-left text-5xl sm:text-7xl lg:text-8xl font-normal uppercase font-display tracking-tight transition-all duration-300 leading-[0.9] cursor-pointer ${
                isActive
                  ? "text-white translate-x-2"
                  : "text-neutral-700 hover:text-neutral-400"
              }`}
            >
              {step.title}
            </button>
          );
        })}
      </div>

      {/* Description Paragraph Beneath Active Phase */}
      <div className="space-y-3 pt-4 max-w-lg">
        <span className="block text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase">
          {currentStep.stepNumber}{" // "}{currentStep.subtitle}
        </span>
        <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
          {currentStep.description}
        </p>
      </div>
    </div>
  );
}
