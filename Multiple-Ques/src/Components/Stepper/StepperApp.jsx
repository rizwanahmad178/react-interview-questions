import React, { useState } from "react";
import Stepper from "./Stepper";
import "./Stepper.css";

const StepperApp = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 5;

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const Example1 = () => <div>Step 1 content</div>;
  const Example2 = () => <div>Step 2 content</div>;
  const Example3 = () => <div>Step 3 content</div>;
  const Example4 = () => <div>Step 4 content</div>;
  const Example5 = () => <div>Step 5 content</div>;

  const list = [
    <Example1 />,
    <Example2 />,
    <Example3 />,
    <Example4 />,
    <Example5 />
  ];

  return (
    <div className="stepperApp">
      <h1 className="mb-4 text-4xl font-extrabold leading-none text-gray-900">Stepper</h1>
      <Stepper
        list={list}
        currentStep={currentStep}
      />
      <div className="btns">
        <button className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={handlePrev} disabled={currentStep === 0}>
          Prev
        </button>
        <button className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={handleNext} disabled={currentStep === totalSteps - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default StepperApp;
