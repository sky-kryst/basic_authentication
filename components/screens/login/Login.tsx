import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  ToastAndroid,
  Alert,
} from "react-native";
import validator from "validator";
import Button from "../../UI/Buttons/Button";
import styles from "../../UI/styles/Forms";

interface props {
  navigation?: {
    navigate: (a: string) => void;
  };
  route?: {};
}

const Login: React.FC<props> = ({ navigation: { navigate } }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string | null | undefined>(null);
  const [passwordError, setPasswordError] = useState<string | null | undefined>(
    null
  );
  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <KeyboardAvoidingView style={styles.Form} behavior="padding">
        <Text style={styles.Label}>Email</Text>
        <TextInput
          onChangeText={(t) => setEmail(t)}
          placeholder="Enter your email here"
          value={email}
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
        />
        <View>
          <Text style={styles.Error}>{emailError}</Text>
        </View>
        <Text style={styles.Label}>Password</Text>
        <TextInput
          onChangeText={(t) => setPassword(t)}
          placeholder="Enter your password here"
          value={password}
          onEndEditing={() =>
            setPasswordError(password.length < 1 ? "Password is empty" : null)
          }
          autoCapitalize="none"
          style={styles.Input}
          onFocus={() =>
            setPasswordError((pS) => {
              if (pS) return null;
            })
          }
        />
        <View>
          <Text style={styles.Error}>{passwordError}</Text>
        </View>
        <View style={styles.Buttons}>
          <Button
            title="Submit"
            onPressed={() =>
              email.length > 1 && password.length > 1
                ? Alert.alert(
                    "Success!",
                    `Login with email ${email} successful`,
                    [
                      {
                        text: "OK",
                        onPress: () => {
                          setEmail("");
                          setPassword("");
                        },
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
      <View
        style={{
          alignSelf: "center",
          height: "10%",
          justifyContent: "space-around",
          marginBottom: "13%",
        }}
      >
        <Text
          style={{
            ...styles.Label,
            fontWeight: undefined,
            alignSelf: "center",
          }}
        >
          New here?
        </Text>
        <View>
          <Button title="Signup" onPressed={() => navigate("Signup")} />
        </View>
      </View>
    </View>
  );
};

export default Login;
