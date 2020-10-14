import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  ToastAndroid,
} from "react-native";
import { useStore } from "../../../hooks-store/store";
import Button from "../../UI/Buttons/Button";
import styles from "../../UI/styles/Forms";
import validator from "validator";

interface props {
  navigation?: {
    navigate: (a: string) => void;
  };
  route?: {};
}

const AccountInfo: React.FC<props> = ({ navigation: { navigate } }) => {
  const { email, username } = useStore()[0].signup;
  const dispatch = useStore(false)[1];
  const [emailError, setEmailError] = useState<string | null | undefined>(null);
  const [usernameError, setUsernameError] = useState<string | null | undefined>(
    null
  );
  return (
    <KeyboardAvoidingView style={styles.Form} behavior="padding">
      <Text style={styles.Label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={(t) => dispatch("SET_EMAIL", t)}
        onFocus={() =>
          setEmailError((pS) => {
            if (pS) return null;
          })
        }
        autoCapitalize="none"
        style={styles.Input}
        onEndEditing={() =>
          setEmailError(
            email.length < 1
              ? "Email is empty"
              : !validator.isEmail(email)
              ? "Email is invalid"
              : null
          )
        }
        placeholder="Enter your email here"
      />
      <View>
        <Text style={styles.Error}>{emailError}</Text>
      </View>
      <Text style={styles.Label}>Username</Text>
      <TextInput
        value={username}
        onChangeText={(t) => dispatch("SET_USERNAME", t)}
        onFocus={() =>
          setUsernameError((pS) => {
            if (pS) return null;
          })
        }
        autoCapitalize="none"
        style={styles.Input}
        onEndEditing={() =>
          setUsernameError(
            username.length < 1
              ? "Username is empty"
              : !validator.isAlphanumeric(username)
              ? "Username is invalid"
              : null
          )
        }
        placeholder="Enter your username here"
      />
      <View>
        <Text style={styles.Error}>{usernameError}</Text>
      </View>
      <View style={styles.Buttons}>
        <Button title="Back" onPressed={() => navigate("Names")} />
        <Button
          title="Next"
          onPressed={() =>
            email.length > 1 && username.length > 1
              ? navigate("Passwords")
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

export default AccountInfo;
