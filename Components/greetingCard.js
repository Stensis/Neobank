import { StyleSheet, View, Text } from "react-native";

function GreetingCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.greetings}>Dear customer,</Text>
      <Text style={styles.paragraph}>
        Please grab your card now. Thank you.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c4a4ea",
    padding: 10,
    borderRadius: 15,
  },
  greetings: {
    alignItems: "center",
    fontWeight: "bold",
    marginBottom: "10px",
    marginTop: 15,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
});

export default GreetingCard;
