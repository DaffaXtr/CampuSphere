import React from 'react';

const StepIndicator = ({ steps, currentStep, nodeBgColor = 'bg-white' }) => {
  return (
    <div className="flex items-center justify-between mb-xl md:mb-2xl relative">
      {/* Connecting Line */}
      <div className="absolute top-[16px] md:top-[20px] left-0 w-full h-[2px] bg-border z-0"></div>
      
      {steps.map((step, index) => {
        const stepNum = index + 1;
        const isCompleted = stepNum < currentStep;
        const isCurrent = stepNum === currentStep;
        const isUpcoming = stepNum > currentStep;

        // Styling based on state
        let circleClasses = "w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full flex items-center justify-center font-bold text-[12px] md:text-body-md transition-colors ";
        let textClasses = "font-label-sm md:font-label-md text-[10px] md:text-label-md hidden sm:block transition-colors mt-2 ";

        if (isCompleted) {
          circleClasses += "bg-primary text-on-primary";
          textClasses += "text-primary";
        } else if (isCurrent) {
          circleClasses += "bg-primary text-on-primary";
          textClasses += "text-primary";
        } else {
          // Upcoming
          circleClasses += "bg-surface-container text-on-surface-variant";
          textClasses += "text-on-surface-variant";
        }

        return (
          <div key={index} className={`relative z-10 flex flex-col items-center px-2 md:px-4 ${nodeBgColor}`}>
            <div className={circleClasses}>
              {isCompleted ? (
                <span className="material-symbols-outlined text-[16px] md:text-[20px]">check</span>
              ) : (
                stepNum
              )}
            </div>
            <span className={textClasses}>{step}</span>
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;
