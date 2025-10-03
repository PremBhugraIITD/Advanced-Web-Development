import { useEffect, useRef } from "react";

const App = () => {
  const incomeTax = 2000;

  const spanRef = useRef(); //spanRef now contains the reference to the <span> element

  useEffect(() => {
    setTimeout(() => {
      console.log(spanRef);
      console.log(spanRef.current);
      spanRef.current.innerText = 10;
    }, 5000);
  }, []);

  return (
    <>
      <h1>useRef Usecase</h1>
      <p>
        Hi, your income tax returns are <span ref={spanRef}>{incomeTax}</span>
      </p>
    </>
  );
};

export default App;
