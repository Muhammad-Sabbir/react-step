import { useState } from "react";
const messages = [
  "learn React *",
  "Apply for jobs 🛵",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    // if (step > 1) setStep(step - 1);
    //another way to write this condition
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    // if (step < 3) setStep(step + 1);
    //another way to write this condition
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <StepMessage step={1}>
            <p>demo </p>
          </StepMessage>
          <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColor="#FFFFFF"
              onClick={handlePrevious}
            >
              <span>👈</span> Previus
            </Button>
            <Button bgColor="#7950f2" textColor="#FFFFFF" onClick={handleNext}>
              Next <span>👉</span>{" "}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3> {messages[step - 1]}
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, text, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
