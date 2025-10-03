import React, { useState, useContext } from "react";
import { CountContext } from "./context.jsx";

const Landing = () => {
  const [count, setCount] = useState(0);
  console.log("Landing Rendered");
  return (
    <div>
      <h2>Landing:</h2>
      <CountContext.Provider value={{ count, setCount }}>
        <CountRender />
      </CountContext.Provider>
    </div>
  );
};

const CountRender = () => {
  console.log("CountRender Rendered");
  return (
    <div>
      <Count />
    </div>
  );
};

const Count = () => {
  const { count } = useContext(CountContext);
  console.log("Count Rendered");
  return (
    <div>
      <p>{count}</p>
      <Buttons />
    </div>
  );
};

const Buttons = () => {
  const { count, setCount } = useContext(CountContext);
  console.log("Buttons Rendered");
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default Landing;
