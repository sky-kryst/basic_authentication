import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignupStack from "./SignupStack";
import Login from "../../components/screens/login/Login";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={SignupStack} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
