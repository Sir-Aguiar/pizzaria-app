import React from "react";

const StepButton: React.FC<NextStepProps> = ({ onClick, isDisabled, form, secondary, type = "button", children }) => {
  return (
    <div className="nextStep">
      <button
        onClick={onClick}
        className={`${isDisabled ? "disable" : ""} ${secondary ? "secondary" : ""}`}
        {...form}
        type={type}
      >
        {children}
      </button>
    </div>
  );
};

export default StepButton;
