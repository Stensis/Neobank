import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";

function MobTopUp() {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.heading}>Mobile top-up</Text>
        <Text style={styles.subHeading}>Me</Text>
        <Text style={styles.number}>+38 068 873 6376</Text>

        <Text style={styles.subHeading}>Husband</Text>
        <Text style={styles.number}>+38 068 873 6376</Text>

        <Text style={styles.subHeading}>Son</Text>
        <Text style={styles.number}>+38 068 873 6376</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.headings}>Balance</Text>
        <Text style={styles.balanceText}>$14.30</Text>
        <Text style={styles.balanceText}>$32.50</Text>
        <Text style={styles.balanceText}>$10.30</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.headings}></Text>
        <FontAwesome
          style={styles.balanceIcon}
          name="clone"
          size={24}
          color="#6b5a83"
        />
        <FontAwesome
          style={styles.balanceIcon}
          name="clone"
          size={24}
          color="#6b5a83"
        />
        <FontAwesome
          style={styles.balanceIcon}
          name="clone"
          size={24}
          color="#6b5a83"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#000000",
    marginTop: 10,
    padding: 20,
    borderRadius: "15px",
  },

  heading: {
    fontSize: 18,
    color: "#ccaff1",
    marginBottom: 10,
  },
  headings: {
    marginTop: 10,
    fontSize: 18,
    color: "#594a6e",
    marginBottom: 15,
  },
  subHeading: {
    fontSize: 14,
    color: "#ccaff1",
    marginBottom: 5,
  },
  number: {
    fontSize: 12,
    color: "#594a6e",
    marginBottom: 6
  },
  balanceText: {
    fontSize: 18,
    marginBottom: 20,
    color: "#c3b0d4",
    fontWeight: "bold",
  },
  balanceIcon: {
    marginTop: 25,
    fontSize: 14,
    color: "#c3b0d4",
    fontWeight: "bold",
  },
});

export default MobTopUp;
