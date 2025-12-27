import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Landing from "./components/Landing.jsx";
// import Dashboard from "./components/Dashboard.jsx";
const Dashboard = lazy(() => import("./components/Dashboard.jsx"));
const Profile = lazy(() => import("./components/Profile.jsx"));

const App = () => {
  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "white" }}>Top Heading</h1>
      <BrowserRouter>
      {/* Adding Navbar to BrowserRouter for being able to use useNavigate hook */}
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/dashboard"
            element={
              <Suspense fallback="loading...">
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense fallback="loading...">
                <Profile />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
      <button
        onClick={() => {
          navigate("/profile");
        }}
      >
        Profile
      </button>
    </div>
  );
};

export default App;

// import React, { useState } from "react";
// import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
// import { countAtom } from "./store/atoms/count";

// const App = () => {
//   console.log("Profile Rendered");
//   return (
//     <div>
//       <h2>Profile:</h2>
//       <RecoilRoot>
//         <CountRender />
//       </RecoilRoot>
//     </div>
//   );
// };

// const CountRender = () => {
//   console.log("CountRender Rendered");
//   return (
//     <div>
//       <Count />
//     </div>
//   );
// };

// const Count = () => {
//   const count = useRecoilValue(countAtom);
//   console.log("Count Rendered");
//   return (
//     <div>
//       {/* {count} */}
//       {count}
//       <Buttons />
//     </div>
//   );
// };

// const Buttons = () => {
//   const [count, setCount] = useRecoilState(countAtom);
//   console.log("Buttons Rendered");
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Increase
//       </button>
//       <button
//         onClick={() => {
//           setCount(count - 1);
//         }}
//       >
//         Decrease
//       </button>
//     </div>
//   );
// };

// export default App;
