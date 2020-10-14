import React from "react";
import { Text, TouchableOpacity, Keyboard } from "react-native";
import styles from "./button.style";

interface props {
  title: string;
  style?: object;
  onPressed: () => void;
}

const Button: React.FC<props> = ({ title, style = {}, onPressed }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.Button, ...style }}
      onPress={() => {
        Keyboard.dismiss();
        onPressed();
      }}
    >
      <Text style={styles.Text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
