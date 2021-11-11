import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import CounterDisplay from "../components/counter-display";
import CounterButtons from "../components/counter-buttons";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.counterDisplay}>
        <CounterDisplay />
      </View>
      <View style={styles.counterButtons}>
        <CounterButtons />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  counterDisplay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  counterButtons: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
