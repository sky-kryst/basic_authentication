import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  ToastAndroid,
  Alert,
} from "react-native";
import { useStore } from "../../../hooks-store/store";
import validator from "validator";
import Button from "../../UI/Buttons/Button";
import styles from "../../UI/styles/Forms";

interface props {
  navigation?: {
    navigate: (a: string) => void;
  };
  route?: {};
}

const Passwords: React.FC<props> = ({ navigation: { navigate } }) => {
  const { signup } = useStore()[0];
  const [passwordError, setPasswordError] = useState<string | null | undefined>(
    null
  );
  const [confirmPasswordError, setConfirmPasswordError] = useState<
    string | null | undefined
  >(null);
  const dispatch = useStore(false)[1];
  return (
    <KeyboardAvoidingView style={styles.Form} behavior="padding">
      <Text style={styles.Label}>Password</Text>
      <TextInput
        value={signup.password}
        onChangeText={(t) => dispatch("SET_PASSWORD", t)}
        onEndEditing={() =>
          setPasswordError(
            signup.password.length < 1
              ? "Password is empty"
              : !validator.isAlphanumeric(signup.password)
              ? "Password can only have alphabets and numbers and not symbols"
              : null
          )
        }
        autoCapitalize="none"
        style={styles.Input}
        onFocus={() =>
          setPasswordError((pS) => {
            if (pS) return null;
          })
        }
        placeholder="Enter your password here"
      />
      <View>
        <Text style={styles.Error}>{passwordError}</Text>
      </View>
      <Text style={styles.Label}>Confirm Password</Text>
      <TextInput
        value={signup.confirmPassword}
        onChangeText={(t) => dispatch("SET_CONFIRM_PASSWORD", t)}
        onEndEditing={() =>
          setPasswordError(
            signup.confirmPassword.length < 1
              ? "Confirm field is empty"
              : signup.confirmPassword !== signup.password
              ? "Password do not match"
              : null
          )
        }
        autoCapitalize="none"
        style={styles.Input}
        onFocus={() =>
          setConfirmPasswordError((pS) => {
            if (pS) return null;
          })
        }
        placeholder="Renter your password here"
      />
      <View>
        <Text style={styles.Error}>{confirmPasswordError}</Text>
      </View>
      <View style={styles.Buttons}>
        <Button title="Back" onPressed={() => navigate("AccountInfo")} />
        <Button
          title="Submit"
          onPressed={() =>
            signup.password.length > 1 && signup.confirmPassword.length > 1
              ? Alert.alert(
                  "Success!",
                  `Signing up with credentials ${signup.firstName} ${signup.lastName} ${signup.email} and ${signup.username} successful`,
                  [
                    {
                      text: "OK",
                      onPress: () => dispatch("REMOVE_SIGNUP"),
                      style: "cancel",
                    },
                  ],
                  { cancelable: false }
                )
              : ToastAndroid.showWithGravity(
                  "Fields should not be empty",
                  ToastAndroid.SHORT,
                  ToastAndroid.CENTER
                )
          }
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Passwords;
