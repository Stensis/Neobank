import { StyleSheet, View, Text } from "react-native";

function CashBack() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>CashBack</Text>
      <Text style={styles.subheading}>$80.00</Text>
      <Text style={styles.text}>$15 left to withdraw</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",

    backgroundColor: "#000000",
    padding: 20,
    marginTop: 10,
    borderRadius: 20,
  },
  heading: { fontSize: 20, color: "#ccaff1" },
  subheading: { fontSize: 16, color: "#d5c1ec", marginTop: 20 },
  text: { fontSize: 14, color: "#73648a", marginTop: 5 },
});

export default CashBack;
