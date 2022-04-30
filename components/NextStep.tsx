import React from "react";

type NextStepProps = {
  onClick: () => void;
};

const NextStep: React.FC<NextStepProps> = ({ onClick }) => {
  return (
    <div className="nextStep">
      <button onClick={onClick}>Prosseguir</button>
    </div>
  );
};

export default NextStep;
