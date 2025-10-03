import { useState, useEffect } from "react";

export const App = () => {
  return (
    <>
      <Wrapper innerComponent={<ParagraphComponent />} />
      <Wrapper innerComponent={<HeadingComponent />} />
      <Wrapper2>
        {" "}
        {/*All the content between these opening and closing tags will be passed as the 'children' prop to the Wrapper2 component*/}
        <ParagraphComponent />
        <HeadingComponent />
      </Wrapper2>
      <ChangingComponent />
      <ChangingComponent2 />
      <ChangingComponent3 />
    </>
  );
};

const Wrapper = (props) => {
  return <div>{props.innerComponent}</div>;
};

const Wrapper2 = ({ children }) => {
  //'children' is a keyword
  return <div>{children}</div>;
};

const ParagraphComponent = () => {
  return <p>Hello World</p>;
};
const HeadingComponent = () => {
  return <h2>Hello World</h2>;
};

const ChangingComponent = () => {
  useEffect(() => {
    console.log("ChangingComponent mounted");
  });
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me!
      </button>
      <p>I will re-render on every click: {count}</p>
    </>
  );
};

const ChangingComponent2 = () => {
  useEffect(() => {
    console.log("ChangingComponent2 mounted");
  }, []);
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me!
      </button>
      <p>I will not re-render on every click: {count}</p>
    </>
  );
};

const ChangingComponent3 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("ChangingComponent3 mounted");
  }, [count]);
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me!
      </button>
      <p>I will re-render on every click: {count}</p>
    </>
  );
};
