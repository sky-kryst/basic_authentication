import { StyleSheet } from "react-native";

export default StyleSheet.create({
  Form: {
    justifyContent: "center",
    alignSelf: "center",
    width: "60%",
    height: "50%",
  },
  Input: {
    borderColor: "black",
    borderBottomWidth: 1,
    height: "12%",
    fontSize: 17,
    paddingLeft: "1%",
  },
  Label: {
    fontSize: 15,
    fontWeight: "bold",
  },
  Error: {
    color: "red",
    fontSize: 12,
    marginVertical: "3%",
    paddingLeft: "1%",
  },
  Buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "205%",
    alignSelf: "center",
  },
});
