import React, { useState } from "react";

const Dashboard = () => {
  const [count, setCount] = useState(0);
  console.log("Dashboard Rendered");
  return (
    <div>
      <h2>Dashboard:</h2>
      <CountRender count={count} setCount={setCount} />
    </div>
  );
};

const CountRender = ({ count, setCount }) => {
  console.log("CountrRender Rendered");
  return (
    <div>
      <Count count={count} setCount={setCount} />
    </div>
  );
};

const Count = ({ count, setCount }) => {
  //Even though <Count/> has only one purpose of displaying the count, stil we need to pass the setCount function because it is being used by the <Buttons/> component. This is Prop Drilling.
  console.log("Count Rendered");
  return (
    <div>
      <p>{count}</p>
      <Buttons count={count} setCount={setCount} />
    </div>
  );
};

const Buttons = ({ count, setCount }) => {
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

export default Dashboard;
