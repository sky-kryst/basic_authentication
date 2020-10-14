import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Names from "../../components/screens/signup/Names";
import AccountInfo from "../../components/screens/signup/AccountInfo";
import Passwords from "../../components/screens/signup/Passwords";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Names" component={Names} />
      <Stack.Screen name="AccountInfo" component={AccountInfo} />
      <Stack.Screen name="Passwords" component={Passwords} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
