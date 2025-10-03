import React, { useMemo, useState } from "react";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom } from "../store/atoms/count.jsx";
import { isEvenSelector } from "../store/selector/isEven.jsx";

const Profile = () => {
  console.log("Profile Rendered");
  return (
    <div>
      <h2>Profile:</h2>
      <RecoilRoot>
        <CountRender />
      </RecoilRoot>
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
  const count = useRecoilValue(countAtom);
  console.log("Count Rendered");
  //   const isEven = count % 2 === 0; //This is not optimal
  //   const isEven = useMemo(() => { //This is optimal
  //     return count % 2 === 0;
  //   }, [count]);
  const isEven = useRecoilValue(isEvenSelector); //This is optimal
  return (
    <div>
      {isEven && <p>It is Even</p>}
      {count}
      <br />
      <br />
      <Buttons />
    </div>
  );
};

const Buttons = () => {
  const setCount = useSetRecoilState(countAtom); //Now buttons do not have "count" state variable (even though setCount can access it), so they will not be affected when the state of "count" changes.
  console.log("Buttons Rendered");
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default Profile;
