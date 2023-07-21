import { useState, useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function MyCount({
  defaultCount,
  counterName,
  incrementNumber = 1,
  incrementMethod,
}) {
  const [myCount, mySetStep] = useState(defaultCount);
  function upCounter() {
    return mySetStep((number) => number + incrementNumber);
    // return incrementMethod(myCount);
  }
  function downCounter() {
    if (myCount > defaultCount && counterName === "Step") {
      return mySetStep((number) => number - incrementNumber);
      // return incrementMethod(myCount);
    } else if (counterName === "Count") {
      return mySetStep((number) => number - incrementNumber);
      // return incrementMethod(myCount);
    }
  }
  useEffect(() => {
    incrementMethod(myCount);
  });
  return (
    <div className="dateCalculatorContainer">
      <AiOutlineMinus className="custom-icon-style" onClick={downCounter} />

      <h1 className="fontStyle">
        {counterName}: {myCount}
      </h1>

      <AiOutlinePlus className="custom-icon-style" onClick={upCounter} />
    </div>
  );
}

function MyDateChange({ dateNumber }) {
  const date = new Date();
  date.setDate(date.getDate() + dateNumber);
  return <h1>{date.toDateString()}</h1>;
}

export default function DateCalculator() {
  const [stepDateCalculator, mySetStepDateCalculator] = useState(1);
  const [countDateCalculator, mySetCountDateCalculator] = useState(0);

  const handleStep = (step) => {
    mySetStepDateCalculator(step);
    console.log("handleStep");
  };

  const handleCount = (step) => {
    mySetCountDateCalculator(step);
    console.log("handleCount");
  };

  return (
    <div className="counterContainerStyle">
      <MyCount
        defaultCount={1}
        counterName={"Step"}
        incrementMethod={handleStep}
      />
      <MyCount
        defaultCount={0}
        counterName={"Count"}
        incrementMethod={handleCount}
        incrementNumber={stepDateCalculator}
      />
      <MyDateChange dateNumber={countDateCalculator} />
    </div>
  );
}
