import { useState } from "react";
import "./App.css";

const people = [
  {
    id: 101,
    name: "Alice",
  },
  {
    id: 202,
    name: "Bob",
  },
  {
    id: 303,
    name: "Charlie",
  },
];

function App() {
  return <SplitCalculator data={people} />;
}

function SplitCalculator({ data }) {
  const [selected, setSelected] = useState(null);
  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const [payer, setPayer] = useState("");
  const [messages, setMessages] = useState({});

  const split = bill - expense;

  function handleSplitBill(e) {
    e.preventDefault();

    if (!selected || !bill || !expense || !payer) {
      alert("Please fill in all fields and select a friend!");
      return;
    }

    const splitAmount = bill - expense; // Amount the other person owes
    const newMessages = { ...messages };

    if (payer === "You") {
      newMessages[selected] = `${selected} owes you $${splitAmount.toFixed(2)}`;
    } else {
      newMessages[selected] = `You owe ${selected} $${Math.abs(
        splitAmount
      ).toFixed(2)}`;
    }

    setMessages(newMessages);
  }

  return (
    <div className="app">
      {data.map((el) => (
        <FriendsList
          name={el.name}
          key={el.id}
          setSelected={setSelected}
          selected={selected}
          message={messages[el.name]}
        />
      ))}
      <SplitForm
        selected={selected}
        setBill={setBill}
        split={split}
        setExpense={setExpense}
        setPayer={setPayer}
        onSubmit={handleSplitBill}
      />
    </div>
  );
}

function FriendsList({ name, setSelected, message }) {
  function handleClick() {
    setSelected(name);
  }
  return (
    <div className="sidebar">
      <ul>
        <li>
          <h3>{name}</h3>
          {message && <p>{message}</p>}
          <button className="button" onClick={handleClick}>
            Select
          </button>
        </li>
      </ul>
    </div>
  );
}

function SplitForm({
  selected,
  setBill,
  setExpense,
  setPayer,
  split,
  onSubmit,
}) {
  return (
    <div className="form">
      <form className="form-split-bill" onSubmit={onSubmit}>
        <h2>Split bill with {selected}</h2>

        <label>💵 Bill value</label>
        <input
          type="number"
          name="bill"
          placeholder="Bill value"
          onChange={(e) => setBill(Number(e.target.value))}
        />

        <label>💵 Your expense</label>
        <input
          type="number"
          name="expense"
          placeholder="Your expense"
          onChange={(e) => setExpense(Number(e.target.value))}
        />

        <label>💵 {selected} expense</label>
        <input type="text" name="x" placeholder={split} />

        <label>💵 Who’s paying the bill?</label>
        <select onChange={(e) => setPayer(e.target.value)}>
          <option value="">Select</option>
          <option value="You">You</option>
          <option value={selected}>{selected}</option>
        </select>

        <button className="button" type="submit">
          Split bill
        </button>
      </form>
    </div>
  );
}

export default App;
