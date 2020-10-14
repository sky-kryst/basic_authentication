import { initStore } from "./store";
import { Signup, State, Actions } from "./store.types";

const signup: Signup = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const configureStore = () => {
  const actions: Actions = {
    SET_FIRSTNAME: ({ signup }: State, firstName: string) => ({
      signup: { ...signup, firstName },
    }),
    SET_LASTNAME: ({ signup }: State, lastName: string) => ({
      signup: { ...signup, lastName },
    }),
    SET_USERNAME: ({ signup }: State, username: string) => ({
      signup: { ...signup, username },
    }),
    SET_EMAIL: ({ signup }: State, email: string) => ({
      signup: { ...signup, email },
    }),
    SET_PASSWORD: ({ signup }: State, password: string) => ({
      signup: { ...signup, password },
    }),
    SET_CONFIRM_PASSWORD: ({ signup }: State, confirmPassword: string) => ({
      signup: {
        ...signup,
        confirmPassword,
      },
    }),
    SET_SIGNUP: ({ signup }: State, val: object) => ({
      signup: { ...signup, ...val },
    }),
    REMOVE_SIGNUP: () => ({ signup }),
  };
  initStore(actions, { signup });
};

export default configureStore;
