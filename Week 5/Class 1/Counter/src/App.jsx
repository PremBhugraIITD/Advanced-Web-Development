import { useState } from "react";

const App = () => {
  let state = {
    count: 0,
  };

  const update = () => {
    state.count++;
    console.log(state.count); //If we define our own state variable, then the value of the variable will change but still it will not get rendered inside the button element
  };

  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <button onClick={update}>Counter: {state.count}</button> */}
      {/* <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        {" "}
        Count: {count}{" "}
      </button> */}

      {/*Using other components*/}
      <Custombutton count={count} setCount={setCount} />
      <Custombutton count={count*100} setCount={setCount} />
    </div>
  );
};

const Custombutton = (props) => {
  return (
    <button
      onClick={() => {
        props.setCount(props.count + 1);
        console.log(props.count);
      }}
    >
      Counter: {props.count}
    </button>
  );
};

export default App;
