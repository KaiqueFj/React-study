import Counter from "./Counter";
import "./index.css";

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      {/* <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
        positionCount="top"
      /> */}

      <Counter>
        <Counter.Label>My super flexible counter</Counter.Label>
        <Counter.Decrease icon="-" />
        <Counter.Count />
        <Counter.Increase icon="+" />
      </Counter>

      <div>
        <Counter>
          <Counter.Decrease icon="❌" />
          <Counter.Count />
          <Counter.Increase icon="🔥" />
        </Counter>
      </div>
    </div>
  );
}
