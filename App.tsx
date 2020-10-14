import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native";
import styles from "./app.style";
import AuthScreen from "./containers/navigators/AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import SignupStore from "./hooks-store/signup-data";

const App = () => {
  SignupStore();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <AuthScreen />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
