import React, { useState } from 'react';
import './CounterApp.css';
export default function CounterApp() {

  const [counter, setCounter] = useState({
    counter1: 11,
    counter2: 22,
    stateText: 'text',
    stateFloat: 3.1416
  });
  const {counter1} = counter;
  console.log(counter);
  return (
    <>
      <h1> {0}</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() =>
          setCounter({
           ...counter,
            counter1: counter1+1

          })
        }
      >
        +1
      </button>
    </>
  )
}
