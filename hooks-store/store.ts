import { useEffect, useState } from "react";
import { Actions, State } from "./store.types";

let state: State | object = {};
let listeners: Array<React.Dispatch<React.SetStateAction<{}>>> = [];
let actions: Actions | object = {};

export const useStore = (shouldListen: boolean = true) => {
  const [_, setState] = useState<State | object>(state);

  useEffect(() => {
    shouldListen && listeners.push(setState);
    return () => {
      shouldListen && (listeners = listeners.filter((li) => li !== setState));
    };
  }, [shouldListen]);

  const dispatch: <T extends Actions, U extends keyof T>(
    a: U,
    b: string | object
  ) => void = (actionIdentifier, payload) => {
    const action = actions[actionIdentifier];
    const newState = action(state, payload);
    state = {
      ...state,
      ...newState,
    };
    for (const listener of listeners) {
      listener(state);
    }
  };

  return [state, dispatch];
};

export const initStore = (userActions: object, initialState: State) => {
  if (initialState) {
    state = { ...state, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
