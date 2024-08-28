import { useState, useEffect, useMemo } from "react";
import Counter1 from "../Counter1/Counter1";
import Counter2 from "../Counter2/Counter2";

const CounterExampleWithUseMemo = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const counter1Props = {
    title: "Counter 1",
    counter: counter1,
  };

    // const counter1Props = useMemo(
    //   () => ({
    //     title: "Counter 1",
    //     counter: counter1,
    //   }),
    //   [counter1]
    // );


  useEffect(() => {
    console.log("Counter 1 Props Changed");
  }, [counter1Props]);


  return (
    <>
      <h2>Counter Example With Use Memo</h2>
      <button
        onClick={() => {
          setCounter1((counter) => counter + 1);
        }}
      >
        Increment Counter 1
      </button>
      <Counter1 counter1={counter1} />

      <button onClick={() => setCounter2((counter) => counter + 1)}>
        Increment Counter 2
      </button>
      <Counter2 counter2={counter2} />
    </>
  );
};

export default CounterExampleWithUseMemo;
