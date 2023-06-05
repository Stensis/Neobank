import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import GreetingCard from "./greetingCard";
import CashBack from "./cashBack";
import Services from "./services";
import MobTopUp from "./mob";

function HomePage() {
  return (
    <View style={styles.HomePage}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>My money</Text>
          <View style={styles.moneyContainer}>
            <Text style={styles.smallText}> $ </Text>
            <Text style={styles.moneyText}>5,345</Text>
            <Text style={styles.smallText}>.80</Text>
          </View>
          <Text style={styles.text}>-$35.50 McDonalds</Text>
        </View>
        <View style={styles.arrowContainer}>
          <FontAwesome name="long-arrow-right" size={24} color="#9988b2" />
        </View>
      </View>
      <Services />
      <GreetingCard />
      <MobTopUp />
      <CashBack />
    </View>
  );
}

const styles = StyleSheet.create({
  HomePage: {
    padding: 40,
    flexDirection: "column",
    justifyContent: "space-between",
    height: "70%",
    backgroundColor: "#edffd4",
    border: "6px solid ",
    borderRadius: 80,
  },
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  text: {
    fontSize: 18,
    color: "#707768",
    textAlign: "right",
    marginBottom: 10,
  },
  moneyContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  smallText: {
    fontSize: 18,
    color: "#76816a",
  },
  moneyText: {
    fontSize: 30,
    color: "#1b2019",
    fontWeight: "bold",
    marginRight: 5,
  },
  arrowContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#000000",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});


export default HomePage;
