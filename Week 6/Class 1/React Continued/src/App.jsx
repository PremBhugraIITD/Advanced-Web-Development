import { useState, memo } from "react";

export const App1 = () => {
  const [title, setTitle] = useState("My name is Something.");

  return (
    <>
      <h1>No extra DOM element</h1>
      {/* This will not render an extra div in the DOM */}
      <button
        onClick={() => {
          setTitle(`My name is ${Math.random()}.`);
        }}
      >
        Click to change the title
      </button>
      <br />
      <Header title={title} />
      <br />
      <Header title="My name is Prem Bhugra." />
      <br />
      <Header title="My name is Prem Bhugra." />
      <br />
      <Header title="My name is Prem Bhugra." />
      <br />
      <Header title="My name is Prem Bhugra." />
    </>
  );
};

export const App2 = () => {
  //Whole App component will re-render because the title variable is changing and it is present inside the app component
  const [title, setTitle] = useState("My name is Something.");

  return (
    <div>
      <h1>Extra DOM element with every child re-rendering</h1>
      {/* This will render an extra div in the DOM */}
      <button
        onClick={() => {
          setTitle(`My name is ${Math.random()}.`);
        }}
      >
        Click to change the title
      </button>
      <br />
      <Header title={title} />
      <br />
      <Header title="My name is Prem Bhugra." />
      <br />
      <Header title="My name is Prem Bhugra." />
      <br />
      <Header title="My name is Prem Bhugra." />
      <br />
      <Header title="My name is Prem Bhugra." />
    </div>
  );
};

export const App3 = () => {
  //Whole App component does not get rerendered and only the Header2 component gets rerendered because the title variable is changing and it is present inside the Header component. So, we have minimised re-rendering components by pushing the state down.
  return (
    <div>
      <h1>Pushing the state down</h1>
      <Header2 />
      <br />
      <Header2 />
      <br />
      <Header title="My name is Prem Bhugra." />
      <br />
      <Header2 />
      <br />
      <Header title="My name is Prem Bhugra." />
    </div>
  );
};

export const App4 = () => {
  //Whole App component does not re-render but only the 1st instance of Header3 gets re-rendered because the title variable in it is being changed
  const [title, setTitle] = useState("My name is Something.");
  return (
    <div>
      <h1>Extra DOM element with no child re-rendering</h1>
      <button
        onClick={() => {
          setTitle(`My name is ${Math.random()}.`);
        }}
      >
        Click to change the title
      </button>
      <br />
      <Header3 title={title} />
      <br />
      <Header3 title="My name is Prem Bhugra." />
      <br />
      <Header3 title="My name is Prem Bhugra." />
      <br />
      <Header3 title="My name is Prem Bhugra." />
      <br />
      <Header3 title="My name is Prem Bhugra." />
    </div>
  );
};

const Header = ({ title }) => {
  console.log(title);
  return <div>{title}</div>;
};

const Header2 = () => {
  const [title, setTitle] = useState("My name is Something.");

  return (
    <div>
      <button
        onClick={() => {
          setTitle(`My name is ${Math.random()}.`);
        }}
      >
        Click to change the title
      </button>
      <br />
      <Header title={title} />
    </div>
  );
};

const Header3 = memo(function ({ title }) {
  console.log(title);
  return <div>{title}</div>;
});
