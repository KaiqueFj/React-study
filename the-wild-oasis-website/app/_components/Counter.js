"use client";

import { useState } from "react";

export default function Counter({ data }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>There are {data.length} users</p>
      <button onClick={() => setCount(count + 1)}>{count}</button>;
    </div>
  );
}
