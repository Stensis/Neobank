import { StyleSheet, View, Text } from "react-native";

function MobTopUp() {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Mobile top-up</Text>
        <Text style={styles.headings}>Balance</Text>
        <Text style={styles.headings}></Text>
      </View>

      <View style={styles.column}>
        <Text style={styles.text}>Me</Text>
        <Text style={styles.paragraph}>+38 068 873 6376</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.text}>Husband</Text>
        <Text style={styles.paragraph}>+38 068 873 6376</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.text}>Son</Text>
        <Text style={styles.paragraph}>+38 068 873 6376</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"80%",
    backgroundColor: "#000000",
    marginTop: 15,
    padding: 15,
    borderRadius: 20,
  },
  headingContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  heading: {
    fontSize: 18,
    color: "#ccaff1",
    marginBottom: 15,
    paddingLeft:15,


  },
  headings: {
    padding:15,
    marginLeft:10,
    fontSize: 10,
    color: "#574966",
  },
  column: {
    padding: 2,
    textColor: "#d4b9f7",
  },
  text: {
    fontSize: 16,
    color: "#ccaff1",
  },
  paragraph: {
    fontSize: 12,
    color: "#7a6f87",
  },
});

export default MobTopUp;
