import { StyleSheet } from "react-native";

export const videoHeight = 250;
export const screenSpace = 24;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: screenSpace,
  },
  player: {
    width: "100%",
    height: videoHeight,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 48,
  },
});
