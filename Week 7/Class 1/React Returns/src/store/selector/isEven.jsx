import { countAtom } from "../atoms/count.jsx";
import { selector } from "recoil";

export const isEvenSelector = selector({
  key: "isEvenSelector",
  get: (props) => {
    const count = props.get(countAtom);
    return count % 2 === 0;
  },
});
