import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  jobAtom,
  messageAtom,
  networkAtom,
  notificationAtom,
} from "./store/atoms";
import { meSelector } from "./store/selectors";
import { useEffect } from "react";

const App = () => {
  const networkCount = useRecoilValue(networkAtom);
  const setNetworkCount = useSetRecoilState(networkAtom);
  const jobCount = useRecoilValue(jobAtom);
  const messageCount = useRecoilValue(messageAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const meCount = useRecoilValue(meSelector);
//   useEffect(() => {
//     console.log("App mounted");
//     return () => {
//       console.log("App unmounted");
//     };
//   },[]);
  return (
    <>
      <button>Home</button>
      <button>My Network ({networkCount >= 100 ? "99+" : networkCount})</button>
      <button>Jobs ({jobCount})</button>
      <button>Messages ({messageCount})</button>
      <button>Notifications ({notificationCount})</button>
      <button
        onClick={() => {
          setNetworkCount((prevCount) => prevCount + 1);
        }}
      >
        Me ({meCount})
      </button>
    </>
  );
};

export { App };
