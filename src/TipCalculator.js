import { useState } from "react";

function BillInput({ children, bill, sendInputBill }) {
  return (
    <div>
      <h1 style={{ display: "inline-block" }}>{children}</h1>
      <input
        name="name"
        type="text"
        placeholder="0"
        value={bill}
        onChange={(e) => sendInputBill(e.target.value)}
      />
    </div>
  );
}

function MoodPercentage({ children, percentage, setTip }) {
  return (
    <div>
      <h1 style={{ display: "inline-block" }}>{children}</h1>
      <select value={percentage} onChange={(e) => setTip(e.target.value)}>
        <option value={0} key={0}>
          Dissatsfied(0%)
        </option>
        <option value={5} key={1}>
          Dissatsfied(5%)
        </option>
        <option value={10} key={2}>
          Dissatsfied(10%)
        </option>
        <option value={20} key={3}>
          Dissatsfied(20%)
        </option>
      </select>
    </div>
  );
}

function Display({ bill = 0, tip1 = 0, tip2 = 0 }) {
  const averageTip = (parseFloat(tip1) + parseFloat(tip2)) / 2;
  const totalBill = parseFloat(bill) + averageTip;
  return (
    <h1>
      You pay ${totalBill} (${bill} + ${averageTip})
    </h1>
  );
}

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);
  function handleSetBill(inputBill) {
    inputBill = inputBill.length === 0 ? 0 : inputBill;
    setBill(inputBill);
    console.log(bill);
  }

  function handleReset() {
    setBill("");
    setTip1(0);
    setTip2(0);
    console.log("reset");
  }

  return (
    <div>
      <BillInput bill={bill} sendInputBill={handleSetBill}>
        How much was the bill?
      </BillInput>
      <MoodPercentage setTip={setTip1}>
        How did you like the service?
      </MoodPercentage>
      <MoodPercentage setTip={setTip2}>
        How did your friend like the service?
      </MoodPercentage>
      <Display bill={bill} tip1={tip1} tip2={tip2}></Display>
      {bill > 0 && <button onClick={() => handleReset()}>Reset</button>}
    </div>
  );
}
