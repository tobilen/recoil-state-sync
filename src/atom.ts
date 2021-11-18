import { AtomEffect, atomFamily } from "recoil";
import { backboneStore } from "./backboneStore";

const syncStorageEffect: AtomEffect<string | null> = ({
  setSelf,
  trigger,
  onSet,
}) => {
  // Initialize atom value to the remote storage state
  if (trigger === "get") {
    setSelf(backboneStore.get()); // Call synchronously to initialize
  }

  onSet((newData) => {
    if (newData) backboneStore.set(newData);
  });

  // Subscribe to remote storage changes and update the atom value
  backboneStore.onChange((newData) => {
    setSelf(newData); // Call asynchronously to change value
  });
};

export const dataAtomFamily = atomFamily({
  key: "SomeData",
  default: null,
  effects_UNSTABLE: () => [syncStorageEffect],
});
