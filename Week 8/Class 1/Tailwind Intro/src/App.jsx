const App = () => {
  return (
    <>
      <h2>Without Tailwind</h2>
      <div
        className="without-tailwind"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="one" style={{ backgroundColor: "red", width: "40%" }}>
          One
        </div>
        <div
          className="two"
          style={{ backgroundColor: "yellow", width: "40%" }}
        >
          Two
        </div>
        <div
          className="three"
          style={{ backgroundColor: "green", width: "20%" }}
        >
          Three
        </div>
      </div>
      <h2>With Tailwind</h2>
      <div className="with-tailwind flex justify-between">
        <div className="one bg-red-500 w-[40%]">One</div>
        <div className="two bg-yellow-200 w-[40%]">Two</div>
        <div className="three bg-green-700 w-[20%]">Three</div>
      </div>
      <h2>Grid Testing</h2>
      <div className="grid-testing grid grid-cols-5">
        <div className="bg-red-500 col-span-2">One</div>
        <div className="bg-yellow-500 col-span-2">Two</div>
        <div className="bg-green-500">Three</div>
        <div className="bg-blue-500">Three</div>
      </div>
      <h2>Responsiveness Testing</h2>
      <div className="responsiveness-testing md:grid grid-cols-5">
        <div className="bg-red-500 col-span-2">One</div>
        <div className="bg-yellow-500 col-span-2">Two</div>
        <div className="bg-green-500">Three</div>
      </div>
    </>
  );
};

export default App;
