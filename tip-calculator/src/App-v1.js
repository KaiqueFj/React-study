import { useState } from "react";
import "./index.css";

function App() {
  const [billValue, setBillValue] = useState(0);
  const [tipValue, setTipValue] = useState("");
  const [tipValue2, setTipValue2] = useState("");

  return (
    <TipCalculator
      billValue={billValue}
      setBillValue={setBillValue}
      tipValue={tipValue}
      setTipValue={setTipValue}
      tipValue2={tipValue2}
      setTipValue2={setTipValue2}
    />
  );
}

function TipCalculator({
  billValue,
  setBillValue,
  tipValue,
  setTipValue,
  tipValue2,
  setTipValue2,
}) {
  function handleReset() {
    setBillValue(0);
    setTipValue("");
    setTipValue2("");
  }
  return (
    <div>
      <BillValue setBillValue={setBillValue} billValue={billValue} />
      <ServiceTip
        billValue={billValue}
        setBillValue={setBillValue}
        tipValue={tipValue}
        setTipValue={setTipValue}
        tipValue2={tipValue2}
        setTipValue2={setTipValue2}
      />
      <Checkout
        billValue={billValue}
        tipValue={tipValue}
        tipValue2={tipValue2}
        onHandleReset={handleReset}
      />
    </div>
  );
}

function BillValue({ setBillValue, billValue }) {
  return (
    <div>
      <span>how much was the bill?</span>
      <input
        type="text"
        placeholder={billValue}
        onChange={(e) => setBillValue(Number(e.target.value))}
      />
    </div>
  );
}

function ServiceTip({
  billValue,
  tipValue,
  setTipValue,
  setBillValue,
  tipValue2,
  setTipValue2,
}) {
  return (
    <div>
      <TipRating
        setBillValue={setBillValue}
        billValue={billValue}
        tipValue={tipValue}
        setTipValue={setTipValue}
      >
        How did you like the service?
      </TipRating>

      <TipRating
        setBillValue={setBillValue}
        billValue={billValue}
        tipValue2={tipValue2}
        setTipValue={setTipValue2}
      >
        How did you like the service?
      </TipRating>
    </div>
  );
}

function TipRating({ tipValue, setTipValue, children }) {
  return (
    <div>
      <span>{children}</span>
      <select
        value={tipValue} // Properly bind the value
        onChange={(e) => setTipValue(Number(e.target.value))} // Handle updates correctly
      >
        <option value={0}>Dissatisfied 0%</option>
        <option value={5}>It was nice 5%</option>
        <option value={10}>It was awesome 10%</option>
        <option value={20}>Absolutely Amazing 20%</option>
      </select>
    </div>
  );
}

function Checkout({ billValue, tipValue, tipValue2, onHandleReset }) {
  // Calculate the average tip if both are provided
  const averageTip =
    tipValue && tipValue2 ? (tipValue + tipValue2) / 2 : tipValue || tipValue2;

  const totalValue = Math.round(billValue + (billValue * averageTip) / 100);

  return (
    <div>
      <p>
        You pay: <strong>${totalValue}</strong> ({billValue} +{" "}
        {Math.round((billValue * averageTip) / 100)} tip)
      </p>
      {billValue !== 0 || tipValue !== "" || tipValue2 !== "" ? (
        <div>
          <button onClick={onHandleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
export default App;
