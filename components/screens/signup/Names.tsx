import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  ToastAndroid,
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

const names: React.FC<props> = ({ navigation: { navigate } }) => {
  const { firstName, lastName } = useStore()[0].signup;
  const dispatch = useStore(false)[1];
  const [firstnameError, setFirstnameError] = useState<
    string | null | undefined
  >(null);
  const [lastnameError, setLastnameError] = useState<string | null | undefined>(
    null
  );
  return (
    <KeyboardAvoidingView style={styles.Form} behavior="padding">
      <Text style={styles.Label}>First Name</Text>
      <TextInput
        onChangeText={(t) => dispatch("SET_FIRSTNAME", t)}
        onFocus={() =>
          setFirstnameError((pS) => {
            if (pS) return null;
          })
        }
        style={styles.Input}
        onEndEditing={() =>
          setFirstnameError(
            firstName.length < 1
              ? "First name is empty"
              : !validator.isAlpha(firstName)
              ? "First name is invalid"
              : null
          )
        }
        placeholder="Enter your first name here"
      />
      <View>
        <Text style={styles.Error}>{firstnameError}</Text>
      </View>
      <Text style={styles.Label}>Last Name</Text>
      <TextInput
        onChangeText={(t) => dispatch("SET_LASTNAME", t)}
        onFocus={() =>
          setLastnameError((pS) => {
            if (pS) return null;
          })
        }
        style={styles.Input}
        onEndEditing={() =>
          setLastnameError(
            lastName.length < 1
              ? "Last name is empty"
              : !validator.isAlpha(lastName)
              ? "Last name is invalid"
              : null
          )
        }
        placeholder="Enter your last name here"
      />
      <View>
        <Text style={styles.Error}>{lastnameError}</Text>
      </View>
      <View style={styles.Buttons}>
        <Button
          title="Next"
          onPressed={() =>
            firstName.length > 1 && lastName.length > 1
              ? navigate("AccountInfo")
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

export default names;
