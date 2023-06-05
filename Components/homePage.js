import React from "react";
import { StyleSheet, View, Text } from "react-native";
import GreetingCard from "./greetingCard";
// import MobTopUp from "./mobTopUp";
import CashBack from "./cashBack";
import Services from "./services";
import MobTopUp from "./mob";

function HomePage() {
  return (
    <View style={styles.homePage}>
      <Text style={styles.heading}>My money </Text>
      <Services />
      <GreetingCard />
      <MobTopUp />
     {/* <MobTopUp /> */}
      <CashBack /> 
      
    </View>
  );
}

const styles = StyleSheet.create({
  homePage: {
    width: "30%",
    height: "70%",
    backgroundColor: "#edffd4",
    alignItems: "center",
    justifyContent: "center",
    border: "6px solid ",
    borderRadius: 80,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default HomePage;
