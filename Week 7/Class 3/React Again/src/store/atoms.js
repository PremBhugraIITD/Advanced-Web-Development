import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: selector({
    key: "networkAtomSelector",
    get: async () => {
      const response = await fetch("http://localhost:3000/");
      const data = await response.json();
      console.log("Data fetched:", data);
      return data.net;
    },
  }),
});

export const jobAtom = atom({
  key: "jobAtom",
  default: 2,
});

export const messageAtom = atom({
  key: "messageAtom",
  default: 3,
});

export const notificationAtom = atom({
  key: "notificationAtom",
  default: 4,
});
