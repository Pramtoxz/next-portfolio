"use client";

import { useState } from "react";
import { processSteps } from "@/lib/data/portfolio-data";
import { ProcessTabs } from "./process-tabs";
import { ProcessVisual } from "./process-visual";

export function ProcessSection() {
  const [activeStepId, setActiveStepId] = useState(processSteps[0].id);
  const currentStep =
    processSteps.find((s) => s.id === activeStepId) || processSteps[0];

  return (
    <section
      id="process"
      className="relative w-full bg-[#EDEDED] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 flex justify-center"
      aria-label="Process and Methodology"
    >
      <div className="w-full max-w-6xl rounded-3xl bg-[#0B0B0B] text-white p-8 sm:p-14 lg:p-16 border border-white/10 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Stacked giant text + active description */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <ProcessTabs
              steps={processSteps}
              activeStepId={activeStepId}
              onSelectStep={(id) => setActiveStepId(id)}
            />
          </div>

          {/* Right Column: Synced cross-fade photo */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <ProcessVisual currentStep={currentStep} />
          </div>
        </div>
      </div>
    </section>
  );
}
