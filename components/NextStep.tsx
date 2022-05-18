import React from "react";

const NextStep: React.FC<NextStepProps> = ({ onClick, isDisabled }) => {
  return (
    <div className="nextStep">
      <button onClick={onClick} className={`${isDisabled ? "disable" : ""}`}>
        Continuar
      </button>
    </div>
  );
};

export default NextStep;
