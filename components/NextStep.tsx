import React from "react";

const NextStep: React.FC<NextStepProps> = ({ onClick }) => {
  return (
    <div className="nextStep">
      <button onClick={onClick}>Continuar</button>
    </div>
  );
};

export default NextStep;
