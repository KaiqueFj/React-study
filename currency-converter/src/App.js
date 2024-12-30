// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [value, setValue] = useState(1);
  const [totalValue, setTotalValue] = useState("");
  const [currencyOne, setCurrencyOne] = useState("EUR");
  const [currencyTwo, setCurrencyTwo] = useState("USD");

  useEffect(
    function () {
      async function Calculate() {
        try {
          if (currencyOne === "" && currencyTwo === "") return;

          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${value}&from=${currencyOne}&to=${currencyTwo}`
          );

          const data = await res.json();
          setTotalValue(data.rates[currencyTwo]);
        } catch (err) {
          console.log(err);
        }
      }

      if (currencyOne === currencyTwo) return setTotalValue(value);

      Calculate();

      return function cleanup() {};
    },
    [value, currencyOne, currencyTwo]
  );
  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <select
        value={currencyOne}
        onChange={(e) => setCurrencyOne(e.target.value)}
      >
        {currencyOne}
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={currencyTwo}
        onChange={(e) => setCurrencyTwo(e.target.value)}
      >
        {currencyTwo}
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{totalValue}</p>
    </div>
  );
}
