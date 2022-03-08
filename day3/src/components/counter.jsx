import { useState } from "react";
// import "./Counter.css"
export function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add
      </button>

      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Sub
      </button>

      <button
        onClick={() => {
          setCounter(counter * 2);
        }}
      >
        Double
      </button>
    </>
  );
}
