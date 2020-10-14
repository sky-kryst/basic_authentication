export type Signup = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type State = {
  signup: Signup;
};

export type Actions = {
  SET_FIRSTNAME: (a: State, b: string) => State;
  SET_LASTNAME: (a: State, b: string) => State;
  SET_USERNAME: (a: State, b: string) => State;
  SET_EMAIL: (a: State, b: string) => State;
  SET_PASSWORD: (a: State, b: string) => State;
  SET_CONFIRM_PASSWORD: (a: State, b: string) => State;
  SET_SIGNUP: (a: State, b: object) => State;
  REMOVE_SIGNUP: () => State;
};
