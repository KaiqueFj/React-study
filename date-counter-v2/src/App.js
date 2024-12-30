import React from "react";
import "./index.css";

function App() {
  return <Counter />;
}

function Counter() {
  const [step, setStep] = React.useState(1);
  const [count, setCount] = React.useState(0);

  function handlePreviousCount() {
    setCount((s) => s - step);
  }

  function handleNextCount() {
    setCount((s) => s + step);
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div className="App">
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>

      <div className="App">
        <button onClick={handlePreviousCount}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={handleNextCount}>+</button>
      </div>

      <div className="App">
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
        {count !== 0 || step !== 1 ? (
          <div>
            <button onClick={handleReset}>Reset</button>
          </div>
        ) : null}{" "}
      </div>
    </>
  );
}

export default App;
