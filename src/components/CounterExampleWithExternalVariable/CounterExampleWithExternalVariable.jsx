import { useState } from "react";
import Counter1 from "../Counter1/Counter1";
import Counter2 from "../Counter2/Counter2";

let externalVariable = 0;

const CounterExampleWithExternalVariable = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  externalVariable = counter1+counter2;

  console.log("externalVariable", externalVariable); 

  return (
    <>
      <h2>Counter Example</h2>
      <button
        onClick={() => {
          setCounter1((counter) => counter + 1);
        }}
      >
        Increment Counter 1
      </button>
      <Counter1 counter1={counter1} />

      <button
        onClick={() => {
          setCounter2((counter) => counter + 1);
        }}
      >
        Increment Counter 2
      </button>
      <Counter2 counter2={counter2} />
    </>
  );
};

export default CounterExampleWithExternalVariable;
