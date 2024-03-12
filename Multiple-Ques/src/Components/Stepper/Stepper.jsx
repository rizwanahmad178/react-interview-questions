import React from "react";
import './Stepper.css';
const Stepper = ({ list, currentStep}) => {
  const steps = list.map((step, index) => (
    <div key={index} className={`steps ${index === currentStep ? "active" : ""}`}>
      {index + 1}
    </div>
  ));
  const progressLineWidth = (100 / (list.length - 1)) * currentStep;
  return (
      <div className="steps-container">
        <div className="steps-wrapper">{steps}</div>
        <div className="progress-line" style={{ width: `${progressLineWidth}%` }}></div>
      </div>
  );
};

export default Stepper;
