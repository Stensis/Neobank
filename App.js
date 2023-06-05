import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import HomePage from "./Components/homePage";

export default function App() {
  return (
    <View style={styles.container}>
      <HomePage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c4a4ea",
    alignItems: "center",
    justifyContent: "center",
    width:"100%",
    height:"110%",

  },
});
