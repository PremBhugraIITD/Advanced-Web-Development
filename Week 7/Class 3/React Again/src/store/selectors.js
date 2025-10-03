import { selector } from "recoil";
import { networkAtom, jobAtom, messageAtom, notificationAtom } from "./atoms";

export const meSelector = selector({
  key: "meSelector",
  get: ({ get }) => {
    const networkCount = get(networkAtom);
    const jobCount = get(jobAtom);
    const messageCount = get(messageAtom);
    const notificationCount = get(notificationAtom);
    return networkCount + jobCount + messageCount + notificationCount;
  },
});
