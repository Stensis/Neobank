import { StyleSheet, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function Services() {
  return (
    <View style={styles.iconsContainer}>
      <View style={styles.icons}>
        <FontAwesome name="clone" size={24} color="#a58dc5" />
        <Text style={styles.text}>Transfer</Text>
      </View>
      <View style={styles.icons}>
        <FontAwesome name="bank" size={24} color="#a58dc5" />
        <Text style={styles.text}>Payments</Text>
      </View>
      <View style={styles.icons}>
        <FontAwesome name="credit-card" size={24} color="#a58dc5" />
        <Text style={styles.text}>Mobile <br/> top-up</Text>
      </View>
      <View style={styles.icons}>
        <FontAwesome name="circle-thin" size={24} color="#a58dc5" />
        <Text style={styles.text}>More</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: { color: "#a58dc5", marginTop: 5 },

  iconsContainer: {
    backgroundColor: "#000000",
    width: "100%",
    height: 80,
    borderRadius: "15px",
    color: "#a58dc5",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 10,
    padding: 10,
    marginBottom: 20,
  },
  icons: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Services;
