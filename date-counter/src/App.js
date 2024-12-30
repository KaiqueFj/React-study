import React from "react";
import "./App.css";

function App() {
  return <Counter />;
}

function Counter() {
  const [step, setStep] = React.useState(1);
  const [count, setCount] = React.useState(0);

  function handlePreviousStep() {
    setStep((s) => s - 1);
  }

  function handleNextStep() {
    setStep((s) => s + 1);
  }

  function handlePreviousCount() {
    setCount((s) => s - step);
  }

  function handleNextCount() {
    setCount((s) => s + step);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <button onClick={handlePreviousStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleNextStep}>+</button>
      </div>

      <div>
        <button onClick={handlePreviousCount}>-</button>
        <span>Count:{count}</span>
        <button onClick={handleNextCount}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago was}`}
        </span>
        <span> {date.toLocaleDateString()} </span>
      </p>
    </>
  );
}

export default App;
